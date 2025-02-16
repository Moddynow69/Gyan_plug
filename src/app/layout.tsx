import type { Metadata } from "next";
import "./globals.css";
import { folito, inter } from "./fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GyanPlug",
  description: "Education Counselors",
  openGraph: {
    title: "GyanPlug",
    description: "Education Counselors",
    type: "website",
    locale: "en_US",
    siteName: "Gyan Plug",
    images: [{ url: "https://ibb.co/17ryW35" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1391313745164909');
            fbq('track', 'PageView');
          `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1391313745164909&ev=PageView&noscript=1"
        />
      </noscript>

      {/* Updated Google Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16870936451"
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16870936451');

            // Event snippet for PAGE VIEW FINAL conversion
            gtag('event', 'conversion', {
                'send_to': 'AW-16870936451/8JO9CJuFxZ0aEIOf2Ow-',
                'value': 1.0,
                'currency': 'INR'
            });
          `}
      </Script>
      {/* Mailchimp */}
      <Script id="mcjs" strategy="afterInteractive">
        {`
            !function(c,h,i,m,p){
              m=c.createElement(h),
              p=c.getElementsByTagName(h)[0],
              m.async=1,
              m.src=i,
              p.parentNode.insertBefore(m,p)
            }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/515e9fdcc4823ccc133f0cfca/d69ab3a568bfa6c2a92142e34.js");
          `}
      </Script>

      <body className={`${inter.className} ${folito.className}`}>
        {children}
      </body>
    </html>
  );
}
