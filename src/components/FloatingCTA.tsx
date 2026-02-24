"use client";

import { useState, useEffect } from "react";
import { FiPhone, FiCalendar } from "react-icons/fi";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-warm-white/95 backdrop-blur-md border-t border-greige/30 px-4 py-3 flex gap-3">
      <a
        href="tel:08063202573"
        className="flex-1 flex items-center justify-center gap-2 border border-gold/30 text-gold rounded-full py-3 text-xs tracking-wider"
      >
        <FiPhone className="w-3.5 h-3.5" />
        電話予約
      </a>
      <a
        href="#reserve"
        className="flex-1 flex items-center justify-center gap-2 bg-gold text-white rounded-full py-3 text-xs tracking-wider"
      >
        <FiCalendar className="w-3.5 h-3.5" />
        Web予約
      </a>
    </div>
  );
}
