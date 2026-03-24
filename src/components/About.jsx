import { businessInfo } from "../data/data";

const highlights = [
  { title: "Genuine Products", text: "Original quality formulations for consistent engine protection." },
  { title: "Bulk Supply Available", text: "Reliable stock support for workshops, fleets and distributors." },
  { title: "Trusted by Workshops", text: "Preferred by mechanics for dependable day-to-day performance." },
  { title: "High Performance Formula", text: "Engineered for durability, heat resistance and cleaner operation." },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Dealers" },
  { value: "1000+", label: "Customers" },
];

const About = () => {
  return (
    <section id="about" data-reveal className="bg-white py-24 text-slate-900">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">Company Profile</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">About Keshavi Lubricant Industries</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
              {businessInfo.businessName} manufactures and markets lubricant products under the <span className="font-semibold text-slate-800">{businessInfo.brand}</span> brand
              across two-wheeler, four-wheeler, tractor and industrial segments.
            </p>
            <p className="mt-3 text-base leading-8 text-slate-600 md:text-lg">
              Our focus is long engine life, stable performance under heavy load, and dependable support for workshops, retailers and bulk buyers.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <article key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                  <p className="text-3xl font-black text-slate-900">{item.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-600">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_16px_36px_rgba(0,0,0,0.1)]">
            <img
              src="/images/WhatsApp Image 2026-03-16 at 6.12.43 PM.jpeg"
              alt="Keshumax lubricant brand poster"
              className="h-[420px] w-full rounded-xl bg-white object-contain"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="group rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)]">
              <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 transition-all duration-300 group-hover:w-16" />
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
