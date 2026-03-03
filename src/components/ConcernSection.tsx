"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const concerns = [
  {
    title: "エラ張り・頬骨",
    items: ["エラが張っている", "頬骨が気になる", "ベース型の輪郭を変えたい"],
  },
  {
    title: "たるみ・年齢顔",
    items: ["フェイスラインのたるみ", "ほうれい線が目立つ", "疲れ顔に見える"],
  },
  {
    title: "撮影・イベント前",
    items: ["写真映えしたい", "大事なイベント前に", "短期間で変化を実感"],
  },
  {
    title: "鼻筋・顔型",
    items: ["鼻筋を通したい", "丸顔・面長を改善", "左右差が気になる"],
  },
];

export default function ConcernSection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="For You" ja="こんなお悩みありませんか？" light />

        <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" stagger={150}>
          {concerns.map((c) => (
            <div key={c.title} className="rounded-2xl p-5 md:p-6 glass-card-dark luxury-hover">
              <p className="text-xs text-gold-light tracking-wider mb-4 text-center font-serif">{c.title}</p>
              <ul className="space-y-2.5">
                {c.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-greige-dark leading-relaxed tracking-wide">
                    <span className="text-dusty-rose mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
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
