import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Sans, Fraunces } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { LOCAL_BUSINESS_SCHEMA } from "@/lib/constants";
import "./globals.css";

/* ----------------------------------------------------------------
   Google Fonts — Design System v2
   Display: Plus Jakarta Sans (headings, nav, buttons)
   Body: Instrument Sans (body, labels, captions)
   Accent: Fraunces italic (one word per headline)
   ---------------------------------------------------------------- */
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

/* ----------------------------------------------------------------
   Metadata
   ---------------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "Advantage Realty LLC — Portland Real Estate",
    template: "%s | Advantage Realty LLC",
  },
  description:
    "Family-run brokerage with 16+ years experience. Direct broker access on every deal. Also available in Oromo and Amharic. Serving Clackamas, Happy Valley, Milwaukie, and the greater Portland metro.",
  metadataBase: new URL("https://advantagerealtypdx.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Advantage Realty LLC",
    title: "Advantage Realty LLC — Portland Real Estate",
    description:
      "Rooted in community, driven by results. Buy, sell, or invest in Portland real estate with a family team that knows your market.",
  },
};

/* ----------------------------------------------------------------
   Root Layout
   ---------------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${instrumentSans.variable} ${fraunces.variable}`}
    >
      <head>
        {/* LocalBusiness JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
          }}
        />

        {/* --------------------------------------------------------
            GHL Chat Widget — Uncomment when client provides
            their Go High Level location ID.

            <script
              src="https://widgets.leadconnectorhq.com/loader.js"
              data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
              data-widget-id="[CLIENT TO PROVIDE: GHL Widget ID]"
              async
            ></script>
        -------------------------------------------------------- */}
      </head>
      <body className="min-h-screen bg-bg font-body text-t1 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
