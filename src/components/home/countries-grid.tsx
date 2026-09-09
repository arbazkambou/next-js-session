import { StartingPriceCard } from "@/components/home/starting-price-card";
import { getCountriesWithStartingPrice } from "@/services/esim-api";

export async function CountriesGrid() {
  const countries = await getCountriesWithStartingPrice();
  if (!countries.status) throw new Error(countries.message);

  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {countries.data.map((country) => (
        <StartingPriceCard key={country.slug} country={country} />
      ))}
    </div>
  );
}
