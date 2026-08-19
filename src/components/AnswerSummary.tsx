import type { AiOverviewContent } from "@/lib/aiOverviewContent";

type AnswerSummaryProps = {
  content: AiOverviewContent;
  dark?: boolean;
};

export default function AnswerSummary({ content, dark = false }: AnswerSummaryProps) {
  return (
    <section className={dark ? "py-16 md:py-20 bg-charcoal text-warm-white" : "py-16 md:py-20 bg-warm-white"}>
      <div className="max-w-5xl mx-auto px-6">
        <div
          className={
            dark
              ? "rounded-lg border border-gold/25 bg-warm-white/[0.04] p-6 md:p-9"
              : "rounded-lg border border-gold/20 bg-white/70 p-6 md:p-9 shadow-sm"
          }
        >
          <p className="text-xs text-gold mb-3">{content.eyebrow}</p>
          <div className="grid lg:grid-cols-[1.15fr_0.95fr] gap-8">
            <div>
              <h2 className={`font-serif text-xl md:text-3xl leading-relaxed mb-5 ${dark ? "text-warm-white" : "text-charcoal"}`}>
                {content.title}
              </h2>
              <p className={`text-sm md:text-base leading-loose ${dark ? "text-greige" : "text-charcoal-light"}`}>
                {content.summary}
              </p>
            </div>

            <div className="space-y-6">
              <dl className="grid grid-cols-2 gap-3">
                {content.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className={
                      dark
                        ? "rounded-lg border border-gold/15 bg-charcoal/40 p-3"
                        : "rounded-lg border border-gold/15 bg-warm-white p-3"
                    }
                  >
                    <dt className={`text-xs mb-1 ${dark ? "text-greige" : "text-warm-gray"}`}>{fact.label}</dt>
                    <dd className="font-serif text-sm md:text-base text-gold">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <div>
                <p className={`font-serif text-sm mb-3 ${dark ? "text-warm-white" : "text-charcoal"}`}>向いている方</p>
                <ul className={`space-y-2 text-sm leading-relaxed ${dark ? "text-greige" : "text-charcoal-light"}`}>
                  {content.suitable.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`mt-8 pt-6 border-t ${dark ? "border-gold/20" : "border-gold/15"}`}>
            <p className={`font-serif text-base md:text-lg mb-4 ${dark ? "text-warm-white" : "text-charcoal"}`}>
              よくある質問
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {content.faqs.map((faq) => (
                <div key={faq.question} className={dark ? "rounded-lg bg-black/10 p-4" : "rounded-lg bg-ivory p-4"}>
                  <h3 className={`text-sm font-medium leading-relaxed mb-2 ${dark ? "text-warm-white" : "text-charcoal"}`}>
                    {faq.question}
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed ${dark ? "text-greige" : "text-charcoal-light"}`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
