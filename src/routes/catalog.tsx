import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import img01 from "@/assets/products/01-gubki-universalnye-1.asset.json";
import img02 from "@/assets/products/02-gubki-s-aromatom-myaty-1.asset.json";
import img03 from "@/assets/products/03-gubki-s-aromatom-kofe-1.asset.json";
import img04 from "@/assets/products/04-gubki-delikatnye-1.asset.json";
import img05 from "@/assets/products/05-gubki-ergonomichnye-1.asset.json";
import img06 from "@/assets/products/06-salfetki-celyuloznye-1.asset.json";
import img07 from "@/assets/products/07-salfetki-viskoznye-1.asset.json";
import img08 from "@/assets/products/08-stelki-zimnie-s-folgoy-1.asset.json";
import img09 from "@/assets/products/09-stelki-lnyanye-universalnye-1.asset.json";
import img10 from "@/assets/products/10-stelki-probkovye-letnie-1.asset.json";
import img11 from "@/assets/products/11-stelki-kozhanye-klassika-1.asset.json";
import img12 from "@/assets/products/12-stelki-sportivnye-dyshaschie-1.asset.json";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Каталог — 1998 Блестящая история" },
      { name: "description", content: "Каталог хозяйственных товаров бренда «1998 Блестящая история»: губки, салфетки, стельки и аксессуары для ежедневной чистоты." },
      { property: "og:title", content: "Каталог — 1998 Блестящая история" },
      { property: "og:description", content: "Полный каталог продукции для ежедневной чистоты." },
    ],
  }),
  component: CatalogPage,
});

const items = [
  { image: img01, title: "Губки универсальные", desc: "Для повседневной уборки" },
  { image: img02, title: "Губки с ароматом мяты", desc: "Для свежести и чистоты" },
  { image: img03, title: "Губки с ароматом кофе", desc: "Для приятной уборки" },
  { image: img04, title: "Губки деликатные", desc: "Для чувствительных поверхностей" },
  { image: img05, title: "Губки эргономичные", desc: "Удобно лежат в руке" },
  { image: img06, title: "Салфетки целлюлозные", desc: "Впитывают и не крошатся" },
  { image: img07, title: "Салфетки вискозные", desc: "Для повседневной уборки" },
  { image: img08, title: "Стельки зимние с фольгой", desc: "Для тепла в сильные морозы" },
  { image: img09, title: "Стельки льняные универсальные", desc: "На каждый день весной и осенью" },
  { image: img10, title: "Стельки пробковые летние", desc: "Для жары, легкие и дышащие" },
  { image: img11, title: "Стельки кожаные классика", desc: "Для деловой обуви" },
  { image: img12, title: "Стельки спортивные дышащие", desc: "Для тренировок и спорта" },
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
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
