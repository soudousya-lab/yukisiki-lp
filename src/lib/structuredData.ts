/**
 * 構造化データ（JSON-LD）定義
 * Googleローカル検索・リッチリザルト対策
 */

const SITE_URL = "https://yukisiki.com";
const BOOKING_URL = "http://b.hpr.jp/kr/hp/H000770985";

/**
 * LocalBusiness（健康・美容ビジネス）
 * サイト全ページの<head>に挿入。
 * 「中目黒 小顔矯正」「顔の歪み 矯正 東京」等のローカル検索でGoogleマップ枠を狙う。
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["HealthAndBeautyBusiness", "MedicalBusiness"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: "YUKISIKI 小顔矯正 中目黒",
  alternateName: "YUKISIKI",
  description:
    "中目黒駅徒歩5分の小顔・顔の歪み矯正専門サロン。鍼灸国家資格保有・施術歴11年・施術実績2万人以上の専門家が、解剖学に基づいた手技で骨格から整える。完全予約制・月15日営業。",
  url: SITE_URL,
  telephone: "+81-80-6320-2573",
  priceRange: "¥¥",
  image: `${SITE_URL}/images/og/og-image.jpg`,
  logo: `${SITE_URL}/images/og/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "上目黒3-15-2 W-1",
    addressLocality: "目黒区",
    addressRegion: "東京都",
    postalCode: "153-0051",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.6446,
    longitude: 139.7014,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "中目黒" },
    { "@type": "City", name: "目黒区" },
    { "@type": "City", name: "渋谷区" },
    { "@type": "AdministrativeArea", name: "東京都" },
  ],
  founder: {
    "@type": "Person",
    name: "多賀 勇輝",
    alternateName: "YUKI TAGA",
    jobTitle: "鍼灸師 / YUKISIKI代表",
    description:
      "鍼灸国家資格保有。顔専門11年、施術実績2万人以上。元・海外サロン総院長（上海/シンガポール）。岡山と中目黒の2拠点で完全予約制の手技矯正にあたる。",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "施術メニュー",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "小顔矯正 × 美容鍼（初回限定）",
          description: "カウンセリング × 小顔矯正 × 美容鍼。完全予約制。",
        },
        price: "12800",
        priceCurrency: "JPY",
        availability: "https://schema.org/InStock",
        url: BOOKING_URL,
      },
    ],
  },
  potentialAction: {
    "@type": "ReserveAction",
    target: BOOKING_URL,
    name: "Web予約",
  },
  paymentAccepted: "Cash, Credit Card",
  currenciesAccepted: "JPY",
};

/**
 * WebSite Schema（サイト全体）
 * サイト名と検索動作を定義。サイトリンク検索ボックス対応。
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "YUKISIKI 小顔矯正 中目黒",
  description:
    "小顔・顔の歪み矯正専門サロン。鍼灸国家資格保有・解剖学に基づく手技矯正。",
  publisher: { "@id": `${SITE_URL}/#localbusiness` },
  inLanguage: "ja",
};

/**
 * BreadcrumbList を生成するヘルパー
 * @param items 例: [{name:"YUKISIKI", url:"/"}, {name:"顔の歪み矯正", url:"/yugami"}]
 */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Service Schema（個別サービスページ用）
 */
export function serviceSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: { "@type": "AdministrativeArea", name: "東京都" },
  };
}
