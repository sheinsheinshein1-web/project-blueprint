import { cn } from "@/lib/utils";
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
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import warehouseHero from "@/assets/warehouse-hero.jpg";
import logo from "@/assets/logo-1998.png";
import wildberriesLogo from "@/assets/wildberries.gif";
import ozonLogo from "@/assets/ozon.gif";
import yaMarketLogo from "@/assets/ya_market.gif";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Тарифы", href: "#rates" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#warehouse" },
];

const services = [
  { icon: Truck, no: "01", title: "Забор товара", desc: "Заберём партию у вас или у поставщика по России." },
  { icon: PackageOpen, no: "02", title: "Приёмка товара", desc: "Разгрузка, пересчёт, идентификация и сверка с документами." },
  { icon: Warehouse, no: "03", title: "Хранение", desc: "Стеллажное и паллетное хранение в отапливаемом складе." },
  { icon: ScanBarcode, no: "04", title: "Маркировка", desc: "Штрихкоды, этикетки площадок и работа с «Честным знаком»." },
  { icon: Boxes, no: "05", title: "Комплектация", desc: "Сборка заказов, наборов и промо-паков без пересорта." },
  { icon: PackageCheck, no: "06", title: "Упаковка", desc: "Пакет, короб, ВПП, скотч и защита товара в пути." },
  { icon: ShieldCheck, no: "07", title: "Проверка качества", desc: "Осмотр, выявление брака и фотофиксация приёмки." },
  { icon: Boxes, no: "08", title: "Подготовка поставок FBO", desc: "Микс- и монокороба, паллетирование, транспортные ярлыки." },
  { icon: PackageCheck, no: "09", title: "Обработка заказов FBS", desc: "Ежедневная сборка и сдача заказов по расписанию площадок." },
  { icon: Truck, no: "10", title: "Отгрузка", desc: "Доставка на склады и в сортировочные центры маркетплейсов." },
  { icon: RotateCcw, no: "11", title: "Возвраты", desc: "Приём, проверка, переупаковка и возврат товара в оборот." },
  { icon: Clock, no: "12", title: "Учёт и отчётность", desc: "Остатки, движения и отчёты по каждой партии товара." },
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

const posts: [string, string, string][] = [
  ["Как подготовить поставку FBO без ошибок", "Разбираем требования к коробам, ярлыкам и паллетам.", "8 мин"],
  ["FBS или FBO: что выгоднее селлеру", "Считаем логистику, хранение и скорость оборота.", "6 мин"],
  ["«Честный знак»: как не потерять партию", "Маркировка, ввод в оборот и типовые ошибки.", "5 мин"],
];

const faq = [
  ["Как начать работать с фулфилментом?", "Оставляете заявку — за 10 минут менеджер уточняет товар, объёмы и схему работы. Дальше подписываем договор, вы делаете первую поставку на склад, мы принимаем и заводим товар в систему."],
  ["С какого объёма вы работаете?", "Работаем с партиями от 100 единиц и регулярными поставками на тысячи SKU. Минимального оборота нет — подключиться можно на старте продаж."],
  ["Как формируется стоимость услуг?", "Оплата по операциям: приёмка, хранение, сборка заказа, маркировка, упаковка, отгрузка. Финальная цена зависит от габаритов, веса и регулярности поставок — расчёт присылаем до подписания договора."],
  ["Как считается хранение?", "Хранение считается за паллетоместо в сутки. Объём занимаемого места вы видите в отчёте, поэтому переплаты за «воздух» нет."],
  ["Как проходит приёмка товара?", "Пересчитываем по количеству, сверяем с накладной, проверяем внешний вид и упаковку. По итогу приёмки вы получаете акт с расхождениями, если они есть."],
  ["Что будет, если товар пришёл с браком?", "Бракованные единицы фиксируем на приёмке, фотографируем и выводим в отдельную зону. Вы решаете: вернуть поставщику, утилизировать или отправить на переупаковку."],
  ["Как быстро обрабатываются FBS-заказы?", "Заказы, поступившие до 14:00, собираем и сдаём в сортировочный центр в тот же день. Остальные — на следующий рабочий день."],
  ["С какими маркетплейсами вы работаете?", "Wildberries, Ozon, Яндекс Маркет, Магнит Маркет и М.Видео — по схемам FBS и FBO. Также отгружаем заказы вашего интернет-магазина."],
  ["Вы работаете с «Честным знаком»?", "Да. Наносим коды маркировки, вводим их в оборот и передаём отчётность по каждой партии."],
  ["Как обрабатываются возвраты?", "Забираем возвраты с маркетплейса, проверяем состояние, при необходимости переупаковываем и возвращаем товар в оборот. Непригодные единицы выводим в брак с отчётом."],
  ["Как я вижу остатки и отчётность?", "По остаткам, отгрузкам и операциям присылаем регулярные отчёты, а персональный менеджер на связи в рабочие часы и оперативно отвечает по любой поставке."],
  ["Можно ли приехать на склад?", "Да, склад открыт для клиентов по будням с 9:00 до 18:00. Визит согласуем заранее."],
  ["Что с сохранностью товара?", "Склад охраняется круглосуточно, все зоны под видеонаблюдением, товар застрахован, доступ к нему — только у сотрудников склада."],
];



const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80, "Не более 80 символов"),
  phone: z.string().trim().regex(/^\+?[\d\s()\-]{10,20}$/, "Введите корректный телефон"),
});

