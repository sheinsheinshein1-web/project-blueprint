import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowDown } from "lucide-react";
import ProductTile from "@/components/ProductTile";
import PreviewCatalog from "@/components/PreviewCatalog";
import { usePreviewRoutes } from "@/lib/preview-routes";
import {
  brandCollections,
  categories,
  products,
  type Category,
  type BrandCollection,
} from "@/data/products";

function isCategory(value: unknown): value is Category {
  return typeof value === "string" && (categories as string[]).includes(value);
}

export default function CatalogPage() {
  const { preview, sitePath } = usePreviewRoutes();
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get("category");
  const active: Category = isCategory(raw) ? raw : "Все";
  const visible = active === "Все" ? products : products.filter((item) => item.category === active);

  const brandGroups = brandCollections
    .map((brand) => ({
      ...brand,
      items: visible.filter((item) => item.brand === brand.title),
    }))
    .filter((brand) => brand.items.length > 0);

  useEffect(() => {
    document.title = "Каталог: 1998 Блестящая история";
  }, []);

  const setCategory = (category: Category) => {
    if (category === "Все") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  if (preview) return <PreviewCatalog category={active} />;

  return (
    <section
      className={
        preview
          ? "commerce-page catalog-page"
          : "relative min-h-[100dvh] bg-[oklch(0.93_0.005_260)] px-6 py-16 lg:px-12 lg:py-24"
      }
    >
      {!preview && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
          }}
        />
      )}
      <div className="site-container relative z-10">
        <Link
          to={sitePath("/")}
          className={
            preview
              ? "commerce-back"
              : "mb-8 mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          }
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          На главную
        </Link>

        <header className={preview ? "catalog-heading" : "mb-10 max-w-2xl space-y-3"}>
          <h1
            className={
              preview
                ? undefined
                : "text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
            }
          >
            Каталог
          </h1>
          <p
            className={
              preview ? undefined : "max-w-xl text-base font-light leading-relaxed text-gray-700"
            }
          >
            Товары 1998 собраны по трём брендам, чтобы нужную линейку было проще найти.
          </p>
        </header>

        <nav aria-label="Категории товаров" className={preview ? "catalog-filters" : "mb-8"}>
          <ul className={preview ? undefined : "flex flex-wrap gap-2"}>
            {categories.map((category) => (
              <li key={category}>
                <button
                  type="button"
                  onClick={() => setCategory(category)}
                  aria-pressed={active === category}
                  className={
                    preview
                      ? undefined
                      : `rounded-full px-5 py-2.5 text-sm font-medium transition-colors active:scale-[0.98] ${active === category ? "bg-black text-white" : "bg-white/60 text-gray-700 hover:bg-white/90"}`
                  }
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {preview ? (
          <nav aria-label="Бренды" className="catalog-brands">
            {brandGroups.map((brand) => (
              <a key={brand.id} href={`#brand-${brand.id}`} className="catalog-brand-link">
                <span>
                  <strong>{brand.title}</strong>
                  <span>{brand.eyebrow}</span>
                </span>
                <ArrowDown size={18} strokeWidth={1.75} aria-hidden="true" />
              </a>
            ))}
          </nav>
        ) : (
          <nav aria-label="Бренды" className="mb-14 grid gap-3 md:grid-cols-12">
            {brandGroups.map((brand, index) => (
              <a
                key={brand.id}
                href={`#brand-${brand.id}`}
                className={`${brandGroups.length === 1 ? "md:col-span-12" : brandGroups.length === 2 ? (index === 0 ? "md:col-span-7" : "md:col-span-5") : index === 0 ? "md:col-span-5" : index === 1 ? "md:col-span-4" : "md:col-span-3"} min-h-40 rounded-[1.5rem] border border-white/70 bg-white/60 p-5 text-gray-900 transition-colors hover:bg-white/90 md:p-6`}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gray-500">
                  {brand.eyebrow}
                </span>
                <span className="mt-5 block text-xl font-extrabold leading-tight tracking-tight lg:text-2xl">
                  {brand.title}
                </span>
                <span className="mt-3 block max-w-md text-sm leading-relaxed text-gray-600">
                  {brand.usp}
                </span>
              </a>
            ))}
          </nav>
        )}

        <div className={preview ? "catalog-sections" : "space-y-20"}>
          {brandGroups.map((brand) => (
            <BrandSection key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

type CatalogBrand = BrandCollection & {
  items: typeof products;
};

function BrandSection({ brand }: { brand: CatalogBrand }) {
  const { preview } = usePreviewRoutes();
  return (
    <section
      id={`brand-${brand.id}`}
      className={preview ? "catalog-brand-section" : "scroll-mt-24"}
    >
      <div className={preview ? "catalog-brand-heading" : "mb-7 border-t border-gray-900/10 pt-7"}>
        <h2
          className={
            preview
              ? undefined
              : "text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl"
          }
        >
          {brand.title}
        </h2>
        <p
          className={
            preview
              ? undefined
              : "mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base"
          }
        >
          {brand.usp}
        </p>
      </div>

      <div
        className={
          preview ? "catalog-grid" : "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        }
      >
        {brand.items.map((item) => (
          <ProductTile key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}
