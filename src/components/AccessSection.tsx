"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { FiMapPin, FiClock, FiPhone } from "react-icons/fi";

export default function AccessSection() {
  return (
    <section id="access" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="Access" ja="アクセス" />

        <div className="md:flex md:gap-10">
          <ScrollReveal animation="fade-right" className="md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-greige/30">
              <iframe
                src="https://www.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%9B%AE%E9%BB%92%E5%8C%BA%E4%B8%8A%E7%9B%AE%E9%BB%923-15-2+W-1&output=embed&hl=ja"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="YUKISIKI 中目黒 地図"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" className="md:w-1/2 space-y-6">
            <h3 className="font-serif text-lg tracking-wider text-charcoal">YUKISIKI 小顔矯正 中目黒</h3>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <FiMapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-charcoal tracking-wider">〒153-0051</p>
                  <p className="text-sm text-charcoal tracking-wider">東京都目黒区上目黒3-15-2 W-1</p>
                  <p className="text-xs text-warm-gray tracking-wider mt-1">中目黒駅より徒歩約5分</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <FiClock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-charcoal tracking-wider">営業時間：10:00〜22:00</p>
                  <p className="text-xs text-warm-gray tracking-wider mt-1">完全予約制</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <FiPhone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:08063202573" className="text-sm text-charcoal tracking-wider hover:text-gold transition-colors">080-6320-2573</a>
                </div>
              </div>
            </div>
            <div className="gold-line" />
            <div className="bg-warm-white border border-greige/30 rounded-xl p-5">
              <p className="text-xs text-charcoal-light leading-relaxed tracking-wide">
                中目黒駅の正面出口を出て、山手通りを目黒方面へ。徒歩約5分、閑静な住宅街の中にあるプライベートサロンです。
                <br /><span className="text-warm-gray">※ 完全予約制のため、事前のご予約をお願いいたします。</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
