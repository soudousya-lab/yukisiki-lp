"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="About" ja="YUKISIKIとは" />

        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-6">
            <p className="font-serif text-base md:text-lg text-charcoal leading-loose tracking-wider">
              「なんとなく小顔」ではなく、
              <br className="hidden md:block" />
              <span className="text-gold">「構造的に変える」</span>
              顔専門サロン
            </p>
            <div className="gold-line mx-auto my-8" />
            <p className="text-sm md:text-base text-charcoal-light leading-relaxed md:leading-loose tracking-wide max-w-2xl mx-auto">
              YUKISIKIは、顔を構成する29個の骨格にアプローチする
              独自の矯正技術を提供しています。
              <br />
              医療レベルの解剖学知識に基づき、
              骨格の歪みを根本から整えることで、
              一時的ではない持続する変化を実現します。
            </p>
            <p className="text-sm md:text-base text-charcoal-light leading-relaxed md:leading-loose tracking-wide max-w-2xl mx-auto">
              機械は一切使わず、すべて手技のみ。
              <br />
              おひとりおひとりの骨格を見極め、
              完全オーダーメイドの施術をご提供いたします。
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8" stagger={150}>
          {[
            { end: 11, unit: "年", label: "創業年数" },
            { end: 20000, unit: "人+", label: "施術実績" },
            { end: 5, unit: "年", label: "海外施術歴" },
            { end: 3, unit: "ヶ国", label: "海外実績" },
          ].map((s) => (
            <div key={s.label} className="text-center py-6 rounded-2xl bg-ivory/50 glass-card luxury-hover">
              <div className="flex items-baseline justify-center">
                <CountUp end={s.end} className="text-3xl md:text-4xl text-gold" suffix="" />
                <span className="text-xs text-warm-gray ml-1">{s.unit}</span>
              </div>
              <p className="mt-2 text-[10px] md:text-xs tracking-wider text-charcoal-light">
                {s.label}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
