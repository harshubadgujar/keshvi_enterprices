import { businessInfo, WHATSAPP_LINK } from "../data/data";

const Footer = () => {
  const addressText = businessInfo.address.join(" ");
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`;
  const primaryPhone = businessInfo.phones[0].replace(/[^\d+]/g, "");
  const secondaryPhone = businessInfo.phones[1].replace(/[^\d+]/g, "");

  return (
    <footer className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-16 text-slate-200">
      <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-black tracking-[0.14em] text-white">{businessInfo.brand.toUpperCase()}</p>
          <p className="mt-2 text-sm font-semibold text-slate-300">{businessInfo.businessName}</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">Premium lubricant solutions for 2W, 4W, industrial and tractor applications.</p>

          <div className="mt-5 flex items-center gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400">WA</a>
            <a href={`mailto:${businessInfo.email}`} className="rounded-full border border-white/20 p-2.5 transition-all duration-300 hover:border-sky-400 hover:text-sky-400">@</a>
            <a href={`tel:${primaryPhone}`} className="rounded-full border border-white/20 p-2.5 transition-all duration-300 hover:border-orange-400 hover:text-orange-300">Call</a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">Quick Links</p>
          <div className="mt-5 space-y-3 text-sm">
            {[
              ["#home", "Home"],
              ["#products", "Products"],
              ["#about", "About"],
              ["#why-us", "Why Us"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="block text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">Products</p>
          <div className="mt-5 space-y-3 text-sm text-slate-400">
            <p>2W Lubricants</p>
            <p>4W Engine Oils</p>
            <p>Industrial Hydraulic Oils</p>
            <p>Grease & Tractor Oils</p>
            <p>Auto Riksha 2T Oil</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">Contact</p>
          <div className="mt-5 space-y-3 text-sm">
            <a href={`tel:${primaryPhone}`} className="block font-semibold text-slate-300 transition-all duration-300 hover:text-white">
              {businessInfo.phones[0]}
            </a>
            <a href={`tel:${secondaryPhone}`} className="block font-semibold text-slate-300 transition-all duration-300 hover:text-white">
              {businessInfo.phones[1]}
            </a>
            <a href={`mailto:${businessInfo.email}`} className="block text-slate-400 transition-all duration-300 hover:text-white">
              {businessInfo.email}
            </a>
            <a href={mapLink} target="_blank" rel="noreferrer" className="block text-slate-400 transition-all duration-300 hover:text-white">
              Open Google Map
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-[92%] max-w-7xl border-t border-white/10 pt-5 text-center text-xs text-slate-500 md:text-left">
        © {new Date().getFullYear()} {businessInfo.businessName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
