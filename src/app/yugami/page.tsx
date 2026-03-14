import type { Metadata } from "next";
import YugamiContent from "@/components/YugamiContent";

export const metadata: Metadata = {
  title: "顔の歪み矯正とは | YUKISIKI 中目黒",
  description:
    "顔も関節。日常の癖で蓄積した歪みを正しく整え、顔をリセットする。骨格から根本的にアプローチする顔の歪み矯正専門サロン。",
};

export default function YugamiPage() {
  return <YugamiContent />;
}
