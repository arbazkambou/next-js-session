// Copied from the Country contract in esim-card/helpers/generateSiteMap.ts.
export interface Country {
  id: number;
  code: string;
  code_alpha3: string;
  local_state_code: string | null;
  name: string;
  image_url: string;
  slug: string;
  starts_at?: string;
  href: string;
}
