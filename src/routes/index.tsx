import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import heroLifestyle from "@/assets/hero-lifestyle.png";
import heroMobile from "@/assets/hero-mobile.png";
import img01 from "@/assets/products/01-gubki-universalnye-1.jpg";
import img07 from "@/assets/products/07-salfetki-viskoznye-1.jpg";
import img08 from "@/assets/products/08-stelki-zimnie-s-folgoy-1.jpg";
import review1 from "@/assets/reviews/review-1.jpg";
import review2 from "@/assets/reviews/review-2.jpg";
import review3 from "@/assets/reviews/review-3.jpg";
import review4 from "@/assets/reviews/review-4.jpg";
import review5 from "@/assets/reviews/review-5.jpg";
import nikolayPhoto from "@/assets/nikolay.jpg";
import valeryPhoto from "@/assets/valery.png";
import factoryExterior from "@/assets/factory-exterior.png.asset.json";
import factory1 from "@/assets/factory-new-1.jpg";
import factory2 from "@/assets/factory-new-2.jpg";
import factory3 from "@/assets/factory-new-3.jpg";



function AboutSlider() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f4f4f0] px-6 py-24 lg:px-12 lg:py-32"
    >
      <div className="relative z-10 mx-auto grid w-full grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left column */}
        <div className="relative lg:col-span-5">
          <span className="inline-flex items-center rounded-full border border-gray-900/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-900">
            Более 30 лет опыта
          </span>

          <h2 className="mt-8 text-[28px] font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-[32px] md:text-4xl lg:text-[56px]">
            <span className="text-gray-900">1998</span>
            <span className="text-gray-500"> — блестящая история</span>
            <br />
            российского производителя хозяйственных товаров{" "}
            <span className="whitespace-normal sm:whitespace-nowrap">«ТЕКОС-ИНДУСТРИЯ»</span>
          </h2>

          <div className="mt-10 border-l border-gray-900/25 pl-5">
            <p className="max-w-[440px] text-[15px] font-light leading-relaxed text-gray-700">
              Он назван в честь года строительства собственного завода
              в Ленинградской области. С тех пор мы создаём товары,
              которые помогают миллионам людей каждый день.
            </p>
          </div>

          {/* Watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-2 left-0 select-none text-[120px] font-extrabold leading-none tracking-tight text-gray-900/[0.04] sm:text-[160px] md:text-[200px] lg:text-[280px]"
          >
            1998
          </div>
        </div>

        {/* Right column — image collage */}
        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(20,24,40,0.12)]">
            <img
              src={factoryExterior.url}
              alt="Завод «ТЕКОС-ИНДУСТРИЯ» в Ленинградской области"
              loading="lazy"
              className="h-[220px] w-full object-cover sm:h-[280px] md:h-[380px] lg:h-[420px]"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-[1rem] shadow-[0_10px_30px_rgba(20,24,40,0.1)] sm:rounded-[1.25rem]">
              <img
                src={factory1}
                alt="Производственная линия губок"
                loading="lazy"
                className="h-[100px] w-full object-cover sm:h-[120px] md:h-[180px] lg:h-[200px]"
              />
            </div>
            <div className="overflow-hidden rounded-[1rem] shadow-[0_10px_30px_rgba(20,24,40,0.1)] sm:rounded-[1.25rem]">
              <img
                src={factory2}
                alt="Сырьё для производства"
                loading="lazy"
                className="h-[100px] w-full object-cover sm:h-[120px] md:h-[180px] lg:h-[200px]"
              />
            </div>
            <div className="overflow-hidden rounded-[1rem] shadow-[0_10px_30px_rgba(20,24,40,0.1)] sm:rounded-[1.25rem]">
              <img
                src={factory3}
                alt="Склад готовой продукции"
                loading="lazy"
                className="h-[100px] w-full object-cover sm:h-[120px] md:h-[180px] lg:h-[200px]"
              />
            </div>
          </div>
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
            <p className="max-w-xl whitespace-pre-line text-sm font-light leading-relaxed text-gray-700 lg:text-base">
              В линейке «1998» — всё, что нужно для ежедневной чистоты.{"\n"}
              Функциональные, долговечные и удобные в использовании товары для дома.
            </p>
          </div>
          <Link
            to="/catalog"
            className="group inline-flex items-center gap-2 self-start rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800 md:self-end"
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
              <div className="flex items-center justify-between p-4 md:p-6">
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-gray-900 md:text-lg">Губки</h3>
                <p className="mt-0.5 text-xs font-medium text-gray-600 md:text-sm">Высокая износостойкость и эффективность</p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black shadow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.75} />
              </div>
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
              <div className="flex items-center justify-between p-4 md:p-6">
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-gray-900 md:text-lg">Стельки</h3>
                <p className="mt-0.5 text-xs font-medium text-gray-600 md:text-sm">Натуральные материалы и комфорт</p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black shadow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.75} />
              </div>
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
              <div className="flex items-center justify-between p-4 md:p-6">
              <div>
                <h3 className="text-base font-extrabold tracking-tight text-gray-900 md:text-lg">Салфетки</h3>
                <p className="mt-0.5 text-xs font-medium text-gray-600 md:text-sm">Универсальные материалы для ежедневной уборки</p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black shadow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.75} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  const reviews = [
    {
      name: "Анна",
      photo: img01,
      initials: "А",
      color: "#4B66D1",
      rating: 5,
      text: "Губки отличные! Плотные, не крошатся и хорошо пенятся. Использую каждый день.",
      date: "12.04.2024",
    },
    {
      name: "Денис",
      photo: img02,
      initials: "Д",
      color: "#2d8a9e",
      rating: 5,
      text: "Качественные губки, беру не первый раз. Удобная упаковка, хватает надолго.",
      date: "09.04.2024",
    },
    {
      name: "Ольга",
      photo: img04,
      initials: "О",
      color: "#c4654a",
      rating: 5,
      text: "Даже после недели использования выглядят как новые. Очень довольна качеством!",
      date: "09.04.2024",
    },
    {
      name: "Алла",
      photo: img06,
      initials: "А",
      color: "#7d9b76",
      rating: 5,
      text: "Используем дома и на даче. Очень довольна — никаких царапин и разводов.",
      date: "01.04.2024",
    },
    {
      name: "Мария",
      photo: img07,
      initials: "М",
      color: "#9b72cf",
      rating: 5,
      text: "Лучшие губки, что я пробовала! Хорошо моют и не теряют форму. Рекомендую!",
      date: "28.03.2024",
    },
  ];

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w >= 1280 ? 5 : w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, reviews.length - perPage + 1);
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const scrollToPage = (nextPage: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    const step = card.offsetWidth + gap;
    track.scrollTo({ left: step * nextPage, behavior: "smooth" });
    setPage(nextPage);
  };

  const goPrev = () => scrollToPage(Math.max(0, page - 1));
  const goNext = () => scrollToPage(Math.min(totalPages - 1, page + 1));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const handleScroll = () => {
      const card = track.firstElementChild as HTMLElement | null;
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap || "0");
      const step = card.offsetWidth + gap;
      const next = Math.round(track.scrollLeft / step);
      setPage(Math.max(0, Math.min(totalPages - 1, next)));
    };
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, [totalPages]);

  return (
    <section className="relative overflow-hidden bg-[#f4f4f0] px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mb-10 max-w-2xl lg:mb-14">
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Нам доверяют
          </h2>
          <p className="mt-4 text-base font-light leading-relaxed text-gray-700 lg:text-lg">
            Спасибо всем, кто выбирает продукцию «1998» и делится своими впечатлениями.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={goPrev}
            disabled={!canPrev}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-[#e8e8e3] p-3 text-gray-900 transition-all hover:bg-[#deded6] disabled:opacity-30 lg:left-[-28px] lg:flex h-12 w-12"
            aria-label="Назад"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <button
            onClick={goNext}
            disabled={!canNext}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-[#e8e8e3] p-3 text-gray-900 transition-all hover:bg-[#deded6] disabled:opacity-30 lg:right-[-28px] lg:flex h-12 w-12"
            aria-label="Вперед"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-5 lg:gap-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="w-[calc(100%-8px)] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-white/60 bg-white shadow-[0_20px_40px_rgba(20,24,40,0.08)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#f4f4f0]">
                  <img
                    src={r.photo}
                    alt={`Фото отзыва ${r.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-900">{r.name}</p>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#0f1b3d] text-[#0f1b3d]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-light leading-relaxed text-gray-700">
                    {r.text}
                  </p>
                  <p className="mt-5 text-xs font-medium text-gray-400">{r.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === page ? "bg-[#0f1b3d]" : "bg-[#0f1b3d]/20"}`}
                aria-label={`Перейти к странице ${i + 1}`}
              />
            ))}
          </div>
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
              className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800"
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

      {/* Reviews */}
      <ReviewsSection />

    </div>
  );
}


