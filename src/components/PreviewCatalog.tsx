import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { brandCollections, products, type Category } from "@/data/products";
import { seoCollections, type SeoCollection } from "@/data/seo-collections";
import { collectionProducts } from "@/lib/collection-seo";
import { usePreviewRoutes } from "@/lib/preview-routes";
import ProductTile from "./ProductTile";
import "@/routes/commerce.css";

/** One catalog layout for the overview, category pages and brand pages. */
export default function PreviewCatalog({
  page,
  category = "Все",
  children,
}: {
  page?: SeoCollection;
  category?: Category;
  children?: ReactNode;
}) {
  const { sitePath } = usePreviewRoutes();
  const items = page
    ? collectionProducts(page)
    : products.filter((product) => category === "Все" || product.category === category);
  const groups = brandCollections
    .map((brand) => ({ ...brand, items: items.filter((product) => product.brand === brand.title) }))
    .filter((brand) => brand.items.length);
  const activeCategory = page?.category ?? (page ? undefined : category);
  return (
    <section className="commerce-page catalog-page">
      <div className="site-container">
        <nav className="product-breadcrumbs" aria-label="Хлебные крошки">
          <Link to={sitePath("/")}>Главная</Link>
          <span aria-hidden="true">/</span>
          {page ? (
            <>
              <Link to={sitePath("/catalog")}>Каталог</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{page.label}</span>
            </>
          ) : (
            <span aria-current="page">Каталог</span>
          )}
        </nav>
        <header className="catalog-heading">
          <h1>{page?.heading ?? "Каталог"}</h1>
          <p>
            {page?.intro ??
              "Губки, салфетки и стельки 1998. Выберите категорию или познакомьтесь с товарами каждой линейки."}
          </p>
        </header>
        <nav className="catalog-filters" aria-label="Категории товаров">
          <ul>
            <li>
              <Link
                to={sitePath("/catalog")}
                aria-current={activeCategory === "Все" ? "page" : undefined}
              >
                Все
              </Link>
            </li>
            {seoCollections
              .filter((entry) => entry.kind === "category")
              .map((entry) => (
                <li key={entry.path}>
                  <Link
                    to={sitePath(entry.path)}
                    aria-current={entry.category === activeCategory ? "page" : undefined}
                  >
                    {entry.category}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <div className="catalog-sections catalog-results" id="assortment">
          {groups.map((brand) => {
            const brandPage = seoCollections.find((entry) => entry.brand === brand.title)!;
            return (
              <section key={brand.id} className="catalog-brand-section" id={`brand-${brand.id}`}>
                <div className="catalog-brand-heading">
                  <h2>
                    {page?.brand ? (
                      "Товары линейки"
                    ) : (
                      <Link to={sitePath(brandPage.path)} className="catalog-brand-title">
                        {brand.title}
                      </Link>
                    )}
                  </h2>
                  {!page?.brand && <p>{brand.usp}</p>}
                </div>
                <div className="catalog-grid">
                  {brand.items.map((product) => (
                    <ProductTile key={product.id} product={product} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        {children}
      </div>
    </section>
  );
}
