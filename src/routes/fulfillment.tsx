import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import {
  ArrowUpRight,
  Boxes,
  Check,
  ChevronDown,
  ClipboardList,
  Clock,
  Copy,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation as NavigationIcon,
  PackageCheck,
  PackageOpen,
  Phone,
  RotateCcw,
  Ruler,
  ScanBarcode,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  X,
} from "lucide-react";
import { toast } from "sonner";
import warehouseHero from "@/assets/warehouse-hero.jpg";
import logo from "@/assets/logo-1998.png";
import wildberriesLogo from "@/assets/wildberries.gif";
import ozonLogo from "@/assets/ozon.gif";
import yaMarketLogo from "@/assets/ya_market.gif";

const PHONE_DISPLAY = "+7 (812) 329-36-42";
const PHONE_HREF = "tel:+78123293642";
const EMAIL = "info@tecos.spb.ru";
const WHATSAPP = "https://wa.me/78123293642";
const TELEGRAM = "https://t.me/tecos";
const WAREHOUSE_ADDRESS = "Санкт-Петербург, пр. Юрия Гагарина, д. 1, оф. 306";
const WAREHOUSE_COORDS = "59.855,30.322";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#rates" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  { icon: Truck, title: "Забор товара", desc: "Заберём партию у вас, у поставщика или из транспортной компании." },
  { icon: PackageOpen, title: "Приёмка товара", desc: "Разгрузка, пересчёт, сверка с документами и фотофиксация." },
  { icon: ShieldCheck, title: "Проверка качества", desc: "Осмотр каждой единицы, выявление брака и пересорта." },
  { icon: Warehouse, title: "Хранение", desc: "Отапливаемый склад, стеллажные и паллетные места, охрана 24/7." },
  { icon: ScanBarcode, title: "Маркировка", desc: "Штрихкоды, этикетки маркетплейсов, работа с «Честным знаком»." },
  { icon: Ruler, title: "Замеры и фото", desc: "Габариты, вес и карточные фото товара для площадок." },
  { icon: Boxes, title: "Комплектация", desc: "Сборка заказов, наборов, промо-паков и подарочных комплектов." },
  { icon: PackageCheck, title: "Упаковка", desc: "Пакет, коробка, ВПП, стрейч и индивидуальная упаковка." },
  { icon: Sparkles, title: "Дополнительные работы", desc: "Вкладыши, бирки, стикеровка, чистка и переупаковка." },
  { icon: ClipboardList, title: "Подготовка поставки", desc: "Формирование коробов и паллет по требованиям площадки." },
  { icon: Truck, title: "Отгрузка", desc: "Доставка на склады и в сортировочные центры маркетплейсов." },
  { icon: RotateCcw, title: "Работа с возвратами", desc: "Приёмка, проверка, переупаковка и возврат товара в оборот." },
];

const fbsRows: [string, string, string][] = [
  ["Приёмка товара", "Разгрузка, пересчёт и размещение на складе", "от 5 ₽ / шт."],
  ["Хранение", "Стеллажное хранение, охрана и видеонаблюдение", "от 12 ₽ / короб в сутки"],
  ["Сборка заказа", "Подбор позиций и проверка комплектности", "от 25 ₽ / заказ"],
  ["Упаковка заказа", "Пакет, коробка или воздушно-пузырчатая плёнка", "от 12 ₽ / шт."],
  ["Маркировка", "Этикетка маркетплейса и штрихкод товара", "от 6 ₽ / шт."],
  ["Отгрузка заказов", "Ежедневная сдача в сортировочный центр", "от 900 ₽ / отгрузка"],
  ["Обработка возврата", "Приёмка, проверка и возврат в продажу", "от 20 ₽ / шт."],
];

const fboRows: [string, string, string][] = [
  ["Приёмка поставки", "Разгрузка паллеты и сверка с документами", "от 500 ₽ / паллета"],
  ["Хранение", "Паллетное место на отапливаемом складе", "от 35 ₽ / сутки"],
  ["Маркировка коробов", "Транспортные ярлыки и штрихкоды поставки", "от 25 ₽ / короб"],
  ["Комплектация коробов", "Моно-короба и микс-короба по требованиям", "от 90 ₽ / короб"],
  ["Паллетирование", "Сборка, обмотка стрейчем и маркировка паллеты", "от 350 ₽ / паллета"],
  ["Оформление поставки", "Создание поставки в личном кабинете площадки", "от 700 ₽ / поставка"],
  ["Доставка на склад МП", "Доставка на склад выбранного маркетплейса", "от 3 500 ₽ / рейс"],
];

