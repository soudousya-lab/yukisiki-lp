"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiPhone, FiCalendar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import ShimmerText from "./ShimmerText";
import FloatingParticles from "./FloatingParticles";

const faceCauses = [
  { label: "片方噛み", desc: "片側だけで噛む癖が顎関節に左右差を生む" },
  { label: "歯ぎしり", desc: "就寝中の歯ぎしりが顎周りの骨格に負担をかける" },
  { label: "頬杖", desc: "片側に持続的な圧力がかかり顔の左右差を生む" },
  { label: "片方で寝る", desc: "横向き・うつ伏せで片側に体重がかかり顔が歪む" },
];

const bodyCauses = [
  { label: "猫背", desc: "首が前に出ることで顎関節と首の骨の連動に不具合が起こる" },
  { label: "姿勢の崩れ", desc: "身体全体のバランスが崩れ顔の歪みに影響する" },
  { label: "ストレートネック", desc: "首の自然なカーブが失われ顎関節への負担が増大する" },
  { label: "片方重心", desc: "片足に体重をかける癖が骨盤から顔まで歪みを連鎖させる" },
];

const habits = [
  { title: "うつぶせ寝", desc: "顔に一方向の圧力が長時間かかる", image: "/images/yugami/うつぶせ寝_0.webp" },
  { title: "テレビ・スマホ姿勢", desc: "首が前に出て姿勢が崩れる", image: "/images/yugami/スマホテレビ姿勢_0.webp" },
  { title: "長時間スマホ", desc: "下を向き続けることで首・顎に負担がかかる", image: "/images/yugami/スマホ長時間使用_0.webp" },
  { title: "脚を組む", desc: "身体の歪みが顔に伝わる", image: "/images/yugami/脚を組む_0.webp" },
  { title: "歯ぎしり", desc: "顎関節に過度な負担がかかる", image: "/images/yugami/歯ぎしり_0.webp" },
  { title: "片方噛み", desc: "筋肉と関節のバランスが崩れる", image: "/images/yugami/片方かみ_0.webp" },
  { title: "バッグを片方で持つ", desc: "左右の筋肉バランスが崩れ歪みに繋がる", image: "/images/yugami/片方でバックを持つ_0.webp" },
  { title: "頬杖をつく", desc: "片側に圧力がかかり左右差を生む", image: "/images/yugami/頬杖_0.webp" },
];

