"use client";

import { FiCalendar } from "react-icons/fi";
import { trackCTAClick } from "@/lib/gtag";

interface Props {
  className?: string;
  large?: boolean;
  /** トラッキング用の配置場所（デフォルト: "cta_button"） */
  location?: string;
}

export default function CTAButton({ className = "", large, location = "cta_button" }: Props) {
  const handleClick = () => {
    trackCTAClick("web_booking", location);
  };

  return (
    <a
      href="#reserve"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 bg-gold text-white tracking-wider rounded-full hover:bg-gold-dark hover:scale-[1.03] transition-all cta-pulse cta-shine ${
        large
          ? "text-sm md:text-base px-10 py-4 md:px-14 md:py-5"
          : "text-xs md:text-sm px-8 py-3 md:px-10 md:py-3.5"
      } ${className}`}
    >
      <FiCalendar className={large ? "w-5 h-5" : "w-4 h-4"} />
      ご予約・お問い合わせ
    </a>
  );
}
