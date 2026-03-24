import { WHATSAPP_LINK } from "../data/data";

const Gear = ({
  id,
  className,
  size,
  teeth = 16,
  rotateClass = "gear-spin",
  duration = "14s",
  opacity = 1,
}) => {
  const step = 360 / teeth;

  return (
    <div className={`absolute ${className}`} style={{ width: size, height: size, opacity }}>
      <svg
        viewBox="0 0 200 200"
        className={`h-full w-full ${rotateClass}`}
        style={{ animationDuration: duration, filter: "drop-shadow(0 22px 34px rgba(15,23,42,0.22))" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="45%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <radialGradient id={`${id}-core`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#1e293b" />
          </radialGradient>
        </defs>

        {Array.from({ length: teeth }).map((_, idx) => (
          <rect
            key={idx}
            x="92"
            y="6"
            width="16"
            height="30"
            rx="3"
            fill={`url(#${id}-metal)`}
            transform={`rotate(${idx * step} 100 100)`}
          />
        ))}

        <circle cx="100" cy="100" r="70" fill={`url(#${id}-metal)`} stroke="#0f172a" strokeWidth="6" />
        <circle cx="100" cy="100" r="42" fill={`url(#${id}-core)`} stroke="#334155" strokeWidth="5" />
        <circle cx="100" cy="100" r="16" fill="#0f172a" />
      </svg>
    </div>
  );
};

const Hero = () => {
  const handleScroll = () => {
    const target = document.getElementById("products");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      data-reveal
      className="relative overflow-hidden pt-16"
      style={{ background: "linear-gradient(125deg, #f8fafc 0%, #e8eef6 44%, #f5efe5 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,23,42,0.95) 0px, rgba(15,23,42,0.95) 1px, transparent 1px, transparent 24px)",
        }}
      />
      <div
        className="absolute right-[-120px] top-[-40px] h-[420px] w-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,130,30,0.18), transparent 72%)" }}
      />

      <div className="relative mx-auto grid w-[92%] max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="dealer-chip mb-5 inline-flex items-center rounded-full border border-slate-300/90 bg-white/85 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.1)] backdrop-blur-sm md:text-xs">
            <span className="dealer-dot" />AUTHORISED DEALER - KESHAVI ENTERPRISE
          </p>

          <h1 className="text-[2.45rem] font-black uppercase leading-[1.08] tracking-[-0.6px] text-[#0f172a] sm:text-6xl lg:text-7xl">
            <span className="hero-keshumax">KESHUMAX</span>
            <br />
            <span className="hero-lubricant">LUBRICANT</span>
            <br />
            <span className="hero-industries">INDUSTRIES</span>
            <br />
            <span className="hero-products">PRODUCTS</span>
          </h1>

          <p className="manufactured-line mt-5 text-base font-black tracking-[0.02em] md:text-[1.32rem]">
            Manufactured & Marketed by Keshavi Lubricant Industries
          </p>
          <p className="mt-3 text-sm font-semibold tracking-[0.03em] text-[#667085] md:text-base">Engine Oils • Grease • Battery • Bearings • Auto Parts</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_14px_34px_rgba(34,197,94,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_40px_rgba(34,197,94,0.45)] sm:w-auto"
            >
              Get Price on WhatsApp
            </a>
            <button
              type="button"
              onClick={handleScroll}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-gradient-to-r from-white to-slate-100 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-slate-800 shadow-[0_12px_24px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_16px_34px_rgba(15,23,42,0.16)] sm:w-auto"
            >
              View Products
            </button>
          </div>
        </div>

        <div className="relative mx-auto hidden h-[430px] w-full max-w-[520px] lg:block">
          <div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,140,35,0.14), transparent 72%)" }}
          />

          <div className="gear-float absolute inset-0">
            <Gear id="gear-big" className="left-[43%] top-[30%]" size={252} teeth={18} rotateClass="gear-spin" duration="14s" />
            <Gear id="gear-mid" className="left-[16%] top-[20%]" size={180} teeth={16} rotateClass="gear-spin-reverse" duration="12s" />
            <Gear id="gear-small" className="left-[18%] top-[58%]" size={120} teeth={14} rotateClass="gear-spin" duration="10s" opacity={0.95} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


