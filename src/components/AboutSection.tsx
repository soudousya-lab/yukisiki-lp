import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="About" ja="YUKISIKIとは" />

        <div className="text-center space-y-6">
          <p className="font-serif text-base md:text-lg text-charcoal leading-loose tracking-wider">
            「なんとなく小顔」ではなく、
            <br className="hidden md:block" />
            <span className="text-gold">「構造的に変える」</span>
            顔専門サロン
          </p>

          <div className="gold-line mx-auto my-8" />

          <p className="text-sm md:text-base text-charcoal-light leading-relaxed md:leading-loose tracking-wide max-w-2xl mx-auto">
            YUKISIKIは、顔を構成する29個の骨格にアプローチする
            独自の矯正技術を提供しています。
            <br />
            医療レベルの解剖学知識に基づき、
            骨格の歪みを根本から整えることで、
            一時的ではない持続する変化を実現します。
          </p>

          <p className="text-sm md:text-base text-charcoal-light leading-relaxed md:leading-loose tracking-wide max-w-2xl mx-auto">
            機械は一切使わず、すべて手技のみ。
            <br />
            おひとりおひとりの骨格を見極め、
            完全オーダーメイドの施術をご提供いたします。
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { num: "11", unit: "年", label: "創業年数" },
            { num: "20,000", unit: "人+", label: "施術実績" },
            { num: "29", unit: "個", label: "対象骨格数" },
            { num: "3", unit: "ヶ国", label: "海外実績" },
          ].map((s) => (
            <div key={s.label} className="text-center py-6 border border-greige/40 rounded-2xl bg-ivory/50">
              <div className="flex items-baseline justify-center">
                <span className="number-highlight text-3xl md:text-4xl text-gold">
                  {s.num}
                </span>
                <span className="text-xs text-warm-gray ml-1">{s.unit}</span>
              </div>
              <p className="mt-2 text-[10px] md:text-xs tracking-wider text-charcoal-light">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
