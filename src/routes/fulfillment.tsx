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
  MessageCircle,
  Package,
  PackageCheck,
  PackageOpen,
  Phone,
  QrCode,
  RotateCcw,
  Ruler,
  ScanBarcode,
  Send,
  Truck,
  Warehouse,
} from "lucide-react";
import warehouseHero from "@/assets/warehouse-hero.jpg";
import logo from "@/assets/logo-1998.png";
import wildberriesLogo from "@/assets/wildberries.gif";
import ozonLogo from "@/assets/ozon.gif";
import yaMarketLogo from "@/assets/ya_market.gif";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#fbs" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#warehouse" },
];

const services = [
  { icon: Truck, title: "Организация забора товара", desc: "Заберём партию с вашего склада или у поставщика по России." },
  { icon: PackageOpen, title: "Приёмка товара", desc: "Разгрузка, пересчёт, идентификация и сверка с документами." },
  { icon: Warehouse, title: "Ответственное хранение", desc: "Стеллажное и паллетное хранение в отапливаемом складе." },
  { icon: QrCode, title: "Маркировка и стикеровка", desc: "Штрихкоды, этикетки площадок, «Честный знак», «Хрупкое»." },
  { icon: Boxes, title: "Комплектация заказов", desc: "Сборка заказов, комплектов, наборов и промо-паков." },
  { icon: Package, title: "Упаковка и переупаковка", desc: "Пакеты, коробки, ВПП — по требованиям каждой площадки." },
  { icon: ClipboardCheck, title: "Проверка качества", desc: "Осмотр товара, выявление брака, фотофиксация приёмки." },
  { icon: Ruler, title: "Обмер и взвешивание", desc: "Точные ВГХ для корректных карточек и тарифов доставки." },
  { icon: PackageCheck, title: "Подготовка FBO-поставок", desc: "Короба, паллетирование, документы и тайм-слоты." },
  { icon: ScanBarcode, title: "Обработка FBS/DBS", desc: "Ежедневная сборка и сдача заказов в сортировочные центры." },
  { icon: RotateCcw, title: "Обработка возвратов", desc: "Приёмка, проверка, переупаковка и возврат в оборот." },
  { icon: Clock, title: "Учёт и отчётность", desc: "Актуальные остатки, отчёт по операциям и прозрачная тарификация." },
];

const fbsRows = [
  { name: "Приёмка товара", price: "от 5 ₽/шт.", desc: "Разгрузка, пересчёт, идентификация и размещение по ячейкам." },
  { name: "Хранение", price: "от 12 ₽/короб в сутки", desc: "Отапливаемый склад, ячеистое хранение, охрана 24/7." },
  { name: "Сборка заказа", price: "от 25 ₽/заказ", desc: "Подбор товара по ячейкам и проверка комплектности." },
  { name: "Упаковка заказа", price: "от 12 ₽/шт.", desc: "Пакет, коробка или ВПП — по требованиям площадки." },
  { name: "Маркировка и стикеровка", price: "от 6 ₽/шт.", desc: "Этикетка маркетплейса, штрихкод, «Честный знак»." },
  { name: "Отгрузка в сортировочный центр", price: "от 900 ₽/отгрузка", desc: "Заказы до 14:00 сдаём в тот же день." },
  { name: "Приёмка возврата", price: "от 20 ₽/шт.", desc: "Осмотр упаковки, распознавание товара, возврат в оборот." },
];

const fboRows = [
  { name: "Приёмка паллеты", price: "от 500 ₽/паллета", desc: "Разгрузка, пересчёт коробов и сверка с поставкой." },
  { name: "Хранение", price: "от 35 ₽/паллета в сутки", desc: "Паллетные места, посуточная тарификация." },
  { name: "Маркировка коробов", price: "от 25 ₽/короб", desc: "Этикетки поставки и транспортные ярлыки." },
  { name: "Комплектация короба", price: "от 90 ₽/короб", desc: "Формирование монокоробов и микс-коробов под требования." },
  { name: "Паллетирование и обмотка", price: "от 350 ₽/паллета", desc: "Сборка, обмотка стрейчем, маркировка паллеты." },
  { name: "Формирование поставки", price: "от 700 ₽/поставка", desc: "Документы, тайм-слот и передача в личном кабинете." },
  { name: "Доставка на склад маркетплейса", price: "от 3 500 ₽/поставка", desc: "Отгрузка на склады WB, Ozon и Яндекс Маркета." },
  { name: "Обмер и взвешивание", price: "бесплатно", desc: "Замер ВГХ каждого нового SKU при первой приёмке." },
];

const marketplaces = [
  { name: "Wildberries", logo: wildberriesLogo },
  { name: "Ozon", logo: ozonLogo },
  { name: "Яндекс Маркет", logo: yaMarketLogo },
  { name: "Магнит Маркет", logo: null },
  { name: "М.Видео", logo: null },
];

