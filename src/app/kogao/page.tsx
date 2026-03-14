import type { Metadata } from "next";
import KogaoContent from "@/components/KogaoContent";

export const metadata: Metadata = {
  title: "小顔矯正とは | YUKISIKI 中目黒",
  description:
    "骨格を根本から整え、顔を本来あるべき姿に最適化する。医学的に正しい小顔矯正。創業11年、20,000人以上の施術実績。",
};

export default function KogaoPage() {
  return <KogaoContent />;
}