const marketplaces = [
  { name: "Wildberries", logo: wildberriesLogo },
  { name: "Ozon", logo: ozonLogo },
  { name: "Яндекс Маркет", logo: yaMarketLogo },
  { name: "Магнит Маркет", logo: null },
  { name: "М.Видео", logo: null },
];

const warehouseFacts: [string, string][] = [
  ["2 400 м²", "Общая площадь склада"],
  ["Отапливаемый", "Стабильная температура круглый год"],
  ["24/7", "Охрана и видеонаблюдение"],
  ["Стеллажи и паллеты", "Два формата хранения"],
  ["Пандус и погрузчик", "Приём фур и малотоннажного транспорта"],
  ["Доступ клиента", "Пн–Пт по предварительной записи"],
];

const blogPosts: [string, string, string][] = [
  ["Как выбрать фулфилмент", "5 критериев, по которым селлеры выбирают склад и не жалеют.", "7 мин"],
  ["FBO или FBS: что выгоднее", "Сравниваем схемы работы по срокам, деньгам и рискам.", "6 мин"],
  ["Готовим поставку без штрафов", "Чек-лист требований Wildberries и Ozon к упаковке и маркировке.", "5 мин"],
];

const faq: [string, string][] = [
  ["С какого объёма вы работаете?", "Работаем с партиями от 100 единиц и с регулярными поставками на тысячи SKU. Минимального оборота нет."],
  ["Как быстро обрабатываются FBS-заказы?", "Заказы, поступившие до 14:00, собираем и сдаём в сортировочный центр в тот же день."],
  ["Вы работаете с «Честным знаком»?", "Да. Наносим коды маркировки, вводим их в оборот и передаём отчётность по каждой партии."],
  ["Можно ли приехать на склад?", "Да, склад открыт для клиентов по будням с 9:00 до 18:00. Визит согласуем заранее."],
  ["Как считается хранение?", "Посуточно: по коробам для FBS и по паллетным местам для FBO. Отчёт по остаткам — в конце месяца."],
  ["Что с сохранностью товара?", "Склад под круглосуточной охраной и видеонаблюдением, все операции фиксируются."],
];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80, "Не более 80 символов"),
  phone: z.string().trim().regex(/^\+?[\d\s()\-]{10,20}$/, "Введите корректный телефон"),
  comment: z.string().trim().max(500, "Не более 500 символов"),
});

type LeadErrors = Partial<Record<"name" | "phone" | "comment", string>>;

const inputClass =
  "h-12 w-full rounded-full border border-gray-200 bg-white px-5 text-[15px] font-medium text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900";

function LeadForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = { comment: "", ...Object.fromEntries(new FormData(event.currentTarget)) };
    const result = leadSchema.safeParse(data);
    if (!result.success) {
      const next: LeadErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field === "name" || field === "phone" || field === "comment") next[field] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Заявка отправлена — перезвоним в течение 10 минут");
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-3" aria-label="Форма заявки на фулфилмент">
      <div>
        <input name="name" maxLength={80} placeholder="Ваше имя" className={inputClass} />
        {errors.name && <p className="mt-1.5 px-5 text-xs font-medium text-red-600">{errors.name}</p>}
      </div>
      <div>
        <input name="phone" type="tel" maxLength={20} placeholder="+7 999 000-00-00" className={inputClass} />
        {errors.phone && <p className="mt-1.5 px-5 text-xs font-medium text-red-600">{errors.phone}</p>}
      </div>
      <div>
        <textarea
          name="comment"
          maxLength={500}
          rows={3}
          placeholder="Маркетплейсы, объём, задача"
          className="w-full resize-none rounded-[1.25rem] border border-gray-200 bg-white px-5 py-3.5 text-[15px] font-medium text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-900"
        />
        {errors.comment && <p className="mt-1.5 px-5 text-xs font-medium text-red-600">{errors.comment}</p>}
      </div>
      <button
        type="submit"
        className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-[14px] font-semibold text-white transition-colors hover:bg-gray-800"
      >
        {sent ? (
          <>
            Заявка принята <Check className="h-4 w-4" strokeWidth={1.75} />
          </>
        ) : (
          <>
            Оставить заявку
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </>
        )}
      </button>
      <p className="px-5 text-[11px] leading-relaxed text-gray-500">
        Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
      </p>
    </form>
  );
}

