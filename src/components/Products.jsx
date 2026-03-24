import { useMemo, useState } from "react";
import { categories, products, WHATSAPP_LINK } from "../data/data";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" data-reveal className="relative scroll-mt-28 overflow-hidden bg-slate-50 py-24 text-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_12%_18%,rgba(59,130,246,0.08),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(249,115,22,0.09),transparent_35%)]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">
        <div className="mb-7 text-sm text-slate-500">
          Home <span className="mx-1">&gt;</span> Product Categories <span className="mx-1">&gt;</span>
          <span className="font-semibold text-slate-700"> Keshavi Lubricant Industries Products</span>
        </div>

        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black uppercase tracking-[0.01em] text-slate-900 md:text-5xl">Keshavi Lubricant Industries Product Catalog</h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">Premium lubrication range for bikes, cars, tractors and industrial machinery.</p>
          </div>
          <span className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            Showing {filteredProducts.length} Products
          </span>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 md:text-sm ${
                  isActive
                    ? "bg-gradient-to-r from-rose-600 to-orange-500 text-white shadow-[0_12px_26px_rgba(249,115,22,0.34)]"
                    : "border border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <article
              key={product.name}
              className="group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_42px_rgba(0,0,0,0.14)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-red-500/20 via-orange-400/18 to-amber-300/18" />
              </div>

              <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <span className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700">
                    {product.category}
                  </span>
                  <span className="rounded-md bg-rose-600 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    {index % 3 === 0 ? "Best Seller" : "Popular"}
                  </span>
                </div>

                <div className="mb-4 rounded-xl border border-slate-100 bg-slate-100 p-4">
                  <div className="flex h-56 items-center justify-center overflow-hidden rounded-lg bg-slate-50">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full max-h-[210px] w-full max-w-[220px] object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-gradient-to-b from-slate-100 to-slate-200 px-3 text-center">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">Image Coming Soon</span>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="min-h-[56px] text-lg font-extrabold leading-7 text-slate-900">{product.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-600">Viscosity: {product.viscosity}</p>
                <p className="mt-2 line-clamp-2 min-h-[44px] text-sm text-slate-600">{product.description}</p>
              </div>

              <div className="relative z-10 mt-6 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="rounded-2xl border border-slate-300 bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50"
                >
                  View Details
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-emerald-500 px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(34,197,94,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  Get Price
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProduct ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-3xl rounded-2xl border border-white/30 bg-white p-6 text-slate-900 shadow-[0_30px_70px_rgba(0,0,0,0.35)] md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Product Details</p>
                <h3 className="mt-2 text-2xl font-black md:text-3xl">{selectedProduct.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-600 transition-all duration-300 hover:bg-slate-100"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="flex h-72 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 p-4">
                {selectedProduct.image ? (
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-[250px] max-w-full object-contain" />
                ) : (
                  <span className="text-sm font-semibold text-slate-500">Image Coming Soon</span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="space-y-3 text-sm md:text-base">
                  <p className="font-semibold text-slate-700">
                    <span className="text-slate-500">Viscosity:</span> {selectedProduct.viscosity}
                  </p>
                  <p className="font-semibold text-slate-700">
                    <span className="text-slate-500">Usage:</span> {selectedProduct.usage}
                  </p>
                  <p className="leading-7 text-slate-600">{selectedProduct.description}</p>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(34,197,94,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  Get Price on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Products;
