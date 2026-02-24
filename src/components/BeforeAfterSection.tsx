import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";

const cases = [
  {
    age: "30代女性",
    concern: "顔の左右差・エラ張り",
    result: "左右のバランスが整い、フェイスラインがすっきり",
  },
  {
    age: "40代女性",
    concern: "たるみ・ほうれい線",
    result: "頬の位置が上がり、ほうれい線が目立たなく",
  },
  {
    age: "20代女性",
    concern: "丸顔・むくみ",
    result: "骨格から整えることでシャープな輪郭に",
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Before & After" ja="施術事例" />

        <p className="text-center text-sm text-charcoal-light tracking-wider mb-12">
          ※写真の掲載準備中です。実際の症例はカウンセリング時にご覧いただけます。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="border border-greige/30 rounded-2xl overflow-hidden bg-ivory/50"
            >
              {/* Placeholder for B/A image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-greige/20 to-dusty-rose-light/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 text-xs text-warm-gray tracking-wider">
                    <span className="px-3 py-1 border border-greige/40 rounded-full">Before</span>
                    <span className="text-gold">→</span>
                    <span className="px-3 py-1 border border-gold/30 rounded-full text-gold">After</span>
                  </div>
                  <p className="mt-3 text-[10px] text-warm-gray">Photo coming soon</p>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <span className="text-[10px] text-gold tracking-wider">{c.age}</span>
                <p className="mt-1 font-serif text-sm tracking-wider text-charcoal">
                  {c.concern}
                </p>
                <p className="mt-2 text-xs text-charcoal-light leading-relaxed">
                  {c.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
