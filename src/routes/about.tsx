import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import nikolayPhoto from "@/assets/nikolay.jpg.asset.json";
import valeryPhoto from "@/assets/valery.png.asset.json";
import valeryPhoto from "@/assets/valery.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О бренде — 1998 Блестящая история" },
      { name: "description", content: "История компании «ТЕКОС-ИНДУСТРИЯ» — одного из старейших производителей хозяйственных товаров в России с 1998 года." },
      { property: "og:title", content: "О бренде — 1998 Блестящая история" },
      { property: "og:description", content: "Семейная компания «ТЕКОС-ИНДУСТРИЯ» — производитель бренда «1998 Блестящая история»." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[oklch(0.93_0.005_260)] text-gray-900">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full px-6 py-16 lg:px-12 lg:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          На главную
        </Link>

        {/* Section 1 */}
        <section className="mt-12 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Опыт гарантирует<br />экспертизу
            </h1>
            <div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
              <p>
                Основанная в 1998 году, компания «ТЕКОС-ИНДУСТРИЯ» является одним из крупнейших и старейшим производителем хозяйственных товаров в России.
              </p>
              <p>
                Все эти годы мы экспериментировали, тестировали материалы и технологии, изучали потребности наших покупателей и научились производить безупречные хозяйственные товары в России.
              </p>
              <p>
                За длительную историю мы накопили огромный багаж знаний и установили надёжные связи с поставщиками и партнёрами. Экспертиза «ТЕКОС-ИНДУСТРИЯ» признана крупными сетями, дистрибьюторами и другими участниками рынка, размещающими у нас заказы на производство товаров под своими брендами.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 backdrop-blur-md shadow-[0_30px_60px_rgba(20,24,40,0.12)]">
              <img
                src={valeryPhoto.url}
                alt="Валерий Дворянкин — основатель"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[#4B66D1]">
              Валерий Дворянкин
            </p>
            <p className="text-sm text-gray-500">Основатель</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-24 grid gap-14 lg:mt-32 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 bg-white/55 backdrop-blur-md shadow-[0_30px_60px_rgba(20,24,40,0.12)]">
              <img
                src={nikolayPhoto.url}
                alt="Николай Дворянкин — руководитель"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-[#4B66D1]">
              Николай Дворянкин
            </p>
            <p className="text-sm text-gray-500">Руководитель</p>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Семейные традиции<br />качества
            </h2>
            <div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-gray-700 lg:text-xl">
              <p>
                Несмотря на масштабы бизнеса, «ТЕКОС-ИНДУСТРИЯ» остаётся семейной компанией. Традиции качества и ответственного отношения к делу передаются по наследству. Но новое поколение привносит свежий взгляд и передовые технологии управления.
              </p>
              <p>
                Основатель компании <span className="font-medium text-gray-900">Валерий Викторович Дворянкин</span> начал работать с хозяйственными товарами ещё в 1992 году с импорта продукции крупного бельгийского бренда. В 1996 году он основал компанию «ТЕКОС». Он глубоко вникал во все процессы лично и всегда с особым вниманием относился к потребителям, пристально изучая их потребности. В 1998 году он создал первое собственное производство.
              </p>
              <p>
                С 2024 года компанией управляет сын Валерия Викторовича — <span className="font-medium text-gray-900">Николай Дворянкин</span>. Сохраняя уважение к семейным традициям, Николай привносит инновации в производство и управление компанией «ТЕКОС-ИНДУСТРИЯ».
              </p>
            </div>
          </div>
        </section>

        {/* Footer card */}
        <section className="mt-24 lg:mt-32">
          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/60 px-8 py-12 backdrop-blur-md shadow-[0_30px_60px_rgba(20,24,40,0.08)] lg:px-14 lg:py-16">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <img src={logo.url} alt="1998 Блестящая история" className="h-24 w-auto" />
              <div className="space-y-2 text-base text-gray-700">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-500">Головной офис</p>
                <p className="font-medium text-gray-900">Россия, г. Санкт-Петербург</p>
                <p>пр. Юрия Гагарина, д. 1, оф. 306</p>
                <p className="pt-2 text-lg font-bold text-gray-900">+7 (812) 329-36-42</p>
                <a href="mailto:info@tecos.spb.ru" className="text-sm font-bold text-[#4B66D1] underline underline-offset-8">
                  info@tecos.spb.ru
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
