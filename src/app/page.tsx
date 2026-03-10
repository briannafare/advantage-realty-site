import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "Portland Real Estate Agent | Advantage Realty LLC",
  description:
    "Portland's trilingual real estate team — English, Oromo & Amharic. 16+ years helping families buy, sell & invest across 11 Portland metro communities. Free consultation.",
};

export default function HomePage() {
  return <HomePageClient />;
}
