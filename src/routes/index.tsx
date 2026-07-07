import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowUpRight, CalendarClock, Factory, Sparkles, ThumbsUp } from "lucide-react";
import heroLifestyle from "@/assets/hero-lifestyle.png.asset.json";
import img01 from "@/assets/products/01-gubki-universalnye-1.jpg";
import img07 from "@/assets/products/07-salfetki-viskoznye-1.jpg";
import img08 from "@/assets/products/08-stelki-zimnie-s-folgoy-1.jpg";
import nikolayPhoto from "@/assets/nikolay.jpg";
import valeryPhoto from "@/assets/valery.png";



function AboutSlider() {
  const features = [
    { Icon: CalendarClock, label: "Более 30 лет опыта" },
    { Icon: ThumbsUp, label: "Российское сырьё и надёжные поставщики" },
    { Icon: Factory, label: "Полный цикл производства" },
    { Icon: Sparkles, label: "Доверие сетей и лидеров рынка" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-6 py-32 lg:px-12"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center gap-20 text-center">
        <div className="space-y-6">
          <p className="mx-auto max-w-[920px] text-xl font-light leading-[1.5] tracking-tight text-gray-800 md:text-[28px] md:leading-[1.4]">
            <span className="font-medium text-gray-900">«1998 Блестящая история»</span> — бренд российского производителя хозяйственных товаров{" "}
            <span className="font-medium text-gray-900">«ТЕКОС-ИНДУСТРИЯ»</span>. Он назван в честь года строительства собственного завода в Ленинградской области.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {features.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-5">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gray-900/15 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(20,24,40,0.06)]">
                <Icon strokeWidth={1.25} className="h-9 w-9 text-gray-800" />
                <span className="absolute -bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-[#4B66D1]" />
              </div>
              <p className="max-w-[200px] text-sm font-light leading-snug text-gray-600 md:text-[15px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





function ProductsSection() {
  return (
    <section
      id="products"
      className="relative bg-[oklch(0.93_0.005_260)] px-6 py-24 lg:px-12"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex w-full flex-col">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Продукция
            </h2>
            <p className="max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">
              В линейке «1998» — всё, что нужно для ежедневной чистоты.
              <br />
              Функциональные, долговечные и удобные в использовании товары для дома.
            </p>
          </div>
          <Link
            to="/catalog"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-[#4B66D1] px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#3B54B4] md:self-end"
          >
            Посмотреть каталог
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </Link>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {/* Губки */}
          <Link
            to="/catalog?category=Губки"
            className="group relative flex h-[380px] cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/35 backdrop-blur-md shadow-[0_20px_40px_rgba(20,24,40,0.1)] transition-colors hover:bg-white/55 md:h-[440px]"
          >
            <div className="min-h-0 flex-1 overflow-hidden rounded-t-[1.5rem] bg-white p-4 md:p-6">
              <img src={img01} alt="Губки" loading="lazy" className="h-full w-full object-contain transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="shrink-0 p-4 md:p-6">
              <h3 className="text-base font-extrabold tracking-tight text-gray-900 md:text-lg">Губки</h3>
              <p className="mt-0.5 text-xs font-medium text-gray-600 md:text-sm">Высокая износостойкость и эффективность</p>
            </div>
          </Link>

          {/* Стельки */}
          <Link
            to="/catalog?category=Стельки"
            className="group relative flex h-[380px] cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/35 backdrop-blur-md shadow-[0_20px_40px_rgba(20,24,40,0.1)] transition-colors hover:bg-white/55 md:h-[440px]"
          >
            <div className="min-h-0 flex-1 overflow-hidden rounded-t-[1.5rem] bg-white p-4 md:p-6">
              <img src={img08} alt="Стельки" loading="lazy" className="h-full w-full object-contain transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="shrink-0 p-4 md:p-6">
              <h3 className="text-base font-extrabold tracking-tight text-gray-900 md:text-lg">Стельки</h3>
              <p className="mt-0.5 text-xs font-medium text-gray-600 md:text-sm">Натуральные материалы и комфорт</p>
            </div>
          </Link>

          {/* Салфетки */}
          <Link
            to="/catalog?category=Салфетки"
            className="group relative flex h-[380px] cursor-pointer flex-col overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/35 backdrop-blur-md shadow-[0_20px_40px_rgba(20,24,40,0.1)] transition-colors hover:bg-white/55 md:h-[440px]"
          >
            <div className="min-h-0 flex-1 overflow-hidden rounded-t-[1.5rem] bg-white p-4 md:p-6">
              <img src={img07} alt="Салфетки" loading="lazy" className="h-full w-full object-contain transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="shrink-0 p-4 md:p-6">
              <h3 className="text-base font-extrabold tracking-tight text-gray-900 md:text-lg">Салфетки</h3>
              <p className="mt-0.5 text-xs font-medium text-gray-600 md:text-sm">Универсальные материалы для ежедневной уборки</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}


export default function Index() {
  useEffect(() => {
    document.title = "1998 Блестящая история — хозяйственные товары";
  }, []);
  return (
    <div className="overflow-x-hidden bg-background text-foreground antialiased">
      <CinematicHero />
      <AboutSlider />

      {/* Products */}
      <ProductsSection />

      {/* History */}
      <section
        id="history"
        className="relative overflow-hidden bg-white px-6 py-32 lg:px-12"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

        <div className="relative z-10 mx-auto flex w-full flex-col gap-24 lg:flex-row">
          <div className="space-y-8 lg:w-5/12">
            <h2 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Опыт, за которым<br />
              <span>стоит история</span>
            </h2>
            <p className="whitespace-pre-line text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
              Бренд «1998» — часть семейной компании с большой производственной историей.{"\n"}Сегодня компанией управляет уже второе поколение семьи — сохраняя ответственность, внимание к деталям и подход, основанный на реальном опыте.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-full bg-[#4B66D1] px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#3B54B4]"
            >
              Узнать историю компании
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:w-7/12">
            {[
              { name: "Николай Дворянкин", role: "Руководитель", photo: nikolayPhoto },
              { name: "Валерий Дворянкин", role: "Основатель", photo: valeryPhoto, offset: true },
            ].map((p) => (
              <div key={p.name} className={`group space-y-8 ${p.offset ? "lg:translate-y-20" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_30px_60px_rgba(20,24,40,0.08)]">

                  <img
                    src={p.photo}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{p.name}</h4>
                  <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[#4B66D1]">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}


function CinematicHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-6 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28 lg:px-12 lg:pb-12 lg:pt-32">
      {/* Lifestyle background */}
      <img
        src={heroLifestyle.url}
        alt="Женщина моет посуду губкой 1998"
        loading="eager"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-[80%_center] sm:object-center"
      />

      {/* Bottom blur overlay for readability */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[55%] bg-gradient-to-t from-black/30 via-black/10 to-transparent backdrop-blur-xl" />



      {/* Bottom */}
      <main className="relative z-20 mt-auto flex flex-col items-start justify-between gap-10 pb-4 md:flex-row md:items-end lg:gap-20">
        <div className="space-y-4 md:space-y-6">
          <h1
            className="font-semibold leading-[0.85] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(60px, 9vw, 86px)", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
          >
            Блестящая
          </h1>
          <h2
            className="font-semibold leading-[0.85] tracking-[-0.04em] text-white"
            style={{ fontSize: "clamp(60px, 9vw, 86px)", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
          >
            история
          </h2>
        </div>

        <div className="flex max-w-[520px] flex-col items-start gap-6 md:items-end lg:gap-8">
          <p
            className="text-balance text-[15px] font-light leading-relaxed text-white/90 md:text-right md:text-[16px]"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.35)" }}
          >
            С 1998 года мы создаём хозяйственные товары,
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            которые помогают вам каждый день.
          </p>

          <a
            href="#products"
            className="group inline-flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-[#4B66D1] shadow-lg transition-colors hover:bg-gray-100 sm:w-auto"
          >
            Смотреть продукцию
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
          </a>
        </div>
      </main>
    </section>
  );
}
