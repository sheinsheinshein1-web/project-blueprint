import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Award, CalendarClock, ChevronDown, Menu, RefreshCw, ShieldCheck, X } from "lucide-react";
import packagingDelikatnye from "@/assets/packaging-delikatnye.png.asset.json";
import packagingKostochka from "@/assets/packaging-kostochka.png.asset.json";
import packagingChernye from "@/assets/packaging-chernye.png.asset.json";
import packMetallic from "@/assets/pack-metallic.png.asset.json";
import packCelulosa from "@/assets/pack-celulosa.png.asset.json";
import packViscosa from "@/assets/pack-viscosa.png.asset.json";
import wipes from "@/assets/wipes.jpg";
import logo from "@/assets/logo-1998.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1998 Блестящая история — хозяйственные товары" },
      { name: "description", content: "Бренд «1998 Блестящая история» — российский производитель хозяйственных товаров с более чем 30-летним опытом." },
      { property: "og:title", content: "1998 Блестящая история" },
      { property: "og:description", content: "Хозяйственные товары для ежедневной чистоты от российского производителя «ТЕКОС-ИНДУСТРИЯ»." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden bg-background text-foreground antialiased">
      <CinematicHero />


      {/* About */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#F8FAFC] px-6 py-32 lg:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, #FFFFFF 0%, #F1F5F9 45%, #E2E8F0 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl space-y-20">
          <div className="mx-auto max-w-5xl space-y-10 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4B66D1]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-700">
                Чистота начинается с 1998
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              «1998 Блестящая история» — бренд российского производителя хозяйственных товаров «ТЕКОС-ИНДУСТРИЯ»
            </h2>
            <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
              Семейная компания во втором поколении сохраняет внимание к деталям, ответственность и подход, основанный на реальном опыте производства. Каждый предмет линейки «1998» создан, чтобы домашняя рутина становилась проще, а каждый уголок дома — чище.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CalendarClock,
                label: "Более 30 лет опыта",
              },
              {
                icon: ShieldCheck,
                label: "Российское сырье и надёжные поставщики",
              },
              {
                icon: RefreshCw,
                label: "Полный цикл производства",
              },
              {
                icon: Award,
                label: "Доверие сетей и лидеров рынка",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-[2rem] border border-white/60 bg-white/55 p-8 text-center backdrop-blur-md transition-colors hover:bg-white/75"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#4B66D1]/20 bg-[#4B66D1]/10">
                  <item.icon className="h-9 w-9 text-[#4B66D1]" strokeWidth={1.5} />
                </div>
                <div className="mt-6 text-[12px] font-bold uppercase leading-tight tracking-[0.18em] text-gray-800">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden bg-primary py-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="flex items-center px-10 text-2xl font-black uppercase tracking-[0.4em] text-primary-foreground">
              Блестящая история каждый день
              <span className="mx-16 h-3 w-3 rotate-45 bg-primary-foreground" />
            </span>
          ))}
        </div>
      </div>

      {/* Products */}
      <section
        id="products"
        className="relative overflow-hidden bg-[oklch(0.93_0.005_260)] px-6 py-32 lg:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4B66D1]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-700">
                  Наша продукция
                </span>
              </div>
              <h2 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Всё для<br />
                <span>ежедневной чистоты</span>
              </h2>
              <p className="text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
                Функциональные, долговечные и удобные товары для дома — в линейке «1998» только то, что прошло проверку реальным опытом.
              </p>
            </div>
            <a
              href="#products"
              className="inline-flex items-center gap-2 self-start rounded-full bg-[#4B66D1] px-6 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#3B54B4] md:self-end"
            >
              Посмотреть каталог
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ProductCard
              img={packagingDelikatnye.url}
              tag="Для уборки"
              title="Губки и скребки"
              subtitle="Высокая износостойкость и эффективность"
            />
            <ProductCard
              img={wipes}
              tag="Для дома"
              title="Салфетки и стельки"
              subtitle="Натуральные материалы и комфорт"
            />
          </div>
        </div>
      </section>

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
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-24 lg:flex-row">
          <div className="space-y-8 lg:w-5/12">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4B66D1]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-700">
                Наследие
              </span>
            </div>
            <h2 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Опыт, за которым<br />
              <span>стоит история</span>
            </h2>
            <p className="text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
              Бренд «1998» — часть семейной компании с большой производственной историей. Сегодня компанией управляет уже второе поколение семьи, сохраняя верность качеству.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center rounded-full bg-[#4B66D1] px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#3B54B4]"
            >
              Узнать историю компании
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:w-7/12">
            {[
              { name: "Николай Дворянкин", role: "Основатель" },
              { name: "Валерий Дворянкин", role: "Руководитель", offset: true },
            ].map((p) => (
              <div key={p.name} className={`group space-y-8 ${p.offset ? "lg:translate-y-20" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 backdrop-blur-md shadow-[0_30px_60px_rgba(20,24,40,0.12)]">
                  <div className="h-full w-full bg-gradient-to-br from-[#4B66D1]/20 to-[oklch(0.90_0.005_260)] opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
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

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-background px-6 pb-16 pt-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-32 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-10 lg:col-span-1">
              <img src={logo.url} alt="1998 Блестящая история" className="h-20 w-auto" />
              <p className="max-w-[200px] text-sm leading-relaxed text-muted-foreground">
                Хозяйственные товары от российского производителя «ТЕКОС-ИНДУСТРИЯ».
              </p>
            </div>
            <div>
              <h5 className="mb-10 text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">Навигация</h5>
              <ul className="space-y-5 text-sm font-semibold">
                <li><a href="#about" className="transition-colors hover:text-primary">О бренде</a></li>
                <li><a href="#products" className="transition-colors hover:text-primary">Продукция</a></li>
                <li><a href="#history" className="transition-colors hover:text-primary">История</a></li>
                <li><a href="#contact" className="transition-colors hover:text-primary">Где купить</a></li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h5 className="mb-10 text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">Контакты</h5>
              <div className="grid gap-10 md:grid-cols-2">
                <address className="text-sm font-medium not-italic leading-loose text-muted-foreground">
                  Санкт-Петербург,<br />
                  пр. Юрия Гагарина, д. 1, оф. 306
                </address>
                <div className="space-y-4">
                  <p className="text-lg font-bold">+7 (812) 329-36-42</p>
                  <a href="mailto:info@tecos.spb.ru" className="text-sm font-bold text-primary underline underline-offset-8">info@tecos.spb.ru</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-6 border-t border-border pt-12 md:flex-row">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">© {new Date().getFullYear()} 1998 Блестящая история. Все права защищены.</p>
            <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">Политика конфиденциальности</a>
              <a href="#" className="transition-colors hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ img, tag, title, subtitle }: { img: string; tag: string; title: string; subtitle: string }) {
  return (
    <article className="group relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/55 backdrop-blur-md shadow-[0_30px_60px_rgba(20,24,40,0.12)] transition-colors hover:bg-white/75">
      <div className="absolute right-6 top-6 z-10">
        <span className="rounded-full bg-[#4B66D1] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
          {tag}
        </span>
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-t-[2.5rem]">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
      </div>
      <div className="p-10">
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h3>
        <p className="mt-3 font-medium text-gray-600">{subtitle}</p>
      </div>
    </article>
  );
}

function CinematicHero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const packs = [
    { src: packagingDelikatnye.url, alt: "Губки деликатные 1998" },
    { src: packMetallic.url, alt: "Салфетки металлизированные 1998" },
    { src: packagingKostochka.url, alt: "Губки эргономичные 1998" },
    { src: packViscosa.url, alt: "Салфетки универсальные 1998" },
    { src: packagingChernye.url, alt: "Губки универсальные 1998" },
    { src: packCelulosa.url, alt: "Салфетки губчатые 1998" },
  ];

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % packs.length), 3200);
    return () => clearInterval(id);
  }, [packs.length]);

  // slot 0 = front, then right-near, right-far, back, left-far, left-near
  const slotStyles: Array<{ x: string; y: string; scale: number; blur: number; z: number; opacity: number }> = [
    { x: "0vw",   y: "0px",   scale: 1.15, blur: 0,  z: 50, opacity: 1 },
    { x: "20vw",  y: "-10px", scale: 0.71, blur: 3,  z: 40, opacity: 0.85 },
    { x: "32vw",  y: "-30px", scale: 0.44, blur: 7,  z: 30, opacity: 0.55 },
    { x: "0vw",   y: "-60px", scale: 0.32, blur: 10, z: 20, opacity: 0.35 },
    { x: "-32vw", y: "-30px", scale: 0.44, blur: 7,  z: 30, opacity: 0.55 },
    { x: "-20vw", y: "-10px", scale: 0.71, blur: 3,  z: 40, opacity: 0.85 },
  ];

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

  const navLinks = [
    { label: "О бренде", href: "#about", active: true },
    { label: "Продукция", href: "#products" },
    { label: "История", href: "#history" },
    { label: "Контакты", href: "#contact" },
  ];

  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[oklch(0.93_0.005_260)] p-6 md:p-8 lg:p-12"
      style={{ maxWidth: 1920, marginInline: "auto" }}
    >
      {/* Ambient backdrop */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 50%, oklch(0.86 0.008 260) 100%)",
        }}
      />

      {/* Rotating packaging carousel */}
      <div className="pointer-events-none absolute inset-0 z-[6] flex items-center justify-center" style={{ perspective: "1400px" }}>
        <div className="relative h-[60vh] w-full max-w-[1100px] max-sm:-translate-y-12">
          {packs.map((p, i) => {
            const slot = (i - current + packs.length) % packs.length;
            const s = slotStyles[slot];
            return (
              <img
                key={p.src}
                src={p.src}
                alt={p.alt}
                className="absolute left-1/2 top-1/2 h-auto w-[30vw] max-w-[414px] min-w-[210px] will-change-transform"
                style={{
                  transform: `translate(-50%, -50%) translate(${s.x}, ${s.y}) scale(${s.scale})`,
                  filter: `blur(${s.blur}px) drop-shadow(0 30px 40px rgba(0,0,0,0.25))`,
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


      {/* Header */}
      <header className="relative z-50 flex w-full items-center justify-between">
        <a href="#" className="flex items-center" aria-label="1998">
          <img src={logo.url} alt="1998" className="h-14 w-auto md:h-20" />
        </a>

        <nav className="hidden items-center gap-1 rounded-full bg-gray-200/50 p-1 backdrop-blur-md md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={
                "rounded-full px-6 py-2 text-[14px] font-medium transition-colors " +
                (l.active
                  ? "bg-white/80 text-black shadow-sm"
                  : "text-gray-700 hover:text-black")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#4B66D1] px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#3B54B4] md:inline-flex"
        >
          Связаться
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </a>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black backdrop-blur md:hidden"
          aria-label="Меню"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {mobileOpen && (
          <div className="absolute right-0 top-14 z-50 w-64 space-y-2 rounded-2xl border border-white/40 bg-white/70 p-4 shadow-xl backdrop-blur-xl md:hidden">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-2 text-sm font-medium text-gray-800 hover:bg-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center justify-between rounded-full bg-[#4B66D1] px-5 py-2.5 text-sm font-medium text-white"
            >
              Связаться <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </header>

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

        <div className="flex max-w-[340px] flex-col items-start gap-6 md:items-end lg:gap-8">
          <p
            className="text-[15px] font-light leading-relaxed text-gray-700 md:text-right md:text-[16px]"
          >
            С 1998 года «ТЕКОС-ИНДУСТРИЯ» создаёт хозяйственные товары, которые делают каждый дом чище и уютнее.
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
