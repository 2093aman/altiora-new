import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://altiorainfotech.ca"),
  alternates: {
    canonical: "https://altiorainfotech.ca/",
  },
  title: "AI, Web3 & Product Engineering - Altiora Infotech",
  description: "Accelerate results with AI, Web3, and product engineering at Altiora Infotech. We specialize in artificial intelligence services and Web3 development to help businesses innovate and scale.",
  openGraph: {
    title: "AI, Web3 & Product Engineering - Altiora Infotech",
    description: "Accelerate results with AI, Web3, and product engineering at Altiora Infotech. We specialize in artificial intelligence services and Web3 development to help businesses innovate and scale.",
    url: "https://altiorainfotech.ca",
    siteName: "Altiora Infotech",
    images: [{
      url: "https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg",
      width: 1200,
      height: 630,
      alt: "Altiora Infotech - AI, Web3 & Product Engineering"
    }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI, Web3 & Product Engineering - Altiora Infotech",
    description: "Accelerate results with AI, Web3, and product engineering at Altiora Infotech. We specialize in artificial intelligence services and Web3 development to help businesses innovate and scale.",
    images: ["https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B2LP9STYEY" />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-B2LP9STYEY');`
        }} />
        {/* End Google tag (gtag.js) */}

        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MGDD26D9');`
        }} />
        {/* End Google Tag Manager */}
        
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1561301318458212');fbq('track', 'PageView');`
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1561301318458212&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
        <meta name="google-site-verification" content="0JHYaGNGNJz_IizDDvRiDxZ3D-aIfFKeTxuSFWOPgaU" />
        <link rel="icon" href="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_sjyhnm.svg" type="image/svg+xml" />
        <link rel="icon" href="https://pub-00cafda969bc42d5aac5365b6609f526.r2.dev/logo_l6diqm.png" type="image/png" />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "tnby6djosr");`}
        </script>
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MGDD26D9"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}>
          </iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
