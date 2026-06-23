import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import family from "@/assets/family.jpg";
import packagingDelikatnye from "@/assets/packaging-delikatnye.png.asset.json";
import packagingKostochka from "@/assets/packaging-kostochka.png.asset.json";
import packagingChernye from "@/assets/packaging-chernye.png.asset.json";
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
          <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
            <div className="space-y-10 lg:col-span-7">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/60 px-4 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4B66D1]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-700">
                  Чистота начинается с 1998
                </span>
              </div>
              <h2 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Семейная история,<br />
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(20,24,40,0.85)" }}
                >
                  ставшая брендом
                </span>
              </h2>
              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
                <p className="font-medium text-gray-900">
                  «1998 Блестящая история» — бренд российского производителя хозяйственных товаров «ТЕКОС-ИНДУСТРИЯ».
                </p>
                <p>
                  Семейная компания во втором поколении сохраняет внимание к деталям, ответственность и подход, основанный на реальном опыте производства.
                </p>
                <p>
                  Каждый предмет линейки «1998» создан, чтобы домашняя рутина становилась проще, а каждый уголок дома — чище.
                </p>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_rgba(20,24,40,0.18)] ring-1 ring-white/60">
                <img
                  src={family}
                  alt="Семья на кухне"
                  width={896}
                  height={640}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -right-10 -top-10 -z-10 h-56 w-56 rounded-full bg-[#4B66D1]/15 blur-3xl" />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-28 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              { num: "30+", label: "лет\nна рынке" },
              { num: "100%", label: "российское сырьё\nи производство" },
              { num: "4", label: "категории товаров\nдля дома" },
            ].map((s) => (
              <div
                key={s.num}
                className="rounded-[2rem] border border-white/60 bg-white/55 p-10 backdrop-blur-md transition-colors hover:bg-white/75"
              >
                <div className="text-6xl font-extrabold tracking-tighter text-gray-900 md:text-7xl">
                  {s.num}
                </div>
                <div className="mt-5 whitespace-pre-line text-[11px] font-bold uppercase leading-tight tracking-[0.22em] text-gray-600">
                  {s.label}
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
                <span
                  className="text-transparent"
                  style={{ WebkitTextStroke: "1.5px rgba(20,24,40,0.85)" }}
                >
                  ежедневной чистоты
                </span>
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
      <section id="history" className="overflow-hidden bg-[oklch(0.21_0.03_260)] px-6 py-32 text-white lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-24 lg:flex-row">
          <div className="lg:w-5/12">
            <span className="mb-10 inline-block rounded-full bg-primary px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-foreground">
              Наследие
            </span>
            <h2 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight">Опыт, за которым стоит история</h2>
            <p className="mb-12 text-lg font-light leading-relaxed text-white/60">
              Бренд «1998» — часть семейной компании с большой производственной историей. Сегодня компанией управляет уже второе поколение семьи, сохраняя верность качеству.
            </p>
            <a href="#contact" className="group inline-flex items-center rounded-full bg-white px-10 py-5 font-bold text-[oklch(0.21_0.03_260)] transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              Узнать историю компании
              <span className="ml-4 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:w-7/12">
            {[
              { name: "Николай Дворянкин", role: "Основатель" },
              { name: "Валерий Дворянкин", role: "Руководитель", offset: true },
            ].map((p) => (
              <div key={p.name} className={`group space-y-8 ${p.offset ? "lg:translate-y-20" : ""}`}>
                <div className="aspect-[3/4] overflow-hidden rounded-[2rem] bg-white/5">
                  <div className="h-full w-full bg-gradient-to-br from-primary/40 to-white/5 opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{p.name}</h4>
                  <p className="mt-2 text-sm font-bold uppercase tracking-widest text-primary">{p.role}</p>
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
  const packRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = (x / rect.width - 0.5) * 2; // -1..1
    const ny = (y / rect.height - 0.5) * 2;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const glow = glowRef.current;
      if (glow) {
        glow.style.setProperty("--mx", `${x}px`);
        glow.style.setProperty("--my", `${y}px`);
        glow.style.setProperty("--r", `220px`);
      }
      const pack = packRef.current;
      if (pack) {
        const tx = nx * 24;
        const ty = ny * 24;
        const rx = (-ny * 8).toFixed(2);
        const ry = (nx * 10).toFixed(2);
        pack.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    });
  };
  const handleLeave = () => {
    const el = glowRef.current;
    if (el) el.style.setProperty("--r", `0px`);
    const pack = packRef.current;
    if (pack) pack.style.transform = "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)";
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

      {/* Floating packaging row */}
      <div className="pointer-events-none absolute inset-0 z-[6] flex items-center justify-center" style={{ perspective: "1200px" }}>
        <div ref={packRef} className="animate-float flex items-end justify-center gap-4 sm:gap-8 lg:gap-14 will-change-transform" style={{ transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)" }}>
          <img
            src={packagingKostochka.url}
            alt="Губки эргономичные 1998"
            className="h-auto w-[22vw] max-w-[300px] min-w-[140px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
          />
          <img
            src={packagingDelikatnye.url}
            alt="Упаковка 1998"
            className="h-auto w-[26vw] max-w-[360px] min-w-[160px] drop-shadow-[0_40px_50px_rgba(0,0,0,0.3)]"
          />
          <img
            src={packagingChernye.url}
            alt="Губки универсальные 1998"
            className="h-auto w-[22vw] max-w-[300px] min-w-[140px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]"
          />
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
            className="font-medium leading-[0.85] tracking-[-0.04em] text-gray-900"
            style={{ fontSize: "clamp(60px, 9vw, 86px)" }}
          >
            Блестящая
          </h1>
          <h2
            className="font-medium leading-[0.85] tracking-[-0.04em] text-transparent"
            style={{
              fontSize: "clamp(60px, 9vw, 86px)",
              WebkitTextStroke: "1.5px rgba(20,24,40,0.85)",
            }}
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
            className="group flex w-full items-center justify-between rounded-full bg-gray-900 px-6 py-4 font-medium text-white shadow-lg hover:bg-black sm:w-[240px]"
          >
            Смотреть продукцию
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </main>
    </section>
  );
}
