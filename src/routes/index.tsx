import { Link } from "react-router-dom";
import { usePreviewRoutes } from "@/lib/preview-routes";
import { OZON_STORE_URL } from "@/data/marketplace-links";
import { previewProductMedia } from "@/data/preview-product-media";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";
import heroCleaningDesktop from "@/assets/hero-cleaning-desktop-real-product-v2.png";
import heroCleaningMobile from "@/assets/hero-cleaning-mobile-real-product-v2.png";
import heroLifestyle from "@/assets/hero-lifestyle-real-product-v2.png";
import heroMobile from "@/assets/hero-mobile-real-product-v2.png";
import img01 from "@/assets/products/clean/01-gubki-universalnye.png";
import img02 from "@/assets/products/clean/02-gubki-s-aromatom-myaty.png";
import img03 from "@/assets/products/clean/03-gubki-s-aromatom-kofe.png";
import img04 from "@/assets/products/clean/04-gubki-delikatnye.png";
import img05 from "@/assets/products/clean/05-gubki-ergonomichnye.png";
import img06 from "@/assets/products/clean/06-salfetki-celyuloznye.png";
import img07 from "@/assets/products/clean/07-salfetki-viskoznye.png";
import img08 from "@/assets/products/clean/08-stelki-zimnie-s-folgoy.png";
import img09 from "@/assets/products/clean/09-stelki-lnyanye-universalnye.png";
import img10 from "@/assets/products/clean/10-stelki-probkovye-letnie.png";
import img11 from "@/assets/products/clean/11-stelki-kozhanye-klassika.png";
import img12 from "@/assets/products/clean/12-stelki-sportivnye-dyshaschie.png";
import pack01 from "@/assets/products/clean/01-gubki-universalnye-pack.png";
import pack02 from "@/assets/products/clean/02-gubki-s-aromatom-myaty-pack.png";
import pack03 from "@/assets/products/clean/03-gubki-s-aromatom-kofe-pack.png";
import pack04 from "@/assets/products/clean/04-gubki-delikatnye-pack.png";
import pack05 from "@/assets/products/clean/05-gubki-ergonomichnye-pack.png";
import pack06 from "@/assets/products/clean/06-salfetki-celyuloznye-pack.png";
import pack07 from "@/assets/products/clean/07-salfetki-viskoznye-pack.png";
import pack08 from "@/assets/products/clean/08-stelki-zimnie-s-folgoy-pack.png";
import pack09 from "@/assets/products/clean/09-stelki-lnyanye-universalnye-pack.png";
import pack10 from "@/assets/products/clean/10-stelki-probkovye-letnie-pack.png";
import pack11 from "@/assets/products/clean/11-stelki-kozhanye-klassika-pack.png";
import pack12 from "@/assets/products/clean/12-stelki-sportivnye-dyshaschie-pack.png";
import practicalMaxiPack from "@/assets/praktichnaya-istoriya-maxi-pack.png";
import practicalUniversalPack from "@/assets/praktichnaya-istoriya-universal-pack.png";
import practicalBigPack from "@/assets/praktichnaya-istoriya-big-pack.png";
import ugcDarinaGubkiReview from "@/assets/reviews/ugc-darina-smiles-gubki.mp4";
import ugcDarinaGubkiPoster from "@/assets/reviews/ugc-darina-smiles-gubki-poster.png";
import ugcGubkiReview from "@/assets/reviews/ugc-gubki-review.mp4";
import ugcGubkiPoster from "@/assets/reviews/ugc-gubki-review-poster.png";
import ugcMariaGubkiReview from "@/assets/reviews/ugc-maria-ryzhkova-gubki.mp4";
import ugcMariaGubkiPoster from "@/assets/reviews/ugc-maria-ryzhkova-gubki-poster.png";
import ugcSabrinaGubkiReview from "@/assets/reviews/ugc-sabrina-v-gubki.mp4";
import ugcSabrinaGubkiPoster from "@/assets/reviews/ugc-sabrina-v-gubki-poster.png";
import ugcSalfetkiReview from "@/assets/reviews/ugc-salfetki-review.mp4";
import ugcSalfetkiPoster from "@/assets/reviews/ugc-salfetki-review-poster.png";
import nikolayPhoto from "@/assets/nikolay.jpg";
import valeryPhoto from "@/assets/valery.png";
import factoryExterior from "@/assets/factory-exterior.jpg";
import factory1 from "@/assets/factory-new-1.jpg";
import factory2 from "@/assets/factory-new-2.jpg";
import aboutProductPack from "@/assets/products/clean/04-gubki-delikatnye-pack.png";
import wildberriesLogo from "@/assets/marketplaces/wildberries.svg";
import ozonLogo from "@/assets/marketplaces/ozon.svg";
import yandexMarketLogo from "@/assets/marketplaces/yandex-market.svg";