type LeadErrors = Partial<Record<"name" | "phone", string>>;

function LeadForm({ compact = false, buttonClassName = "" }: { compact?: boolean; buttonClassName?: string }) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const result = leadSchema.safeParse(data);
    if (!result.success) {
      const next: LeadErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field === "name" || field === "phone") next[field] = issue.message;
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
      </div>
      <Button type="submit" size="lg" className={cn("mt-6 h-14 w-full justify-between rounded-none px-6 text-sm font-bold", buttonClassName)}>
        {sent ? <><span>Заявка принята</span><Check /></> : <><span>Получить расчёт</span><ArrowUpRight /></>}
      </Button>
      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</p>
    </form>
  );
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
                  <NavigationIcon /> Построить маршрут
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

      </div>
    </section>
  );
}



export default function FulfillmentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [rateMode, setRateMode] = useState<"fbs" | "fbo">("fbs");

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
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+78123293642" className="text-sm font-bold">+7 (812) 329-36-42</a>
            <a href="https://wa.me/78123293642" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="text-muted-foreground transition-colors hover:text-foreground"><MessageCircle className="h-5 w-5" strokeWidth={1.75} /></a>
            <a href="https://t.me/tecos" target="_blank" rel="noreferrer noopener" aria-label="Telegram" className="text-muted-foreground transition-colors hover:text-foreground"><Send className="h-5 w-5" strokeWidth={1.75} /></a>
            <Button asChild size="lg" className="rounded-none"><a href="#lead">Оставить заявку <ArrowUpRight /></a></Button>
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
            <h1 className="max-w-5xl text-[clamp(2.4rem,4.6vw,4.6rem)] font-bold leading-[0.94] tracking-normal">Фулфилмент для маркетплейсов<br /><span className="text-primary">и интернет-магазинов</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">Полный цикл работы с товаром на собственном складе в Санкт-Петербурге: приёмка, хранение, маркировка, упаковка и отгрузка по схемам FBS и FBO.</p>

            <div id="lead" className="mt-12 grid scroll-mt-24 items-stretch gap-8 lg:grid-cols-12 lg:gap-0">
              <div className="relative lg:col-span-7 lg:pr-10">
                <div className="relative">
                  <div className="aspect-[16/11] overflow-hidden bg-secondary lg:aspect-auto lg:h-full lg:min-h-[520px]">
                    <img src={warehouseHero} alt="Современный склад фулфилмента 1998 со стеллажами" width={1408} height={1104} className="h-full w-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 hidden w-52 bg-primary p-5 text-primary-foreground lg:block">
                    <p className="text-3xl font-bold">до 14:00</p><p className="mt-1 text-xs font-bold uppercase opacity-80">сдадим заказ сегодня</p>
                  </div>
                </div>

              </div>

              <div className="border border-primary bg-primary p-7 text-primary-foreground lg:col-span-5 lg:p-9">
                <h2 className="text-2xl font-bold leading-tight lg:text-3xl">Перезвоним в течение 10 минут</h2>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">Уточним задачу, подберём схему работы и посчитаем стоимость под ваш ассортимент.</p>
                <div className="mt-7 [&_input]:border-primary-foreground/30 [&_input]:text-primary-foreground [&_input]:placeholder:text-primary-foreground/50 [&_input]:focus:border-primary-foreground [&_label]:text-primary-foreground/70 [&_p]:text-primary-foreground/70">
                  <LeadForm buttonClassName="bg-primary-foreground text-primary hover:bg-primary-foreground/90" />
                </div>
              </div>
            </div>

            <div className="mt-16 grid border-y sm:grid-cols-2 lg:grid-cols-4">
              {[["2 400 м²", "площадь склада"], ["10 минут", "ответ на заявку"], ["24/7", "охрана и контроль"], ["99,9%", "точность сборки"]].map(([value, label], index) => (
                <div key={label} className={`py-5 sm:px-5 ${index > 0 ? "sm:border-l" : ""}`}><p className="text-2xl font-bold">{value}</p><p className="mt-1 text-xs font-bold uppercase text-muted-foreground">{label}</p></div>
              ))}
            </div>

          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-secondary px-5 py-20 lg:px-0 lg:py-28">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-5"><h2 className="text-4xl font-bold leading-none md:text-6xl">Полный комплекс<br />услуг фулфилмента</h2></div><p className="max-w-xl self-end text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">Берём на себя все операции с товаром — от забора у поставщика до возвратов, чтобы вы управляли продажами, а не коробками.</p></div>
            <div className="mt-14 grid border-l border-t md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, no, title, desc }) => <article key={no} className="group min-h-56 border-b border-r p-6 transition-colors hover:bg-background"><div className="flex items-start justify-between"><span className="text-xs font-bold text-muted-foreground">/{no}</span><Icon className="h-6 w-6 text-primary" strokeWidth={1.5} /></div><h3 className="mt-12 text-xl font-bold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">{desc}</p></article>)}
            </div>
          </div>
        </section>

        <section id="rates" className="scroll-mt-20 px-5 py-20 lg:px-0 lg:py-28">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-5"><h2 className="text-4xl font-bold leading-none md:text-6xl">Прозрачно,<br />по операциям</h2></div><p className="max-w-xl self-end text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">Финальная стоимость зависит от габаритов, веса и регулярности поставок. Ниже — базовые цены по FBS и FBO.</p></div>

            <div className="mt-14 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                  {rateMode === "fbs" ? "Стоимость основных FBS-операций" : "Стоимость основных FBO-операций"}
                </h3>
                <div className="relative mt-6 inline-flex rounded-full border bg-background p-1">
                  <div
                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-primary transition-all duration-300 ease-out"
                    style={{ left: rateMode === "fbs" ? "4px" : "calc(50% + 0px)" }}
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    onClick={() => setRateMode("fbs")}
                    className={`relative z-10 min-w-[88px] rounded-full px-6 py-2.5 text-sm font-bold transition-colors ${rateMode === "fbs" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    FBS
                  </button>
                  <button
                    type="button"
                    onClick={() => setRateMode("fbo")}
                    className={`relative z-10 min-w-[88px] rounded-full px-6 py-2.5 text-sm font-bold transition-colors ${rateMode === "fbo" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    FBO
                  </button>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="border-t">
                  {(rateMode === "fbs" ? fbsRows : fboRows).map(([name, desc, price], index) => (
                    <div key={name} className="grid gap-2 border-b py-6 md:grid-cols-12 md:items-center">
                      <span className="text-xs font-bold text-muted-foreground md:col-span-1">0{index + 1}</span>
                      <div className="md:col-span-7"><p className="text-lg font-bold">{name}</p><p className="mt-1 text-sm text-muted-foreground">{desc}</p></div>
                      <p className="font-bold text-primary md:col-span-4 md:text-right">{price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="mt-10 h-14 w-full rounded-none lg:w-auto lg:px-10"><a href="#lead">Получить точный расчёт <ArrowUpRight /></a></Button>
          </div>
        </section>

        <section className="border-y bg-secondary px-5 py-14 lg:px-0">
          <div className="site-container">
            <h2 className="text-3xl font-bold leading-none md:text-4xl">Работаем с маркетплейсами</h2>
            <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">{[{ name: "Wildberries", logo: wildberriesLogo }, { name: "Ozon", logo: ozonLogo }, { name: "Яндекс Маркет", logo: yaMarketLogo }, { name: "Магнит Маркет", logo: null }, { name: "М.Видео", logo: null }].map((item) => <div key={item.name} className="flex h-16 items-center justify-center">{item.logo ? <img src={item.logo} alt={item.name} loading="lazy" className="max-h-8 max-w-32 object-contain grayscale transition-all hover:grayscale-0" /> : <span className="text-center text-lg font-bold text-muted-foreground">{item.name}</span>}</div>)}</div>
          </div>
        </section>

        <WarehouseSection />

        <section id="blog" className="scroll-mt-20 px-5 pb-20 lg:px-0 lg:pb-28">
          <div className="site-container">
            <div className="grid gap-8 lg:grid-cols-12"><div className="lg:col-span-5"><h2 className="text-4xl font-bold leading-none md:text-6xl">Полезное<br />для селлеров</h2></div><p className="max-w-xl self-end text-lg leading-relaxed text-muted-foreground lg:col-span-5 lg:col-start-8">Разбираем требования маркетплейсов, ошибки поставок и способы сэкономить на логистике.</p></div>
            <div className="mt-12 grid border-l border-t md:grid-cols-3">
              {posts.map(([title, desc, time]) => (
                <article key={title} className="group border-b border-r p-7 transition-colors hover:bg-secondary">
                  <p className="text-xs font-bold uppercase text-muted-foreground">{time} чтения</p>
                  <h3 className="mt-6 text-xl font-bold leading-snug">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary">Читать <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </article>
              ))}
            </div>
          </div>
        </section>



        <section id="faq" className="scroll-mt-20 bg-secondary px-5 py-20 lg:px-0 lg:py-28"><div className="site-container grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><h2 className="text-4xl font-bold leading-none md:text-6xl">Коротко<br />о важном</h2></div><div className="border-t lg:col-span-7 lg:col-start-6">{faq.map(([question, answer], index) => { const open = openFaq === index; return <div key={question} className="border-b"><Button type="button" variant="ghost" onClick={() => setOpenFaq(open ? -1 : index)} className="h-auto w-full justify-between whitespace-normal rounded-none px-0 py-6 text-left text-lg hover:bg-transparent" aria-expanded={open}><span>{question}</span><ChevronDown className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} /></Button>{open && <p className="max-w-2xl pb-6 leading-relaxed text-muted-foreground">{answer}</p>}</div>; })}</div></div></section>

        <section className="px-5 py-20 lg:px-0 lg:py-28"><div className="site-container grid overflow-hidden bg-foreground text-background lg:grid-cols-12"><div className="p-8 lg:col-span-7 lg:p-14"><h2 className=" max-w-3xl text-4xl font-bold leading-none md:text-6xl">Освободите время для продаж</h2><p className="mt-6 max-w-xl text-lg text-background/70">Оставьте контакты — за 10 минут уточним задачу и подготовим расчёт.</p></div><div className="border-t border-background/20 p-8 [&_input]:border-background/30 [&_input]:text-background [&_label]:text-background/60 [&_p]:text-background/50 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12"><LeadForm /></div></div></section>
      </main>
    </div>
  );
}