"use client";

import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import CharReveal from "./CharReveal";
import ShimmerText from "./ShimmerText";
import FloatingParticles from "./FloatingParticles";
import CountUp from "./CountUp";

export default function HeroSection() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 600),
      setTimeout(() => setStage(3), 1200),
      setTimeout(() => setStage(4), 1800),
      setTimeout(() => setStage(5), 2200),
      setTimeout(() => setStage(6), 2600),
      setTimeout(() => setStage(7), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
      <FloatingParticles count={18} />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #B8965A 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative circles with fade-in */}
      <div
        className="absolute top-20 right-10 w-72 h-72 rounded-full border border-gold/10"
        style={{ opacity: stage >= 1 ? 0.5 : 0, transition: "opacity 2s ease" }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full border border-dusty-rose/10"
        style={{ opacity: stage >= 1 ? 0.5 : 0, transition: "opacity 2s ease 0.5s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full border border-gold/5"
        style={{ opacity: stage >= 2 ? 0.3 : 0, transition: "opacity 2s ease 1s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Top badge */}
        <div
          className="mb-8"
          style={{
            opacity: stage >= 1 ? 1 : 0,
            transform: stage >= 1 ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] text-gold border border-gold/30 rounded-full px-5 py-2 uppercase">
            Nakameguro — Face Specialist
          </span>
        </div>

        {/* Main copy - character reveal */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed tracking-wider text-charcoal">
          <CharReveal text="顔の歪みを整え、" isVisible={stage >= 2} charDelay={60} />
          <br />
          <ShimmerText className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">
            <CharReveal text="10年前の輪郭" isVisible={stage >= 3} charDelay={70} />
          </ShimmerText>
          <CharReveal text="へ" isVisible={stage >= 3} startDelay={500} charDelay={60} />
        </h1>

        {/* Sub copy with count up */}
        <p
          className="mt-6 md:mt-8 text-sm md:text-base text-warm-gray leading-loose tracking-wider"
          style={{
            opacity: stage >= 4 ? 1 : 0,
            transform: stage >= 4 ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          創業11年、国内外
          <span className="text-gold text-lg md:text-xl mx-1">
            <CountUp end={20000} duration={2500} className="text-gold text-lg md:text-xl" />
          </span>
          人以上の施術実績
        </p>

        {/* Credential badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4">
          {["中目黒駅 徒歩5分", "海外技術指導実績", "国家資格保有"].map((badge, i) => (
            <span
              key={badge}
              className="text-[10px] md:text-xs text-charcoal-light tracking-wider bg-greige/30 px-4 py-1.5 rounded-full"
              style={{
                opacity: stage >= 5 ? 1 : 0,
                transform: stage >= 5 ? "translateY(0) scale(1)" : "translateY(10px) scale(0.95)",
                transition: `opacity 0.5s ease ${i * 120}ms, transform 0.5s ease ${i * 120}ms`,
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10 md:mt-14"
          style={{
            opacity: stage >= 6 ? 1 : 0,
            transform: stage >= 6 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <CTAButton large />
          <p className="mt-3 text-[10px] text-warm-gray tracking-wider">
            10:00〜22:00 ／ 完全予約制
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
        style={{ opacity: stage >= 7 ? 1 : 0, transition: "opacity 1s ease" }}
      >
        <span className="text-[9px] tracking-[0.2em] text-warm-gray uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
