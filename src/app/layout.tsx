import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/structuredData";
import "./globals.css";

const siteUrl = "https://yukisiki.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: "小顔・顔の歪み矯正専門サロン｜YUKISIKI小顔矯正中目黒",
  description:
    "中目黒駅徒歩5分。顔の骨格構造から根本的にアプローチする顔専門サロン。創業11年、国内外20,000人以上の施術実績。海外からの技術指導オファーも受ける確かな技術力。",
  openGraph: {
    title: "小顔・顔の歪み矯正専門サロン｜YUKISIKI小顔矯正中目黒",
    description:
      "顔の骨格構造から根本的にアプローチ。創業11年、国内外20,000人以上の施術実績を持つ顔専門サロン。",
    type: "website",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* 構造化データ: LocalBusiness + WebSite（地域SEO・リッチリザルト対策） */}
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <MicrosoftClarity />
        {children}
      </body>
    </html>
  );
}
