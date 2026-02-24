import { FiPhone, FiCalendar } from "react-icons/fi";

export default function ReserveSection() {
  return (
    <section
      id="reserve"
      className="py-20 md:py-28 bg-gradient-to-b from-charcoal to-charcoal/95 text-warm-white"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-gold-light uppercase mb-3">
          Reservation
        </p>
        <h2 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-wider mb-4">
          ご予約・お問い合わせ
        </h2>
        <div className="gold-line-wide mx-auto mb-8" />

        <p className="text-sm text-greige-dark tracking-wider leading-relaxed mb-10">
          完全予約制となっております。
          <br />
          お電話またはWeb予約にてお気軽にお問い合わせください。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Phone CTA */}
          <a
            href="tel:08063202573"
            className="flex items-center gap-3 border-2 border-gold/40 text-gold-light rounded-full px-8 py-4 hover:bg-gold/10 transition-colors w-full sm:w-auto justify-center"
          >
            <FiPhone className="w-5 h-5" />
            <span className="tracking-wider">080-6320-2573</span>
          </a>

          {/* Web reservation CTA */}
          <a
            href="https://yukisiki-kogao.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gold text-white rounded-full px-8 py-4 hover:bg-gold-dark transition-colors cta-pulse w-full sm:w-auto justify-center"
          >
            <FiCalendar className="w-5 h-5" />
            <span className="tracking-wider">Web予約はこちら</span>
          </a>
        </div>

        <p className="mt-6 text-[10px] text-warm-gray tracking-wider">
          受付時間 10:00〜22:00 ／ 不定休
        </p>
      </div>
    </section>
  );
}
