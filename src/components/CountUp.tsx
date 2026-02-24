"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
  duration?: number;
  className?: string;
  suffixClassName?: string;
}

export default function CountUp({
  end,
  suffix,
  prefix,
  separator = ",",
  duration = 2000,
  className = "",
  suffixClassName = "",
}: CountUpProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  const value = useCountUp({
    end,
    duration,
    isVisible,
    separator,
  });

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={`number-highlight ${className}`}>
      {prefix}
      {value}
      {suffix && <span className={suffixClassName}>{suffix}</span>}
    </span>
  );
}
