"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ScrollReveal from "./ScrollReveal";

const cases = [
  {
    age: "30代女性",
    concern: "顔の左右差・エラ張り",
    result: "左右のバランスが整い、フェイスラインがすっきり",
    before: "/images/before-after/case01-before.jpg",
    after: "/images/before-after/case01-after.jpg",
  },
  {
    age: "40代女性",
    concern: "たるみ・ほうれい線",
    result: "頬の位置が上がり、ほうれい線が目立たなく",
    before: "/images/before-after/case02-before.jpg",
    after: "/images/before-after/case02-after.jpg",
  },
  {
    age: "20代女性",
    concern: "丸顔・むくみ",
    result: "骨格から整えることでシャープな輪郭に",
    before: "/images/before-after/case03-before.jpg",
    after: "/images/before-after/case03-after.jpg",
  },
];

export default function BeforeAfterSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / cases.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, cases.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / cases.length;
    el.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-20 bg-ivory overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-8">
            <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-2">Before & After</p>
            <h2 className="font-serif text-lg md:text-xl tracking-wider text-charcoal">施術事例</h2>
            <div className="gold-line mx-auto mt-3" />
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <p className="text-center text-xs text-warm-gray tracking-wider mb-6">
            ※写真の掲載準備中です。実際の症例はカウンセリング時にご覧いただけます。
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll container */}
      <ScrollReveal animation="fade-up" delay={100}>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-[calc((100vw-48rem)/2+1.5rem)] pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cases.map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[80vw] md:w-[360px] snap-center rounded-2xl overflow-hidden bg-warm-white border border-greige/20 shadow-sm"
            >
              {/* Before / After visual */}
              <div className="aspect-[4/3] bg-gradient-to-br from-greige/20 to-dusty-rose-light/20 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 text-xs text-warm-gray tracking-wider">
                    <span className="px-3 py-1 border border-greige/40 rounded-full">Before</span>
                    <span className="text-gold">→</span>
                    <span className="px-3 py-1 border border-gold/30 rounded-full text-gold">After</span>
                  </div>
                  <p className="mt-3 text-[10px] text-warm-gray">Photo coming soon</p>
                </div>
              </div>
              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] text-gold tracking-wider">{c.age}</span>
                <p className="mt-1 font-serif text-sm tracking-wider text-charcoal">{c.concern}</p>
                <p className="mt-2 text-xs text-charcoal-light leading-relaxed">{c.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-gold w-6" : "bg-greige/40"
              }`}
              aria-label={`スライド ${i + 1}`}
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
