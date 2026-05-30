"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 400),
      setTimeout(() => setStage(2), 1000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-charcoal">
      {/* 背景：文字入りヒーロー画像（LCP要素・優先読み込み） */}
      <Image
        src="/images/hero/hero.webp"
        alt="“骨”から変わる、唯一無二の小顔矯正｜中目黒の小顔・顔の歪み矯正専門サロン YUKISIKI"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[30%_center] md:object-center"
      />

      {/* 下部グラデ：CTAの視認性確保 */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal/70 to-transparent" />

      {/* CTA */}
      <div
        className="relative z-10 mb-14 md:mb-20 text-center px-6"
        style={{
          opacity: stage >= 1 ? 1 : 0,
          transform: stage >= 1 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
          transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <CTAButton large />
        <p className="mt-3 text-[10px] md:text-xs text-warm-white/90 tracking-wider drop-shadow">
          10:00〜22:00 ／ 完全予約制
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator z-10"
        style={{ opacity: stage >= 2 ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <span className="text-[9px] tracking-[0.2em] text-warm-white/70 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-warm-white/50 to-transparent" />
      </div>
    </section>
  );
}
