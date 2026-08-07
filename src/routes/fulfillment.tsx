import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Mail,
  MapPin,
  Package,
  PackageCheck,
  PackageOpen,
  Phone,
  QrCode,
  RotateCcw,
  Ruler,
  ScanBarcode,
  Truck,
  Warehouse,
} from "lucide-react";
import warehouseHero from "@/assets/warehouse-hero.jpg";
import wildberriesLogo from "@/assets/wildberries.gif";
import ozonLogo from "@/assets/ozon.gif";
import yaMarketLogo from "@/assets/ya_market.gif";

const services = [
  { icon: PackageOpen, title: "Приёмка товара", desc: "Разгрузка, пересчёт и сверка с сопроводительными документами." },
  { icon: Warehouse, title: "Ответственное хранение", desc: "Стеллажное и паллетное хранение в отапливаемом складе." },
  { icon: QrCode, title: "Маркировка", desc: "Штрихкоды, этикетки маркетплейсов, «Честный знак», стикеровка." },
  { icon: Boxes, title: "Комплектация заказов", desc: "Сборка заказов и комплектов, наборы и промо-паки." },
  { icon: Package, title: "Упаковка", desc: "Пакеты, коробки, ВПП, скотч и упаковка по требованиям площадок." },
  { icon: ClipboardCheck, title: "Проверка качества", desc: "Осмотр товара, выявление брака, фотофиксация." },
  { icon: Ruler, title: "Обмер и взвешивание", desc: "Точные ВГХ для корректных карточек и тарифов доставки." },
  { icon: Truck, title: "Отгрузка на склады", desc: "Отгрузка FBO и FBS в сроки поставки маркетплейсов." },
  { icon: RotateCcw, title: "Работа с возвратами", desc: "Приёмка, проверка, переупаковка и возврат в оборот." },
  { icon: ScanBarcode, title: "Учёт остатков", desc: "Актуальные остатки и отчётность по каждой партии." },
  { icon: PackageCheck, title: "Вложения и подарки", desc: "Визитки, инструкции, пробники и подарочная упаковка." },
  { icon: Clock, title: "Срочные операции", desc: "Приоритетная обработка партий в день обращения." },
];

const fbsRows = [
  { name: "Приёмка товара (за единицу)", unit: "шт.", price: "от 4 ₽" },
  { name: "Хранение (за короб в сутки)", unit: "короб/сутки", price: "от 12 ₽" },
  { name: "Сборка заказа", unit: "заказ", price: "от 25 ₽" },
  { name: "Упаковка в пакет", unit: "шт.", price: "от 12 ₽" },
  { name: "Упаковка в коробку", unit: "шт.", price: "от 30 ₽" },
  { name: "Маркировка / стикеровка", unit: "шт.", price: "от 6 ₽" },
  { name: "Отгрузка в ПВЗ / сортировочный центр", unit: "отгрузка", price: "от 900 ₽" },
  { name: "Обработка возврата", unit: "шт.", price: "от 20 ₽" },
];

const fboRows = [
  { name: "Приёмка паллеты", unit: "паллета", price: "от 500 ₽" },
  { name: "Хранение паллеты", unit: "паллета/сутки", price: "от 35 ₽" },
  { name: "Маркировка коробов", unit: "короб", price: "от 25 ₽" },
  { name: "Комплектация короба", unit: "короб", price: "от 90 ₽" },
  { name: "Паллетирование и обмотка", unit: "паллета", price: "от 350 ₽" },
  { name: "Формирование поставки и документы", unit: "поставка", price: "от 700 ₽" },
  { name: "Доставка на склад маркетплейса", unit: "поставка", price: "от 3 500 ₽" },
  { name: "Обмер и взвешивание", unit: "SKU", price: "бесплатно" },
];

const marketplaces = [
  { name: "Wildberries", logo: wildberriesLogo },
  { name: "Ozon", logo: ozonLogo },
  { name: "Яндекс Маркет", logo: yaMarketLogo },
  { name: "Магнит Маркет", logo: null },
  { name: "М.Видео", logo: null },
];

