"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 md:py-28 bg-charcoal text-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="Results & Authority" ja="実績・権威性" light />

        <ScrollReveal animation="fade-up">
          <div className="rounded-2xl p-8 md:p-12 glass-card-dark luxury-hover max-w-3xl mx-auto text-center">
            <p className="text-[10px] tracking-[0.3em] text-gold-light uppercase mb-4">
              International Recognition
            </p>
            <h3 className="font-serif text-lg md:text-xl tracking-wider text-warm-white mb-4">
              海外サロンからの施術オファー
            </h3>
            <div className="gold-line mx-auto my-6" />
            <p className="text-sm text-greige-dark leading-relaxed tracking-wide max-w-xl mx-auto">
              シンガポール・上海をはじめとする海外サロンから施術依頼を受け、現地での施術・指導を行っています。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
