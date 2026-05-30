"use client";

import Link from "next/link";
import { FiArrowLeft, FiPhone, FiCalendar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ShimmerText from "./ShimmerText";
import FloatingParticles from "./FloatingParticles";

const approaches = [
  {
    num: "01",
    title: "骨格構造から根本的に変える",
    desc: "リンパを流す、筋肉をマッサージする、ただ強く押す——ではなく、身体の骨格と顎関節を中心とした顔の関節、23枚の顔の骨のパズルを正しく整え、根本から構造的に変化させます。",
  },
  {
    num: "02",
    title: "医学的に正しい施術",
    desc: "YUKISIKIは\u201C医学的に正しい。\u201Dを追求しています。状態を分析し医学的根拠に基づいて施術する。ただルーティンのような施術はしません。",
  },
  {
    num: "03",
    title: "完全オーダーメイド",
    desc: "1人1人の状態に合わせて、最適な施術で骨格から変える。お客様の骨格を見極め、構造的にアプローチする顔の専門サロンです。",
  },
];

const differences = [
  {
    label: "一般的な小顔矯正",
    items: [
      "リンパを流してすっきりさせる",
      "筋肉をマッサージしてほぐす",
      "一時的な変化",
      "ルーティンの施術",
    ],
    type: "other" as const,
  },
  {
    label: "YUKISIKIの小顔矯正",
    items: [
      "骨格構造から根本的にアプローチ",
      "23枚の顔の骨を正しく整える",
      "持続する構造的な変化",
      "1人1人に合わせた完全オーダーメイド",
    ],
    type: "yukisiki" as const,
  },
];

export default function KogaoContent() {
  return (
    <>
      {/* ナビゲーションバー */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs tracking-wider text-charcoal-light hover:text-gold transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            TOPへ戻る
          </Link>
          <span className="font-serif text-lg tracking-widest text-gold-shimmer">
            YUKISIKI
          </span>
          <a
            href="http://b.hpr.jp/kr/hp/H000770985"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-gold text-white text-xs tracking-wider px-6 py-2.5 rounded-full hover:bg-gold-dark hover:scale-[1.03] transition-all cta-shine"
          >
            ご予約はこちら
          </a>
        </div>
      </nav>

      <main>
        {/* ヒーローセクション */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-ivory pt-20">
          <FloatingParticles count={12} />

          {/* 背景パターン */}
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

          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <span className="inline-block text-[10px] md:text-xs tracking-[0.25em] text-gold border border-gold/30 rounded-full px-5 py-2 uppercase mb-8 animate-fade-in-up">
              Small Face Correction
            </span>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-wider text-charcoal animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              顔を本来あるべき姿に
              <br />
              <ShimmerText>&ldquo;最適化&rdquo;</ShimmerText>
              する。
            </h1>

            <p className="mt-8 text-sm md:text-base text-charcoal-light leading-loose tracking-wider max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              小顔矯正とは、日常の癖などで広がった
              <br className="hidden md:block" />
              歪んだ骨格を元の正しい状態に整えること。
            </p>

            <div className="gold-line-wide mx-auto mt-10 animate-fade-in" style={{ animationDelay: "0.8s" }} />
          </div>
        </section>

        {/* 小顔矯正とは */}
        <section className="py-20 md:py-28 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="What is" ja="小顔矯正とは" />

            <ScrollReveal animation="fade-up">
              <div className="text-center space-y-6">
                <p className="font-serif text-base md:text-lg text-charcoal leading-loose tracking-wider max-w-2xl mx-auto">
                  小顔矯正というのは日常の癖などで広がった、歪んだ骨格を元の正しい状態に整えること。
                </p>
                <p className="text-sm md:text-base text-charcoal-light leading-loose tracking-wide max-w-2xl mx-auto">
                  身体の骨格と顎関節を中心とした顔の関節、
                  <span className="text-gold font-serif">23枚の顔の骨のパズル</span>
                  を正しく整え、根本から構造的に変化させる。
                </p>
                <p className="text-sm md:text-base text-charcoal-light leading-loose tracking-wide max-w-2xl mx-auto">
                  顔を本来あるべき姿に
                  <span className="text-gold font-serif">&ldquo;最適化すること。&rdquo;</span>
                  <br />
                  これがYUKISIKIの小顔矯正です。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* YUKISIKIのアプローチ */}
        <section className="py-20 md:py-28 bg-charcoal text-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="Our Approach" ja="YUKISIKIの小顔矯正" light />

            <ScrollReveal animation="fade-up">
              <p className="text-center text-sm md:text-base text-greige leading-loose tracking-wide max-w-2xl mx-auto mb-14">
                小顔矯正は正しく行えば
                <span className="text-gold-light">&ldquo;価値のある施術&rdquo;</span>
                です。
                <br />
                YUKISIKIは骨格から変える、構造的にアプローチする顔の専門サロン。
              </p>
            </ScrollReveal>

            <ScrollReveal className="grid md:grid-cols-3 gap-6" stagger={200}>
              {approaches.map((a) => (
                <div
                  key={a.num}
                  className="rounded-2xl p-6 md:p-8 glass-card-dark luxury-hover text-center"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xs text-gold-light number-highlight">
                      {a.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm md:text-base tracking-wider text-warm-white mb-3">
                    {a.title}
                  </h3>
                  <p className="text-xs text-greige leading-relaxed tracking-wide">
                    {a.desc}
                  </p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* 他との違い */}
        <section className="py-20 md:py-28 bg-ivory">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="Difference" ja="一般的な小顔矯正との違い" />

            <ScrollReveal className="grid md:grid-cols-2 gap-6 md:gap-8" stagger={200}>
              {differences.map((d) => (
                <div
                  key={d.label}
                  className={`rounded-2xl p-8 md:p-10 ${
                    d.type === "yukisiki"
                      ? "bg-charcoal text-warm-white border border-gold/20"
                      : "glass-card"
                  }`}
                >
                  <p
                    className={`text-[10px] tracking-[0.3em] uppercase mb-4 ${
                      d.type === "yukisiki" ? "text-gold-light" : "text-warm-gray"
                    }`}
                  >
                    {d.type === "yukisiki" ? "YUKISIKI" : "General"}
                  </p>
                  <h3
                    className={`font-serif text-base md:text-lg tracking-wider mb-6 ${
                      d.type === "yukisiki" ? "text-warm-white" : "text-charcoal"
                    }`}
                  >
                    {d.label}
                  </h3>
                  <ul className="space-y-3">
                    {d.items.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-sm leading-relaxed tracking-wide ${
                          d.type === "yukisiki"
                            ? "text-greige"
                            : "text-charcoal-light"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex-shrink-0 ${
                            d.type === "yukisiki" ? "text-gold-light" : "text-warm-gray"
                          }`}
                        >
                          {d.type === "yukisiki" ? "◆" : "―"}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* 実績 */}
        <section className="py-20 md:py-28 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="Track Record" ja="創業11年の実績" />

            <ScrollReveal animation="fade-up">
              <div className="rounded-2xl p-8 md:p-12 glass-card max-w-3xl mx-auto text-center">
                <p className="text-sm md:text-base text-charcoal-light leading-loose tracking-wide mb-6">
                  その結果、創業11年——
                  <br />
                  顔の施術1本で、世界からも施術依頼を受けるようになりました。
                </p>
                <div className="gold-line-wide mx-auto my-6" />
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl text-gold number-highlight">11</p>
                    <p className="text-[10px] text-charcoal-light tracking-wider mt-1">年の実績</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl text-gold number-highlight">20,000+</p>
                    <p className="text-[10px] text-charcoal-light tracking-wider mt-1">施術実績</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl text-gold number-highlight">海外</p>
                    <p className="text-[10px] text-charcoal-light tracking-wider mt-1">からも依頼</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-charcoal to-charcoal/95 text-warm-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal animation="fade-up">
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold-light uppercase mb-3">
                Reservation
              </p>
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-wider mb-4">
                <ShimmerText>ご予約・お問い合わせ</ShimmerText>
              </h2>
              <div className="gold-line-wide mx-auto mb-8" />
              <p className="text-sm text-greige tracking-wider leading-relaxed mb-10">
                まずはお気軽にご相談ください。
                <br />
                あなたの骨格に合わせた最適な施術をご提案します。
              </p>
            </ScrollReveal>

            <ScrollReveal
              animation="fade-up"
              delay={200}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
              stagger={150}
            >
              <a
                href="tel:08063202573"
                className="flex items-center gap-3 border-2 border-gold/40 text-gold-light rounded-full px-8 py-4 hover:bg-gold/10 transition-colors w-full sm:w-auto justify-center"
              >
                <FiPhone className="w-5 h-5" />
                <span className="tracking-wider">080-6320-2573</span>
              </a>
              <a
                href="http://b.hpr.jp/kr/hp/H000770985"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gold text-white rounded-full px-8 py-4 hover:bg-gold-dark transition-colors cta-pulse cta-shine w-full sm:w-auto justify-center"
              >
                <FiCalendar className="w-5 h-5" />
                <span className="tracking-wider">Web予約はこちら</span>
              </a>
            </ScrollReveal>

            <ScrollReveal animation="fade-in" delay={400}>
              <p className="mt-6 text-[10px] text-warm-gray tracking-wider">
                受付時間 10:00〜22:00 ／ 不定休
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="py-8 bg-charcoal text-center">
        <Link
          href="/"
          className="font-serif text-sm tracking-widest text-gold-shimmer"
        >
          YUKISIKI
        </Link>
        <p className="mt-3 text-[10px] text-warm-gray tracking-wider">
          &copy; {new Date().getFullYear()} YUKISIKI. All rights reserved.
        </p>
      </footer>
    </>
  );
}
