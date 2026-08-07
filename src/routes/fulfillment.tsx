import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChevronDown,
  Clock,
  Copy,
  Mail,
  MapPin,
  Navigation as NavigationIcon,
  Menu,
  MessageCircle,
  PackageCheck,
  PackageOpen,
  Phone,
  RotateCcw,
  ScanBarcode,
  Send,
  ShieldCheck,
  Truck,
  Warehouse,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouseHero from "@/assets/warehouse-hero.jpg";
import logo from "@/assets/logo-1998.png";
import wildberriesLogo from "@/assets/wildberries.gif";
import ozonLogo from "@/assets/ozon.gif";
import yaMarketLogo from "@/assets/ya_market.gif";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#rates" },
  { label: "Склад", href: "#warehouse" },
  { label: "FAQ", href: "#faq" },
];

const services = [
  { icon: Truck, no: "01", title: "Забор товара", desc: "Заберём партию со склада или у поставщика по России." },
  { icon: PackageOpen, no: "02", title: "Приёмка", desc: "Разгрузка, пересчёт, идентификация и сверка с документами." },
  { icon: Warehouse, no: "03", title: "Хранение", desc: "Стеллажное и паллетное хранение в отапливаемом складе." },
  { icon: ScanBarcode, no: "04", title: "Маркировка", desc: "Штрихкоды, этикетки площадок и работа с «Честным знаком»." },
  { icon: Boxes, no: "05", title: "Комплектация", desc: "Сборка заказов, наборов и промо-паков без пересорта." },
  { icon: PackageCheck, no: "06", title: "FBO / FBS", desc: "Подготовка поставок и ежедневная сдача заказов." },
  { icon: ShieldCheck, no: "07", title: "Контроль качества", desc: "Осмотр, выявление брака и фотофиксация приёмки." },
  { icon: RotateCcw, no: "08", title: "Возвраты", desc: "Проверка, переупаковка и быстрый возврат товара в оборот." },
];

const fbsRows = [
  ["Приёмка товара", "Разгрузка, пересчёт и размещение", "от 5 ₽/шт."],
  ["Хранение", "Отапливаемый склад, охрана 24/7", "от 12 ₽/короб"],
  ["Сборка заказа", "Подбор и проверка комплектности", "от 25 ₽/заказ"],
  ["Упаковка", "Пакет, коробка или ВПП", "от 12 ₽/шт."],
  ["Маркировка", "Этикетка площадки и штрихкод", "от 6 ₽/шт."],
  ["Отгрузка", "Сдача заказов в сортировочный центр", "от 900 ₽"],
];

const fboRows = [
  ["Приёмка паллеты", "Разгрузка и сверка поставки", "от 500 ₽"],
  ["Хранение", "Паллетное место, посуточно", "от 35 ₽/сутки"],
  ["Маркировка коробов", "Транспортные ярлыки поставки", "от 25 ₽/короб"],
  ["Комплектация", "Моно- и микс-короба", "от 90 ₽/короб"],
  ["Паллетирование", "Сборка, обмотка и маркировка", "от 350 ₽"],
  ["Доставка", "На склад выбранного маркетплейса", "от 3 500 ₽"],
];

const faq = [
  ["С какого объёма вы работаете?", "Работаем с партиями от 100 единиц и регулярными поставками на тысячи SKU. Минимального оборота нет."],
  ["Как быстро обрабатываются FBS-заказы?", "Заказы до 14:00 собираем и сдаём в сортировочный центр в тот же день."],
  ["Вы работаете с «Честным знаком»?", "Да. Наносим коды, вводим их в оборот и передаём отчётность по каждой партии."],
  ["Можно ли приехать на склад?", "Да, склад открыт для клиентов по будням с 9:00 до 18:00. Визит согласуем заранее."],
  ["Что с сохранностью товара?", "Склад охраняется круглосуточно, все зоны находятся под видеонаблюдением, товар застрахован."],
];

const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80, "Не более 80 символов"),
  phone: z.string().trim().regex(/^\+?[\d\s()\-]{10,20}$/, "Введите корректный телефон"),
  comment: z.string().trim().max(500, "Не более 500 символов"),
});

