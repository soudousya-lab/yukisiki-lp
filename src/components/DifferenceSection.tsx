"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import { FiTarget, FiAward, FiHeart, FiGlobe } from "react-icons/fi";

const differences = [
  { icon: FiTarget, title: "骨格構造からアプローチ", desc: "顔を構成する29個の骨を一つひとつ丁寧に診断。蝶形骨をはじめとする深部の骨格にまでアプローチし、根本的な歪みを整えます。" },
  { icon: FiAward, title: "医療レベルの解剖学知識", desc: "国家資格保有の施術者が、解剖学・生理学に基づいた科学的根拠のある施術を提供。「なんとなく」ではなく「構造的に」変えます。" },
  { icon: FiHeart, title: "完全オーダーメイド施術", desc: "お客様一人ひとりの骨格や筋肉の状態を見極め、最適な施術プランをご提案。機械は一切使わず、すべて手技で丁寧に施術します。" },
  { icon: FiGlobe, title: "海外からも認められた技術", desc: "シンガポール・上海など海外サロンからの技術指導オファーを受ける確かな実力。国内外20,000人以上の施術実績が信頼の証です。" },
];

export default function DifferenceSection() {
  return (
    <section id="difference" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Why Choose Us" ja="YUKISIKIが選ばれる理由" />

        <ScrollReveal className="grid md:grid-cols-2 gap-6 md:gap-8" stagger={200}>
          {differences.map((d, i) => (
            <div key={i} className="group rounded-2xl p-8 md:p-10 glass-card luxury-hover hover:shadow-[0_0_30px_rgba(184,150,90,0.08)]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <d.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-base md:text-lg tracking-wider text-charcoal">{d.title}</h3>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed tracking-wide">{d.desc}</p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
