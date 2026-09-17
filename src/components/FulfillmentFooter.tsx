import { Link } from "react-router-dom";

import logo from "@/assets/logo-1998.png";
import { Button } from "@/components/ui/button";
import { LegalFooterLinks } from "./LegalFooterLinks";

const footerLinks = [
  { label: "Услуги", to: "/fulfillment#services" },
  { label: "Тарифы", to: "/fulfillment#rates" },
  { label: "Склад и контакты", to: "/fulfillment#warehouse" },
  { label: "Вопросы и ответы", to: "/fulfillment#faq" },
];

export function FulfillmentFooter() {
  return (
    <footer id="contact" className="border-t bg-foreground px-5 py-14 text-background lg:px-0 lg:py-20">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/fulfillment" aria-label="Фулфилмент 1998 — главная страницы">
              <img src={logo} alt="1998" className="h-12 w-auto brightness-0 invert" />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-background/65">
              Фулфилмент для маркетплейсов и интернет-магазинов на собственном складе в Санкт-Петербурге.
            </p>
          </div>

          <nav aria-label="Навигация по фулфилменту" className="lg:col-span-3 lg:col-start-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-background/45">Фулфилмент</p>
            <ul className="mt-6 space-y-4 text-sm font-semibold">
              {footerLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-background/45">Обсудить задачу</p>
            <a href="tel:+78123293642" className="mt-6 block text-2xl font-bold transition-colors hover:text-primary">
              +7 (812) 329-36-42
            </a>
            <a href="mailto:info@tecos.spb.ru" className="mt-3 block text-sm font-semibold text-background/65 transition-colors hover:text-background">
              info@tecos.spb.ru
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/50">
              Санкт-Петербург, ул. Предпортовая, д. 1Л
            </p>
            <Button asChild size="lg" className="mt-7 h-12 rounded-none px-6">
              <Link to="/fulfillment#lead">Получить расчёт</Link>
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-background/15 pt-8 text-[11px] font-bold uppercase leading-relaxed tracking-widest text-background/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Фулфилмент 1998. Все права защищены.</p>
          <LegalFooterLinks />
        </div>
      </div>
    </footer>
  );
}
