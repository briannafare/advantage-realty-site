import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Portland Real Estate Agent | Advantage Realty LLC",
  description:
    "Portland's real estate team with 20+ years of local expertise. Buy, sell, invest — including care home properties and 1031 Exchange. Schedule a free consultation today.",
};

export default function HomePage() {
  return <HomePageClient />;
}
