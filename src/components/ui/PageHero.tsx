interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="page-hero overflow-hidden border-b border-white/10 pt-32 sm:pt-40">
      <div className="shell relative py-16 sm:py-24">
        <div className="paint-orb -right-20 -top-32" aria-hidden="true" />
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="display-title reveal max-w-5xl text-6xl sm:text-7xl lg:text-8xl" style={{ "--delay": "80ms" } as React.CSSProperties}>
          {title}
        </h1>
        <p className="reveal mt-6 max-w-2xl text-lg leading-8 text-white/60" style={{ "--delay": "160ms" } as React.CSSProperties}>
          {description}
        </p>
      </div>
    </section>
  );
}
