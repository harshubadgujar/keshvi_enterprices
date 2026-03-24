import { businessInfo, WHATSAPP_LINK } from "../data/data";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
    <path d="M22 16.9v2a2 2 0 01-2.2 2A19.8 19.8 0 013.1 4.2 2 2 0 015.1 2h2a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8.1 10a16 16 0 005.9 5.9l1.5-1.2a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6A2 2 0 0122 16.9z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 8l9 6 9-6" />
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
    <path d="M12 22s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const Contact = () => {
  const primaryPhone = businessInfo.phones[0].replace(/[^\d+]/g, "");
  const secondaryPhone = businessInfo.phones[1].replace(/[^\d+]/g, "");
  const addressText = businessInfo.address.join(" ");
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(addressText)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const infoCards = [
    {
      label: "Call Us",
      icon: PhoneIcon,
      content: (
        <div className="space-y-1">
          <a href={`tel:${primaryPhone}`} className="block font-semibold text-slate-900 transition hover:text-blue-700">
            {businessInfo.phones[0]}
          </a>
          <a href={`tel:${secondaryPhone}`} className="block font-semibold text-slate-900 transition hover:text-blue-700">
            {businessInfo.phones[1]}
          </a>
        </div>
      ),
    },
    {
      label: "Email",
      icon: MailIcon,
      content: (
        <a href={`mailto:${businessInfo.email}`} className="font-semibold text-slate-900 transition hover:text-blue-700">
          {businessInfo.email}
        </a>
      ),
    },
    {
      label: "Address",
      icon: MapIcon,
      content: (
        <a href={mapLink} target="_blank" rel="noreferrer" className="font-semibold leading-7 text-slate-900 transition hover:text-blue-700">
          {businessInfo.address.join(" ")}
        </a>
      ),
    },
  ];

  return (
    <section id="contact" data-reveal className="bg-slate-50 py-24 text-slate-900">
      <div className="mx-auto w-[92%] max-w-7xl rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_14px_36px_rgba(0,0,0,0.1)] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">Contact</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Need Bulk Orders or Dealership Info?</h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
          Connect with us for product catalog, wholesale rates, dealership support and industrial requirements.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`tel:${primaryPhone}`}
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            Call Now
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_28px_rgba(34,197,94,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            WhatsApp
          </a>
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Open Map
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {infoCards.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.07)]">
                <p className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
                  <Icon />
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">{item.label}</p>
                <div className="mt-2 text-sm">{item.content}</div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
          <iframe
            title="Keshavi Lubricant Industries Location"
            src={mapEmbed}
            className="h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
