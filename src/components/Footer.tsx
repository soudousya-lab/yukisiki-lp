"use client";

import ScrollReveal from "./ScrollReveal";
import ShimmerText from "./ShimmerText";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 py-10">
      <ScrollReveal animation="fade-in">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-serif text-sm tracking-[0.3em]">
            <ShimmerText>YUKISIKI</ShimmerText>
          </p>
          <p className="mt-2 text-[10px] text-warm-gray tracking-wider">小顔矯正 中目黒</p>
          <p className="mt-4 text-[9px] text-warm-gray/60 tracking-wider">&copy; {new Date().getFullYear()} YUKISIKI. All rights reserved.</p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
