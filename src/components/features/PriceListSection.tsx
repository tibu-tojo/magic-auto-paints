import { prices } from "@/lib/site";

export function PriceListSection() {
  return <section id="price-list" className="section border-y border-white/10 bg-[#0b0b0b]"><div className="shell">
    <div className="reveal"><p className="eyebrow">Price List</p><h2 className="display-title text-5xl sm:text-7xl">Price List</h2><p className="mt-6 max-w-5xl text-lg italic leading-8 text-white/60">All our prices are starting from and they are tailored for every repair dependent on the paint / materials required to the size of the job being taken on, as discounts are available if it is a multi-panel job. This will all be discussed at the free quote / consultation.</p></div>
    <div className="surface mt-12 grid md:grid-cols-2">{prices.map((item)=><div key={item.service} className="flex items-center justify-between gap-5 border-b border-white/[.08] px-6 py-5 md:odd:border-r"><span className="font-semibold text-white/70">{item.service}</span><strong className="shrink-0 text-orange-400">{item.price}</strong></div>)}</div>
    <p className="mt-8 leading-7 text-white/50">Prices above are all dependent on the size of the panel and paint type plus if the panel requires any body work / dent repairs.</p>
  </div></section>;
}
