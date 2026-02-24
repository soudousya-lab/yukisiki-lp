"use client";

import { useState } from "react";
import { FiChevronRight, FiCheck, FiCalendar } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

/* ─── お悩みカテゴリ ─── */
const concerns = [
  { id: "kogao", label: "小顔になりたい", icon: "◇" },
  { id: "yugami", label: "顔の歪み・左右差", icon: "◇" },
  { id: "tarumi", label: "たるみが気になる", icon: "◇" },
  { id: "nijuago", label: "二重顎・むくみ", icon: "◇" },
  { id: "biyou", label: "肌荒れ・美肌", icon: "◇" },
  { id: "zenshin", label: "姿勢・全身の歪み", icon: "◇" },
  { id: "event", label: "撮影・イベント前", icon: "◇" },
  { id: "hana", label: "鼻筋を通したい", icon: "◇" },
] as const;

type ConcernId = (typeof concerns)[number]["id"];

/* ─── メニューデータ（ホットペッパービューティーより） ─── */
interface Menu {
  name: string;
  price: number;
  description: string;
  tag: string;
  bookingUrl: string;
}

const menuMap: Record<ConcernId, Menu[]> = {
  kogao: [
    {
      name: "小顔矯正×美容鍼",
      price: 12800,
      description: "YUKISIKI式独自開発の小顔矯正と美容鍼を組み合わせた国内外で人気No.1施術。骨格と肌の両方からアプローチ。",
      tag: "人気No.1",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "小顔矯正",
      price: 7800,
      description: "YUKISIKI式独自開発の小顔矯正。骨格から理想の小顔にデザインします。",
      tag: "初めての方に",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
  yugami: [
    {
      name: "歪み矯正×全身骨格調整",
      price: 12800,
      description: "歪み・左右差に特化したコース。顔だけでなく全身の骨格を整え根本から改善。",
      tag: "歪み特化",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "顔の歪み矯正",
      price: 7800,
      description: "顔の歪み・左右差に特化したコース。骨格から左右対称の美しい顔立ちへ。",
      tag: "お手軽",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
  tarumi: [
    {
      name: "小顔矯正×美容鍼×頭蓋骨調整",
      price: 14800,
      description: "たるみ改善に特化。年齢と共に緩む顔・頭部の骨格を整え、引き締まったフェイスラインへ。",
      tag: "たるみ特化",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "小顔矯正×美容鍼×全身骨格調整",
      price: 17800,
      description: "効果追求コース。小顔から美肌、正しい姿勢まで全方位からアプローチ。",
      tag: "徹底ケア",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
  nijuago: [
    {
      name: "小顔矯正×美容鍼×首肩矯正",
      price: 14800,
      description: "二重顎と慢性むくみ改善に特化。首肩の矯正で根本原因にアプローチ。",
      tag: "二重顎に",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "小顔矯正×美容鍼×リンパ調整",
      price: 17800,
      description: "身体のリンパの流れから整え、むくみのない美しい小顔にデザイン。",
      tag: "むくみ特化",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
  biyou: [
    {
      name: "美容鍼（初回限定）",
      price: 5800,
      description: "肌のターンオーバーを促進。たるみ、くすみ、肌荒れなどの肌トラブルを内側から改善。",
      tag: "美肌特化",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "美容鍼×ハーブピーリング",
      price: 14800,
      description: "肌の代謝に特化。ターンオーバーを整え、透明感のある美しい肌へ導きます。",
      tag: "本格ケア",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
  zenshin: [
    {
      name: "小顔矯正×全身骨格調整",
      price: 12800,
      description: "小顔も身体の歪みも一緒に改善。顔と全身のバランスを整えるトータルケア。",
      tag: "全身ケア",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "小顔矯正×美容鍼×全身骨格調整",
      price: 17800,
      description: "効果追求コース。小顔から美肌、正しい姿勢まで全方位からデザイン。",
      tag: "フルコース",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
  event: [
    {
      name: "小顔×首肩矯正×リンパ流し",
      price: 15000,
      description: "イベント・撮影前に。瞬間的な変化をメインに据えた特別コース。",
      tag: "撮影前に",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "小顔&歪み矯正×美容鍼×首肩矯正",
      price: 14800,
      description: "骨格からも肌からも美顔にデザイン。大切な日に最高のコンディションを。",
      tag: "特別な日に",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
  hana: [
    {
      name: "小顔矯正×美容鍼",
      price: 12800,
      description: "小顔矯正に鼻筋へのアプローチを含む人気No.1施術。鼻高矯正のオプション追加もおすすめ。",
      tag: "人気No.1",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
    {
      name: "小顔矯正×首肩矯正",
      price: 12800,
      description: "骨格全体を整えながら顔の各パーツにアプローチ。鼻高矯正（¥5,000）の併用がおすすめ。",
      tag: "+鼻高矯正",
      bookingUrl: "https://beauty.hotpepper.jp/kr/slnH000770985/coupon/",
    },
  ],
};

/* ─── コンポーネント ─── */
export default function SimulationSection() {
  const [selected, setSelected] = useState<ConcernId | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (id: ConcernId) => {
    setSelected(id);
    setShowResult(false);
    // 少し待ってから結果表示（アニメーション用）
    setTimeout(() => setShowResult(true), 100);
  };

  const handleReset = () => {
    setSelected(null);
    setShowResult(false);
  };

  const results = selected ? menuMap[selected] : [];

  return (
    <section id="simulation" className="py-20 md:py-28 bg-gradient-to-b from-charcoal to-charcoal/95 text-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="Simulation" ja="あなたにぴったりのメニュー" light />

        <ScrollReveal animation="fade-up">
          <p className="text-center text-sm text-greige-dark tracking-wider leading-relaxed mb-10">
            お悩みを選ぶだけで、あなたに最適なメニューをご提案します。
          </p>
        </ScrollReveal>

        {/* ─── お悩み選択 ─── */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="mb-4">
            <p className="text-[10px] tracking-[0.3em] text-gold-light uppercase text-center mb-6">
              Step 1 — お悩みを選んでください
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {concerns.map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelect(c.id)}
                className={`group relative rounded-xl px-4 py-4 text-left transition-all duration-300 border ${
                  selected === c.id
                    ? "border-gold bg-gold/15 shadow-[0_0_20px_rgba(183,155,109,0.15)]"
                    : "border-white/10 bg-white/5 hover:border-gold/40 hover:bg-white/8"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {selected === c.id ? (
                    <FiCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  ) : (
                    <span className="text-gold/50 text-xs flex-shrink-0">{c.icon}</span>
                  )}
                  <span className={`text-xs md:text-sm tracking-wider ${
                    selected === c.id ? "text-gold-light" : "text-warm-white/80 group-hover:text-warm-white"
                  }`}>
                    {c.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ─── 結果表示 ─── */}
        <div
          className={`mt-10 transition-all duration-500 ${
            showResult && selected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {selected && (
            <>
              <div className="text-center mb-8">
                <p className="text-[10px] tracking-[0.3em] text-gold-light uppercase mb-3">
                  Step 2 — おすすめメニュー
                </p>
                <p className="text-sm text-greige-dark tracking-wider">
                  「{concerns.find((c) => c.id === selected)?.label}」のお悩みには、こちらがおすすめです
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {results.map((menu, i) => (
                  <div
                    key={menu.name}
                    className="rounded-2xl border border-gold/20 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-gold/40 hover:shadow-[0_4px_24px_rgba(183,155,109,0.1)]"
                    style={{
                      transitionDelay: `${i * 150}ms`,
                      opacity: showResult ? 1 : 0,
                      transform: showResult ? "translateY(0)" : "translateY(20px)",
                    }}
                  >
                    {/* タグ */}
                    <div className="px-6 pt-5 flex items-center gap-2">
                      <span className="text-[9px] tracking-wider text-charcoal bg-gold/90 rounded-full px-3 py-0.5">
                        {menu.tag}
                      </span>
                      {i === 0 && (
                        <span className="text-[9px] tracking-wider text-gold border border-gold/30 rounded-full px-3 py-0.5">
                          イチオシ
                        </span>
                      )}
                    </div>

                    {/* メニュー名 & 価格 */}
                    <div className="px-6 pt-3 pb-2">
                      <h4 className="font-serif text-base md:text-lg tracking-wider text-warm-white mb-2">
                        {menu.name}
                      </h4>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-gold">¥</span>
                        <span className="text-2xl md:text-3xl text-gold font-light">
                          {menu.price.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-warm-gray ml-1">（税込・初回限定）</span>
                      </div>
                    </div>

                    {/* 説明 */}
                    <div className="px-6 py-3">
                      <p className="text-xs text-warm-gray/80 leading-relaxed tracking-wide">
                        {menu.description}
                      </p>
                    </div>

                    {/* 予約ボタン */}
                    <div className="px-6 pb-5 pt-2">
                      <a
                        href={menu.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-gold text-white rounded-full py-3 text-xs tracking-wider hover:bg-gold-dark transition-colors cta-shine"
                      >
                        <FiCalendar className="w-3.5 h-3.5" />
                        このメニューで予約する
                        <FiChevronRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* リセット */}
              <div className="text-center mt-8">
                <button
                  onClick={handleReset}
                  className="text-xs text-warm-gray/60 tracking-wider hover:text-gold transition-colors underline underline-offset-4"
                >
                  別のお悩みを選び直す
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
