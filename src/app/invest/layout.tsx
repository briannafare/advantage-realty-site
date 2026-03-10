import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portland Investment Properties | Advantage Realty",
  description:
    "Build real estate wealth in Portland. Rental properties, portfolio growth, 1031 exchanges & care home investment. Expert guidance from brokers with 16+ years in the market.",
};

export default function InvestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
