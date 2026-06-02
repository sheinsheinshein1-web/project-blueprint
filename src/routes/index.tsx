import { createFileRoute } from "@tanstack/react-router";
import heroProducts from "@/assets/hero-products.jpg";
import family from "@/assets/family.jpg";
import sponges from "@/assets/sponges.jpg";
import wipes from "@/assets/wipes.jpg";

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-primary-foreground/10 font-display text-2xl">98</div>
            <span className="text-lg font-extrabold tracking-wide">1998</span>
          </div>
          <nav className="hidden gap-8 text-xs font-semibold uppercase tracking-widest md:flex">
            <a href="#about" className="hover:opacity-80">О бренде</a>
            <a href="#products" className="hover:opacity-80">Продукция</a>
            <a href="#history" className="hover:opacity-80">История</a>
            <a href="#contact" className="hover:opacity-80">Контакты</a>
          </nav>
          <a href="tel:+78123293642" className="text-sm font-semibold">+7 (812) 329-36-42</a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-2">
          <div className="relative flex flex-col justify-between px-8 py-16 md:py-24">
            <div>
              <h1 className="font-display text-6xl leading-none md:text-7xl">
                Блестящая<br />история
              </h1>
              <p className="mt-6 max-w-md text-base text-primary-foreground/85">
                С 1998 года мы создаём хозяйственные товары, которые помогают вам каждый день.
              </p>
            </div>
            <img
              src={heroProducts}
              alt="Хозяйственные товары 1998"
              width={1280}
              height={896}
              className="mt-10 rounded-xl object-cover"
            />
          </div>
          <div className="relative min-h-[420px] bg-[url('/hero-bg.svg')] bg-cover bg-center">
            <img
              src={heroProducts}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Чистота начинается с 1998
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                «1998 Блестящая история» — бренд российского производителя
                хозяйственных товаров «ТЕКОС-ИНДУСТРИЯ». Он назван в честь года
                строительства собственного завода в Ленинградской области.
              </p>
              <p>
                Семейная компания во втором поколении сохраняет внимание к
                деталям, ответственность и подход, основанный на реальном опыте
                производства.
              </p>
              <p>
                Каждый предмет линейки «1998» создан, чтобы домашняя рутина
                становилась проще, а каждый уголок дома — чище.
              </p>
            </div>
            <img
              src={family}
              alt="Семья на кухне"
              width={896}
              height={640}
              loading="lazy"
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              { num: "30+", label: "лет\nна рынке" },
              { num: "100%", label: "российское сырьё\nи производство" },
              { num: "4", label: "категории товаров\nдля дома" },
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-4">
                <span className="text-5xl font-extrabold text-primary">{s.num}</span>
                <span className="whitespace-pre-line text-sm text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-primary py-4 text-primary-foreground">
        <div className="flex animate-marquee whitespace-nowrap text-sm font-bold uppercase tracking-[0.3em]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="px-8">✦ Блестящая история каждый день</span>
          ))}
        </div>
      </div>

      {/* Products */}
      <section id="products" className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold md:text-4xl">Наша продукция</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            В линейке «1998» — всё, что нужно для ежедневной чистоты.
            Функциональные, долговечные и удобные товары для дома.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <ProductCard
              img={sponges}
              tag="Для уборки"
              title="Губки и скребки"
              tone="bg-sky-100"
            />
            <ProductCard
              img={wipes}
              tag="Для дома"
              title="Салфетки и стельки"
              tone="bg-orange-100"
            />
          </div>
        </div>
      </section>

      {/* History / Leaders */}
      <section id="history" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                О компании
              </span>
              <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">
                Опыт, за которым<br />стоит история
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Бренд «1998» — часть семейной компании с большой производственной
                историей. Сегодня компанией управляет уже второе поколение
                семьи, сохраняя ответственность и внимание к деталям.
              </p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                Узнать историю компании →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Николай Дворянкин", role: "Основатель" },
                { name: "Валерий Дворянкин", role: "Руководитель" },
              ].map((p) => (
                <div key={p.name} className="overflow-hidden rounded-2xl bg-background">
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="p-4">
                    <div className="text-sm font-bold uppercase">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-md bg-primary-foreground/10 font-display text-2xl">98</div>
              <div className="font-display text-3xl">Блестящая история</div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75">
              Хозяйственные товары от российского производителя «ТЕКОС-ИНДУСТРИЯ».
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Навигация</div>
            <a href="#about" className="block hover:opacity-80">О бренде</a>
            <a href="#products" className="block hover:opacity-80">Продукция</a>
            <a href="#history" className="block hover:opacity-80">История</a>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-foreground/60">Головной офис</div>
            <p>Россия, г. Санкт-Петербург,<br />пр. Юрия Гагарина, д. 1, оф. 306</p>
            <p>+7 (812) 329-36-42</p>
            <p>info@tecos.spb.ru</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/10 px-6 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} 1998 Блестящая история. Все права защищены.
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ img, tag, title, tone }: { img: string; tag: string; title: string; tone: string }) {
  return (
    <article className={`group relative overflow-hidden rounded-2xl ${tone}`}>
      <img src={img} alt={title} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
        {tag}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-extrabold text-primary">{title}</h3>
      </div>
    </article>
  );
}
