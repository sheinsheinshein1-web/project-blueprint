import { createFileRoute } from "@tanstack/react-router";
import heroProducts from "@/assets/hero-products.jpg";
import family from "@/assets/family.jpg";
import sponges from "@/assets/sponges.jpg";
import wipes from "@/assets/wipes.jpg";
import logo from "@/assets/logo-1998.jpg.asset.json";

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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
          <div className="flex items-center space-x-4">
            <div className="bg-primary px-2.5 py-1 text-sm font-extrabold tracking-tighter text-primary-foreground">98</div>
            <span className="text-xl font-extrabold tracking-tight">1998</span>
          </div>
          <div className="hidden space-x-12 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground lg:flex">
            <a href="#about" className="transition-colors hover:text-primary">О бренде</a>
            <a href="#products" className="transition-colors hover:text-primary">Продукция</a>
            <a href="#history" className="transition-colors hover:text-primary">История</a>
            <a href="#contact" className="transition-colors hover:text-primary">Контакты</a>
          </div>
          <a href="tel:+78123293642" className="text-sm font-semibold tabular-nums">+7 (812) 329-36-42</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col lg:flex-row">
        <div className="flex min-h-[70vh] flex-col justify-center bg-primary p-10 text-primary-foreground lg:w-1/2 lg:p-24">
          <h1 className="mb-10 text-5xl font-extrabold leading-[0.9] tracking-tighter lg:text-[5.5rem]">
            Блестящая<br />история
          </h1>
          <p className="mb-12 max-w-md text-lg font-light italic leading-relaxed opacity-90 lg:text-xl">
            С 1998 года мы создаём хозяйственные товары, которые помогают вам каждый день.
          </p>
          <div className="group relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={heroProducts}
              alt="Хозяйственные товары 1998"
              width={1280}
              height={896}
              className="aspect-video w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/20" />
          </div>
        </div>
        <div className="relative min-h-[400px] lg:w-1/2">
          <img
            src={family}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="space-y-12 lg:col-span-7">
            <div className="inline-flex items-center space-x-4">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Чистота начинается с 1998</span>
            </div>
            <div className="space-y-8 text-xl font-light leading-relaxed text-muted-foreground lg:text-2xl">
              <p className="font-medium text-foreground">
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
            <div className="translate-y-8 overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src={family}
                alt="Семья на кухне"
                width={896}
                height={640}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -right-8 -top-12 -z-10 h-48 w-48 rounded-full bg-accent blur-3xl" />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 grid grid-cols-1 gap-16 border-t border-border pt-20 md:grid-cols-3">
          {[
            { num: "30+", label: "лет\nна рынке" },
            { num: "100%", label: "российское сырьё\nи производство" },
            { num: "4", label: "категории товаров\nдля дома" },
          ].map((s) => (
            <div key={s.num} className="space-y-4">
              <div className="text-7xl font-extrabold tracking-tighter text-primary">{s.num}</div>
              <div className="whitespace-pre-line text-[11px] font-bold uppercase leading-tight tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
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
      <section id="products" className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="mb-6 text-5xl font-extrabold tracking-tight">Наша продукция</h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              В линейке «1998» — всё, что нужно для ежедневной чистоты. Функциональные, долговечные и удобные товары для дома.
            </p>
          </div>
          <a href="#products" className="border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-widest text-primary">
            Посмотреть каталог
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <ProductCard
            img={sponges}
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
              <div className="flex items-center space-x-3">
                <div className="bg-primary px-2 py-0.5 text-xs font-black text-primary-foreground">98</div>
                <span className="text-xl font-black leading-tight tracking-tighter">Блестящая<br />история</span>
              </div>
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
    <article className="group relative overflow-hidden rounded-[3rem] bg-secondary">
      <div className="absolute right-10 top-10 z-10">
        <span className="rounded-full bg-background/90 px-5 py-2 text-[10px] font-extrabold uppercase tracking-widest text-primary shadow-sm backdrop-blur">
          {tag}
        </span>
      </div>
      <div className="aspect-[4/3] overflow-hidden">
        <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      </div>
      <div className="bg-background p-12">
        <h3 className="text-3xl font-extrabold tracking-tight">{title}</h3>
        <p className="mt-4 font-medium text-muted-foreground">{subtitle}</p>
      </div>
    </article>
  );
}
