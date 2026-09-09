import type { Country } from "@/types/packages/Country";

// Copied from the original project (including its API response naming).
export interface CountriesThatHavePackagesResponeType {
  status: boolean;
  data: Country[];
}
