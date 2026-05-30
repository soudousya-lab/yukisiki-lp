import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export const metadata: Metadata = {
  title: "顔の歪み 専門コラム一覧｜中目黒の小顔・顔の歪み矯正 YUKISIKI",
  description:
    "頬骨・顎の左右非対称、顔全体の歪み、顎関節、生活習慣まで。解剖学に基づいた顔の歪みの専門コラムを公開しています。中目黒の顔専門サロン YUKISIKI。",
  alternates: {
    canonical: "https://yukisiki.com/yugami/blog",
  },
  openGraph: {
    title: "顔の歪み 専門コラム一覧｜YUKISIKI 中目黒",
    description:
      "解剖学に基づいた顔の歪みの専門コラム。頬骨・顎の左右非対称、顔全体の歪み、顎関節、生活習慣まで解説。",
    type: "website",
  },
};

const articles = [
  {
    title: "頬骨・顎の左右非対称",
    href: "/yugami/blog/symptoms/cheekbone-jaw-asymmetry",
    desc: "顔の片側だけ頬骨が出っ張る、顎がずれる…その原因と対処法を解説。",
    category: "Symptoms",
  },
  {
    title: "顔全体の左右非対称",
    href: "/yugami/blog/symptoms/facial-asymmetry",
    desc: "目の大きさ、口角の高さ…顔全体の非対称が起こるメカニズム。",
    category: "Symptoms",
  },
  {
    title: "目の左右非対称（目の高さ・大きさ）",
    href: "/yugami/blog/symptoms/eye-asymmetry",
    desc: "左右で目の高さや大きさが違う。その原因と整え方を解説。",
    category: "Symptoms",
  },
  {
    title: "顎の歪み・顎関節",
    href: "/yugami/blog/symptoms/jaw-distortion",
    desc: "顎関節症と顔の歪みの深い関係。放置するとどうなるか。",
    category: "Symptoms",
  },
  {
    title: "顔の歪みを引き起こす8つの習慣",
    href: "/yugami/blog/causes/8-habits-cause-face-distortion",
    desc: "日常の何気ない癖が顔の歪みを生む。今日からやめたい8つの習慣。",
    category: "Causes",
  },
];

export default function YugamiBlogIndex() {
  return (
    <>
      {/* ナビゲーションバー */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <Link
            href="/yugami"
            className="flex items-center gap-2 text-xs tracking-wider text-charcoal-light hover:text-gold transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            顔の歪み矯正とは
          </Link>
          <Link href="/" className="font-serif text-lg tracking-widest text-gold-shimmer">
            YUKISIKI
          </Link>
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

      <main className="bg-ivory min-h-screen">
        {/* ヘッダー */}
        <section className="pt-28 pb-10 md:pt-36 md:pb-14">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold uppercase mb-3">
              Journal
            </p>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-charcoal mb-4">
              顔の歪みの専門コラム
            </h1>
            <div className="gold-line mx-auto mb-5" />
            <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
              解剖学に基づいた顔の歪みの専門記事を、
              <br className="hidden sm:block" />
              順次公開しています。
            </p>
          </div>
        </section>

        {/* 記事一覧 */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-5 grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group block rounded-2xl p-6 md:p-8 bg-warm-white border border-greige/30 hover:border-gold/40 hover:shadow-md transition-all"
              >
                <p className="text-[10px] tracking-[0.25em] text-gold uppercase mb-3">
                  {a.category}
                </p>
                <h2 className="font-serif text-base md:text-lg tracking-wider text-charcoal mb-3 leading-relaxed">
                  {a.title}
                </h2>
                <p className="text-xs text-charcoal-light leading-relaxed mb-4">
                  {a.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-gold tracking-wider group-hover:gap-2.5 transition-all">
                  記事を読む →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* 戻る */}
        <section className="pb-16 text-center">
          <Link
            href="/yugami"
            className="inline-flex items-center gap-2 text-sm tracking-wider text-gold border border-gold/30 rounded-full px-8 py-3 hover:bg-gold/5 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            顔の歪み矯正とは へ戻る
          </Link>
        </section>
      </main>
    </>
  );
}
