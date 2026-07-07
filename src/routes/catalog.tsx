import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { categories, products, type Category } from "@/data/products";

function isCategory(value: unknown): value is Category {
  return typeof value === "string" && (categories as string[]).includes(value);
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get("category");
  const active: Category = isCategory(raw) ? raw : "Все";
  const visible = active === "Все" ? products : products.filter((i) => i.category === active);

  useEffect(() => {
    document.title = "Каталог — 1998 Блестящая история";
  }, []);

  const setCategory = (cat: Category) => {
    if (cat === "Все") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <section className="relative min-h-screen bg-[oklch(0.93_0.005_260)] px-6 py-16 lg:px-12 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto w-full">
        <Link
          to="/"
          className="mb-8 mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          На главную
        </Link>

        <header className="mb-10 max-w-2xl space-y-3">
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Каталог
          </h1>
          <p className="text-base font-light leading-relaxed text-gray-700">
            Полный ассортимент хозяйственных товаров «1998 Блестящая история».
          </p>
        </header>

        <nav aria-label="Категории товаров" className="mb-8">
          <ul className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-black text-white"
                      : "bg-white/60 text-gray-700 hover:bg-white/90"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {visible.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/50 backdrop-blur-md shadow-[0_12px_30px_rgba(20,24,40,0.08)] transition-all hover:bg-white/70 hover:shadow-[0_20px_40px_rgba(20,24,40,0.12)]"
            >
              <div className="flex h-[240px] items-center justify-center overflow-hidden bg-white p-4 md:h-[280px] md:p-6">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between bg-[#f1f3f6] p-4">
                <div>
                  <h2 className="text-base font-extrabold tracking-tight text-gray-900">{item.title}</h2>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">{item.desc}</p>
                </div>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black shadow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.75} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
