import { CalendarDays } from "lucide-react";
import { BuyPackageButton } from "@/components/packages/buy-package-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Package } from "@/types/packages/data-only/DataOnlyCountryPackages";

function validityLabel(value: number, unit: string) {
  const normalized = unit.toLowerCase().replace(/s$/, "");
  return `${value} ${normalized}${value === 1 ? "" : "s"}`;
}

export function CountryPackageCard({ package: plan }: { package: Package }) {
  const dataLabel = plan.unlimited
    ? "Unlimited"
    : `${plan.data_quantity} ${plan.data_unit}`;

  return (
    <Card className="flex h-full flex-col transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="space-y-4">
        <CardTitle className="line-clamp-2 text-lg leading-snug">
          {plan.name}
        </CardTitle>
        <p className="font-montserrat text-3xl font-bold text-primary">
          {dataLabel}
        </p>
      </CardHeader>
      <CardContent className="mt-auto flex flex-1 flex-col gap-6">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
          Valid for {validityLabel(plan.package_validity, plan.package_validity_unit)}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <p>
            <span className="text-2xl font-bold">${plan.price.toFixed(2)}</span>{" "}
            <span className="text-xs text-muted-foreground">
              {plan.price_currency}
            </span>
          </p>
          <BuyPackageButton />
        </div>
      </CardContent>
    </Card>
  );
}
