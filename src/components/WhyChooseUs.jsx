const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
    <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const NetworkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
    <path d="M12 4a3 3 0 110 6 3 3 0 010-6z" />
    <path d="M5 15a3 3 0 110 6 3 3 0 010-6z" />
    <path d="M19 15a3 3 0 110 6 3 3 0 010-6z" />
    <path d="M10.5 9.2L6.6 15" />
    <path d="M13.5 9.2l3.9 5.8" />
  </svg>
);

const SupplyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
    <path d="M3 7h12v9H3z" />
    <path d="M15 10h4l2 2v4h-6z" />
    <path d="M7 19a2 2 0 100 4 2 2 0 000-4z" />
    <path d="M18 19a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
);

const OilIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
    <path d="M12 3c2.8 4 5 6.8 5 10a5 5 0 11-10 0c0-3.2 2.2-6 5-10z" />
    <path d="M9 15c.5 1.2 1.4 2 3 2" />
  </svg>
);

const whyItems = [
  {
    icon: OilIcon,
    title: "High Performance Oils",
    text: "Engineered formulas for stable lubrication in daily usage and heavy-duty operations.",
  },
  {
    icon: NetworkIcon,
    title: "Trusted Dealer Network",
    text: "Dependable channel support with fast communication for retailers and workshops.",
  },
  {
    icon: SupplyIcon,
    title: "Bulk Supply Support",
    text: "Consistent stock availability and dispatch support for commercial buyers and fleets.",
  },
  {
    icon: ShieldIcon,
    title: "Quality Assurance",
    text: "Every product line follows strict quality checks for reliability and long-term durability.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" data-reveal className="relative overflow-hidden bg-slate-100 py-24 text-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_8%_10%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_92%_80%,rgba(249,115,22,0.09),transparent_32%)]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">Why Choose Us</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Built for Performance. Trusted for Reliability.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">Industrial-grade lubrication backed by consistent supply and support.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)] hover:shadow-[0_22px_44px_rgba(0,0,0,0.14)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300 opacity-90" />

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-rose-100 bg-rose-50 text-rose-600 transition-all duration-300 group-hover:shadow-[0_0_22px_rgba(249,115,22,0.35)]">
                  <Icon />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
