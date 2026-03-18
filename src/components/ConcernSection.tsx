"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
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

const faceCases = [
  {
    image: "/images/before-after/case-face-02.png",
    age: "20代女性",
    complaint: "出産を機に顔が変わってきた",
    approach: "顔の歪み、顔の立体感を修正",
    caseId: "case-01",
  },
  {
    image: "/images/before-after/case-face-03.png",
    age: "30代女性",
    complaint: "むくまない顔にしたい",
    approach: "顎関節、上部頸椎、蝶形骨を修正",
    caseId: "case-03",
  },
  {
    image: "/images/before-after/case-face-04.png",
    age: "30代女性",
    complaint: "年齢と共に顔が変わってきた",
    approach: "肩の内巻き、顎関節、顔比率を修正",
    caseId: "case-04",
  },
  {
    image: "/images/before-after/case-face-05.png",
    age: "50代女性",
    complaint: "たるみと顔が伸びてきた",
    approach: "ストレートネック、顎関節、顔比率の修正",
    caseId: "case-05",
  },
];

export default function ConcernSection() {
  const router = useRouter();
  const [currentCase, setCurrentCase] = useState(0);

  const goTo = (index: number) => {
    setCurrentCase((index + faceCases.length) % faceCases.length);
  };

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

        {/* 症例解説セクション */}
        <ScrollReveal animation="fade-up" delay={400}>
          {/* 矢印 */}
          <div className="mt-14 flex justify-center">
            <svg
              width="40"
              height="50"
              viewBox="0 0 40 50"
              fill="none"
              className="text-greige-dark"
            >
              <path
                d="M20 0 C20 30, 35 35, 35 45"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M28 40 L35 48 L38 38"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* 症例解説タイトル */}
          <div className="mt-8 text-center">
            <p className="text-[10px] md:text-xs tracking-[0.25em] text-gold-light uppercase mb-3">
              Case Analysis
            </p>
            <h3 className="font-serif text-xl md:text-2xl tracking-wider text-warm-white mb-3">
              症例解説
            </h3>
            <div className="w-8 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-xs md:text-sm text-greige-dark leading-relaxed tracking-wide max-w-md mx-auto">
              お悩みの原因がどこにあって、どのように施術したのか？
              <br />
              実際の症例から紹介します。
            </p>
          </div>

          {/* 症例カード */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div
              role="link"
              tabIndex={0}
              onClick={() => router.push(`/case#${faceCases[currentCase].caseId}`)}
              onKeyDown={(e) => { if (e.key === "Enter") router.push(`/case#${faceCases[currentCase].caseId}`); }}
              className="rounded-2xl overflow-hidden border border-gold/20 bg-warm-white cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row">
                {/* 左: 症例画像 */}
                <div className="relative w-full sm:w-1/2 aspect-[4/5] sm:aspect-auto sm:min-h-[320px]">
                  <Image
                    src={faceCases[currentCase].image}
                    alt={`${faceCases[currentCase].age} - ${faceCases[currentCase].complaint}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>

                {/* 右: テキスト */}
                <div className="w-full sm:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <span className="inline-block text-[10px] tracking-[0.2em] text-gold border border-gold/30 rounded-full px-3 py-1 w-fit mb-4">
                    CASE {String(currentCase + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs text-charcoal-light tracking-wider mb-2">
                    {faceCases[currentCase].age}
                  </p>
                  <h4 className="font-serif text-base md:text-lg tracking-wider text-charcoal mb-4 leading-relaxed">
                    {faceCases[currentCase].complaint}
                  </h4>
                  <div className="w-6 h-[1px] bg-gold/40 mb-4" />
                  <p className="text-[11px] md:text-xs text-charcoal-light leading-relaxed tracking-wide">
                    <span className="text-gold text-[10px] tracking-wider block mb-1">
                      施術アプローチ
                    </span>
                    {faceCases[currentCase].approach}
                  </p>
                  <span className="text-[10px] text-gold tracking-wider mt-3 inline-block">
                    詳しく見る →
                  </span>
                </div>
              </div>
            </div>

            {/* ナビゲーション */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => goTo(currentCase - 1)}
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                aria-label="前の症例"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex gap-2">
                {faceCases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentCase(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentCase
                        ? "bg-gold w-5"
                        : "bg-greige-dark/40 hover:bg-greige-dark/60"
                    }`}
                    aria-label={`症例 ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => goTo(currentCase + 1)}
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors"
                aria-label="次の症例"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
