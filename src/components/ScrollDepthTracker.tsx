"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/gtag";

/**
 * スクロール深度トラッカー
 * 25%, 50%, 75%, 100% の各地点で1回だけGA4イベントを発火する
 */
export default function ScrollDepthTracker() {
  // 発火済みの深度を記録（重複防止）
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const percentage = Math.round((window.scrollY / scrollHeight) * 100);

      for (const threshold of thresholds) {
        if (percentage >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
