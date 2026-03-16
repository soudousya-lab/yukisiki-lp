"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const cases = [
  {
    id: "case-01",
    number: "01",
    age: "20代女性",
    title: "出産を機に顔が変わってきた",
    approach: "首肩の歪み、顎関節、フェイスラインを修正",
    beforeAfterImage: "/images/before-after/case-face-01.png",
    analysisImage: "/images/before-after/01_0.png",
    sections: [
      {
        heading: "片手抱っこによる首肩の歪み",
        body: "首肩の左右差が生まれ顔が左に倒れています。この時、首の骨はカップリングモーションという右側に少し回転する動きが入ります。そうすると顎は左に歪むようになり顔に左右差が生まれます。さらにカップリングモーションが起こると、深層リンパという顔むくみの根幹のようなリンパに詰まりが生まれやすく、フェイスラインのもたつきにつながります。",
      },
      {
        heading: "歯ぎしりとストレートネックによる顎の前突",
        body: "先ほどと少し重複しますが、産後の環境の変化により歯ぎしりが始まり、それにより咬筋筋の張り、顎関節の可動域に制限がかかっています。さらに育児で下を向くことが増え、ストレートネックが悪化、それに歯ぎしりが加わることによって顎関節が前に押し出されるようになっています。こうなると顔の比率が下に落ち、顔が伸びたようなメリハリが無くなったような感覚になります。さらに深部リンパは咬筋筋、顎関節の動きと密接に関わっておりそれが更に追い打ちをかけています。",
      },
    ],
    summary: "細かいところはありますが上記を中心に矯正しました。",
  },
  {
    id: "case-02",
    number: "02",
    age: "20代女性",
    title: "とにかく小顔になりたい",
    approach: "ストレートネック、顎関節、顔比率を修正",
    beforeAfterImage: "/images/before-after/20代女性02.png",
    analysisImage: "/images/before-after/02_0.png",
    sections: [
      {
        heading: "ストレートネックによる顎の前突",
        body: "ストレートネックにより顎を前に突き出す(顎関節が前に移動)ようになっています、こうなると、顎の筋肉が緊張しエラ周りが張って見えるようになります。さらに顎関節の動きに影響を与え、深部リンパの流れが悪化し慢性的な顔のむくみが発生します。",
      },
      {
        heading: "顔の下半分の比率",
        body: "先ほど重複しますが、ストレートネック+顎突き出しが起こると、首と外側翼突筋という顎を動かす筋肉がコリやすくなり、顎関節の左右差や動きのバランスをくずくことでにつながります。そうすると周りのリンパが詰まりフェイスラインを中心とした慢性的なむくみ発生します。よって顔の下比率が増え、顔の縦感が強くなることで顔が大きく見え、顔がぼやけたような、下膨れような印象になります。このお客様の場合かなりむくみが強く発生しています。",
      },
    ],
    summary: "細かいところはありますが上記を中心に矯正しました",
  },
  {
    id: "case-03",
    number: "03",
    age: "30代女性",
    title: "顔の歪み、むくまない顔にしたい",
    approach: "顎関節、上部頸椎、蝶形骨を修正",
    beforeAfterImage: "/images/before-after/case-face-03.png",
    analysisImage: "/images/before-after/03_0.png",
    sections: [
      {
        heading: "肩の高さと頭の側屈による顎の歪み、慢性的なむくみ",
        body: "画像の通り、左肩が上がって頭も左に傾いています。この時、頸椎のカップリングモーションという動きが起こり、顎は右から左に回旋するような歪みが発生します。また、慢性的なむくみは深部リンパという深いリンパの詰まりかららくることが多く、深部リンパは顎関節や咀嚼筋と深く結びついています。その為、今回のケースのように顎関節の歪みが発生すると、関節、筋肉の動きや左右差などによってリンパの流れが阻害され、慢性的なむくみにつながってきます。",
      },
      {
        heading: "ストレートネックによる蝶形骨の歪み",
        body: "蝶形骨は顔の中心にあり首や顎と連動する\"要\"のような骨です。ストレートネックや首や肩、姿勢、顎関節の動き等によって歪みが生じ顔全体に影響が及びます。蝶形骨が歪んでくると顔のぼやけや口回りの緩みなどの漫然としたところから目の開き具合や中顔面のもたつき、伸び、フェイスラインのもたつき、むくみなど顔の印象の大部分に影響が及びます。",
      },
    ],
    summary: "細かいところはありますが上記を中心に矯正しました。",
  },
  {
    id: "case-04",
    number: "04",
    age: "40代女性",
    title: "年齢と共に顔が変化してきた",
    approach: "肩の内巻き、顎関節、顔比率を修正",
    beforeAfterImage: "/images/before-after/case-face-04.png",
    analysisImage: "/images/before-after/04_0.png",
    sections: [
      {
        heading: "肩の高さ、内巻きによる顔の回旋と歪み",
        body: "肩の高さの左右差や内巻きは首、顎を介して顔に歪みや広がりとして現れます。このお客様の場合、左肩が下がり、内側に巻くことで顔全体が左に倒れ、顎が左→右に軽度回旋している顔の歪みがあります。本来、首が左に倒れると首には右に回旋する動きが発生し、顎は右→左へ歪みますが、今回は反対に歪んでいます。これは肩に近い首の骨が歪んでいる時に起こる歪み方になります。つまり、歪みの本質が肩の内巻きにあるということになります。",
      },
      {
        heading: "顔の下半分の比率",
        body: "肩と首、顎に歪みが生まれることで顎関節の動きに左右差が発生し、顎周りのリンパが詰まることでフェイスラインを中心とした慢性的なむくみが起こっています。さらに今回は本質が肩にある為、鎖骨、首のあたりでのリンパの詰まりも起こっています。それにより顔の下比率が増え、顔の縦感が強くなることで顔がぼやけたような、たるんだような印象になっています。",
      },
    ],
    summary: "細かいところはありますが上記を中心に矯正しました。",
  },
  {
    id: "case-05",
    number: "05",
    age: "50代女性",
    title: "たるみと顔が伸びた気がする",
    approach: "ストレートネック、顎関節、顔比率の修正",
    beforeAfterImage: "/images/before-after/case-face-05.png",
    analysisImage: "/images/before-after/05_0.png",
    sections: [
      {
        heading: "ストレートネックによる顎の前突",
        body: "ストレートネックにより顎が前に出る(顎関節が前に移動)歪み+広がりが入っています。この時エラ周りが張って見え、さらに顎の奥の筋肉が硬くなりやすい為、顎関節を介して慢性的なフェイスラインのむくみが起こります。結果、エラの張り＋フェイスラインがもたつくことで顔がボックス型のような縦感の強い印象になります。",
      },
      {
        heading: "頬・フェイスラインの下がりで顔下半分の印象が強く",
        body: "画像の丸の位置がもたついてくることで、頬とフェイスラインの一体化が起こり顔がもたついた、伸びた印象になります。特に口回りは年齢と共にぼやけやすく、顔のメリハリや立体感が無くなってきます。つまり、顎ライン、口元、フェイスライン、頬。と独立するよう矯正していくことで顔の印象が上に引きあがり、はっきりとしたメリハリある顔になります。",
      },
    ],
    summary: "細かいところはありますが上記を中心に矯正しました。",
  },
];

