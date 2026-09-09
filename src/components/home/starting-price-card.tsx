import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Country } from "@/types/packages/Country";

export function StartingPriceCard({ country }: { country: Country }) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="flex-row items-center justify-between">
        <span className="text-4xl" aria-hidden>
          {country.image_url}
        </span>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <CardTitle>{country.name}</CardTitle>
        <p className="mt-2 text-sm text-muted-foreground">Starting from</p>
        <p className="mt-1 text-2xl font-bold text-primary">
          ${Number(country.starts_at ?? 0).toFixed(2)}
        </p>
        <Link
          className="mt-5 inline-block text-sm font-semibold text-primary"
          href={country.href}
        >
          View packages →
        </Link>
      </CardContent>
    </Card>
  );
}
