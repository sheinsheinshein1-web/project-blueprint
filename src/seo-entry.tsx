import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import CollectionPage from "./routes/collection";
import { seoCollections } from "./data/seo-collections";
import { products } from "./data/products";

export const sitemapPaths = [
  "/",
  "/about",
  "/catalog",
  "/fulfillment",
  ...products.map((product) => `/product/${product.id}`),
  ...seoCollections.map((page) => page.path),
];

export function renderSeoPages() {
  return seoCollections.flatMap((page) =>
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
}