type LeadErrors = Partial<Record<"name" | "phone" | "comment", string>>;

function LeadForm({ compact = false }: { compact?: boolean }) {
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
  }

  const fields = compact ? "grid gap-3 md:grid-cols-2" : "grid gap-4";
  return (
    <form onSubmit={submit} noValidate className="flex h-full flex-col" aria-label="Форма расчёта стоимости">
      <div className={fields}>
        <label className="grid gap-1.5 text-xs font-bold uppercase text-muted-foreground">
          Имя
          <input name="name" maxLength={80} placeholder="Александр" className="h-12 border-b bg-transparent px-0 text-base font-medium normal-case text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary" />
          {errors.name && <span className="normal-case text-destructive">{errors.name}</span>}
        </label>
        <label className="grid gap-1.5 text-xs font-bold uppercase text-muted-foreground">
          Телефон
          <input name="phone" type="tel" maxLength={20} placeholder="+7 999 000-00-00" className="h-12 border-b bg-transparent px-0 text-base font-medium normal-case text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary" />
          {errors.phone && <span className="normal-case text-destructive">{errors.phone}</span>}
        </label>
        {!compact && (
          <label className="grid gap-1.5 text-xs font-bold uppercase text-muted-foreground">
            Задача
            <textarea name="comment" maxLength={500} rows={3} placeholder="Маркетплейсы, объём, задачи" className="resize-none border-b bg-transparent px-0 py-3 text-base font-medium normal-case text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary" />
            {errors.comment && <span className="normal-case text-destructive">{errors.comment}</span>}
          </label>
        )}
      </div>
      <Button type="submit" size="lg" className="mt-6 h-14 w-full justify-between rounded-none px-6 text-sm font-bold">
        {sent ? <><span>Заявка принята</span><Check /></> : <><span>Получить расчёт</span><ArrowUpRight /></>}
      </Button>
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</p>
    </form>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase text-primary before:h-px before:w-8 before:bg-primary">{children}</p>;
}

const WAREHOUSE_ADDRESS = "Санкт-Петербург, пр. Юрия Гагарина, д. 1, оф. 306";
const WAREHOUSE_COORDS = "59.855,30.322";

const warehouseFacts: [string, string][] = [
  ["2 400 м²", "Общая площадь склада"],
  ["Отапливаемый", "Стабильная температура круглый год"],
  ["24/7", "Охрана и видеонаблюдение"],
  ["Стеллажи и паллеты", "Два формата хранения"],
  ["Пандус и погрузчик", "Приём фур и малотоннажного транспорта"],
  ["Доступ клиента", "Пн–Пт по предварительной записи"],
];

