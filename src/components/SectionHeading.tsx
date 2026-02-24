interface Props {
  en: string;
  ja: string;
  light?: boolean;
}

export default function SectionHeading({ en, ja, light }: Props) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p
        className={`text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 ${
          light ? "text-greige-dark" : "text-gold"
        }`}
      >
        {en}
      </p>
      <h2
        className={`font-serif text-xl md:text-2xl lg:text-3xl tracking-wider ${
          light ? "text-warm-white" : "text-charcoal"
        }`}
      >
        {ja}
      </h2>
      <div className="gold-line-wide mx-auto mt-4" />
    </div>
  );
}