const heroSlides = [
  {
    desktop: heroLifestyle,
    mobile: heroMobile,
    alt: "Женщина моет посуду губкой 1998",
  },
  {
    desktop: heroCleaningDesktop,
    mobile: heroCleaningMobile,
    alt: "Женщина протирает стол салфеткой 1998",
  },
];

const aboutImages = [
  {
    src: factoryExterior,
    alt: "Продукция 1998 Блестящая история на сером фоне",
    fit: "cover",
  },
  {
    src: factory1,
    alt: "Линейка губок 1998 Блестящая история",
    fit: "cover",
  },
  {
    src: factory2,
    alt: "Салфетки 1998 Блестящая история",
    fit: "cover",
  },
  {
    src: aboutProductPack,
    alt: "Упаковка деликатных губок 1998 Блестящая история",
    fit: "contain",
  },
];

function AboutSlider() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-white px-6 pb-8 pt-16 lg:px-12 lg:pb-24 lg:pt-28"
    >
      <div className="site-container relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left column */}
        <div className="relative lg:col-span-5">
          <span className="inline-flex items-center rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950 shadow-[0_12px_30px_rgba(17,24,39,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
            БОЛЕЕ 25 ЛЕТ ОПЫТА
          </span>

          <h2 className="mt-6 text-[28px] font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-[32px] md:text-4xl lg:mt-8 lg:text-[56px]">
            <span className="text-gray-900">«1998 Блестящая история»</span>
            <span className="text-gray-500">, бренд российского производителя </span>
            <br />
            хозяйственных товаров{" "}
            <span className="whitespace-normal sm:whitespace-nowrap">«ТЕКОС-ИНДУСТРИЯ»</span>
          </h2>

          <div className="mt-8 border-l border-gray-900/25 pl-5 lg:mt-10">
            <p className="max-w-[440px] text-[15px] font-light leading-relaxed text-gray-700">
              Он назван в честь года строительства собственного завода в Ленинградской области.
            </p>
          </div>
        </div>

        {/* Right column: image collage */}
        <div className="lg:col-span-7">
          <div className="-mx-6 overflow-hidden py-2 lg:hidden">
            <div className="flex animate-about-marquee">
              {[0, 1, 2].map((group) => (
                <div key={group} aria-hidden={group > 0} className="flex shrink-0 gap-4 pr-4">
                  {aboutImages.map((image) => (
                    <div
                      key={`${group}-${image.src}`}
                      className="w-[calc(100vw-3rem)] shrink-0 overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(20,24,40,0.12)] sm:w-[min(78vw,680px)]"
                    >
                      <img
                        src={image.src}
                        alt={group === 0 ? image.alt : ""}
                        loading="eager"
                        decoding="async"
                        className={`h-[220px] w-full bg-white p-3 sm:h-[280px] md:h-[380px] ${
                          image.fit === "contain" ? "object-contain" : "object-cover"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(20,24,40,0.12)]">
              <img
                src={factoryExterior}
                alt="Продукция 1998 Блестящая история на сером фоне"
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {aboutImages.slice(1).map((image) => (
                <div
                  key={image.src}
                  className="overflow-hidden rounded-[1.25rem] shadow-[0_10px_30px_rgba(20,24,40,0.1)]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className={`h-[200px] w-full bg-white p-3 ${
                      image.fit === "contain" ? "object-contain" : "object-cover"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const { preview, sitePath } = usePreviewRoutes();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [activeBrand, setActiveBrand] = useState<"shine" | "practical" | "comfort">("shine");
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const coreProducts = [
    {
      id: "gubki-universalnye",
      name: "Губки универсальные",
      image: img01,
      packImage: pack01,
      link: "/product/gubki-universalnye",
      desc: "Высокая износостойкость и эффективность",
    },
    {
      id: "gubki-mynta",
      name: "Губки с ароматом мяты",
      image: img02,
      packImage: pack02,
      link: "/product/gubki-mynta",
      desc: "Свежесть и мягкость в каждой уборке",
    },
    {
      id: "gubki-kofe",
      name: "Губки с ароматом кофе",
      image: img03,
      packImage: pack03,
      link: "/product/gubki-kofe",
      desc: "Приятный аромат при мытье посуды",
    },
    {
      id: "gubki-delikatnye",
      name: "Губки деликатные",
      image: img04,
      packImage: pack04,
      link: "/product/gubki-delikatnye",
      desc: "Бережный уход за хрупкими поверхностями",
    },
    {
      id: "gubki-ergonomichnye",
      name: "Губки эргономичные",
      image: img05,
      packImage: pack05,
      link: "/product/gubki-ergonomichnye",
      desc: "Удобная форма для руки и крепления",
    },
    {
      id: "salfetki-celyuloznye",
      name: "Салфетки целлюлозные",
      image: img06,
      packImage: pack06,
      link: "/product/salfetki-celyuloznye",
      desc: "Отлично впитывают влагу и очищают",
    },
    {
      id: "salfetki-viskoznye",
      name: "Салфетки вискозные",
      image: img07,
      packImage: pack07,
      link: "/product/salfetki-viskoznye",
      desc: "Универсальные материалы для ежедневной уборки",
    },
    {
      id: "stelki-zimnie-folga",
      name: "Стельки зимние с фольгой",
      image: img08,
      packImage: pack08,
      link: "/product/stelki-zimnie-folga",
      desc: "Сохраняют тепло в холодную погоду",
    },
    {
      id: "stelki-lnyanye",
      name: "Стельки льняные",
      image: img09,
      packImage: pack09,
      link: "/product/stelki-lnyanye",
      desc: "Натуральные материалы и комфорт",
    },
    {
      id: "stelki-probkovye",
      name: "Стельки пробковые",
      image: img10,
      packImage: pack10,
      link: "/product/stelki-probkovye",
      desc: "Легкие и дышащие на лето",
    },
    {
      id: "stelki-kozhanye",
      name: "Стельки кожаные",
      image: img11,
      packImage: pack11,
      link: "/product/stelki-kozhanye",
      desc: "Классический вариант на каждый день",
    },
    {
      id: "stelki-sportivnye",
      name: "Стельки спортивные",
      image: img12,
      packImage: pack12,
      link: "/product/stelki-sportivnye",
      desc: "Дышащие и амортизирующие",
    },
  ];

  const practicalProducts = [
    {
      id: "praktichnaya-maksi",
      name: "Губки для посуды макси",
      image: practicalMaxiPack,
      packImage: undefined,
      link: "/product/praktichnaya-maksi",
      desc: "Крупный формат для ежедневных задач",
    },
    {
      id: "praktichnaya-universalnye",
      name: "Губки универсальные",
      image: practicalUniversalPack,
      packImage: undefined,
      link: "/product/praktichnaya-universalnye",
      desc: "Разные цвета для разных зон кухни",
    },
    {
      id: "praktichnaya-bolshie",
      name: "Губки большие",
      image: practicalBigPack,
      packImage: undefined,
      link: "/product/praktichnaya-bolshie",
      desc: "Увеличенный размер и практичный набор",
    },
  ];

  const brandCollections = [
    {
      id: "shine" as const,
      title: "Блестящая история",
      eyebrow: "Для выразительной чистоты",
      usp: "Продуманные формы, материалы и упаковка для ежедневного ухода за домом.",
      products: coreProducts.slice(0, 7),
    },
    {
      id: "practical" as const,
      title: "Практичная история",
      eyebrow: "Для ежедневных задач",
      usp: "Понятные и надёжные решения для кухни без лишних деталей.",
      products: practicalProducts,
    },
    {
      id: "comfort" as const,
      title: "История комфорта",
      eyebrow: "Для удобства каждый день",
      usp: "Стельки для сезонного тепла, поддержки стопы и комфортной обуви.",
      products: coreProducts.slice(7),
    },
  ];

  const activeCollection =
    brandCollections.find((collection) => collection.id === activeBrand) ?? brandCollections[0];
  const products = activeCollection.products.map((product) =>
    preview && previewProductMedia[product.id]
      ? { ...product, ...previewProductMedia[product.id] }
      : product,
  );

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerPage(w >= 1280 ? 4 : w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.max(1, products.length - perPage + 1);

  useEffect(() => {
    setPage((p) => Math.max(0, Math.min(totalPages - 1, p)));
  }, [totalPages]);

  useEffect(() => {
    setPage(0);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [activeBrand]);

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

  const handlePointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(true);
    hasDragged.current = false;
    startX.current = e.clientX;
    scrollLeft.current = track.scrollLeft;
    track.style.cursor = "grabbing";
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const track = trackRef.current;
    if (!track) return;
    const x = e.clientX;
    if (Math.abs(x - startX.current) > 5) {
      hasDragged.current = true;
    }
    const walk = (x - startX.current) * 1.4;
    track.scrollLeft = scrollLeft.current - walk;
  };

  const handlePointerUp = () => {
    const track = trackRef.current;
    if (!track) return;
    setIsDragging(false);
    track.style.cursor = "grab";
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="products"
      className="home-products relative scroll-mt-20 overflow-hidden bg-[oklch(0.93_0.005_260)] px-6 pb-16 pt-8 lg:px-12 lg:pb-20 lg:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
        }}
      />
      <div className="site-container relative z-10">
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end lg:mb-8">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Продукция
            </h2>
            <p className="max-w-xl whitespace-pre-line text-sm font-light leading-relaxed text-gray-700 lg:text-base">
              Губки, салфетки и стельки для дома и повседневного комфорта.
            </p>
          </div>
          <Link
            to={sitePath("/catalog")}
            className="group inline-flex items-center gap-2 self-start rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800 md:self-end"
          >
            Посмотреть каталог
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </Link>
        </div>

        <div
          role="group"
          aria-label="Выбрать бренд"
          className="mb-8 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 lg:mb-10"
        >
          {brandCollections.map((collection) => {
            const isActive = collection.id === activeBrand;
            return (
              <button
                key={collection.id}
                type="button"
                onClick={() => setActiveBrand(collection.id)}
                aria-pressed={isActive}
                className={`min-h-14 rounded-[1.25rem] border px-2 py-3 text-center text-[12px] font-semibold leading-snug transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-900 min-[380px]:text-[13px] sm:min-h-12 sm:rounded-full sm:px-6 sm:text-sm ${
                  isActive
                    ? "border-black bg-black text-white"
                    : "border-white/70 bg-white/55 text-gray-600 hover:bg-white/80 hover:text-gray-900"
                }`}
              >
                {collection.title}
              </button>
            );
          })}
        </div>

        <div className="home-products__brand-summary mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
              Сейчас выбрано
            </p>
            <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900">
              {activeCollection.title}
            </h3>
          </div>
          <p className="home-products__usp hidden max-w-md text-right text-sm leading-relaxed text-gray-600 md:block">
            {activeCollection.usp}
          </p>
        </div>

        <div className="relative">
          <button
            onClick={goPrev}
            disabled={page === 0}
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-2xl text-gray-900 transition-all hover:bg-white/35 disabled:opacity-30 lg:flex"
            aria-label="Назад"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <button
            onClick={goNext}
            disabled={page === totalPages - 1}
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-2xl text-gray-900 transition-all hover:bg-white/35 disabled:opacity-30 lg:flex"
            aria-label="Вперед"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <div
            ref={trackRef}
            className="home-products__track -mr-6 flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-2 md:gap-5 lg:mr-0 lg:gap-6 scrollbar-hide select-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {products.map((p) => (
              <Link
                key={p.id}
                to={sitePath(p.link)}
                draggable={false}
                onClick={handleCardClick}
                className="home-product group relative w-[72%] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-white/60 bg-[#f1f3f6] backdrop-blur-md transition-colors sm:w-[46%] lg:w-[31%] xl:w-[23%]"
              >
                <div className="home-product__image relative aspect-[4/5] overflow-hidden rounded-t-[1.5rem] bg-white p-4 md:p-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                  {p.packImage && (
                    <div className="home-product__pack absolute bottom-4 left-4 h-24 w-24 overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2 shadow-[0_10px_30px_rgba(20,24,40,0.14)] md:h-28 md:w-28">
                      <img
                        src={p.packImage}
                        alt={`Упаковка: ${p.name}`}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className="home-product__caption flex items-center justify-between rounded-b-[1.5rem] bg-[#f1f3f6] p-4 md:p-6">
                  <div>
                    <h3 className="text-base font-extrabold tracking-tight text-gray-900 md:text-lg">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-gray-600 md:text-sm">{p.desc}</p>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black shadow-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.75} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 lg:mt-8">
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

function MarketplaceSection() {
  const { preview } = usePreviewRoutes();
  const marketplaces = [
    {
      name: "Wildberries",
      logo: wildberriesLogo,
      product: pack01,
      href: preview
        ? "https://www.wildberries.ru/seller/250120026"
        : "https://www.wildberries.ru/catalog/895985685/detail.aspx",
      label: preview ? "Открыть магазин" : "Открыть товар",
      className: "md:col-span-5",
      accent: "bg-[#f5eafa]",
    },
    {
      name: "Ozon",
      logo: ozonLogo,
      product: practicalUniversalPack,
      href: preview
        ? OZON_STORE_URL
        : "https://www.ozon.ru/search/?deny_category_prediction=true&from_global=true&text=1998%20%D0%9F%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%BD%D0%B0%D1%8F%20%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D0%B3%D1%83%D0%B1%D0%BA%D0%B8%20%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5",
      label: preview ? "Открыть магазин" : "Найти товары",
      className: "md:col-span-4",
      accent: "bg-[#edf3ff]",
    },
    {
      name: "Яндекс Маркет",
      logo: yandexMarketLogo,
      product: pack10,
      href: preview
        ? "https://market.yandex.ru/business--blestiashchaia-istoriia/216728361"
        : "https://m.integration.vs.market.yandex.net/card/gubki-dlya-mytya-posudy-figurnyye-ergonomichnyye-nabor-gubok-kvadrat-10-sht/5718394497",
      label: preview ? "Открыть магазин" : "Открыть товар",
      className: "md:col-span-3",
      accent: "bg-[#fff6d8]",
    },
  ];

  return (
    <section className="home-marketplaces bg-white px-6 py-16 lg:px-12 lg:py-24">
      <div className="site-container">
        <div className="mb-8 max-w-2xl lg:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Где купить</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Мы на маркетплейсах
          </h2>
          <p className="home-marketplaces__description mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">
            {preview
              ? "Выбирайте товары 1998 на привычной площадке."
              : "Выбирайте товары 1998 на привычной площадке. Ссылки ведут к подборке продукции или доступной карточке товара."}
          </p>
        </div>

        <div className="home-marketplaces__links grid gap-4 md:grid-cols-12">
          {marketplaces.map((marketplace) => (
            <a
              key={marketplace.name}
              href={marketplace.href}
              aria-label={`Открыть ${marketplace.name}`}
              className={`home-marketplace ${marketplace.className} ${marketplace.accent} group relative flex min-h-[420px] flex-col overflow-hidden rounded-[2rem] p-6 md:p-8`}
            >
              <div className="flex items-start justify-between gap-4">
                <img
                  src={marketplace.logo}
                  alt={marketplace.name}
                  loading="lazy"
                  className="h-9 max-w-[170px] object-contain object-left"
                />
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>

              <img
                src={marketplace.product}
                alt={`Продукция 1998 на ${marketplace.name}`}
                loading="lazy"
                className="home-marketplace__product mx-auto my-6 h-56 w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div className="mt-auto">
                <p className="text-sm font-semibold text-gray-900">{marketplace.label}</p>
                {!preview && (
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">Перейти на площадку</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [playing, setPlaying] = useState<Record<string, boolean>>({});
  const [muted, setMuted] = useState<Record<string, boolean>>({});

  const reviews = [
    {
      name: "Анна",
      username: "Губки для посуды",
      videoSrc: ugcGubkiReview,
      poster: ugcGubkiPoster,
      initials: "А",
      color: "#4B66D1",
    },
    {
      name: "Екатерина",
      username: "Салфетки целлюлозные",
      videoSrc: ugcSalfetkiReview,
      poster: ugcSalfetkiPoster,
      initials: "Е",
      color: "#2d8a9e",
    },
    {
      name: "Мария Рыжкова",
      username: "Губки для посуды",
      videoSrc: ugcMariaGubkiReview,
      poster: ugcMariaGubkiPoster,
      initials: "М",
      color: "#c4654a",
    },
    {
      name: "Дарина Смайльс",
      username: "Губки для посуды",
      videoSrc: ugcDarinaGubkiReview,
      poster: ugcDarinaGubkiPoster,
      initials: "Д",
      color: "#7d9b76",
    },
    {
      name: "Сабрина Валиуллина",
      username: "Губки для посуды",
      videoSrc: ugcSabrinaGubkiReview,
      poster: ugcSabrinaGubkiPoster,
      initials: "С",
      color: "#9b72cf",
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

  useEffect(() => {
    setPage((p) => Math.max(0, Math.min(totalPages - 1, p)));
  }, [totalPages]);

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

  const togglePlay = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    const r = reviews[idx];
    if (video.paused) {
      video.play().catch(() => {});
      setPlaying((p) => ({ ...p, [r.name]: true }));
    } else {
      video.pause();
      setPlaying((p) => ({ ...p, [r.name]: false }));
    }
  };

  const toggleMute = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    const r = reviews[idx];
    video.muted = !video.muted;
    setMuted((p) => ({ ...p, [r.name]: video.muted }));
  };

  const handleVideoClick = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <section className="home-reviews relative overflow-hidden bg-[oklch(0.93_0.005_260)] px-6 pb-20 pt-16 lg:px-12 lg:pb-28 lg:pt-24">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
        }}
      />
      <div className="site-container relative z-10">
        <div className="mb-8 max-w-2xl lg:mb-10">
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Нам доверяют
          </h2>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:gap-5 lg:gap-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((r, idx) => (
              <div
                key={r.name}
                className="home-review w-[calc(72%-8px)] shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-white sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-19.2px)]"
              >
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#f4f4f0]">
                  {(() => {
                    const isMuted = muted[r.name] ?? true;
                    return (
                      <>
                        <video
                          ref={(el) => {
                            videoRefs.current[idx] = el;
                          }}
                          src={r.videoSrc}
                          poster={r.poster}
                          preload="metadata"
                          playsInline
                          muted
                          loop
                          className="h-full w-full object-cover"
                          onClick={() => handleVideoClick(idx)}
                          onPlay={() => setPlaying((p) => ({ ...p, [r.name]: true }))}
                          onPause={() => setPlaying((p) => ({ ...p, [r.name]: false }))}
                        />

                        {r.videoSrc && !playing[r.name] && (
                          <button
                            onClick={() => togglePlay(idx)}
                            className="absolute left-1/2 top-1/2 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
                            aria-label="Воспроизвести"
                          >
                            <Play className="h-6 w-6 fill-white" strokeWidth={1.5} />
                          </button>
                        )}

                        {r.videoSrc && (
                          <button
                            onClick={() => toggleMute(idx)}
                            className="absolute bottom-4 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
                            aria-label={isMuted ? "Включить звук" : "Выключить звук"}
                          >
                            {isMuted ? (
                              <VolumeX className="h-4 w-4" strokeWidth={1.75} />
                            ) : (
                              <Volume2 className="h-4 w-4" strokeWidth={1.75} />
                            )}
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>

                <div className="home-review__caption flex items-center gap-3 p-4 lg:p-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{r.name}</p>
                    <p className="text-xs font-medium text-gray-500">{r.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 lg:mt-8">
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

export default function Index({
  hero,
  about,
  className = "",
}: {
  hero?: ReactNode;
  about?: ReactNode;
  className?: string;
}) {
  const { sitePath } = usePreviewRoutes();
  useEffect(() => {
    document.title = "1998 Блестящая история: хозяйственные товары";
  }, []);
  return (
    <div className={`${className} overflow-x-hidden bg-background text-foreground antialiased`}>
      {hero ?? <CinematicHero />}
      {about ?? <AboutSlider />}

      {/* Products */}
      <ProductsSection />

      {/* History */}
      <section
        id="history"
        className="home-history relative scroll-mt-20 overflow-hidden bg-white px-6 pb-16 pt-16 lg:px-12 lg:pb-20 lg:pt-24"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />

        <div className="site-container relative z-10 flex flex-col gap-14 lg:flex-row lg:gap-20">
          <div className="space-y-6 lg:w-5/12 lg:space-y-8">
            <h2 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Опыт, за которым
              <br />
              <span>стоит история</span>
            </h2>
            <p className="whitespace-pre-line text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
              Бренд «1998» входит в семейную компанию с большой производственной историей.{"\n"}
              Сегодня компанией управляет уже второе поколение семьи, сохраняя ответственность,
              внимание к деталям и подход, основанный на реальном опыте.
            </p>
            <Link
              to={sitePath("/about")}
              className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Узнать историю компании
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </Link>
          </div>
          <div className="home-history__people grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-7/12 lg:gap-10">
            {[
              { name: "Николай Дворянкин", role: "Руководитель", photo: nikolayPhoto },
              { name: "Валерий Дворянкин", role: "Основатель", photo: valeryPhoto, offset: true },
            ].map((p) => (
              <div
                key={p.name}
                className={`group space-y-6 lg:space-y-8 ${p.offset ? "lg:translate-y-16" : ""}`}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_30px_60px_rgba(20,24,40,0.08)]">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{p.name}</h4>
                  <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[#4B66D1]">
                    {p.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketplaceSection />

      {/* Reviews */}
      <ReviewsSection />
    </div>
  );
}

function CinematicHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((slide) => (slide + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden px-6 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28 lg:px-12 lg:pb-12 lg:pt-32">
      {heroSlides.map((slide, index) => (
        <picture
          key={slide.desktop}
          aria-hidden={activeSlide !== index}
          className={`pointer-events-none absolute inset-0 z-0 h-full w-full transition-opacity duration-1000 ease-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <source srcSet={slide.mobile} media="(max-width: 767px)" />
          <img
            src={slide.desktop}
            alt={activeSlide === index ? slide.alt : ""}
            loading={index === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover object-center"
          />
        </picture>
      ))}

      {/* Bottom gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[45%] bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

      {/* Bottom */}
      <main className="site-container relative z-20 mt-auto flex flex-col items-start justify-between gap-4 pb-4 md:flex-row md:items-end md:gap-10 lg:gap-20">
        <div className="space-y-1 md:space-y-6">
          <h1
            className="font-semibold leading-[0.8] tracking-[-0.04em] text-white md:leading-[0.85]"
            style={{
              fontSize: "clamp(60px, 9vw, 86px)",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
          >
            Блестящая
          </h1>
          <h2
            className="font-semibold leading-[0.8] tracking-[-0.04em] text-white md:leading-[0.85]"
            style={{
              fontSize: "clamp(60px, 9vw, 86px)",
              textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            }}
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
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
        </div>
      </main>
    </section>
  );
}
