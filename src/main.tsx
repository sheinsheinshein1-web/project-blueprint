import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles.css";
import { Toaster } from "./components/ui/sonner";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { FulfillmentFooter } from "./components/FulfillmentFooter";
import IndexPage from "./routes/index";
import AboutPage from "./routes/about";
import CatalogPage from "./routes/catalog";
import ProductPage from "./routes/product";
import FulfillmentPage from "./routes/fulfillment";
import HomePreview from "./routes/home-preview";
import { usePreviewRoutes } from "./lib/preview-routes";
import { PreviewMetadata } from "./components/PreviewMetadata";
import CollectionPage from "./routes/collection";
import { seoCollections } from "./data/seo-collections";
import LegalPage from "./routes/legal";
import { legalDocuments } from "./data/legal-documents";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // Wait for layout to settle so the target exists.
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0 });
        }
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const { pathname } = useLocation();
  const isFulfillmentPage = pathname === "/fulfillment";
  const { isPreviewRoute } = usePreviewRoutes();

  return (
    <>
      <ScrollManager />
      {isPreviewRoute && <PreviewMetadata />}
      <div className="relative flex min-h-screen flex-col bg-background text-foreground antialiased">
        {!isFulfillmentPage && <SiteHeader homePath={isPreviewRoute ? "/test-home" : "/"} />}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePreview />} />
            <Route path="/test-home" element={<HomePreview />} />
            <Route path="/test-home/about" element={<AboutPage />} />
            <Route path="/test-home/catalog" element={<CatalogPage />} />
            <Route path="/test-home/product/:id" element={<ProductPage />} />
            {seoCollections.map((page) => (
              <Route
                key={page.path}
                path={`/test-home${page.path}`}
                element={<CollectionPage page={page} />}
              />
            ))}
            {seoCollections.map((page) => (
              <Route key={page.path} path={page.path} element={<CollectionPage page={page} />} />
            ))}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/fulfillment" element={<FulfillmentPage />} />
            {legalDocuments.map((page) => (
              <Route key={page.path} path={page.path} element={<LegalPage page={page} />} />
            ))}

            <Route path="*" element={<IndexPage />} />
          </Routes>
        </main>
        {isFulfillmentPage ? <FulfillmentFooter /> : <SiteFooter />}
      </div>
      <Toaster />
    </>
  );
}

// Static collection metadata is served to crawlers; client effects own it after navigation.
document.head
  .querySelectorAll("[data-collection-seo], [data-preview-robots]")
  .forEach((node) => node.remove());
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
