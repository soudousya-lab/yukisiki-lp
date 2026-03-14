"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  en: string;
  ja: React.ReactNode;
  light?: boolean;
}

export default function SectionHeading({ en, ja, light }: Props) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center mb-12 md:mb-16">
      <p
        className={`text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 transition-all duration-700 ${
          light ? "text-greige-dark" : "text-gold"
        } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {en}
      </p>
      <h2
        className={`font-serif text-xl md:text-2xl lg:text-3xl tracking-wider transition-all duration-700 delay-200 ${
          light ? "text-warm-white" : "text-charcoal"
        } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {ja}
      </h2>
      <div
        className={`gold-line-animated mx-auto mt-4 ${isVisible ? "is-visible" : ""}`}
        style={{ transitionDelay: "400ms" }}
      />
    </div>
  );
}
