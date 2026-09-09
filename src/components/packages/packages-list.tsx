import { CountryPackageCard } from "@/components/packages/country-package-card";
import { getDataOnlyPackages } from "@/services/esim-api";
import { notFound } from "next/navigation";

export async function PackagesList({ slug }: { slug: string }) {
  const result = await getDataOnlyPackages(slug);
  if (!result.status) notFound();

  const country = result.data.data;

  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        <h2 className="mt-5 font-montserrat text-3xl font-bold md:text-4xl">
          Packages for <span className="text-primary">{country.name}</span>
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {country.packages.map((plan) => (
          <CountryPackageCard key={plan.id} package={plan} />
        ))}
      </div>
    </div>
  );
}