function CinematicHero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-6 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28 lg:px-12 lg:pb-12 lg:pt-32">
      {/* Lifestyle background — mobile image below md, desktop above */}
      <picture className="pointer-events-none absolute inset-0 z-0 h-full w-full">
        <source srcSet={heroMobile} media="(max-width: 767px)" />
        <img
          src={heroLifestyle}
          alt="Женщина моет посуду губкой 1998"
          loading="eager"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      {/* Bottom gradient overlay */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[45%] bg-gradient-to-t from-black/55 via-black/20 to-transparent"
      />





      {/* Bottom */}
      <main className="relative z-20 mt-auto flex flex-col items-start justify-between gap-4 pb-4 md:flex-row md:items-end md:gap-10 lg:gap-20">
        <div className="space-y-1 md:space-y-6">
          <h1
            className="font-semibold leading-[0.8] tracking-[-0.04em] text-white md:leading-[0.85]"
            style={{ fontSize: "clamp(60px, 9vw, 86px)", textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
          >
            Блестящая
          </h1>
          <h2
            className="font-semibold leading-[0.8] tracking-[-0.04em] text-white md:leading-[0.85]"
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
            className="group inline-flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white shadow-lg transition-colors hover:bg-gray-800 sm:w-auto"
          >
            Смотреть продукцию
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
          </a>
        </div>
      </main>
    </section>
  );
}
