import Image from "next/image";

const images = [
  ["/images/gallery/lexus-before.jpg","Lexus - Before"],
  ["/images/gallery/lexus-primed.jpg","Lexus - Repaired and Primed"],
  ["/images/gallery/lexus-base-coat.jpg","Lexus - Paint Base Coat"],
  ["/images/gallery/lexus-clear-coat.jpg","Lexus - Paint Clear Coat"],
  ["/images/gallery/renault-dent-repair.jpg","Renault Scenic - Dent Repair Stage"],
  ["/images/gallery/renault-undercoat.jpg","Renault Scenic - Paint Undercoat"],
  ["/images/gallery/renault-base-coat.jpg","Renault Scenic - Paint Base Coat"],
  ["/images/gallery/renault-clear-coat.jpg","Renault Scenic - Paint Clear Coat"],
] as const;

export function GallerySection(){return <section id="gallery" className="section metal-grid"><div className="shell"><div className="reveal"><p className="eyebrow">Gallery</p><h2 className="display-title text-4xl sm:text-6xl">Gallery</h2><p className="mt-6 max-w-4xl text-lg leading-8 text-white/60">Below are projects that the team at Magic Auto Paints Ltd have been working on showing the before, during and after photos to highlight the skills of the team.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{images.map(([src,alt],index)=><figure key={src} className="surface reveal overflow-hidden" style={{"--delay":`${(index%4)*80}ms`} as React.CSSProperties}><div className="relative aspect-[3/4] overflow-hidden"><Image src={src} alt={alt} fill sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw" className="object-cover transition duration-700 hover:scale-105"/></div><figcaption className="p-5 text-sm font-bold uppercase tracking-[.1em] text-white/65">{alt}</figcaption></figure>)}</div></div></section>}
