import type { Metadata } from "next";
import { StaticContentPage } from "@/components/pages/static-content-page";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorksPage() {
  return (
    <StaticContentPage
      eyebrow="Three easy steps"
      title="Connect before your bags arrive"
      description="A static overview of the eSIM journey, included so the navigation points to a complete route."
      points={[
        {
          title: "1. Choose",
          description: "Select your destination and preferred data package.",
        },
        {
          title: "2. Install",
          description: "Scan the QR code from your confirmation email.",
        },
        {
          title: "3. Connect",
          description: "Enable the eSIM when you arrive and start using data.",
        },
      ]}
    />
  );
}
