import { StartingPriceCard } from "@/components/home/starting-price-card";
import { Country } from "@/types/packages/Country";

export async function CountriesGrid({ countries }: { countries: Country[] }) {
  return (
    <div className="mt-12 space-y-6">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {countries.map((country) => (
          <StartingPriceCard key={country.slug} country={country} />
        ))}
      </div>
    </div>
  );
}
