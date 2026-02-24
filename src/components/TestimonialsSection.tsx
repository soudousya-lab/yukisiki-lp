import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    age: "20代後半",
    text: "写真写りが全然違います。友達からも「顔変わった？」と言われるようになりました。SNSに写真を載せるのが楽しくなりました。",
    concern: "写真映え・小顔",
    stars: 5,
  },
  {
    age: "30代",
    text: "ずっと気になっていた顔の左右差がなくなりました。鏡を見るたびに嬉しくなります。もっと早く来ればよかった。",
    concern: "左右差・歪み",
    stars: 5,
  },
  {
    age: "40代",
    text: "たるみが気になり始めて来店。施術後、明らかにフェイスラインが変わりました。「疲れてる？」と言われなくなったのが一番嬉しいです。",
    concern: "たるみ・フェイスライン",
    stars: 5,
  },
  {
    age: "50代",
    text: "年齢を感じさせない顔になりたくて通い始めました。品のある若々しさが手に入りました。主人にも褒められています。",
    concern: "若々しさ・品",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="voice" className="py-20 md:py-28 bg-ivory">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading en="Voice" ja="お客様の声" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-warm-white border border-greige/30 rounded-2xl p-7 md:p-8 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-5 right-6 font-serif text-5xl text-gold/10 leading-none">
                &ldquo;
              </span>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dusty-rose-light/50 to-gold/20 flex items-center justify-center">
                  <span className="text-xs text-gold font-serif">{t.age.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm text-charcoal tracking-wider">{t.age}　女性</p>
                  <p className="text-[10px] text-warm-gray tracking-wider">
                    お悩み：{t.concern}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-charcoal-light leading-relaxed tracking-wide">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
