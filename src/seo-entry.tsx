import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import CollectionPage from "./routes/collection";
import { seoCollections } from "./data/seo-collections";
import { products } from "./data/products";
import { legalDocuments } from "./data/legal-documents";
import LegalPage from "./routes/legal";

export const sitemapPaths = [
  "/",
  "/about",
  "/catalog",
  "/fulfillment",
  ...products.map((product) => `/product/${product.id}`),
  ...seoCollections.map((page) => page.path),
];

export function renderSeoPages() {
  const collections = seoCollections.flatMap((page) =>
    ["", "/test-home"].map((prefix) => {
      const path = `${prefix}${page.path}`;
      return {
        ...page,
        outputPath: path,
        preview: Boolean(prefix),
        html: renderToStaticMarkup(
          <MemoryRouter initialEntries={[path]}>
            <div className="relative flex min-h-screen flex-col bg-background text-foreground antialiased">
              <SiteHeader homePath={prefix || "/"} />
              <main className="flex-1">
                <CollectionPage page={page} />
              </main>
              <SiteFooter />
            </div>
          </MemoryRouter>,
        ),
      };
    }),
  );
  const legal = legalDocuments.map((page) => ({
    ...page,
    description: page.intro,
    outputPath: page.path,
    preview: false,
    noindex: true,
    html: renderToStaticMarkup(
      <MemoryRouter initialEntries={[page.path]}>
        <SiteHeader homePath="/" />
        <main>
          <LegalPage page={page} />
        </main>
        <SiteFooter />
      </MemoryRouter>,
    ),
  }));
  return [...collections, ...legal];
}
