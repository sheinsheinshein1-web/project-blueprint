import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import packagingDelikatnye from "@/assets/packaging-delikatnye.png.asset.json";
import packagingKostochka from "@/assets/packaging-kostochka.png.asset.json";
import packagingChernye from "@/assets/packaging-chernye.png.asset.json";
import packMetallic from "@/assets/pack-metallic.png.asset.json";
import packCelulosa from "@/assets/pack-celulosa.png.asset.json";
import packViscosa from "@/assets/pack-viscosa.png.asset.json";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Каталог — 1998 Блестящая история" },
      { name: "description", content: "Каталог хозяйственных товаров бренда «1998 Блестящая история»: губки, салфетки, металлические и целлюлозные губки." },
      { property: "og:title", content: "Каталог — 1998 Блестящая история" },
      { property: "og:description", content: "Полный каталог продукции для ежедневной чистоты." },
    ],
  }),
  component: CatalogPage,
});

const items = [
  { image: packagingDelikatnye, title: "Губки деликатные", desc: "Мягкая очистка без царапин" },
  { image: packagingKostochka, title: "Губки с абразивом", desc: "Для стойких загрязнений" },
  { image: packagingChernye, title: "Чёрные губки", desc: "Прочные и универсальные" },
  { image: packMetallic, title: "Металлические губки", desc: "Для сложных поверхностей" },
  { image: packCelulosa, title: "Целлюлозные губки", desc: "Натуральный материал" },
  { image: packViscosa, title: "Салфетки вискозные", desc: "Универсальные и долговечные" },
];

function CatalogPage() {
  return (
    <section className="relative min-h-screen bg-[oklch(0.93_0.005_260)] px-6 py-16 lg:px-12 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/50 backdrop-blur-md shadow-[0_12px_30px_rgba(20,24,40,0.08)] transition-all hover:bg-white/70 hover:shadow-[0_20px_40px_rgba(20,24,40,0.12)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image.url}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-base font-extrabold tracking-tight text-gray-900">{item.title}</h2>
                <p className="mt-1 text-xs font-medium text-gray-600">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