const posts = [
  {
    tag: "FBS",
    title: "Как сократить время сборки FBS-заказов",
    desc: "Разбираем, что влияет на скорость отгрузки и как избежать штрафов за просрочку.",
  },
  {
    tag: "Маркировка",
    title: "«Честный знак»: что нужно селлеру в 2026 году",
    desc: "Категории под обязательной маркировкой и порядок ввода кодов в оборот.",
  },
  {
    tag: "FBO",
    title: "Чек-лист подготовки поставки на склад маркетплейса",
    desc: "Требования к коробам, паллетам и документам, из-за которых чаще всего отказывают в приёмке.",
  },
];

const faq = [
  {
    q: "С какого объёма вы работаете?",
    a: "Работаем и с небольшими партиями от 100 единиц, и с регулярными поставками на тысячи SKU. Минимального оборота нет.",
  },
  {
    q: "Как быстро вы обрабатываете FBS-заказы?",
    a: "Заказы, поступившие до 14:00, собираем и сдаём в сортировочный центр в тот же день. Остальные — на следующий рабочий день.",
  },
  {
    q: "Вы работаете с «Честным знаком»?",
    a: "Да. Наносим коды, вводим их в оборот и передаём отчётность по каждой партии.",
  },
  {
    q: "Какие габариты товара вы принимаете?",
    a: "Принимаем товар размером до 120×80×80 см и весом до 50 кг. Крупногабарит согласуем отдельно.",
  },
  {
    q: "Можно ли приехать на склад?",
    a: "Да, склад открыт для клиентов по будням с 9:00 до 18:00 — визит согласуйте заранее по телефону.",
  },
  {
    q: "Как происходит оплата?",
    a: "Работаем по договору с юрлицами и ИП. Оплата по счёту, отчёт по операциям предоставляем ежемесячно.",
  },
  {
    q: "Что с сохранностью товара?",
    a: "Склад охраняется круглосуточно, ведётся видеонаблюдение по всем зонам, товар застрахован.",
  },
];

function LeadForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="w-full rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_60px_rgba(20,24,40,0.10)] backdrop-blur-xl lg:p-8"
    >
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Оставить заявку</h2>
      <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">
        Перезвоним в течение 10 минут и рассчитаем стоимость под ваш ассортимент.
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
          placeholder="Маркетплейсы, объём, задачи"
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
  rows: Array<{ name: string; price: string; desc: string }>;
}) {
  return (
    <section id={id} className="scroll-mt-32 bg-white px-6 py-16 lg:px-12 lg:py-24">
      <div className="site-container">
        <header className="mb-10 max-w-2xl space-y-3">
          <span className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">Тарифы</span>
          <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
            {title}
          </h2>
          <p className="text-base font-light leading-relaxed text-gray-600">{subtitle}</p>
        </header>

        <div className="overflow-hidden rounded-[1.75rem] border border-gray-100 shadow-[0_10px_40px_rgba(20,24,40,0.05)]">
          <div className="hidden grid-cols-12 gap-4 bg-[#f1f3f6] px-8 py-5 text-[11px] font-black uppercase tracking-[0.18em] text-gray-500 md:grid">
            <span className="col-span-4">Операция</span>
            <span className="col-span-5">Что входит</span>
            <span className="col-span-3 text-right">Стоимость</span>
          </div>
          <div className="space-y-px bg-gray-200/70">
            {rows.map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-1 gap-2 bg-white px-6 py-5 md:grid-cols-12 md:items-center md:gap-4 md:px-8"
              >
                <span className="text-[15px] font-extrabold tracking-tight text-gray-900 md:col-span-4">
                  {row.name}
                </span>
                <span className="text-sm font-light leading-relaxed text-gray-600 md:col-span-5">{row.desc}</span>
                <span className="text-[15px] font-extrabold text-gray-900 md:col-span-3 md:text-right">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-5 text-xs font-medium text-gray-500">
          Стоимость операций зависит от габаритов, веса товара и регулярности поставок.
        </p>
      </div>
    </section>
  );
}

export default function FulfillmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "Фулфилмент для маркетплейсов и интернет-магазинов — 1998";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Фулфилмент для маркетплейсов и интернет-магазинов в Санкт-Петербурге: приёмка, хранение, маркировка, комплектация, упаковка, отгрузка FBS и FBO, работа с возвратами.",
      );
    }
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-foreground antialiased">
      {/* Page header per TZ */}
      <div className="sticky top-[72px] z-40 border-b border-white/50 bg-white/80 px-6 py-3 backdrop-blur-xl lg:px-12">
        <div className="site-container flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center" aria-label="1998">
              <img src={logo} alt="1998" className="h-7 w-auto" />
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[13px] font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+78123293642" className="hidden text-[13px] font-bold text-gray-900 md:block">
              +7 (812) 329-36-42
            </a>
            <a
              href="https://wa.me/78123293642"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 transition-colors hover:bg-gray-100"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://t.me/tecos"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 transition-colors hover:bg-gray-100"
            >
              <Send className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="#lead"
              className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-gray-800 sm:inline-flex"
            >
              Оставить заявку
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[oklch(0.93_0.005_260)] px-6 pb-16 pt-12 lg:px-12 lg:pb-24 lg:pt-16">
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
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            На главную
          </Link>

          <span className="inline-flex items-center rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950 shadow-[0_12px_30px_rgba(17,24,39,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
            Собственный склад в Санкт-Петербурге
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.03] tracking-tight text-gray-900 md:text-5xl lg:text-[62px]">
            Фулфилмент для маркетплейсов и интернет-магазинов
          </h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-gray-700 lg:text-lg">
            Работаем по моделям FBO, FBS и DBS: от забора товара и хранения до маркировки, упаковки и
            отгрузки на склады маркетплейсов.
          </p>

          <div id="lead" className="mt-10 grid scroll-mt-32 grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left: warehouse photo */}
            <div className="overflow-hidden rounded-[1.75rem] border border-white/60 bg-white shadow-[0_20px_50px_rgba(20,24,40,0.10)] lg:col-span-7">
              <img
                src={warehouseHero}
                alt="Современный склад фулфилмента со стеллажами"
                width={1408}
                height={1104}
                className="h-[300px] w-full object-cover md:h-[420px] lg:h-full lg:min-h-[540px]"
              />
            </div>

            {/* Right: lead form */}
            <div className="flex lg:col-span-5">
              <LeadForm />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { value: "2 400 м²", label: "площадь склада" },
              { value: "10 минут", label: "время ответа на заявку" },
              { value: "до 14:00", label: "заказы отгружаем сегодня" },
              { value: "24/7", label: "охрана и видеонаблюдение" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-[1.5rem] border border-white/60 bg-white/70 p-5 backdrop-blur-md"
              >
                <p className="text-2xl font-extrabold tracking-tight text-gray-900">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-32 bg-white px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container">
          <header className="mb-10 max-w-2xl space-y-3">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">Услуги</span>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
              Полный комплекс услуг по фулфилменту
            </h2>
            <p className="text-base font-light leading-relaxed text-gray-600">
              Все складские операции в рамках одного договора — без подрядчиков и лишних перемещений товара.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-white/60 bg-[#f1f3f6] p-6 transition-colors hover:bg-[#eceff4]"
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
        subtitle="Хранение и сборка на нашем складе, ежедневная сдача заказов в сортировочные центры."
        rows={fbsRows}
      />

      <PriceTable
        id="fbo"
        title="Стоимость основных FBO-операций"
        subtitle="Подготовка партий и поставка напрямую на склады маркетплейсов."
        rows={fboRows}
      />

      {/* Marketplaces */}
      <section id="marketplaces" className="scroll-mt-32 bg-[#f1f3f6] px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container">
          <header className="mb-10 max-w-2xl space-y-3">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">Каналы продаж</span>
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
                className="flex h-28 items-center justify-center rounded-[1.5rem] border border-white/60 bg-white px-5 shadow-[0_10px_30px_rgba(20,24,40,0.05)]"
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
      <section id="warehouse" className="scroll-mt-32 bg-white px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container">
          <header className="mb-10 max-w-2xl space-y-3">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">Контакты</span>
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
                {
                  icon: Warehouse,
                  label: "О складе",
                  value: "2 400 м², отапливаемый, охрана 24/7, видеонаблюдение, отдельные зоны приёмки, хранения и упаковки",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex gap-4 rounded-[1.5rem] border border-white/60 bg-[#f1f3f6] p-6"
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

            <div className="overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_10px_40px_rgba(20,24,40,0.06)] lg:col-span-7">
              <iframe
                title="Карта склада"
                src="https://yandex.ru/map-widget/v1/?ll=30.322%2C59.855&z=15&pt=30.322,59.855,pm2rdm"
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[620px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="scroll-mt-32 bg-[#f1f3f6] px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container">
          <header className="mb-10 max-w-2xl space-y-3">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">Блог</span>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-5xl">
              Полезное для селлеров
            </h2>
            <p className="text-base font-light leading-relaxed text-gray-600">
              Разбираем требования площадок и делимся складской практикой.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col justify-between rounded-[1.5rem] border border-white/60 bg-white p-6 shadow-[0_10px_30px_rgba(20,24,40,0.05)]"
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">{p.tag}</span>
                  <h3 className="mt-4 text-lg font-extrabold leading-snug tracking-tight text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">{p.desc}</p>
                </div>
                <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.75} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-32 bg-white px-6 py-16 lg:px-12 lg:py-24">
        <div className="site-container grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <header className="space-y-3 lg:col-span-4">
            <span className="text-[11px] font-black uppercase tracking-[0.18em] text-gray-500">FAQ</span>
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
                <div key={item.q} className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6]">
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
                    <p className="px-6 pb-6 text-sm font-light leading-relaxed text-gray-600 lg:px-8">{item.a}</p>
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
