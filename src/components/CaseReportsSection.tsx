"use client";

import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const cases = [
  {
    id: "case-01",
    number: "01",
    age: "20代女性",
    title: "出産を機に顔が変わってきた",
    approach: "首肩の歪み、顎関節、フェイスラインを修正",
    beforeAfterImage: "/images/before-after/case-face-02.webp",
    analysisImage: "/images/before-after/01_0.webp",
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
    beforeAfterImage: "/images/before-after/20代女性02.webp",
    analysisImage: "/images/before-after/02_0.webp",
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
    beforeAfterImage: "/images/before-after/case-face-03.webp",
    analysisImage: "/images/before-after/03_0.webp",
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
    beforeAfterImage: "/images/before-after/case-face-04.webp",
    analysisImage: "/images/before-after/04_0.webp",
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
    beforeAfterImage: "/images/before-after/case-face-05.webp",
    analysisImage: "/images/before-after/05_0.webp",
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

export default function CaseReportsSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  const scrollToCase = useCallback((caseId: string, smooth = true) => {
    const el = document.getElementById(caseId);
    if (el) {
      const headerOffset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: smooth ? "smooth" : "instant" });
    }
  }, []);

  // ページ読み込み時にURLハッシュがあれば該当症例までスクロール
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && hash.startsWith("case-")) {
      // DOMレンダリング完了を待つ
      const timer = setTimeout(() => scrollToCase(hash, false), 300);
      return () => clearTimeout(timer);
    }
  }, [scrollToCase]);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };

  const handleSliderCardClick = (caseId: string, e: React.MouseEvent) => {
    if (pointerStart.current) {
      const dx = Math.abs(e.clientX - pointerStart.current.x);
      const dy = Math.abs(e.clientY - pointerStart.current.y);
      if (dx > 8 || dy > 8) {
        pointerStart.current = null;
        return;
      }
    }
    pointerStart.current = null;
    window.history.pushState(null, "", `#${caseId}`);
    scrollToCase(caseId);
  };

  return (
    <section id="case-reports" className="bg-ivory">
      {/* ===== ヘッダー ===== */}
      <div className="pt-16 pb-8 md:pt-24 md:pb-10">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <ScrollReveal animation="fade-up">
            <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-3">
              Case Reports
            </p>
            <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-charcoal mb-4">
              症例解説
            </h2>
            <div className="gold-line mx-auto mb-5" />
            <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
              お悩みの原因がどこにあって、どのように施術したのか？
              <br className="hidden sm:block" />
              実際の症例から紹介します。
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ===== ナビスライダー ===== */}
      <div className="pb-6 md:pb-10 overflow-hidden">
        <ScrollReveal animation="fade-up" delay={100}>
          <div
            ref={sliderRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-5 md:px-[calc((100vw-56rem)/2+1.25rem)] pb-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cases.map((c) => (
              <div
                key={c.id}
                role="button"
                tabIndex={0}
                onPointerDown={handlePointerDown}
                onClick={(e) => handleSliderCardClick(c.id, e)}
                onKeyDown={(e) => { if (e.key === "Enter") scrollToCase(c.id); }}
                className="flex-shrink-0 w-[72vw] md:w-[420px] snap-center rounded-xl overflow-hidden bg-warm-white border border-greige/20 shadow-sm hover:shadow-md transition-shadow cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="flex h-full">
                  {/* 解析画像 */}
                  <div className="w-[38%] flex-shrink-0 bg-greige/10 overflow-hidden">
                    <Image
                      src={c.analysisImage}
                      alt={`${c.age} ${c.title} 解析`}
                      width={300}
                      height={400}
                      className="w-full h-full object-contain pointer-events-none"
                      sizes="(max-width: 768px) 28vw, 160px"
                      draggable={false}
                    />
                  </div>
                  {/* テキスト */}
                  <div className="flex-1 p-3 md:p-4 flex flex-col justify-center min-h-[140px]">
                    <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-gold uppercase border border-gold/30 rounded-full px-2 py-0.5 inline-block w-fit mb-1.5">
                      CASE {c.number}
                    </span>
                    <span className="text-[10px] text-warm-gray">{c.age}</span>
                    <p className="font-serif text-xs md:text-sm tracking-wider text-charcoal leading-snug mt-0.5 mb-2">
                      {c.title}
                    </p>
                    <span className="text-[10px] text-gold tracking-wider">
                      Reports →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* ===== スクロールインジケータ ===== */}
      <div className="flex flex-col items-center pb-8">
        <span className="text-[9px] tracking-[0.3em] text-warm-gray uppercase mb-1.5">SCROLL</span>
        <div className="w-px h-6 bg-gradient-to-b from-warm-gray/50 to-transparent scroll-indicator" />
      </div>

      {/* ===== 各症例 ===== */}
      {cases.map((c, idx) => (
        <div
          key={c.id}
          id={c.id}
          className={`py-12 md:py-20 ${idx % 2 === 0 ? "bg-warm-white" : "bg-ivory"}`}
        >
          <div className="max-w-4xl mx-auto px-5">
            {/* Before/After 画像 — 全体が見えるように */}
            <ScrollReveal animation="fade-up">
              <Image
                src={c.beforeAfterImage}
                alt={`${c.age} ${c.title} Before/After`}
                width={1600}
                height={1200}
                className="w-full h-auto rounded-xl shadow-sm mb-8"
                sizes="(max-width: 768px) 100vw, 896px"
                priority={idx === 0}
              />
            </ScrollReveal>

            {/* 区切り */}
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/40" />
                <span className="text-[9px] tracking-[0.3em] text-warm-gray uppercase">
                  YUKISIKI CaseReports
                </span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/40" />
              </div>
            </ScrollReveal>

            {/* 2カラム: 解析画像 + テキスト */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              {/* 解析画像 — スマホでは横幅60%中央寄せ、PCでは左カラム */}
              <ScrollReveal animation="fade-right" className="w-full md:w-[38%] flex-shrink-0">
                <div className="mx-auto w-[60%] md:w-full">
                  <Image
                    src={c.analysisImage}
                    alt={`${c.age} ${c.title} 顔解析`}
                    width={1080}
                    height={1350}
                    className="w-full h-auto rounded-lg shadow-sm"
                    sizes="(max-width: 768px) 60vw, 340px"
                  />
                </div>
              </ScrollReveal>

              {/* テキスト */}
              <ScrollReveal animation="fade-left" delay={100} className="w-full md:w-[62%]">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-gold uppercase">
                    Case {c.number}
                  </span>
                  <p className="text-[11px] text-warm-gray mt-0.5">{c.age}</p>
                  <h3 className="font-serif text-lg md:text-xl tracking-wider text-charcoal mt-1 mb-4">
                    {c.title}
                  </h3>

                  <p className="text-[11px] md:text-xs text-gold tracking-wider mb-3">
                    症例解説と施術ポイント
                  </p>

                  {c.sections.map((s, si) => (
                    <div key={si} className="mb-4">
                      <h4 className="text-xs md:text-sm font-medium text-charcoal mb-1.5">
                        【{s.heading}】
                      </h4>
                      <p className="text-[11px] md:text-xs text-charcoal-light leading-[1.85]">
                        {s.body}
                      </p>
                    </div>
                  ))}

                  <p className="text-[11px] text-warm-gray mt-3 italic">{c.summary}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
