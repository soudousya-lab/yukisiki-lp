import type { Metadata } from "next";
import YugamiContent from "@/components/YugamiContent";
import JsonLd from "@/components/JsonLd";
import { yugamiAiOverview } from "@/lib/aiOverviewContent";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "顔の歪み矯正とは | YUKISIKI 中目黒",
  description:
    "顔も関節。日常の癖で蓄積した歪みを正しく整え、顔をリセットする。骨格から根本的にアプローチする顔の歪み矯正専門サロン。",
};

export default function YugamiPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "YUKISIKI", url: "/" },
          { name: "顔の歪み矯正とは", url: "/yugami" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "顔の歪み矯正",
          description:
            "顔も関節。日常の癖で蓄積した歪みを解剖学に基づいて整える手技矯正。鍼灸国家資格保有の専門家が施術します。",
          url: "/yugami",
        })}
      />
      <JsonLd data={faqSchema(yugamiAiOverview.faqs)} />
      <YugamiContent />
    </>
  );
}