export default function CasesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCase = useCallback((caseId: string) => {
    const el = document.getElementById(caseId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* ===== ヘッダー部 ===== */}
        <section className="py-16 md:py-24 bg-ivory">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal animation="fade-up">
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-3">
                Case Reports
              </p>
              <h1 className="font-serif text-3xl md:text-4xl tracking-wider text-charcoal mb-6">
                症例解説
              </h1>
              <div className="gold-line mx-auto mb-6" />
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed max-w-xl mx-auto">
                お悩みに対してどのに原因があり、どのように施術したのか？
                <br />
                実際の症例と共に解説しています。
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===== 上部スライダー ===== */}
        <section className="py-8 md:py-12 bg-ivory overflow-hidden">
          <ScrollReveal animation="fade-up" delay={100}>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-[calc((100vw-56rem)/2+1.5rem)] pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {cases.map((c) => (
                <button
                  key={c.id}
                  onClick={() => scrollToCase(c.id)}
                  className="flex-shrink-0 w-[80vw] md:w-[480px] snap-center rounded-2xl overflow-hidden bg-warm-white border border-greige/20 shadow-sm hover:shadow-md transition-shadow text-left"
                >
                  <div className="flex">
                    {/* 解析画像 */}
                    <div className="relative w-2/5 aspect-[3/4] bg-greige/10 flex-shrink-0">
                      <Image
                        src={c.analysisImage}
                        alt={`${c.age} ${c.title} 解析`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 32vw, 192px"
                      />
                    </div>
                    {/* 情報 */}
                    <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
                      <span className="text-[10px] tracking-[0.2em] text-gold uppercase border border-gold/30 rounded-full px-2 py-0.5 inline-block w-fit mb-2">
                        CASE {c.number}
                      </span>
                      <span className="text-[10px] md:text-xs text-warm-gray mb-1">{c.age}</span>
                      <p className="font-serif text-sm md:text-base tracking-wider text-charcoal leading-snug mb-3">
                        {c.title}
                      </p>
                      <span className="text-[10px] md:text-xs text-gold tracking-wider">
                        施術アプローチ
                      </span>
                      <p className="text-[10px] md:text-xs text-charcoal-light leading-relaxed mt-0.5">
                        {c.approach}
                      </p>
                      <div className="mt-3">
                        <span className="text-xs text-gold tracking-wider hover:text-gold-dark transition-colors">
                          Reports →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ===== スクロールインジケータ ===== */}
        <div className="flex flex-col items-center py-6 bg-ivory">
          <span className="text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-2">SCROLL</span>
          <div className="w-px h-8 bg-gradient-to-b from-warm-gray/60 to-transparent scroll-indicator" />
        </div>

        {/* ===== 各症例セクション ===== */}
        {cases.map((c, idx) => (
          <section
            key={c.id}
            id={c.id}
            className={`py-16 md:py-24 ${idx % 2 === 0 ? "bg-warm-white" : "bg-ivory"}`}
          >
            <div className="max-w-4xl mx-auto px-6">
              {/* Before/After画像 */}
              <ScrollReveal animation="fade-up">
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mb-10 shadow-sm">
                  <Image
                    src={c.beforeAfterImage}
                    alt={`${c.age} ${c.title} Before/After`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              </ScrollReveal>

              {/* 区切り線 + タイトル */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="text-center mb-10">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
                    <span className="text-[10px] tracking-[0.3em] text-warm-gray uppercase">
                      YUKISIKI CaseReports
                    </span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
                  </div>
                </div>
              </ScrollReveal>

              {/* 2カラム: 解析画像 + テキスト */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                {/* 解析画像 */}
                <ScrollReveal animation="fade-right" className="w-full md:w-2/5">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-greige/10 shadow-sm">
                    <Image
                      src={c.analysisImage}
                      alt={`${c.age} ${c.title} 顔解析`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                </ScrollReveal>

                {/* テキスト */}
                <ScrollReveal animation="fade-left" delay={150} className="w-full md:w-3/5">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] text-gold uppercase">
                      Case {c.number}
                    </span>
                    <p className="text-xs text-warm-gray mt-1">{c.age}</p>
                    <h2 className="font-serif text-xl md:text-2xl tracking-wider text-charcoal mt-2 mb-6">
                      {c.title}
                    </h2>

                    <p className="text-xs md:text-sm text-gold tracking-wider mb-4">
                      顔解説と施術ポイント
                    </p>

                    {c.sections.map((s, si) => (
                      <div key={si} className="mb-5">
                        <h3 className="text-sm md:text-base font-medium text-charcoal mb-2">
                          【{s.heading}】
                        </h3>
                        <p className="text-xs md:text-sm text-charcoal-light leading-[1.9]">
                          {s.body}
                        </p>
                      </div>
                    ))}

                    <p className="text-xs text-warm-gray mt-4 italic">{c.summary}</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}

        {/* ===== 予約誘導 ===== */}
        <section className="py-16 md:py-20 bg-charcoal text-center">
          <ScrollReveal animation="fade-up">
            <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold-light uppercase mb-3">
              Reservation
            </p>
            <h2 className="font-serif text-xl md:text-2xl tracking-wider text-warm-white mb-4">
              まずはお気軽にご相談ください
            </h2>
            <div className="gold-line mx-auto mb-6" />
            <p className="text-xs md:text-sm text-warm-gray leading-relaxed mb-8 max-w-md mx-auto">
              あなたの顔のお悩みの原因を丁寧に分析し、
              <br />
              最適な施術プランをご提案いたします。
            </p>
            <Link
              href="/#reserve"
              className="inline-block bg-gold text-white text-sm tracking-wider px-10 py-3.5 rounded-full hover:bg-gold-dark hover:scale-[1.03] transition-all cta-shine cta-pulse"
            >
              ご予約はこちら
            </Link>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
