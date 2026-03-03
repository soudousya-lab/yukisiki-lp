"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";
import { FiTarget, FiGlobe } from "react-icons/fi";

const differences = [
  {
    icon: FiTarget,
    title: "骨格構造からアプローチ",
    desc: "顔だけを診るのではなく、首、肩、骨盤など広い視点から骨格の本質にアプローチし、根本から整えます。",
  },
  {
    icon: FiGlobe,
    title: "海外からも認められた技術",
    desc: "シンガポール・上海など海外サロンからの施術依頼を受ける確かな実力。",
    hasCounter: true,
  },
];

export default function DifferenceSection() {
  return (
    <section id="difference" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Why Choose Us" ja="YUKISIKIが選ばれる理由" />

        <ScrollReveal className="grid md:grid-cols-2 gap-6 md:gap-8" stagger={200}>
          {differences.map((d, i) => (
            <div key={i} className="group rounded-2xl p-8 md:p-10 glass-card luxury-hover hover:shadow-[0_0_30px_rgba(184,150,90,0.08)]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <d.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-base md:text-lg tracking-wider text-charcoal">{d.title}</h3>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed tracking-wide">{d.desc}</p>
              {d.hasCounter && (
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-xs text-charcoal-light">国内外</span>
                  <CountUp end={20000} className="text-2xl text-gold" />
                  <span className="text-xs text-charcoal-light">人以上の施術実績</span>
                </div>
              )}
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
