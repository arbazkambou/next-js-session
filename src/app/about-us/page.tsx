import type { Metadata } from "next";
import { StaticContentPage } from "@/components/pages/static-content-page";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <StaticContentPage
      eyebrow="About eSIMCard"
      title="Built to make travel connectivity simple"
      description="eSIMCard helps travelers get online without changing physical SIM cards or paying traditional roaming charges."
      points={[
        {
          title: "Global coverage",
          description: "Plans for popular destinations across the world.",
        },
        {
          title: "Simple setup",
          description:
            "Receive an eSIM digitally and install it before departure.",
        },
        {
          title: "Traveler focused",
          description:
            "Clear allowances, validity periods, and prepaid pricing.",
        },
      ]}
    />
  );
}
