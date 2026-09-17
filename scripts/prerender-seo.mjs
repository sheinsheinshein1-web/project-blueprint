import { build } from "vite";
import { readFile, writeFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const renderDir = await mkdtemp(resolve(root, ".seo-render-"));
const escape = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
try {
  await build({
    root,
    logLevel: "error",
    build: { ssr: "src/seo-entry.tsx", outDir: renderDir, minify: false },
  });
  const { renderSeoPages, sitemapPaths } = await import(
    pathToFileURL(resolve(renderDir, "seo-entry.js")).href
  );
  const template = await readFile(resolve(root, "dist/index.html"), "utf8");
  for (const page of renderSeoPages()) {
    const robots = page.preview
      ? "noindex, nofollow"
      : page.noindex
        ? "noindex, follow"
        : "index, follow";
    const metadata = `
    <meta name="robots" content="${robots}" ${page.preview || page.noindex ? "data-preview-robots" : ""} />
    <link rel="canonical" href="https://1998.ru${page.path}" data-collection-seo />
    <meta property="og:title" content="${escape(page.title)}" data-collection-seo />
    <meta property="og:description" content="${escape(page.description)}" data-collection-seo />
    <meta property="og:type" content="website" data-collection-seo />
    <meta property="og:url" content="https://1998.ru${page.path}" data-collection-seo />`;
    const html = template
      .replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
      .replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/>/s,
        `<meta name="description" content="${escape(page.description)}" />`,
      )
      .replace("</head>", `${metadata}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${page.html}</div>`);
    if (!html.includes("<h1") || !html.includes(`content="${robots}"`))
      throw new Error(`Incomplete HTML: ${page.path}`);
    const destination = resolve(root, `dist${page.outputPath}/index.html`);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, html);
    console.log(`Prerendered ${page.outputPath}`);
  }
  await writeFile(
    resolve(root, "dist/sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map((path) => `  <url><loc>https://1998.ru${path}</loc></url>`).join("\n")}\n</urlset>\n`,
  );
  await writeFile(
    resolve(root, "dist/robots.txt"),
    "User-agent: *\nAllow: /\n\nSitemap: https://1998.ru/sitemap.xml\n",
  );
} finally {
  // Only this script's freshly created temporary build directory is removed.
  await rm(renderDir, { recursive: true, force: true });
}
