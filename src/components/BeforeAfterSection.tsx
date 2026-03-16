"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { FiChevronRight } from "react-icons/fi";

const cases = [
  {
    age: "20代女性",
    concern: "出産を機に顔が変わってきた",
    result: "首肩の歪み、顎関節、フェイスラインを修正",
    image: "/images/before-after/case-face-01.png",
    caseId: "case-01",
  },
  {
    age: "20代女性",
    concern: "とにかく小顔になりたい",
    result: "ストレートネック、顎関節、顔比率を修正",
    image: "/images/before-after/20代女性02.png",
    caseId: "case-02",
  },
  {
    age: "30代女性",
    concern: "顔の歪み、むくまない顔にしたい",
    result: "顎関節、上部頸椎、蝶形骨を修正",
    image: "/images/before-after/case-face-03.png",
    caseId: "case-03",
  },
  {
    age: "40代女性",
    concern: "年齢と共に顔が変化してきた",
    result: "肩の内巻き、顎関節、顔比率を修正",
    image: "/images/before-after/case-face-04.png",
    caseId: "case-04",
  },
  {
    age: "50代女性",
    concern: "たるみと顔が伸びた気がする",
    result: "ストレートネック、顎関節、顔比率の修正",
    image: "/images/before-after/case-face-05.png",
    caseId: "case-05",
  },
];

// スクロール操作とタップを区別するための閾値（px）
const SCROLL_THRESHOLD = 8;

export default function BeforeAfterSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  // スクロールとタップを判別するためのポインタ位置記録
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

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

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };

  const scrollToCase = useCallback((caseId: string) => {
    const el = document.getElementById(caseId);
    if (el) {
      const headerOffset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const handleCardClick = (caseId: string, e: React.MouseEvent) => {
    // スクロール操作だった場合はナビゲーションしない
    if (pointerStart.current) {
      const dx = Math.abs(e.clientX - pointerStart.current.x);
      const dy = Math.abs(e.clientY - pointerStart.current.y);
      if (dx > SCROLL_THRESHOLD || dy > SCROLL_THRESHOLD) {
        pointerStart.current = null;
        return;
      }
    }
    pointerStart.current = null;
    scrollToCase(caseId);
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
              role="link"
              tabIndex={0}
              onPointerDown={handlePointerDown}
              onClick={(e) => handleCardClick(c.caseId, e)}
              onKeyDown={(e) => { if (e.key === "Enter") scrollToCase(c.caseId); }}
              className="flex-shrink-0 w-[80vw] md:w-[420px] snap-center rounded-2xl overflow-hidden bg-warm-white border border-greige/20 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Before / After 画像 */}
              <div className="relative aspect-[4/3] bg-greige/10">
                <Image
                  src={c.image}
                  alt={`${c.age} ${c.concern} Before/After`}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 80vw, 420px"
                  draggable={false}
                />
              </div>
              {/* Info */}
              <div className="p-5 flex items-end justify-between">
                <div>
                  <span className="text-[10px] text-gold tracking-wider">{c.age}</span>
                  <p className="mt-1 font-serif text-sm tracking-wider text-charcoal">{c.concern}</p>
                  <p className="mt-2 text-xs text-charcoal-light leading-relaxed">{c.result}</p>
                </div>
                <FiChevronRight className="w-4 h-4 text-gold flex-shrink-0 ml-2" />
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