function SectionShell({
  id,
  children,
  tone = "gray",
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "gray" | "white";
  className?: string;
}) {
  if (tone === "white") {
    return (
      <section id={id} className={`scroll-mt-24 bg-white px-6 py-16 lg:px-12 lg:py-24 ${className}`}>
        <div className="site-container">{children}</div>
      </section>
    );
  }
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden bg-[oklch(0.93_0.005_260)] px-6 py-16 lg:px-12 lg:py-24 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, oklch(0.97 0.005 260) 0%, oklch(0.92 0.006 260) 55%, oklch(0.86 0.008 260) 100%)",
        }}
      />
      <div className="site-container relative z-10">{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl space-y-3">
      <span className="inline-flex items-center rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950 shadow-[0_12px_30px_rgba(17,24,39,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">{text}</p>}
    </div>
  );
}

function RateTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/70 backdrop-blur-md">
      <div className="hidden grid-cols-12 gap-4 border-b border-gray-100 bg-white px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 md:grid">
        <span className="col-span-4">Операция</span>
        <span className="col-span-5">Что входит</span>
        <span className="col-span-3 text-right">Стоимость</span>
      </div>
      {rows.map(([name, desc, price]) => (
        <div key={name} className="grid gap-1 border-b border-gray-100 px-6 py-5 last:border-b-0 md:grid-cols-12 md:items-center md:gap-4">
          <h3 className="text-[15px] font-extrabold tracking-tight text-gray-900 md:col-span-4">{name}</h3>
          <p className="text-sm font-light leading-relaxed text-gray-600 md:col-span-5">{desc}</p>
          <p className="mt-1 text-[15px] font-bold text-gray-900 md:col-span-3 md:mt-0 md:text-right">{price}</p>
        </div>
      ))}
    </div>
  );
}

