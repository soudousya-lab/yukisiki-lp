"use client";

import { useMemo } from "react";

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export default function FloatingParticles({
  count = 15,
  className = "",
}: FloatingParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      // Deterministic pseudo-random based on index to avoid hydration mismatch
      const seed1 = ((i * 17 + 31) % 100) / 100;
      const seed2 = ((i * 23 + 47) % 100) / 100;
      const seed3 = ((i * 37 + 11) % 100) / 100;
      const seed4 = ((i * 41 + 19) % 100) / 100;

      return {
        top: `${seed1 * 100}%`,
        left: `${seed2 * 100}%`,
        size: 2 + seed3 * 4,
        duration: 15 + seed4 * 15,
        delay: seed1 * 10,
        opacity: 0.04 + seed3 * 0.08,
        isGold: i % 3 !== 0,
      };
    });
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.isGold
              ? "var(--color-gold)"
              : "var(--color-dusty-rose)",
            "--particle-opacity": p.opacity,
            "--particle-duration": `${p.duration}s`,
            "--particle-delay": `${p.delay}s`,
            opacity: p.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
