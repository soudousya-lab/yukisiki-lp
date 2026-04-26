"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,id){
            w.dataLayer = w.dataLayer || [];
            w.gtag = function(){w.dataLayer.push(arguments);};
            w.gtag('js', new Date());
            w.gtag('config', id);
          })(window, document, '${GA_ID}');
        `}
      </Script>
    </>
  );
}
