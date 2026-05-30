"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const career = [
  { year: "2014", event: "鍼灸国家資格取得、同年岡山市内にYUKISIKI小顔矯正開業" },
  { year: "2015", event: "岡山県鍼灸マッサージ師会理事・部長就任" },
  { year: "2018", event: "海外施術開始" },
  { year: "2019", event: "海外大手美容サロン総院長就任" },
  { year: "2025", event: "YUKISIKI小顔矯正中目黒開業" },
];

export default function TherapistSection() {
  return (
    <section id="therapist" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="Therapist" ja="施術者紹介" />

        <div className="md:flex md:gap-12 items-start">
          <ScrollReveal animation="fade-right" className="md:w-2/5 mb-8 md:mb-0">
            <div className="aspect-[3/4] rounded-2xl border border-greige/20 overflow-hidden relative">
              <Image
                src="/images/therapist/therapist-portrait.webp"
                alt="施術者 多賀勇輝"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" className="md:w-3/5">
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">Owner & Therapist</p>
            <h3 className="font-serif text-xl md:text-2xl tracking-wider text-charcoal mb-1">多賀勇輝</h3>
            <p className="text-[10px] tracking-[0.2em] text-warm-gray uppercase mb-1">YUKI TAGA</p>
            <p className="text-xs text-warm-gray tracking-wider mb-6">YUKISIKI 代表 ／ 鍼灸国家資格保有</p>
            <div className="gold-line mb-6" />
            <div className="space-y-4 text-sm text-charcoal-light leading-relaxed tracking-wide">
              <p>13歳の頃から自身の顔のコンプレックスに悩み、「顔を変えたい」という想いから施術の道へ。</p>
              <p>23歳で鍼灸国家資格を取得後、小顔矯正・顔の歪み矯正の技術を徹底的に追求。以来11年間、顔専門の施術ひと筋で20,000人以上のお客様の顔と向き合ってきました。</p>
              <p>「顔の矯正は医学的に価値のある施術である」という信念のもと、解剖学に基づいた独自の手技を確立。その技術はシンガポール・上海など海外サロンからも認められ、施術依頼のオファーを受けるまでになりました。</p>
              <p className="text-charcoal font-medium">一人ひとりの骨格と真剣に向き合い、最善の結果をお約束します。</p>
            </div>

            {/* 経歴 */}
            <div className="mt-8">
              <p className="text-[10px] tracking-[0.2em] text-gold uppercase mb-4">Career</p>
              <div className="space-y-2.5">
                {career.map((c) => (
                  <div key={c.year} className="flex gap-4 items-start text-xs">
                    <span className="text-gold number-highlight flex-shrink-0 w-10">{c.year}</span>
                    <span className="text-charcoal-light leading-relaxed tracking-wide">{c.event}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["国家資格保有", "解剖学専門知識", "海外施術実績5年", "11年顔専門"].map((q) => (
                <span key={q} className="text-[10px] tracking-wider text-gold border border-gold/20 rounded-full px-3 py-1">{q}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
