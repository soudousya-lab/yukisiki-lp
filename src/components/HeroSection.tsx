import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory">
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

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-gold/10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full border border-dusty-rose/10" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Top badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] text-gold border border-gold/30 rounded-full px-5 py-2 uppercase">
            Nakameguro — Face Specialist
          </span>
        </div>

        {/* Main copy */}
        <h1
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed tracking-wider text-charcoal animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          顔の歪みを整え、
          <br />
          <span className="text-gold-gradient">10年前の輪郭</span>へ
        </h1>

        {/* Sub copy */}
        <p
          className="mt-6 md:mt-8 text-sm md:text-base text-warm-gray leading-loose tracking-wider animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          創業11年、国内外
          <span className="number-highlight text-gold text-lg md:text-xl mx-1">
            20,000
          </span>
          人以上の施術実績
        </p>

        {/* Credential badges */}
        <div
          className="mt-6 flex flex-wrap justify-center gap-3 md:gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          {[
            "中目黒駅 徒歩5分",
            "海外技術指導実績",
            "国家資格保有",
          ].map((badge) => (
            <span
              key={badge}
              className="text-[10px] md:text-xs text-charcoal-light tracking-wider bg-greige/30 px-4 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10 md:mt-14 animate-fade-in-up"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          <CTAButton large />
          <p className="mt-3 text-[10px] text-warm-gray tracking-wider">
            10:00〜22:00 ／ 完全予約制
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.5s", opacity: 0 }}>
        <span className="text-[9px] tracking-[0.2em] text-warm-gray uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
