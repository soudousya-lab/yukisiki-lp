import type { Metadata } from "next";
import CaseContent from "@/components/CaseContent";

export const metadata: Metadata = {
  title: "症例解説 | YUKISIKI 中目黒",
  description:
    "お悩みの原因がどこにあって、どのように施術したのか？実際の症例と共に顔の構造から解説。小顔矯正・顔の歪み矯正専門サロンYUKISIKI。",
};

export default function CasePage() {
  return <CaseContent />;
}
