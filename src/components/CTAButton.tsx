import { FiCalendar } from "react-icons/fi";

interface Props {
  className?: string;
  large?: boolean;
}

export default function CTAButton({ className = "", large }: Props) {
  return (
    <a
      href="#reserve"
      className={`inline-flex items-center justify-center gap-2 bg-gold text-white tracking-wider rounded-full hover:bg-gold-dark transition-all cta-pulse ${
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