const faq = [
  {
    q: "С какого объёма вы работаете?",
    a: "Мы работаем как с небольшими партиями от 100 единиц, так и с регулярными поставками на тысячи SKU. Минимального оборота нет.",
  },
  {
    q: "Как быстро вы обрабатываете заказы FBS?",
    a: "Заказы, поступившие до 14:00, собираются и отгружаются в тот же день. Остальные — на следующий рабочий день.",
  },
  {
    q: "Вы работаете с «Честным знаком»?",
    a: "Да. Наносим и вводим коды маркировки в оборот, передаём отчётность по каждой партии.",
  },
  {
    q: "Можно ли приехать на склад?",
    a: "Да, склад открыт для клиентов по будням с 9:00 до 18:00. Заранее согласуйте визит по телефону.",
  },
  {
    q: "Как происходит оплата?",
    a: "Работаем по договору с юридическими лицами и ИП. Оплата — по счёту, отчёт по операциям предоставляем ежемесячно.",
  },
  {
    q: "Что с сохранностью товара?",
    a: "Склад охраняется круглосуточно, ведётся видеонаблюдение, товар застрахован, доступ ограничен по зонам.",
  },
];

function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className={`w-full rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_60px_rgba(20,24,40,0.12)] backdrop-blur-xl lg:p-8 ${
        compact ? "" : ""
      }`}
    >
      <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">Оставить заявку</h3>
      <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">
        Перезвоним в течение 10 минут, рассчитаем стоимость под ваш ассортимент.
      </p>

      <div className="mt-6 space-y-3">
        <input
          required
          name="name"
          placeholder="Ваше имя"
          className="w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900"
        />
        <input
          required
          type="tel"
          name="phone"
          placeholder="+7 (___) ___-__-__"
          className="w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900"
        />
        <textarea
          name="comment"
          rows={3}
          placeholder="Комментарий: маркетплейсы, объём, задачи"
          className="w-full resize-none rounded-[1.25rem] border border-gray-200 bg-white px-5 py-3.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900"
        />
      </div>

      <button
        type="submit"
        className="group mt-5 inline-flex w-full items-center justify-between gap-2 rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800"
      >
        {sent ? "Заявка отправлена" : "Получить расчёт"}
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={2}
        />
      </button>

      <p className="mt-4 text-[11px] leading-relaxed text-gray-500">
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
      </p>
    </form>
  );
}

