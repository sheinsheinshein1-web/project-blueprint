import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const pages = [
  ["catalog/gubki-dlya-posudy", 8],
  ["catalog/salfetki-dlya-uborki", 2],
  ["catalog/stelki-dlya-obuvi", 5],
  ["brands/blestyashchaya-istoriya", 7],
  ["brands/praktichnaya-istoriya", 3],
  ["brands/istoriya-komforta", 5],
];
for (const prefix of ["", "/test-home"]) {
  const titles = new Set();
  const descriptions = new Set();
  for (const [path, count] of pages) {
    const html = await readFile(resolve(root, `dist${prefix}/${path}/index.html`), "utf8");
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/name="description" content="([^"]+)"/)?.[1];
    assert.ok(title && description, `Metadata missing: ${path}`);
    assert.ok(!titles.has(title) && !descriptions.has(description), `Duplicate metadata: ${path}`);
    titles.add(title);
    descriptions.add(description);
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, `H1: ${path}`);
    assert.ok(
      html.includes('class="commerce-page catalog-page"'),
      `Shared catalog layout: ${path}`,
    );
    assert.ok(
      !/collection-hero|catalog-seo-links|class="catalog-brands"/.test(html),
      `Duplicate navigation or separate hero: ${path}`,
    );
    const categories = html.match(/<nav class="catalog-filters"[\s\S]*?<\/nav>/)?.[0];
    assert.equal(
      (categories?.match(/<a /g) ?? []).length,
      4,
      `Single category navigation: ${path}`,
    );
    assert.equal((html.match(/class="product-tile"/g) ?? []).length, count, `Products: ${path}`);
    assert.equal((html.match(/<details>/g) ?? []).length, 3, `FAQ: ${path}`);
    assert.ok(
      html.includes(`content="${prefix ? "noindex, nofollow" : "index, follow"}"`),
      `Indexing: ${prefix}/${path}`,
    );
    assert.ok(!html.includes('class="catalog-related"'), `Removed related links: ${path}`);
    if (!prefix)
      assert.ok(!html.includes("/test-home"), `Test URL leaked into public page: ${path}`);
    assert.ok(
      html.includes(`rel="canonical" href="https://1998.ru/${path}"`),
      `Canonical: ${path}`,
    );
    const schema = JSON.parse(
      html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
    );
    assert.equal(schema["@type"], "CollectionPage");
    assert.equal(schema.mainEntity.numberOfItems, count);
    assert.equal(schema.mainEntity.itemListElement.length, count);
    assert.equal(schema.breadcrumb.itemListElement.length, 3);
    assert.ok(!JSON.stringify(schema).match(/AggregateRating|"offers"/));
    for (const url of [...html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)].map(
      (match) => match[1],
    )) {
      await access(resolve(root, `dist${url}`));
    }
    for (const match of html.matchAll(/href="(\/test-home\/(?:catalog\/|brands\/)[^"#]+)"/g)) {
      assert.ok(
        pages.some(([target]) => match[1] === `/test-home/${target}`),
        `Broken collection link: ${match[1]}`,
      );
    }
    assert.ok(!html.includes("/src/assets/"), `Unbuilt asset: ${path}`);
    console.log(`PASS ${path}: HTML, metadata, ${count} products, FAQ, schema, assets, links`);
  }
}
const sitemap = await readFile(resolve(root, "dist/sitemap.xml"), "utf8");
assert.ok(!sitemap.includes("test-home"));
for (const [path] of pages) assert.ok(sitemap.includes(`https://1998.ru/${path}</loc>`));
