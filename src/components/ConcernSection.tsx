"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const concerns = [
  { age: "20代後半", items: ["小顔になりたい", "写真映えしたい", "エラ張りが気になる", "SNS映えする輪郭に"] },
  { age: "30代", items: ["顔の左右差が気になる", "たるみが出てきた", "ほうれい線が目立つ", "疲れ顔に見える"] },
  { age: "40代", items: ["フェイスラインの崩れ", "老け顔に見られる", "顔全体のたるみ", "輪郭をシャープに"] },
  { age: "50代", items: ["若々しい印象を保ちたい", "品のある顔立ちに", "顔の歪みを整えたい", "自信を取り戻したい"] },
];

export default function ConcernSection() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="For You" ja="こんなお悩みありませんか？" light />

        <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" stagger={150}>
          {concerns.map((c) => (
            <div key={c.age} className="rounded-2xl p-5 md:p-6 glass-card-dark luxury-hover">
              <p className="text-xs text-gold-light tracking-wider mb-4 text-center">{c.age}</p>
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