export default function YugamiContent() {
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
              Face Alignment
            </span>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-wider text-charcoal animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <ShimmerText>&ldquo;顔も関節。&rdquo;</ShimmerText>
            </h1>

            <p className="mt-8 text-sm md:text-base text-charcoal-light leading-loose tracking-wider max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              猫背になると身体が歪むように、
              <br />
              顔も日常の癖によって歪みが出てくる。
              <br />
              身体の矯正も顔の矯正も、本質は何ら変わりません。
            </p>

            <div className="gold-line-wide mx-auto mt-10 animate-fade-in" style={{ animationDelay: "0.8s" }} />
          </div>
        </section>

        {/* 顔の歪み矯正とは */}
        <section className="py-20 md:py-28 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="What is" ja="顔の歪み矯正とは" />

            <ScrollReveal animation="fade-up">
              <div className="text-center space-y-6">
                <p className="font-serif text-base md:text-lg text-charcoal leading-loose tracking-wider max-w-2xl mx-auto">
                  姿勢が崩れて猫背になると身体が歪むように、
                  <br className="hidden md:block" />
                  顔も日常の癖で歪みが出てきます。
                </p>
                <p className="text-sm md:text-base text-charcoal-light leading-loose tracking-wide max-w-2xl mx-auto">
                  顔の歪みの矯正は、
                  <span className="text-gold font-serif">&ldquo;顔に蓄積した歪み&rdquo;</span>
                  を正しく整えて顔をリセットしてあげる矯正。
                </p>
                <p className="text-sm md:text-base text-charcoal-light leading-loose tracking-wide max-w-2xl mx-auto">
                  猫背が取れると胸が開いて姿勢が良くなるのと同じで、顔も原因となる癖を取り除くことで歪みが整います。
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mt-14 rounded-2xl p-8 md:p-10 glass-card text-center max-w-2xl mx-auto">
                <p className="font-serif text-base md:text-lg text-charcoal tracking-wider leading-relaxed">
                  顔の歪み矯正も姿勢の矯正も何ら変わりはない。
                  <br />
                  本質は日常の癖によって、
                  <span className="text-gold">左右差が生まれ関節がズレている</span>
                  だけ。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 歪みの原因 */}
        <section className="py-20 md:py-28 bg-charcoal text-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="Causes" ja="歪みの原因" light />

            <ScrollReveal animation="fade-up">
              <p className="text-center text-sm md:text-base text-greige leading-loose tracking-wide max-w-2xl mx-auto mb-14">
                顔の歪みは
                <span className="text-gold-light">顎関節と首の骨の動きの連動</span>
                が不具合を起こして起こることがほとんど。
                <br />
                顔由来と身体由来の歪みが組み合わさり起こっています。
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* 顔由来 */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="rounded-2xl p-8 glass-card-dark">
                  <p className="text-[10px] tracking-[0.3em] text-gold-light uppercase mb-4 text-center">
                    Face Origin
                  </p>
                  <h3 className="font-serif text-base md:text-lg tracking-wider text-warm-white mb-6 text-center">
                    顔由来の歪み
                  </h3>
                  <div className="space-y-4">
                    {faceCauses.map((c) => (
                      <div key={c.label} className="flex items-start gap-3">
                        <span className="text-gold-light mt-0.5 flex-shrink-0">
                          ◆
                        </span>
                        <div>
                          <p className="text-sm text-warm-white tracking-wider mb-1">
                            {c.label}
                          </p>
                          <p className="text-xs text-greige leading-relaxed tracking-wide">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 身体由来 */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="rounded-2xl p-8 glass-card-dark">
                  <p className="text-[10px] tracking-[0.3em] text-gold-light uppercase mb-4 text-center">
                    Body Origin
                  </p>
                  <h3 className="font-serif text-base md:text-lg tracking-wider text-warm-white mb-6 text-center">
                    身体由来の歪み
                  </h3>
                  <div className="space-y-4">
                    {bodyCauses.map((c) => (
                      <div key={c.label} className="flex items-start gap-3">
                        <span className="text-gold-light mt-0.5 flex-shrink-0">
                          ◆
                        </span>
                        <div>
                          <p className="text-sm text-warm-white tracking-wider mb-1">
                            {c.label}
                          </p>
                          <p className="text-xs text-greige leading-relaxed tracking-wide">
                            {c.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="mt-14 text-center">
                <div className="gold-line mx-auto mb-6" />
                <p className="text-sm md:text-base text-greige leading-loose tracking-wide max-w-2xl mx-auto">
                  どこに歪みの本質があるのか？
                  <br />
                  これを正しく分析し、取り除くことで
                  <br className="md:hidden" />
                  顔の歪みを整えていくことができます。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 歪みを作る習慣 */}
        <section className="py-20 md:py-28 bg-ivory">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="Bad Habits" ja="歪みを作る習慣" />

            <ScrollReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" stagger={120}>
              {habits.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl overflow-hidden glass-card luxury-hover text-center"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <h4 className="font-serif text-sm tracking-wider text-charcoal mb-2">
                      {h.title}
                    </h4>
                    <p className="text-[11px] text-charcoal-light leading-relaxed tracking-wide">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Bad Habits 詳細記事リンク */}
        <section className="py-20 md:py-24 bg-ivory">
          <div className="max-w-3xl mx-auto px-6">
            <ScrollReveal animation="fade-up">
              <p className="text-center text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-3">
                Want to know more
              </p>
              <h2 className="font-serif text-center text-lg md:text-xl lg:text-2xl tracking-wider text-charcoal leading-relaxed mb-12">
                各習慣がどう骨格に作用するのか、
                <br />
                医学的な詳細を解説しています
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <a
                href="/yugami/blog/causes/8-habits-cause-face-distortion"
                className="group block rounded-2xl glass-card border border-gold/20 p-8 md:p-10 hover:border-gold/50 hover:-translate-y-0.5 transition-all"
              >
                <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-3">
                  No. 01 — Causes
                </p>
                <h3 className="font-serif text-base md:text-lg lg:text-xl text-charcoal leading-snug tracking-wider mb-4 group-hover:text-gold transition-colors">
                  顔の歪みの本当の原因——日常の8つの癖が顔を曲げていく医学的メカニズム
                </h3>
                <p className="text-sm text-charcoal-light leading-loose tracking-wide mb-6">
                  片噛み、頬杖、うつ伏せ寝。臨床現場で見てきた「顔を歪ませる8つの癖」を解剖学とウォルフの法則に基づいて解説。骨はなぜ動くのか、どう連鎖するのか——。
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-5 border-t border-gold/10">
                  <span className="text-[11px] text-warm-gray tracking-wider">
                    Reading time — 約10分
                  </span>
                  <span className="text-xs tracking-[0.2em] text-gold uppercase group-hover:translate-x-2 transition-transform">
                    Read this article →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* なぜ顔の歪み矯正は少ないのか */}
        <section className="py-20 md:py-28 bg-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading
              en="Why So Few?"
              ja={<>なぜ&ldquo;小顔矯正&rdquo;は多いのに<br />&ldquo;顔の歪み矯正&rdquo;は少ないのか？</>}
            />

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="rounded-2xl p-8 md:p-10 glass-card h-full">
                  <p className="text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-4">
                    Small Face Correction
                  </p>
                  <h3 className="font-serif text-base md:text-lg tracking-wider text-charcoal mb-5">
                    小顔矯正が多い理由
                  </h3>
                  <div className="gold-line mb-5" />
                  <p className="text-sm text-charcoal-light leading-loose tracking-wide">
                    小顔矯正は極論、適当に顔に触れているだけでリンパが勝手に流れるので、一時的にもすっきりしやすい。
                  </p>
                  <p className="mt-3 text-sm text-charcoal-light leading-loose tracking-wide">
                    <span className="text-gold">&ldquo;悪化する&rdquo;</span>
                    可能性もほとんどないため、施術のハードルが低い。
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="rounded-2xl p-8 md:p-10 bg-charcoal text-warm-white border border-gold/20 h-full">
                  <p className="text-[10px] tracking-[0.3em] text-gold-light uppercase mb-4">
                    Face Alignment
                  </p>
                  <h3 className="font-serif text-base md:text-lg tracking-wider text-warm-white mb-5">
                    顔の歪み矯正が少ない理由
                  </h3>
                  <div className="gold-line mb-5" />
                  <p className="text-sm text-greige leading-loose tracking-wide">
                    顔の歪みは本質から正しくアプローチしないと
                    <span className="text-gold-light">&ldquo;変わらない&rdquo;</span>
                    又は
                    <span className="text-gold-light">&ldquo;悪化する&rdquo;</span>
                    可能性が非常に高い。
                  </p>
                  <p className="mt-3 text-sm text-greige leading-loose tracking-wide">
                    施術が難しく、正しい知識と技術が求められるため、提供できるサロンが限られています。
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* YUKISIKIのアプローチ */}
        <section className="py-20 md:py-28 bg-charcoal text-warm-white">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading en="YUKISIKI's Way" ja="YUKISIKIの顔の歪み矯正" light />

            <ScrollReveal animation="fade-up">
              <div className="rounded-2xl p-8 md:p-12 glass-card-dark max-w-3xl mx-auto text-center">
                <p className="font-serif text-base md:text-lg text-warm-white leading-loose tracking-wider mb-6">
                  YUKISIKIは根本である
                  <span className="text-gold-light">骨格から整える。</span>
                </p>
                <div className="gold-line mx-auto my-6" />
                <p className="text-sm text-greige leading-loose tracking-wide mb-6">
                  リンパを流す、筋肉をマッサージする、
                  <br className="hidden md:block" />
                  ただ強く押す——ではなく、
                </p>
                <p className="text-sm md:text-base text-greige leading-loose tracking-wide">
                  1人1人の状態に合わせて、最適な施術で
                  <br className="hidden md:block" />
                  <span className="text-gold-light font-serif">
                    &ldquo;骨格から変える&rdquo;
                  </span>
                  <br className="hidden md:block" />
                  構造的にアプローチする顔の専門サロンです。
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Journal — 専門解説記事3本 */}
        <section className="py-20 md:py-28 bg-charcoal text-warm-white">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal animation="fade-up">
              <p className="text-center text-[10px] md:text-xs tracking-[0.3em] text-gold-light uppercase mb-3">
                Journal
              </p>
              <h2 className="font-serif text-center text-xl md:text-2xl lg:text-3xl tracking-wider text-warm-white mb-4">
                顔の歪みの専門解説
              </h2>
              <div className="gold-line-wide mx-auto mb-6" />
              <p className="text-center text-sm md:text-base text-greige leading-loose tracking-wide max-w-xl mx-auto mb-8">
                解剖学に基づいた顔の歪みの専門記事を、
                <br className="hidden md:block" />
                毎週金曜に更新しています。
              </p>
            </ScrollReveal>

            {/* ジャーナル一覧（/yugami/blog）への導線 */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="flex justify-center mb-14">
                <a
                  href="/yugami/blog"
                  className="text-xs tracking-[0.25em] text-gold uppercase border border-gold/40 px-7 py-3 hover:bg-gold hover:text-charcoal transition-colors"
                >
                  コラム一覧を見る →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10" stagger={150}>
              {[
                {
                  num: "No. 01 — Causes",
                  title: "顔の歪みの本当の原因——日常の8つの癖が顔を曲げていく医学的メカニズム",
                  href: "/yugami/blog/causes/8-habits-cause-face-distortion",
                },
                {
                  num: "No. 02 — Symptoms",
                  title: "なぜ目の高さ・大きさは左右で違ってくるのか——医学的な原因と整え方",
                  href: "/yugami/blog/symptoms/eye-asymmetry",
                },
                {
                  num: "No. 03 — Symptoms",
                  title: "顎の歪み・左右のズレの医学的原因——上部頸椎と顎関節の連動から読み解く",
                  href: "/yugami/blog/symptoms/jaw-distortion",
                },
                {
                  num: "No. 04 — Symptoms",
                  title: "顔の左右差はなぜ起こるのか——骨格の連動から読み解く",
                  href: "/yugami/blog/symptoms/facial-asymmetry",
                },
                {
                  num: "No. 05 — Symptoms",
                  title: "片側だけ頬骨が出る・エラが張る本当の理由",
                  href: "/yugami/blog/symptoms/cheekbone-jaw-asymmetry",
                },
                {
                  num: "No. 06 — Symptoms",
                  title: "口角の高さ・口元の左右差はなぜ生まれるのか——医学的な原因と整え方",
                  href: "/yugami/blog/symptoms/mouth-corner-asymmetry",
                },
                {
                  num: "No. 07 — Symptoms",
                  title: "鼻の歪み・鼻筋の曲がりはなぜ起こるのか——骨格から読み解く医学的原因",
                  href: "/yugami/blog/symptoms/nose-asymmetry",
                },
                {
                  num: "No. 08 — Causes",
                  title: "猫背・ストレートネックが顔を歪ませる——身体由来の歪みのメカニズム",
                  href: "/yugami/blog/causes/posture-straight-neck",
                },
                {
                  num: "No. 09 — Causes",
                  title: "噛み合わせと顔の歪み——咬合のズレが骨格に連鎖する医学的メカニズム",
                  href: "/yugami/blog/causes/occlusion-face-distortion",
                },
                {
                  num: "No. 10 — Causes",
                  title: "エラボトックスと顔の歪み——咬筋・側頭筋・外側翼突筋の代償作用",
                  href: "/yugami/blog/causes/botox-masseter-compensation",
                },
              ].map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  className="group block rounded-2xl p-7 glass-card-dark border border-gold/15 hover:border-gold/45 hover:-translate-y-0.5 transition-all"
                >
                  <p className="text-[10px] tracking-[0.25em] text-gold-light uppercase mb-3">
                    {article.num}
                  </p>
                  <h3 className="font-serif text-sm md:text-base text-warm-white leading-relaxed tracking-wider mb-4 group-hover:text-gold-light transition-colors min-h-[3.5rem]">
                    {article.title}
                  </h3>
                  <span className="text-[11px] tracking-[0.2em] text-gold uppercase group-hover:translate-x-1.5 inline-block transition-transform">
                    Read more →
                  </span>
                </a>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-warm-white to-ivory">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal animation="fade-up">
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-3">
                Reservation
              </p>
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-wider text-charcoal mb-4">
                ご予約・お問い合わせ
              </h2>
              <div className="gold-line-wide mx-auto mb-8" />
              <p className="text-sm text-charcoal-light tracking-wider leading-relaxed mb-10">
                顔の歪みでお悩みの方、まずはお気軽にご相談ください。
                <br />
                あなたの状態を分析し、最適なアプローチをご提案します。
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
                className="flex items-center gap-3 border-2 border-gold/40 text-gold rounded-full px-8 py-4 hover:bg-gold/5 transition-colors w-full sm:w-auto justify-center"
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
