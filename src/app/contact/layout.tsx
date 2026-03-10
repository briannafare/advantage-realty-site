import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Advantage Realty | Portland OR | Free Consultation",
  description:
    "Schedule a free real estate consultation with Advantage Realty in Clackamas, OR. Call (503) 793-7520. Direct broker access on every deal. Buying, selling, investing.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
