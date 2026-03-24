import { useEffect, useState } from "react";
import { businessInfo, WHATSAPP_LINK } from "../data/data";

const navItems = [
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto mt-4 w-[92%] max-w-7xl rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-300 md:px-7 ${
          scrolled
            ? "border-white/70 bg-white/82 shadow-[0_16px_40px_rgba(15,23,42,0.16)]"
            : "border-white/45 bg-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.09)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="text-sm font-bold tracking-[0.2em] text-slate-900 md:text-base">
            {businessInfo.brand.toUpperCase()}
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-semibold text-slate-700 transition-all duration-300 hover:text-slate-950"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl border border-emerald-300 bg-emerald-500/90 px-4 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(34,197,94,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 md:inline-flex"
            >
              WhatsApp
            </a>

            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-100 md:hidden"
              aria-label="Toggle menu"
            >
              <span className="text-lg">{open ? "\u2715" : "\u2630"}</span>
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-4 border-t border-slate-200 pt-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex justify-center rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(34,197,94,0.35)]"
              >
                Get Price on WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