export default function FulfillmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Фулфилмент для маркетплейсов в Санкт-Петербурге — 1998";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Фулфилмент для маркетплейсов и интернет-магазинов: приёмка, хранение, маркировка, упаковка, отгрузка FBS и FBO. Собственный склад в Санкт-Петербурге.",
      );
  }, []);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(WAREHOUSE_ADDRESS);
      toast.success("Адрес скопирован");
    } catch {
      toast.error("Не удалось скопировать адрес");
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 px-6 py-3 backdrop-blur-xl md:px-8 lg:px-12">
        <div className="site-container flex items-center justify-between gap-4">
          <Link to="/" aria-label="1998 — главная" className="flex items-center">
            <img src={logo} alt="1998" className="h-9 w-auto md:h-11" />
          </Link>

          <nav className="relative hidden items-center gap-1 rounded-full bg-gray-200/50 p-1 backdrop-blur-md lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-5 py-2 text-[13px] font-medium text-gray-700 transition-colors hover:bg-white/80 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={PHONE_HREF} className="text-[13px] font-semibold text-gray-900 hover:text-black">
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Telegram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
            >
              <Send className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="#lead"
              className="group inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-gray-800"
            >
              Оставить заявку
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black backdrop-blur md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 space-y-1 rounded-2xl border border-white/85 bg-white/95 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.14)] backdrop-blur-xl md:hidden">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-gray-800 hover:bg-gray-100"
              >
                {item.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="block rounded-xl px-3 py-2.5 text-[15px] font-semibold text-gray-900">
              {PHONE_DISPLAY}
            </a>
            <a
              href="#lead"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-[14px] font-semibold text-white"
            >
              Оставить заявку <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <SectionShell id="lead" className="pt-12 lg:pt-16">
        <div className="grid items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center rounded-full border border-white/70 bg-white/45 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950 shadow-[0_12px_30px_rgba(17,24,39,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
                Собственный склад · Санкт-Петербург
              </span>
              <h1 className="text-3xl font-extrabold leading-[1.03] tracking-tight text-gray-900 md:text-5xl lg:text-[3.5rem]">
                Фулфилмент для маркетплейсов и интернет-магазинов
              </h1>
              <p className="max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">
                Приёмка, хранение, маркировка, упаковка и отгрузка на Wildberries, Ozon и Яндекс Маркет.
                Полный цикл работы с товаром на собственном складе.
              </p>
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.5rem] shadow-[0_20px_60px_rgba(20,24,40,0.12)]">
              <img
                src={warehouseHero}
                alt="Современный склад фулфилмента со стеллажами"
                width={1408}
                height={1104}
                className="h-[260px] w-full object-cover md:h-[380px] lg:h-[420px]"
              />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                ["2 400 м²", "площадь склада"],
                ["10 минут", "ответ на заявку"],
                ["24/7", "охрана и контроль"],
                ["99,9%", "точность сборки"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.25rem] border border-white/60 bg-white/60 p-4 backdrop-blur-md">
                  <p className="text-lg font-extrabold tracking-tight text-gray-900 md:text-xl">{value}</p>
                  <p className="mt-0.5 text-xs font-medium text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[1.75rem] border border-white/60 bg-white/80 p-6 shadow-[0_30px_60px_rgba(20,24,40,0.1)] backdrop-blur-md lg:sticky lg:top-24 lg:p-8">
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-3xl">
                Оставьте заявку
              </h2>
              <p className="mt-2 text-sm font-light leading-relaxed text-gray-700">
                Перезвоним в течение 10 минут, уточним задачу и подготовим расчёт под ваш ассортимент.
              </p>
              <div className="mt-5">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Полный комплекс услуг */}
      <SectionShell id="services" tone="white">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950">
            Услуги
          </span>
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Полный комплекс услуг
          </h2>
          <p className="max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">
            Берём на себя все операции с товаром — от забора у поставщика до обработки возвратов.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6] p-6 transition-colors hover:border-gray-200"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black">
                <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 text-lg font-extrabold tracking-tight text-gray-900">{title}</h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">{desc}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* Тарифы FBS */}
      <SectionShell id="rates">
        <SectionHead
          eyebrow="Тарифы"
          title="Стоимость основных FBS-операций"
          text="Схема, при которой товар хранится у нас, а заказы собираются и отгружаются ежедневно."
        />
        <div className="mt-8 lg:mt-10">
          <RateTable rows={fbsRows} />
        </div>
      </SectionShell>

      {/* Тарифы FBO */}
      <SectionShell tone="white">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950">
            Тарифы
          </span>
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Стоимость основных FBO-операций
          </h2>
          <p className="max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">
            Подготовка и отправка крупных поставок на склады маркетплейсов по их требованиям.
          </p>
        </div>
        <div className="mt-8 lg:mt-10">
          <div className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6]">
            <div className="hidden grid-cols-12 gap-4 border-b border-gray-200 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 md:grid">
              <span className="col-span-4">Операция</span>
              <span className="col-span-5">Что входит</span>
              <span className="col-span-3 text-right">Стоимость</span>
            </div>
            {fboRows.map(([name, desc, price]) => (
              <div key={name} className="grid gap-1 border-b border-gray-200 px-6 py-5 last:border-b-0 md:grid-cols-12 md:items-center md:gap-4">
                <h3 className="text-[15px] font-extrabold tracking-tight text-gray-900 md:col-span-4">{name}</h3>
                <p className="text-sm font-light leading-relaxed text-gray-600 md:col-span-5">{desc}</p>
                <p className="mt-1 text-[15px] font-bold text-gray-900 md:col-span-3 md:mt-0 md:text-right">{price}</p>
              </div>
            ))}
          </div>
          <a
            href="#lead"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Получить точный расчёт
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
          </a>
        </div>
      </SectionShell>

      {/* Маркетплейсы */}
      <SectionShell>
        <SectionHead eyebrow="Площадки" title="Работаем с маркетплейсами" />
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-10 lg:grid-cols-5">
          {marketplaces.map((item) => (
            <div
              key={item.name}
              className="flex h-24 items-center justify-center rounded-[1.25rem] border border-white/60 bg-white/70 px-4 backdrop-blur-md"
            >
              {item.logo ? (
                <img src={item.logo} alt={item.name} loading="lazy" className="max-h-9 max-w-[80%] object-contain" />
              ) : (
                <span className="text-center text-base font-extrabold tracking-tight text-gray-900">{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </SectionShell>

      {/* Контакты и склад */}
      <SectionShell id="contacts" tone="white">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950">
            Контакты
          </span>
          <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Контакты и склад
          </h2>
          <p className="max-w-xl text-sm font-light leading-relaxed text-gray-700 lg:text-base">
            Приезжайте — покажем зоны приёмки, хранения и упаковки и разберём ваши процессы на месте.
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-gray-100 shadow-[0_30px_60px_rgba(20,24,40,0.08)] lg:mt-10">
          <iframe
            title="Карта склада 1998"
            src="https://yandex.ru/map-widget/v1/?ll=30.322%2C59.855&z=16&pt=30.322,59.855,pm2rdm"
            className="block h-[320px] w-full border-0 lg:h-[520px]"
            loading="lazy"
          />
          <div className="border-t border-gray-100 bg-white p-6 lg:absolute lg:bottom-6 lg:left-6 lg:max-w-md lg:rounded-[1.5rem] lg:border lg:p-7 lg:shadow-[0_24px_60px_rgba(20,24,40,0.16)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Адрес склада</p>
            <p className="mt-3 flex items-start gap-3 text-[17px] font-extrabold leading-snug tracking-tight text-gray-900">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gray-900" strokeWidth={1.75} />
              {WAREHOUSE_ADDRESS}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://yandex.ru/maps/?rtext=~${WAREHOUSE_COORDS}&rtt=auto`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-gray-800"
              >
                <NavigationIcon className="h-4 w-4" strokeWidth={1.75} />
                Построить маршрут
              </a>
              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-[14px] font-semibold text-gray-900 transition-colors hover:bg-gray-100"
              >
                <Copy className="h-4 w-4" strokeWidth={1.75} />
                Скопировать
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href={PHONE_HREF} className="group rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6] p-6 transition-colors hover:border-gray-200">
            <Phone className="h-5 w-5 text-gray-900" strokeWidth={1.75} />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Телефон</p>
            <p className="mt-1.5 text-lg font-extrabold tracking-tight text-gray-900">{PHONE_DISPLAY}</p>
          </a>
          <a href={`mailto:${EMAIL}`} className="group rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6] p-6 transition-colors hover:border-gray-200">
            <Mail className="h-5 w-5 text-gray-900" strokeWidth={1.75} />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Почта</p>
            <p className="mt-1.5 break-all text-lg font-extrabold tracking-tight text-gray-900">{EMAIL}</p>
          </a>
          <div className="rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6] p-6">
            <Clock className="h-5 w-5 text-gray-900" strokeWidth={1.75} />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Режим работы</p>
            <p className="mt-1.5 text-lg font-extrabold tracking-tight text-gray-900">Пн–Пт, 9:00–18:00</p>
            <p className="mt-1 text-xs font-medium text-gray-600">Приём фур — по согласованию</p>
          </div>
          <div className="rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6] p-6">
            <MessageCircle className="h-5 w-5 text-gray-900" strokeWidth={1.75} />
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Мессенджеры</p>
            <div className="mt-3 flex gap-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Telegram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
              >
                <Send className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-gray-100 bg-[#f1f3f6] p-6 lg:p-10">
          <h3 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-3xl">О складе</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {warehouseFacts.map(([value, label]) => (
              <div key={value} className="rounded-[1.25rem] bg-white p-5">
                <p className="text-lg font-extrabold tracking-tight text-gray-900">{value}</p>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* Блог */}
      <SectionShell id="blog">
        <SectionHead eyebrow="Блог" title="Полезное для селлеров" text="Разбираем работу с маркетплейсами простым языком." />
        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10">
          {blogPosts.map(([title, desc, time]) => (
            <article
              key={title}
              className="group flex flex-col justify-between rounded-[1.5rem] border border-white/60 bg-white/70 p-6 backdrop-blur-md transition-colors hover:bg-white"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">{time} чтения</p>
                <h3 className="mt-3 text-xl font-extrabold leading-tight tracking-tight text-gray-900">{title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-gray-600">{desc}</p>
              </div>
              <div className="mt-6 flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4 text-white" strokeWidth={1.75} />
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* FAQ */}
      <SectionShell id="faq" tone="white">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-950">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
              Частые вопросы
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-[1.5rem] border border-gray-100 bg-[#f1f3f6]">
              {faq.map(([question, answer], index) => {
                const open = openFaq === index;
                return (
                  <div key={question} className="border-b border-gray-200 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-[15px] font-extrabold tracking-tight text-gray-900 md:text-base">{question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={1.75} />
                    </button>
                    {open && <p className="px-6 pb-5 text-sm font-light leading-relaxed text-gray-600">{answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