function PriceTable({
  id,
  title,
  subtitle,
  rows,
}: {
  id: string;
  title: string;
  subtitle: string;
  rows: Array<{ name: string; unit: string; price: string }>;
}) {
  return (
    <section id={id} className="bg-white px-6 py-16 lg:px-12 lg:py-24">
      <div className="site-container">
        <header className="mb-10 max-w-2xl space-y-3">
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
            {title}
          </h2>
          <p className="text-base font-light leading-relaxed text-gray-600">{subtitle}</p>
        </header>

        <div className="overflow-hidden rounded-[1.75rem] border border-gray-100 bg-[#f1f3f6] shadow-[0_10px_40px_rgba(20,24,40,0.05)]">
          <div className="hidden grid-cols-12 gap-4 px-8 py-5 text-[11px] font-black uppercase tracking-[0.18em] text-gray-500 md:grid">
            <span className="col-span-7">Операция</span>
            <span className="col-span-3">Единица</span>
            <span className="col-span-2 text-right">Стоимость</span>
          </div>
          <div className="space-y-px bg-gray-200/70">
            {rows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-1 gap-1 bg-white px-6 py-5 md:grid-cols-12 md:items-center md:gap-4 md:px-8"
              >
                <span className="text-[15px] font-semibold text-gray-900 md:col-span-7">{row.name}</span>
                <span className="text-sm font-medium text-gray-500 md:col-span-3">{row.unit}</span>
                <span className="text-[15px] font-extrabold text-gray-900 md:col-span-2 md:text-right">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs font-medium text-gray-500">
          Цены ориентировочные. Точный тариф зависит от объёма, габаритов и регулярности поставок.
        </p>
      </div>
    </section>
  );
}

export default function FulfillmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Фулфилмент для маркетплейсов — 1998 Блестящая история";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Фулфилмент для маркетплейсов и интернет-магазинов: приёмка, хранение, маркировка, комплектация, упаковка и отгрузка FBS и FBO.",
      );
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-foreground antialiased">
      {/* Hero */}
      <section className="relative bg-[oklch(0.93_0.005_260)] px-6 pb-16 pt-28 lg:px-12 lg:pb-24 lg:pt-36">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, oklch(0.98 0.005 260) 0%, oklch(0.93 0.006 260) 60%, oklch(0.88 0.008 260) 100%)",
          }}
        />
        <div className="site-container relative z-10">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            На главную
          </Link>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950 shadow-[0_12px_30px_rgba(17,24,39,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
                Склад в Санкт-Петербурге
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-gray-900 md:text-5xl lg:text-[62px]">
                Фулфилмент для маркетплейсов и интернет-магазинов
              </h1>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-gray-700 lg:text-lg">
                Берём на себя весь путь товара: от приёмки и хранения до маркировки, упаковки и
                отгрузки на склады маркетплейсов.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-[0_20px_50px_rgba(20,24,40,0.10)]">
                <img
                  src={warehouseHero}
                  alt="Современный склад фулфилмента со стеллажами"
                  width={1408}
                  height={1104}
                  className="h-[280px] w-full object-cover md:h-[380px] lg:h-[440px]"
                />
              </div>
            </div>

            <div className="flex lg:col-span-5">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container">
          <header className="mb-10 max-w-2xl space-y-3">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
              Полный комплекс услуг
            </h2>
            <p className="text-base font-light leading-relaxed text-gray-600">
              Все операции фулфилмента на одном складе — без подрядчиков и лишних перемещений товара.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-[1.5rem] border border-white/60 bg-[#f1f3f6] p-6 transition-colors hover:bg-[#eceff4]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-gray-900">{title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PriceTable
        id="fbs"
        title="Стоимость основных FBS-операций"
        subtitle="Отгрузка со своего склада: сборка, упаковка и передача заказов в сортировочные центры."
        rows={fbsRows}
      />

      <PriceTable
        id="fbo"
        title="Стоимость основных FBO-операций"
        subtitle="Подготовка и поставка партий напрямую на склады маркетплейсов."
        rows={fboRows}
      />

      {/* Marketplaces */}
      <section className="bg-white px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container">
          <header className="mb-10 max-w-2xl space-y-3">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
              Работаем с маркетплейсами
            </h2>
            <p className="text-base font-light leading-relaxed text-gray-600">
              Соблюдаем требования каждой площадки к упаковке, маркировке и срокам поставки.
            </p>
          </header>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {marketplaces.map((m) => (
              <div
                key={m.name}
                className="flex h-28 items-center justify-center rounded-[1.5rem] border border-gray-100 bg-white px-5 shadow-[0_10px_30px_rgba(20,24,40,0.05)]"
              >
                {m.logo ? (
                  <img src={m.logo} alt={m.name} loading="lazy" className="max-h-9 w-auto object-contain" />
                ) : (
                  <span className="text-center text-base font-extrabold tracking-tight text-gray-900">
                    {m.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts & warehouse */}
      <section id="warehouse" className="bg-[#f1f3f6] px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container">
          <header className="mb-10 max-w-2xl space-y-3">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
              Контакты и склад
            </h2>
            <p className="text-base font-light leading-relaxed text-gray-600">
              Приезжайте на склад или свяжитесь с нами — покажем процессы и рассчитаем тариф.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              {[
                { icon: MapPin, label: "Адрес склада", value: "Санкт-Петербург, пр. Юрия Гагарина, д. 1, оф. 306" },
                { icon: Phone, label: "Телефон", value: "+7 (812) 329-36-42", href: "tel:+78123293642" },
                { icon: Mail, label: "Email", value: "info@tecos.spb.ru", href: "mailto:info@tecos.spb.ru" },
                { icon: Clock, label: "Режим работы", value: "Пн–Пт 9:00–18:00, приёмка до 17:00" },
                { icon: Warehouse, label: "О складе", value: "2 400 м², отапливаемый, охрана 24/7, видеонаблюдение, зоны приёмки, хранения и упаковки" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 rounded-[1.5rem] border border-white/60 bg-white p-6 shadow-[0_10px_30px_rgba(20,24,40,0.05)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black">
                    <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block text-[15px] font-bold text-gray-900 hover:underline">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[15px] font-medium leading-relaxed text-gray-800">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://yandex.ru/maps/?rtext=~Санкт-Петербург, проспект Юрия Гагарина, 1"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-between gap-2 rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Построить маршрут
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </a>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-[0_10px_40px_rgba(20,24,40,0.06)] lg:col-span-7">
              <iframe
                title="Карта склада"
                src="https://yandex.ru/map-widget/v1/?ll=30.322%2C59.855&z=15&pt=30.322,59.855,pm2rdm"
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[560px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="space-y-3 lg:col-span-4">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
              Частые вопросы
            </h2>
            <p className="text-base font-light leading-relaxed text-gray-600">
              Не нашли ответ? Оставьте заявку — перезвоним в течение 10 минут.
            </p>
          </header>

          <div className="space-y-3 lg:col-span-8">
            {faq.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left lg:px-8"
                    aria-expanded={open}
                  >
                    <span className="text-[16px] font-bold tracking-tight text-gray-900">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-600 transition-transform ${open ? "rotate-180" : ""}`}
                      strokeWidth={1.75}
                    />
                  </button>
                  {open && (
                    <p className="px-6 pb-6 text-sm font-light leading-relaxed text-gray-600 lg:px-8">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
