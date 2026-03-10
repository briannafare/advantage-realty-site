import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Portland Home | Free Evaluation | Advantage Realty",
  description:
    "Sell your Portland home for top dollar. Free broker-assessed property evaluation, strategic pricing & professional marketing. 16+ years of Portland market expertise.",
};

export default function SellLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
