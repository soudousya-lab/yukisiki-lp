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
    // pt-16/md:pt-20 = 固定ヘッダーの高さ分。これでヘッダーが
    // 上から出ても画像全体が隠れずに表示される（PC・スマホ共通）
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-charcoal pt-16 md:pt-20">
      {/* 画像：2560×1440=16:9。aspect-[16/9]で全体を無切れ表示 */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src="/images/hero/hero.webp"
          alt="“骨”から変わる、唯一無二の小顔矯正｜中目黒の小顔・顔の歪み矯正専門サロン YUKISIKI"
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* CTA：画像下の暗背景に配置 */}
      <div
        className="relative z-10 flex flex-col items-center text-center px-6 mt-6 md:mt-10"
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