function WarehouseSection() {
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(WAREHOUSE_ADDRESS);
      toast.success("Адрес скопирован");
    } catch {
      toast.error("Не удалось скопировать адрес");
    }
  };

  return (
    <section id="warehouse" className="scroll-mt-20 px-5 py-20 lg:px-0 lg:py-28">
      <div className="site-container">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel>Контакты и склад</SectionLabel>
            <h2 className="text-4xl font-bold leading-none md:text-6xl">Собственный склад<br />в Петербурге</h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5">
            Приезжайте — покажем зоны приёмки, хранения и упаковки, разберём ваши процессы на месте.
          </p>
        </div>

        <div className="relative mt-12 border">
          <iframe
            title="Карта склада 1998"
            src={`https://yandex.ru/map-widget/v1/?ll=30.322%2C59.855&z=16&pt=30.322,59.855,pm2rdm`}
            className="block h-[360px] w-full border-0 lg:h-[520px]"
            loading="lazy"
          />
          <div className="border-t bg-background p-6 lg:absolute lg:bottom-8 lg:left-8 lg:max-w-md lg:border lg:p-8 lg:shadow-[0_24px_60px_rgba(20,24,40,0.14)]">
            <p className="text-xs font-bold uppercase text-primary">Адрес склада</p>
            <p className="mt-3 flex items-start gap-3 text-lg font-bold leading-snug">
              <MapPin className="mt-1 shrink-0 text-primary" />
              {WAREHOUSE_ADDRESS}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 flex-1 rounded-none">
                <a
                  href={`https://yandex.ru/maps/?rtext=~${WAREHOUSE_COORDS}&rtt=auto`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Navigation /> Построить маршрут
                </a>
              </Button>
              <Button type="button" onClick={copyAddress} variant="outline" size="lg" className="h-12 rounded-none shadow-none">
                <Copy /> Скопировать
              </Button>
            </div>
          </div>
        </div>

        <div className="grid border-x border-t sm:grid-cols-2 lg:grid-cols-4">
          <a href="tel:+78123293642" className="group border-b p-6 transition-colors hover:bg-secondary sm:border-r lg:p-8">
            <Phone className="text-primary" strokeWidth={1.5} />
            <p className="mt-6 text-xs font-bold uppercase text-muted-foreground">Телефон</p>
            <p className="mt-2 text-xl font-bold group-hover:text-primary">+7 (812) 329-36-42</p>
          </a>
          <a href="mailto:info@tecos.spb.ru" className="group border-b p-6 transition-colors hover:bg-secondary lg:border-r lg:p-8">
            <Mail className="text-primary" strokeWidth={1.5} />
            <p className="mt-6 text-xs font-bold uppercase text-muted-foreground">Почта</p>
            <p className="mt-2 break-all text-xl font-bold group-hover:text-primary">info@tecos.spb.ru</p>
          </a>
          <div className="border-b p-6 sm:border-r lg:p-8">
            <Clock className="text-primary" strokeWidth={1.5} />
            <p className="mt-6 text-xs font-bold uppercase text-muted-foreground">Режим работы</p>
            <p className="mt-2 text-xl font-bold">Пн–Пт, 9:00–18:00</p>
            <p className="mt-1 text-sm text-muted-foreground">Приём фур — по согласованию</p>
          </div>
          <div className="border-b p-6 lg:p-8">
            <MessageCircle className="text-primary" strokeWidth={1.5} />
            <p className="mt-6 text-xs font-bold uppercase text-muted-foreground">Мессенджеры</p>
            <div className="mt-3 flex gap-3">
              <Button asChild variant="outline" size="icon" className="h-11 w-11 rounded-none shadow-none">
                <a href="https://wa.me/78123293642" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp"><MessageCircle /></a>
              </Button>
              <Button asChild variant="outline" size="icon" className="h-11 w-11 rounded-none shadow-none">
                <a href="https://t.me/tecos" target="_blank" rel="noreferrer noopener" aria-label="Telegram"><Send /></a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>О складе</SectionLabel>
            <h3 className="text-3xl font-bold leading-none md:text-4xl">Что внутри</h3>
          </div>
          <div className="grid border-t sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {warehouseFacts.map(([value, label]) => (
              <div key={value} className="border-b py-6 pr-6 sm:pl-6 sm:[&:nth-child(odd)]:pl-0 lg:pl-6 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(odd)]:pl-6">
                <p className="text-xl font-bold leading-tight">{value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



export default function FulfillmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rate, setRate] = useState<"fbs" | "fbo">("fbs");
  const [openFaq, setOpenFaq] = useState(0);
  const rateRows = rate === "fbs" ? fbsRows : fboRows;

  useEffect(() => {
    document.title = "Фулфилмент для маркетплейсов — 1998";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Фулфилмент для маркетплейсов в Санкт-Петербурге: приёмка, хранение, маркировка, упаковка и отгрузка FBS и FBO.");
  }, []);

  return (
    <div className="fulfillment-page overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
        <div className="site-container flex h-16 items-center justify-between gap-6 px-5 lg:px-0">
          <div className="flex items-center gap-10">
            <Link to="/" aria-label="1998 — главная"><img src={logo} alt="1998" className="h-7 w-auto" /></Link>
            <nav className="hidden items-center gap-7 lg:flex" aria-label="Навигация страницы">
              {navLinks.map((item) => <a key={item.href} href={item.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>)}
            </nav>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <a href="tel:+78123293642" className="text-sm font-bold">+7 (812) 329-36-42</a>
            <Button asChild size="lg" className="rounded-none"><a href="#lead">Рассчитать стоимость <ArrowUpRight /></a></Button>
          </div>
          <Button type="button" variant="ghost" size="icon" className="md:hidden" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="grid border-t bg-background px-5 py-4 md:hidden">{navLinks.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b py-3 text-base font-bold">{item.label}</a>)}<a href="tel:+78123293642" className="pt-4 text-base font-bold text-primary">+7 (812) 329-36-42</a></nav>}
      </header>

      <main>
        <section className="relative px-5 pb-16 pt-8 lg:px-0 lg:pb-24 lg:pt-12">
          <div className="site-container">
            <div className="mb-8 flex items-center justify-between border-b pb-5 text-sm">
              <Link to="/" className="inline-flex items-center gap-2 font-semibold text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> На главную</Link>
              <span className="hidden font-bold uppercase text-muted-foreground md:block">Собственный склад · Санкт-Петербург</span>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-0">
              <div className="relative z-10 lg:col-span-7 lg:pr-10">
                <SectionLabel>Marketplace fulfillment</SectionLabel>
                <h1 className="max-w-4xl text-[clamp(3rem,6.2vw,6.7rem)] font-bold leading-[0.88] tracking-normal">Ваш склад<br /><span className="text-primary">на автопилоте.</span></h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">Полный цикл логистики для Wildberries, Ozon и Яндекс Маркета — от приёмки до отгрузки за 24 часа.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="h-14 rounded-none px-7"><a href="#lead">Рассчитать стоимость <ArrowRight /></a></Button>
                  <Button asChild variant="outline" size="lg" className="h-14 rounded-none px-7 shadow-none"><a href="#services">Все услуги</a></Button>
                </div>
              </div>

              <div className="relative lg:col-span-5 lg:mt-8">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={warehouseHero} alt="Современный склад фулфилмента 1998" width={1408} height={1104} className="h-full w-full object-cover" />
                </div>
                <div className="absolute -bottom-7 -left-8 hidden w-52 bg-primary p-5 text-primary-foreground lg:block">
                  <p className="text-3xl font-bold">до 14:00</p><p className="mt-1 text-xs font-bold uppercase opacity-80">сдадим заказ сегодня</p>
                </div>
              </div>
            </div>

            <div className="mt-14 grid border-y sm:grid-cols-2 lg:grid-cols-4">
              {[["2 400 м²", "площадь склада"], ["10 минут", "ответ на заявку"], ["24/7", "охрана и контроль"], ["99,9%", "точность сборки"]].map(([value, label], index) => (
                <div key={label} className={`py-5 sm:px-5 ${index > 0 ? "sm:border-l" : ""}`}><p className="text-2xl font-bold">{value}</p><p className="mt-1 text-xs font-bold uppercase text-muted-foreground">{label}</p></div>
              ))}
            </div>

            <div id="lead" className="mt-16 grid scroll-mt-28 border bg-background lg:grid-cols-12">
              <div className="border-b p-7 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-10"><SectionLabel>Быстрый расчёт</SectionLabel><h2 className="text-3xl font-bold leading-tight lg:text-4xl">Расскажите о задаче — ответим за 10 минут</h2><p className="mt-4 max-w-md text-muted-foreground">Подберём схему работы и посчитаем стоимость под ваш ассортимент.</p></div>
              <div className="p-7 lg:col-span-7 lg:p-10"><LeadForm compact /></div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-secondary px-5 py-20 lg:px-0 lg:py-28">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-5"><SectionLabel>Полный цикл</SectionLabel><h2 className="text-4xl font-bold leading-none md:text-6xl">Один склад.<br />Все операции.</h2></div><p className="max-w-xl self-end text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">Берём на себя физическую работу с товаром, чтобы вы управляли продажами, а не коробками.</p></div>
            <div className="mt-14 grid border-l border-t md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, no, title, desc }, index) => <article key={title} className={`group min-h-64 border-b border-r p-6 transition-colors hover:bg-background ${index === 0 || index === 5 ? "lg:col-span-2" : ""}`}><div className="flex items-start justify-between"><span className="text-xs font-bold text-muted-foreground">/{no}</span><Icon className="h-6 w-6 text-primary" strokeWidth={1.5} /></div><h3 className="mt-16 text-2xl font-bold">{title}</h3><p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">{desc}</p></article>)}
            </div>
          </div>
        </section>

        <section id="rates" className="scroll-mt-20 px-5 py-20 lg:px-0 lg:py-28">
          <div className="site-container grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4"><div className="lg:sticky lg:top-28"><SectionLabel>Тарифы</SectionLabel><h2 className="text-4xl font-bold leading-none md:text-6xl">Прозрачно,<br />по операциям</h2><p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">Финальная стоимость зависит от габаритов, веса и регулярности поставок.</p><div className="mt-8 flex border p-1"><Button type="button" onClick={() => setRate("fbs")} variant={rate === "fbs" ? "default" : "ghost"} className="h-11 flex-1 rounded-none shadow-none">FBS</Button><Button type="button" onClick={() => setRate("fbo")} variant={rate === "fbo" ? "default" : "ghost"} className="h-11 flex-1 rounded-none shadow-none">FBO</Button></div></div></div>
            <div className="lg:col-span-7 lg:col-start-6"><div className="border-t">{rateRows.map(([name, desc, price], index) => <div key={name} className="grid gap-2 border-b py-6 md:grid-cols-12 md:items-center"><span className="text-xs font-bold text-muted-foreground md:col-span-1">0{index + 1}</span><div className="md:col-span-7"><h3 className="text-lg font-bold">{name}</h3><p className="mt-1 text-sm text-muted-foreground">{desc}</p></div><p className="font-bold text-primary md:col-span-4 md:text-right">{price}</p></div>)}</div><Button asChild size="lg" className="mt-8 h-14 w-full rounded-none"><a href="#lead">Получить точный расчёт <ArrowUpRight /></a></Button></div>
          </div>
        </section>

        <section className="border-y bg-secondary py-8"><div className="site-container grid grid-cols-2 items-center gap-8 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:px-0">{[{ name: "Wildberries", logo: wildberriesLogo }, { name: "Ozon", logo: ozonLogo }, { name: "Яндекс Маркет", logo: yaMarketLogo }, { name: "Магнит Маркет", logo: null }, { name: "М.Видео", logo: null }].map((item) => <div key={item.name} className="flex h-16 items-center justify-center">{item.logo ? <img src={item.logo} alt={item.name} loading="lazy" className="max-h-8 max-w-32 object-contain grayscale transition-all hover:grayscale-0" /> : <span className="text-center text-lg font-bold text-muted-foreground">{item.name}</span>}</div>)}</div></section>

        <WarehouseSection />

        <section id="faq" className="scroll-mt-20 bg-secondary px-5 py-20 lg:px-0 lg:py-28"><div className="site-container grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><SectionLabel>FAQ</SectionLabel><h2 className="text-4xl font-bold leading-none md:text-6xl">Коротко<br />о важном</h2></div><div className="border-t lg:col-span-7 lg:col-start-6">{faq.map(([question, answer], index) => { const open = openFaq === index; return <div key={question} className="border-b"><Button type="button" variant="ghost" onClick={() => setOpenFaq(open ? -1 : index)} className="h-auto w-full justify-between whitespace-normal rounded-none px-0 py-6 text-left text-lg hover:bg-transparent" aria-expanded={open}><span>{question}</span><ChevronDown className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} /></Button>{open && <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{answer}</p>}</div>; })}</div></div></section>

        <section className="px-5 py-20 lg:px-0 lg:py-28"><div className="site-container grid overflow-hidden bg-foreground text-background lg:grid-cols-12"><div className="p-8 lg:col-span-7 lg:p-14"><p className="text-xs font-bold uppercase text-primary">Готовы начать?</p><h2 className="mt-5 max-w-3xl text-4xl font-bold leading-none md:text-6xl">Освободите время для продаж</h2><p className="mt-6 max-w-xl text-lg text-background/70">Оставьте контакты — за 10 минут уточним задачу и подготовим расчёт.</p></div><div className="border-t border-background/20 p-8 [&_input]:border-background/30 [&_input]:text-background [&_label]:text-background/60 [&_p]:text-background/50 [&_textarea]:border-background/30 [&_textarea]:text-background lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12"><LeadForm /></div></div></section>
      </main>
    </div>
  );
}