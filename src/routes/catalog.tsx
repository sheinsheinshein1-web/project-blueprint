import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import img01 from "@/assets/products/01-gubki-universalnye-1.jpg";
import img02 from "@/assets/products/02-gubki-s-aromatom-myaty-1.jpg";
import img03 from "@/assets/products/03-gubki-s-aromatom-kofe-1.jpg";
import img04 from "@/assets/products/04-gubki-delikatnye-1.jpg";
import img05 from "@/assets/products/05-gubki-ergonomichnye-1.jpg";
import img06 from "@/assets/products/06-salfetki-celyuloznye-1.jpg";
import img07 from "@/assets/products/07-salfetki-viskoznye-1.jpg";
import img08 from "@/assets/products/08-stelki-zimnie-s-folgoy-1.jpg";
import img09 from "@/assets/products/09-stelki-lnyanye-universalnye-1.jpg";
import img10 from "@/assets/products/10-stelki-probkovye-letnie-1.jpg";
import img11 from "@/assets/products/11-stelki-kozhanye-klassika-1.jpg";
import img12 from "@/assets/products/12-stelki-sportivnye-dyshaschie-1.jpg";

type Category = "Все" | "Губки" | "Салфетки" | "Стельки";

const items = [
  { image: img01, title: "Губки универсальные", desc: "Для повседневной уборки", category: "Губки" },
  { image: img02, title: "Губки с ароматом мяты", desc: "Для свежести и чистоты", category: "Губки" },
  { image: img03, title: "Губки с ароматом кофе", desc: "Для приятной уборки", category: "Губки" },
  { image: img04, title: "Губки деликатные", desc: "Для чувствительных поверхностей", category: "Губки" },
  { image: img05, title: "Губки эргономичные", desc: "Удобно лежат в руке", category: "Губки" },
  { image: img06, title: "Салфетки целлюлозные", desc: "Впитывают и не крошатся", category: "Салфетки" },
  { image: img07, title: "Салфетки вискозные", desc: "Для повседневной уборки", category: "Салфетки" },
  { image: img08, title: "Стельки зимние с фольгой", desc: "Для тепла в сильные морозы", category: "Стельки" },
  { image: img09, title: "Стельки льняные универсальные", desc: "На каждый день весной и осенью", category: "Стельки" },
  { image: img10, title: "Стельки пробковые летние", desc: "Для жары, легкие и дышащие", category: "Стельки" },
  { image: img11, title: "Стельки кожаные классика", desc: "Для деловой обуви", category: "Стельки" },
  { image: img12, title: "Стельки спортивные дышащие", desc: "Для тренировок и спорта", category: "Стельки" },
];

const categories: Category[] = ["Все", "Губки", "Салфетки", "Стельки"];

function isCategory(value: unknown): value is Category {
  return typeof value === "string" && (categories as string[]).includes(value);
}

export default function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get("category");
  const active: Category = isCategory(raw) ? raw : "Все";
  const visible = active === "Все" ? items : items.filter((i) => i.category === active);

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

        <nav aria-label="Категории товаров" className="mb-8">
          <ul className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-[#4B66D1] text-white"
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
            <article
              key={item.title}
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
