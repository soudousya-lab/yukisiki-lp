"use client";

import { useMemo } from "react";

interface CharRevealProps {
  text: string;
  className?: string;
  charDelay?: number;
  startDelay?: number;
  isVisible: boolean;
  shimmer?: boolean;
}

export default function CharReveal({
  text,
  className = "",
  charDelay = 50,
  startDelay = 0,
  isVisible,
  shimmer = false,
}: CharRevealProps) {
  const chars = useMemo(() => Array.from(text), [text]);

  return (
    <span className={`${shimmer ? "text-gold-shimmer" : ""} ${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={i}
          className={isVisible ? "char-visible" : "char-hidden"}
          style={{
            transitionDelay: isVisible ? `${startDelay + i * charDelay}ms` : "0ms",
          }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
