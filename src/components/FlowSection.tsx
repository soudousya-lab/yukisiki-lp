"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { num: "01", title: "ご予約", desc: "お電話またはWeb予約フォームからご予約ください。ご不明な点はお気軽にお問い合わせを。" },
  { num: "02", title: "カウンセリング", desc: "お顔の状態を丁寧にヒアリング。骨格の歪みの原因を分析し、最適な施術プランをご提案します。" },
  { num: "03", title: "施術", desc: "29個の骨格にアプローチする独自の手技で、骨格の歪みを根本から整えます。ほぼ痛みのない施術です。" },
  { num: "04", title: "アフターケア", desc: "施術後の状態を確認し、ご自宅でのケア方法や通院頻度のアドバイスをお伝えします。" },
];

export default function FlowSection() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="Flow" ja="施術の流れ" />

        <div className="space-y-0">
          {steps.map((s, i) => (
            <ScrollReveal key={i} animation="fade-up" delay={i * 200}>
              <div className="relative flex gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-gold/40 flex items-center justify-center bg-warm-white z-10">
                    <span className="text-xs text-gold number-highlight">{s.num}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-gold/20 to-gold/5" />
                  )}
                </div>
                <div className="pb-10 md:pb-12 pt-1.5">
                  <h3 className="font-serif text-base md:text-lg tracking-wider text-charcoal mb-2">{s.title}</h3>
                  <p className="text-sm text-charcoal-light leading-relaxed tracking-wide">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
