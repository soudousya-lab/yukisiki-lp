"use client";

import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";
import ScrollReveal from "./ScrollReveal";
import CountUp from "./CountUp";

export default function PriceSection() {
  return (
    <section id="price" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading en="Price" ja="料金" />

        <ScrollReveal animation="scale-in">
          <div className="border border-gold/20 rounded-2xl overflow-hidden bg-gradient-to-b from-ivory to-warm-white glass-card">
            <div className="bg-charcoal text-center py-5">
              <p className="text-[10px] tracking-[0.3em] text-dusty-rose uppercase mb-1">YUKISIKI人気 NO.1</p>
              <p className="font-serif text-lg tracking-wider text-warm-white">小顔矯正 × 美容鍼</p>
            </div>
            <div className="p-8 md:p-10 text-center">
              <p className="text-sm text-charcoal-light tracking-wider mb-4">カウンセリング × 小顔矯正 × 美容鍼</p>
              <p className="text-[10px] text-dusty-rose tracking-wider mb-4">初回限定</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm text-warm-gray line-through">¥15,000</span>
                <span className="text-sm text-warm-gray">→</span>
              </div>
              <div className="flex items-baseline justify-center mt-2">
                <span className="text-sm text-gold">¥</span>
                <CountUp end={12800} className="text-4xl md:text-5xl text-gold" prefix="" />
                <span className="text-sm text-charcoal-light ml-2">（税込）</span>
              </div>
              <div className="gold-line mx-auto my-6" />
              <ul className="text-left space-y-2 max-w-xs mx-auto">
                {["骨格カウンセリング", "オーダーメイド施術", "アフターケアアドバイス", "ホームケア紹介"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal-light">
                    <span className="text-gold text-xs">◆</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={200}>
          <p className="mt-6 text-center text-[10px] text-warm-gray tracking-wider leading-relaxed">
            ※ 無理な勧誘・回数券の販売は一切いたしません。<br />
            ※ 2回目以降の料金はカウンセリング時にご説明いたします。
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-10 text-center"><CTAButton large /></div>
        </ScrollReveal>
      </div>
    </section>
  );
}
