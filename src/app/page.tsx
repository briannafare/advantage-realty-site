import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Portland Real Estate Agent | Advantage Realty LLC",
  description:
    "Family-run Portland brokerage — 16+ years of hands-on market expertise. Direct broker access on every deal. Buying, selling, investment & care home consulting across 11 metro communities.",
};

export default function HomePage() {
  return <HomePageClient />;
}
