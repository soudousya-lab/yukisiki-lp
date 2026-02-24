import SectionHeading from "./SectionHeading";

export default function TherapistSection() {
  return (
    <section id="therapist" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading en="Therapist" ja="施術者紹介" />

        <div className="md:flex md:gap-12 items-start">
          {/* Photo placeholder */}
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-greige/30 to-dusty-rose-light/20 flex items-center justify-center border border-greige/20">
              <div className="text-center">
                <p className="font-serif text-lg tracking-widest text-charcoal/40">Photo</p>
                <p className="mt-1 text-[10px] text-warm-gray tracking-wider">施術者写真</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="md:w-3/5">
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">
              Owner & Therapist
            </p>
            <h3 className="font-serif text-xl md:text-2xl tracking-wider text-charcoal mb-1">
              多賀
            </h3>
            <p className="text-xs text-warm-gray tracking-wider mb-6">
              YUKISIKI 代表 ／ 国家資格保有
            </p>

            <div className="gold-line mb-6" />

            <div className="space-y-4 text-sm text-charcoal-light leading-relaxed tracking-wide">
              <p>
                13歳の頃から自身の顔のコンプレックスに悩み、
                「顔を変えたい」という想いから施術の道へ。
              </p>
              <p>
                23歳で国家資格を取得後、
                顔の骨格矯正の技術を徹底的に追求。
                以来11年間、顔専門の施術ひと筋で
                20,000人以上のお客様の顔と向き合ってきました。
              </p>
              <p>
                「骨格から本質的に変える」という信念のもと、
                解剖学に基づいた独自の手技を確立。
                その技術はシンガポール・上海など
                海外サロンからも認められ、
                技術指導のオファーを受けるまでになりました。
              </p>
              <p className="text-charcoal font-medium">
                一人ひとりの骨格と真剣に向き合い、
                最善の結果をお約束します。
              </p>
            </div>

            {/* Qualifications */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "国家資格保有",
                "解剖学専門知識",
                "海外技術指導実績",
                "11年顔専門",
              ].map((q) => (
                <span
                  key={q}
                  className="text-[10px] tracking-wider text-gold border border-gold/20 rounded-full px-3 py-1"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
