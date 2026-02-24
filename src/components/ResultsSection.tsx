import SectionHeading from "./SectionHeading";

export default function ResultsSection() {
  return (
    <section id="results" className="py-20 md:py-28 bg-charcoal text-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Results & Authority" ja="実績・権威性" light />

        {/* Authority badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { num: "20,000", label: "国内外の施術実績", unit: "人以上" },
            { num: "11", label: "顔専門の歴史", unit: "年" },
            { num: "3", label: "海外展開国数", unit: "ヶ国" },
            { num: "100", label: "お客様満足度", unit: "%" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center py-8 border border-warm-gray/20 rounded-2xl bg-white/5"
            >
              <div className="flex items-baseline justify-center">
                <span className="number-highlight text-3xl md:text-4xl text-gold-light">
                  {item.num}
                </span>
                <span className="text-xs text-greige-dark ml-1">{item.unit}</span>
              </div>
              <p className="mt-3 text-[10px] md:text-xs tracking-wider text-greige-dark">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Authority points */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              title: "海外サロンからの施術オファー",
              desc: "シンガポール・上海をはじめとする海外サロンから技術指導の依頼を受け、現地での施術・指導を行っています。",
            },
            {
              title: "芸能関係者もご来店",
              desc: "口コミでの紹介が中心ながら、芸能関係者の方にもお選びいただいている確かな技術力です。",
            },
            {
              title: "顔専門ひと筋11年",
              desc: "開業以来、顔の骨格矯正のみに特化。膨大な症例経験から、あらゆる骨格タイプに対応できます。",
            },
          ].map((point, i) => (
            <div
              key={i}
              className="flex gap-5 items-start p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-sm text-gold-light number-highlight">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-sm md:text-base tracking-wider text-warm-white mb-2">
                  {point.title}
                </h3>
                <p className="text-xs md:text-sm text-greige-dark leading-relaxed tracking-wide">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
