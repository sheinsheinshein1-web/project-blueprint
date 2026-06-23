import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CalendarClock, Factory, Sparkles, ThumbsUp } from "lucide-react";
import packagingDelikatnye from "@/assets/packaging-delikatnye.png";
import packagingKostochka from "@/assets/packaging-kostochka.png";
import packagingChernye from "@/assets/packaging-chernye.png";
import packMetallic from "@/assets/pack-metallic.png";
import packCelulosa from "@/assets/pack-celulosa.png";
import packViscosa from "@/assets/pack-viscosa.png";
import packKaplyaGray from "@/assets/pack-kaplya-gray.png";
import packOvalEzhevika from "@/assets/pack-oval-ezhevika.png";
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
              Всё для ежедневной чистоты
            </h2>
            <p className="max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">
              Функциональные, долговечные и удобные товары для дома.
            </p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 self-start rounded-full bg-[#4B66D1] px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#3B54B4] md:self-end"
          >
            Посмотреть каталог
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
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
        className="relative overflow-hidden bg-[oklch(0.93_0.005_260)] px-6 py-32 lg:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
          }}
        />
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
                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 backdrop-blur-md shadow-[0_30px_60px_rgba(20,24,40,0.12)]">
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
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [current, setCurrent] = useState(0);

  const packs: Array<{ src: string; alt: string; widthClass?: string; scaleBoost?: number }> = [
    { src: packagingDelikatnye, alt: "Губки деликатные 1998" },
    { src: packMetallic, alt: "Салфетки металлизированные 1998" },
    { src: packKaplyaGray, alt: "Губки эргономичные капля 1998" },
    { src: packagingKostochka, alt: "Губки эргономичные 1998" },
    { src: packViscosa, alt: "Салфетки универсальные 1998" },
    { src: packOvalEzhevika, alt: "Губки эргономичные овал 1998" },
    { src: packagingChernye, alt: "Губки универсальные 1998" },
    { src: packCelulosa, alt: "Салфетки губчатые 1998" },
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % packs.length), 3200);
    return () => clearInterval(id);
  }, [packs.length]);

  // slot 0 = front center, then right side (near→far→off-screen),
  // off-screen wrap, then left side (off-screen→far→near)
  const slotStyles: Array<{ x: string; y: string; scale: number; blur: number; brightness: number; z: number; opacity: number }> = [
    { x: "0vw",    y: "0px",   scale: 1.55, blur: 0,  brightness: 1.00, z: 50, opacity: 1 },
    { x: "34vw",   y: "0px",   scale: 0.74, blur: 2,  brightness: 1.06, z: 45, opacity: 0.88 },
    { x: "50vw",   y: "0px",   scale: 0.50, blur: 5,  brightness: 1.16, z: 40, opacity: 0.66 },
    { x: "68vw",   y: "0px",   scale: 0.32, blur: 10, brightness: 1.30, z: 35, opacity: 0.40 },
    { x: "88vw",   y: "0px",   scale: 0.18, blur: 18, brightness: 1.50, z: 30, opacity: 0 },
    { x: "-88vw",  y: "0px",   scale: 0.18, blur: 18, brightness: 1.50, z: 30, opacity: 0 },
    { x: "-50vw",  y: "0px",   scale: 0.50, blur: 5,  brightness: 1.16, z: 40, opacity: 0.66 },
    { x: "-34vw",  y: "0px",   scale: 0.74, blur: 2,  brightness: 1.06, z: 45, opacity: 0.88 },
  ];

  const packSize = (pack: (typeof packs)[number]) => ({
    widthClass: pack.widthClass ?? "w-[55vw] sm:w-[30vw] max-w-[414px] min-w-[210px]",
    scaleBoost: pack.scaleBoost ?? 1,
  });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const glow = glowRef.current;
      if (glow) {
        glow.style.setProperty("--mx", `${x}px`);
        glow.style.setProperty("--my", `${y}px`);
        glow.style.setProperty("--r", `220px`);
      }
    });
  };
  const handleLeave = () => {
    const el = glowRef.current;
    if (el) el.style.setProperty("--r", `0px`);
  };

  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[oklch(0.90_0.006_260)] px-6 pb-6 pt-24 md:px-8 md:pb-8 md:pt-28 lg:px-12 lg:pb-12 lg:pt-32"
    >
      {/* Ambient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, oklch(0.97 0.006 260) 0%, oklch(0.92 0.008 260) 50%, oklch(0.84 0.012 260) 100%)",
        }}
      />

      {/* Rotating packaging carousel */}
      <div className="pointer-events-none absolute inset-0 z-[6] flex items-center justify-center" style={{ perspective: "1400px" }}>
        <div className="relative h-[60vh] w-full max-w-[1100px] max-sm:-translate-y-20">
          {packs.map((p, i) => {
            const slot = (i - current + packs.length) % packs.length;
            const s = slotStyles[slot];
            const { widthClass, scaleBoost } = packSize(p);
            return (
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                className={`absolute left-1/2 top-1/2 h-auto ${widthClass} will-change-transform`}
                style={{
                  transform: `translate(-50%, -50%) translate(${s.x}, ${s.y}) scale(${s.scale * scaleBoost})`,
                  filter: `blur(${s.blur}px) brightness(${s.brightness})`,
                  opacity: s.opacity,
                  zIndex: s.z,
                  transition: "transform 1.1s cubic-bezier(0.65, 0, 0.35, 1), filter 1.1s ease, opacity 1.1s ease",
                }}
              />
            );
          })}
        </div>
      </div>



      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(circle var(--r,0px) at var(--mx,50%) var(--my,50%), rgba(75,102,209,0.18), transparent 70%)",
          transition: "background 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      />

      {/* Bottom */}
      <main className="relative z-20 mt-auto flex flex-col items-start justify-between gap-10 pb-4 md:flex-row md:items-end lg:gap-20">
        <div className="space-y-4 md:space-y-6">
          <h1
            className="bg-gradient-to-br from-gray-900 via-gray-600 to-gray-300 bg-clip-text font-normal leading-[0.85] tracking-[-0.04em] text-transparent"
            style={{ fontSize: "clamp(60px, 9vw, 86px)" }}
          >
            Блестящая
          </h1>
          <h2
            className="bg-gradient-to-br from-gray-800 via-gray-500 to-gray-300 bg-clip-text font-medium leading-[0.85] tracking-[-0.04em] text-transparent"
            style={{ fontSize: "clamp(60px, 9vw, 86px)" }}
          >
            история
          </h2>
        </div>

        <div className="flex max-w-[520px] flex-col items-start gap-6 md:items-end lg:gap-8">
          <p
            className="text-balance text-[15px] font-light leading-relaxed text-gray-700 md:text-right md:text-[16px]"
          >
            С 1998 года мы создаём хозяйственные товары,
            <span className="sm:hidden"> </span>
            <br className="hidden sm:block" />
            которые помогают вам каждый день.
          </p>
          <a
            href="#products"
            className="group flex w-full items-center justify-between whitespace-nowrap rounded-full bg-gray-900 px-8 py-4 font-medium text-white shadow-lg hover:bg-black sm:w-auto"
          >
            Смотреть продукцию
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </main>
    </section>
  );
}
