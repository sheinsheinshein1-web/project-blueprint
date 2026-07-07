import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "@/assets/logo-1998.png";

const ROUTE_LINKS: Array<{ label: string; to: string; id: string }> = [
  { label: "Главная", to: "/", id: "home" },
  { label: "О бренде", to: "/#about", id: "about" },
  { label: "Продукция", to: "/#products", id: "products" },
  { label: "История", to: "/#history", id: "history" },
  { label: "Контакты", to: "/#contact", id: "contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState("Главная");
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      const match = ROUTE_LINKS.find((l) => !l.to.includes("#") && pathname === l.to);
      setActiveLabel(match?.label ?? "Главная");
      return;
    }

    const getActive = () => {
      const trigger = window.innerHeight * 0.25;
      let active = "Главная";
      for (const { label, id } of ROUTE_LINKS) {
        if (id === "home") continue;
        const el = id ? document.getElementById(id) : null;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= trigger) active = label;
        }
      }
      setActiveLabel(active);
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, [isHome, pathname]);

  useEffect(() => {
    const link = linkRefs.current[activeLabel];
    const nav = link?.parentElement;
    if (link && nav) {
      const linkRect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setPill({
        left: linkRect.left - navRect.left,
        top: linkRect.top - navRect.top,
        width: linkRect.width,
        height: linkRect.height,
      });
    }
  }, [activeLabel]);

  useEffect(() => {
    const onResize = () => {
      const link = linkRefs.current[activeLabel];
      const nav = link?.parentElement;
      if (link && nav) {
        const linkRect = link.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        setPill({
          left: linkRect.left - navRect.left,
          top: linkRect.top - navRect.top,
          width: linkRect.width,
          height: linkRect.height,
        });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeLabel]);

  const navLinkClass =
    "relative z-10 rounded-full px-5 py-2 text-[13px] font-medium transition-colors ";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between px-6 py-4 transition-all duration-300 md:px-8 lg:px-12 ${
        scrolled
          ? "border-b border-white/40 bg-white/80 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Link to="/" className="flex items-center" aria-label="1998">
        <img src={logo} alt="1998" className="h-10 w-auto md:h-12" />
      </Link>

      <nav className="relative hidden items-center gap-1 rounded-full bg-gray-200/50 p-1 backdrop-blur-md md:flex">
        <span
          className="pointer-events-none absolute rounded-full bg-white/80 shadow-sm transition-all duration-300 ease-out"
          style={{
            left: pill.left,
            top: pill.top,
            width: pill.width,
            height: pill.height,
          }}
        />
        {ROUTE_LINKS.map((l) => (
          <Link
            key={l.label}
            ref={(el: HTMLAnchorElement | null) => {
              linkRefs.current[l.label] = el;
            }}
            to={l.to}
            onClick={() => setActiveLabel(l.label)}
            className={
              navLinkClass +
              (activeLabel === l.label
                ? "text-black"
                : "text-gray-700 hover:text-black")
            }
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/#contact"
        className="hidden items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-black md:inline-flex"
      >
        Связаться
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
      </Link>

      <button
        onClick={() => setMobileOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-black backdrop-blur md:hidden"
        aria-label="Меню"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileOpen && (
        <div className="absolute right-4 top-16 z-50 w-64 space-y-2 rounded-2xl border border-white/40 bg-white/80 p-4 shadow-xl backdrop-blur-3xl md:hidden">
          {ROUTE_LINKS.map((l) => {
            const hashIdx = l.to.indexOf("#");
            const isHashOnHome = hashIdx >= 0 && isHome;
            return (
              <Link
                key={l.label}
                to={l.to}
                onClick={(e) => {
                  if (isHashOnHome) {
                    e.preventDefault();
                    const id = l.to.slice(hashIdx + 1);
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    else window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMobileOpen(false);
                }}
                className="block rounded-xl px-4 py-2 text-sm font-medium text-gray-800 hover:bg-white"
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/#contact"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
              setMobileOpen(false);
            }}
            className="mt-2 flex items-center justify-between rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white"
          >
            Связаться <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
