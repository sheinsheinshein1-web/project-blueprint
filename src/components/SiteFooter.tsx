import { Link } from "react-router-dom";
import logo from "@/assets/logo-1998.png.asset.json";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-background px-6 pb-16 pt-32 lg:px-12">
      <div className="mx-auto w-full">
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
              <li><Link to="/" className="transition-colors hover:text-primary">Главная</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">О бренде</Link></li>
              <li><Link to="/catalog" className="transition-colors hover:text-primary">Продукция</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">История</Link></li>
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
  );
}
