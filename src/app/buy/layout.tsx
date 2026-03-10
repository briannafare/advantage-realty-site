import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy a Home in Portland OR | Advantage Realty",
  description:
    "Find your Portland home with a dedicated buyer's agent. Pre-vetted showings, expert negotiation & trilingual support. Free buyer consultation — call (503) 793-7520.",
};

export default function BuyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
