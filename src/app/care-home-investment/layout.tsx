import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care Home Investment Portland OR | Advantage Realty",
  description:
    "Portland's care home real estate specialists. ADA-compliant properties meeting Oregon OAR 411-054 licensing requirements. 16+ years of care home investment expertise.",
};

export default function CareHomeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
