import type { Metadata } from "next";
import { Space_Grotesk, Inter, DM_Serif_Display } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { LOCAL_BUSINESS_SCHEMA } from "@/lib/constants";
import "./globals.css";

/* ----------------------------------------------------------------
   Google Fonts — loaded via next/font for zero layout shift
   ---------------------------------------------------------------- */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-body",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
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
    "Portland-area real estate brokerage specializing in residential sales, investment properties, and adult care home consulting. Multilingual team — English, Oromo, Amharic. Serving Clackamas, Happy Valley, Milwaukie, and the greater Portland metro.",
  metadataBase: new URL("https://advantagerealtypdx.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Advantage Realty LLC",
    title: "Advantage Realty LLC — Portland Real Estate",
    description:
      "Rooted in community, driven by results. Buy, sell, or invest in Portland real estate with a team that speaks your language.",
    images: [
      {
        url: "/images/og-image-home.webp",
        width: 1200,
        height: 630,
        alt: "Advantage Realty LLC — Portland Real Estate",
      },
    ],
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${dmSerifDisplay.variable}`}
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
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
