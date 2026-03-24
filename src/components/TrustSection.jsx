const reviews = [
  {
    name: "Shree Ram Workshop, Vadodara",
    role: "Service Workshop",
    text: "Keshumax engine oils are giving stable performance and our repeat demand has increased month by month.",
  },
  {
    name: "Patel Auto Lubes",
    role: "Retail Dealer",
    text: "Fast supply, good packaging quality and customer-friendly viscosity options for different engines.",
  },
  {
    name: "Maa Fleet Services",
    role: "Fleet Operator",
    text: "The 4W and hydraulic range works reliably in heavy-running vehicles and maintenance cost is controlled.",
  },
  {
    name: "Industrial Care Engineers",
    role: "Industrial Buyer",
    text: "Hydraulic grades are consistent and support team is responsive for bulk requirements.",
  },
];

const TrustSection = () => {
  return (
    <section data-reveal className="bg-white py-24 text-slate-900">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-600">Customer Trust</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Trusted by Dealers & Workshops</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">Real feedback from lubricant retailers, mechanics and industrial users.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)]"
            >
              <p className="text-sm text-amber-500">★★★★★</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">"{review.text}"</p>
              <p className="mt-5 text-sm font-bold text-slate-900">{review.name}</p>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{review.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
