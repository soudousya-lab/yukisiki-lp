"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const concerns = [
  { text: "小顔に\nなりたい", icon: "◇" },
  { text: "顔の歪みを\n治したい", icon: "◇" },
  { text: "エラ・頬骨\nが気になる", icon: "◇" },
  { text: "二重顎・むくみ\nを改善したい", icon: "◇" },
  { text: "丸顔・面長\nが気になる", icon: "◇" },
  { text: "たるみ・年齢顔\nが気になる", icon: "◇" },
  { text: "中顔面を\n短くしたい", icon: "◇" },
  { text: "キレイな顔に\nなりたい", icon: "◇" },
];

export default function ConcernSection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="For You" ja="こんなお悩みありませんか？" light />

        <ScrollReveal className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-5" stagger={100}>
          {concerns.map((c) => (
            <div
              key={c.text}
              className="rounded-2xl p-5 md:p-6 glass-card-dark luxury-hover flex flex-col items-center justify-center text-center min-h-[120px]"
            >
              <span className="text-gold/60 text-lg mb-3">{c.icon}</span>
              <p className="text-xs md:text-sm text-greige tracking-wider leading-relaxed whitespace-pre-line font-serif">
                {c.text}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={300}>
          <p className="mt-10 text-center text-sm text-greige-dark tracking-wider leading-relaxed">
            一つでも当てはまる方は、
            <br className="md:hidden" />
            ぜひYUKISIKIにご相談ください。
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
