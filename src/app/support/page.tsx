import type { Metadata } from "next";
import { StaticContentPage } from "@/components/pages/static-content-page";

export const metadata: Metadata = { title: "Support" };

export default function SupportPage() {
  return (
    <StaticContentPage
      eyebrow="Help center"
      title="We’re here when you need us"
      description="Find basic guidance for installing, activating, and troubleshooting your travel eSIM."
      points={[
        {
          title: "Installation",
          description:
            "Install while connected to reliable Wi-Fi before your trip.",
        },
        {
          title: "Activation",
          description: "Set the eSIM as your mobile-data line after arrival.",
        },
        {
          title: "Contact",
          description:
            "Email support@esimcard.com when you need additional help.",
        },
      ]}
    />
  );
}
