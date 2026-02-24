import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";

export default function PriceSection() {
  return (
    <section id="price" className="py-20 md:py-28 bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading en="Price" ja="料金" />

        <div className="text-center mb-10">
          <p className="text-sm text-charcoal-light tracking-wider leading-relaxed">
            お一人おひとりに最適な施術プランをご提案いたします。
            <br />
            まずはお気軽にご相談ください。
          </p>
        </div>

        {/* Price card */}
        <div className="border border-gold/20 rounded-2xl overflow-hidden bg-gradient-to-b from-ivory to-warm-white">
          <div className="bg-charcoal text-center py-5">
            <p className="text-[10px] tracking-[0.3em] text-gold-light uppercase">
              Trial Course
            </p>
            <p className="font-serif text-lg tracking-wider text-warm-white mt-1">
              初回体験コース
            </p>
          </div>

          <div className="p-8 md:p-10 text-center">
            <p className="text-sm text-charcoal-light tracking-wider mb-4">
              カウンセリング＋施術（約60〜90分）
            </p>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm text-warm-gray line-through">¥22,000</span>
              <span className="text-sm text-warm-gray ml-2">→</span>
            </div>
            <div className="flex items-baseline justify-center mt-2">
              <span className="text-sm text-gold">¥</span>
              <span className="number-highlight text-4xl md:text-5xl text-gold">
                11,000
              </span>
              <span className="text-sm text-charcoal-light ml-2">（税込）</span>
            </div>
            <p className="mt-3 text-[10px] text-dusty-rose tracking-wider">
              ※ 初回限定・お一人様一回限り
            </p>

            <div className="gold-line mx-auto my-6" />

            <ul className="text-left space-y-2 max-w-xs mx-auto">
              {[
                "骨格診断カウンセリング",
                "オーダーメイド施術",
                "アフターケアアドバイス",
                "ホームケア指導",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal-light">
                  <span className="text-gold text-xs">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] text-warm-gray tracking-wider leading-relaxed">
          ※ 無理な勧誘・回数券の販売は一切いたしません。
          <br />
          ※ 2回目以降の料金はカウンセリング時にご説明いたします。
        </p>

        <div className="mt-10 text-center">
          <CTAButton large />
        </div>
      </div>
    </section>
  );
}
