import { CalendarDays, Radio, Wifi } from "lucide-react";
import { BuyPackageButton } from "@/components/packages/buy-package-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Package } from "@/types/packages/data-only/DataOnlyCountryPackages";

export function CountryPackageCard({ package: plan }: { package: Package }) {
  return (
    <Card>
      <CardHeader><div className="flex items-center justify-between"><CardTitle>{plan.name}</CardTitle><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Data only</span></div></CardHeader>
      <CardContent>
        <p className="font-montserrat text-4xl font-bold">{plan.data_allowance}</p>
        <div className="my-6 space-y-3 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> Valid for {plan.package_validity} {plan.package_validity_unit.toLowerCase()}s</p>
          <p className="flex items-center gap-2"><Radio className="h-4 w-4 text-primary" /> {plan.connectivity} coverage</p>
          <p className="flex items-center gap-2"><Wifi className="h-4 w-4 text-primary" /> Hotspot {plan.tether ? "supported" : "not supported"}</p>
        </div>
        <div className="flex items-center justify-between"><p><span className="text-2xl font-bold">${plan.price.toFixed(2)}</span> <span className="text-xs text-muted-foreground">{plan.price_currency}</span></p><BuyPackageButton packageName={plan.name} /></div>
      </CardContent>
    </Card>
  );
}
