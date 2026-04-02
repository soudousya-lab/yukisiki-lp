"use client";

import { useState, useEffect } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { trackCTAClick } from "@/lib/gtag";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "YUKISIKIとは" },
    { href: "#difference", label: "選ばれる理由" },
    { href: "#results", label: "実績" },
    { href: "#voice", label: "お客様の声" },
    { href: "#therapist", label: "施術者紹介" },
    { href: "#price", label: "料金" },
    { href: "#access", label: "アクセス" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-warm-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-100%)",
        transition: "opacity 0.8s ease, transform 0.8s ease, background-color 0.5s ease, box-shadow 0.5s ease",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className={`font-serif text-lg md:text-xl tracking-widest transition-colors duration-500 ${scrolled ? "text-gold-shimmer" : "text-charcoal"}`}>
          YUKISIKI
        </a>
        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-xs tracking-wider text-charcoal-light hover:text-gold transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:08063202573"
            onClick={() => trackCTAClick("phone", "header")}
            className="hidden md:flex items-center gap-2 text-sm text-gold border border-gold/30 rounded-full px-4 py-2 hover:bg-gold/5 transition-colors"
          >
            <FiPhone className="w-3.5 h-3.5" />080-6320-2573
          </a>
          <a
            href="#reserve"
            onClick={() => trackCTAClick("web_booking", "header")}
            className="hidden md:inline-block bg-gold text-white text-xs tracking-wider px-6 py-2.5 rounded-full hover:bg-gold-dark hover:scale-[1.03] transition-all cta-shine"
          >
            ご予約はこちら
          </a>
          <button className="lg:hidden text-charcoal p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー">
            {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu with transition */}
      <div
        className={`lg:hidden bg-warm-white/98 backdrop-blur-md border-t border-greige/30 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center py-6 gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm tracking-wider text-charcoal-light hover:text-gold transition-colors">{l.label}</a>
          ))}
          <a
            href="tel:08063202573"
            onClick={() => trackCTAClick("phone", "header_mobile")}
            className="flex items-center gap-2 text-sm text-gold"
          >
            <FiPhone className="w-4 h-4" />080-6320-2573
          </a>
          <a
            href="#reserve"
            onClick={() => { trackCTAClick("web_booking", "header_mobile"); setMenuOpen(false); }}
            className="bg-gold text-white text-sm tracking-wider px-8 py-3 rounded-full"
          >
            ご予約はこちら
          </a>
        </nav>
      </div>
    </header>
  );
}
