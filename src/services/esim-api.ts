import { api } from "@/lib/fetch/api";
import type { ApiResponse } from "@/types/api/API";
import type { Country } from "@/types/packages/Country";
import type { CountriesThatHavePackagesResponeType } from "@/types/packages/data-only/CountriesThatHaveDataOnlyPackages";
import type { CountryPackagesRespone, PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";

const pause = (milliseconds: number) => new Promise((resolve) => setTimeout(resolve, milliseconds));

export async function getCountriesWithStartingPrice(): Promise<ApiResponse<Country[]>> {
  try {
    const response = await api<CountriesThatHavePackagesResponeType>("/packages/country", { next: { revalidate: 3600 } });
    return { status: true, data: response.data };
  } catch (error) {
    return { status: false, message: error instanceof Error ? error.message : "Could not load countries" };
  }
}

export async function getDataOnlyPackages(countrySlug: string): Promise<ApiResponse<PackagesData>> {
  if (countrySlug === "error-demo") throw new Error("Intentional error for the error.tsx demonstration.");
  await pause(900);
  try {
    const response = await api<CountryPackagesRespone>(`/packages/country/${countrySlug}`, { next: { revalidate: 3600 } });
    return { status: true, data: response.data };
  } catch (error) {
    return { status: false, message: error instanceof Error ? error.message : "Could not load packages" };
  }
}
