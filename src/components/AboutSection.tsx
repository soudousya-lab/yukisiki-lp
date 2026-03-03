"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const philosophies = [
  {
    num: "01",
    title: "医学的に正しい矯正",
    desc: '"医学的根拠"を大切に科学的に正しい矯正を行っています。「顔の矯正は医学的に価値のある施術である」これがYUKISIKIのテーマです。',
  },
  {
    num: "02",
    title: "説明のできる施術",
    desc: '症状が「なぜ起こっているのか、どのように施術するのか。」全て説明可能です。ただ押すのではなくすべての矯正に意味を持たせています。',
  },
  {
    num: "03",
    title: "回数券や勧誘は一切無し",
    desc: '「いい施術だから通いたくなる。」この言葉を創業当時より大切にしてまいりました。"技術で勝負し、結果でこたえる"これがYUKISIKIの本質です。',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="About" ja="YUKISIKIとは" />

        <ScrollReveal animation="fade-up">
          <div className="text-center space-y-6">
            <p className="font-serif text-base md:text-lg text-charcoal leading-loose tracking-wider">
              「なんとなく小顔」ではなく、
              <br className="hidden md:block" />
              <span className="text-gold">「構造的に変える」</span>
              <br className="hidden md:block" />
              小顔矯正・顔の歪み矯正専門サロン
            </p>
          </div>
        </ScrollReveal>

        {/* 3つの理念 */}
        <ScrollReveal animation="fade-up" delay={200} className="mt-14">
          <p className="text-center text-[10px] tracking-[0.3em] text-gold uppercase mb-8">
            Three Philosophies
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {philosophies.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl p-6 md:p-8 glass-card luxury-hover text-center"
              >
                <div className="w-10 h-10 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xs text-gold number-highlight">{p.num}</span>
                </div>
                <h3 className="font-serif text-sm md:text-base tracking-wider text-charcoal mb-3">
                  {p.title}
                </h3>
                <p className="text-xs text-charcoal-light leading-relaxed tracking-wide">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 手技の説明 */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="mt-14 text-center">
            <div className="gold-line mx-auto mb-6" />
            <p className="text-sm md:text-base text-charcoal-light leading-relaxed md:leading-loose tracking-wide max-w-2xl mx-auto">
              機械は一切使わず、すべて手技による施術。
              <br />
              おひとりおひとりの骨格を見極め、
              完全オーダーメイドの施術で
              一時的ではない<span className="text-gold">&ldquo;持続する変化&rdquo;</span>を実現します。
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
