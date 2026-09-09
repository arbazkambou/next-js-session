# eSIMCard — Next.js session scaffold

A deliberately small App Router project for demonstrating modern Next.js concepts. It uses Next.js 16.2.3, React 19, TypeScript, Tailwind CSS, and a shadcn-compatible setup.

## Run it

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_BASE_API` to the real eSIMCard API. The country and package service functions have no mock-data fallback.

## Session map

| Concept | Start here | Talking point |
| --- | --- | --- |
| Data fetching | `src/lib/fetch/api.ts`, `src/services/esim-api.ts` | Basic generic wrapper, original response types, server-side `fetch`, revalidation |
| RSC architecture | `src/app/layout.tsx`, `src/app/page.tsx` | Components are Server Components unless marked otherwise |
| Server Components | `src/components/packages/packages-list.tsx` | Async component reads data on the server |
| Client Components | `src/components/packages/buy-package-button.tsx` | A small `use client` island owns interactive state |
| `loading.tsx` | `src/app/esim/[slug]/loading.tsx` | Route-level navigation fallback |
| Suspense | `src/app/esim/[slug]/page.tsx` | A local streaming boundary around package data |
| Dynamic segment | `src/app/esim/[slug]` | `params` is awaited in Next.js 16 |
| Metadata API | `generateMetadata` in the country page | Route data produces title and description |
| Error boundary | `src/app/error.tsx` | Visit `/esim/error-demo` in dev to throw deliberately |
| Not found | `src/app/not-found.tsx` | Visit `/esim/unknown-country` |
| SSG | `generateStaticParams` in the country page | Known country slugs are generated at build time |
| ISR | `revalidate = 3600` in the country page | Static output can refresh after one hour |
| PPR | `next.config.ts` and the country page | Enable `cacheComponents`, cache stable work, and keep dynamic work behind Suspense |

## Suggested live-demo sequence

1. Begin at `/` and identify Server Components and typed static props.
2. Open `/esim/united-states` and inspect the dynamic `params` promise.
3. Increase the artificial delay in `getDataOnlyPackages` to compare `loading.tsx` with the nested Suspense fallback.
4. Inspect `generateMetadata`, `generateStaticParams`, and `revalidate` together.
5. Visit `/esim/unknown-country` and `/esim/error-demo` to trigger their boundaries.
6. Enable `cacheComponents` in `next.config.ts` while discussing PPR/Cache Components. This is left commented so the baseline examples remain straightforward.

## API contract

- `getCountriesWithStartingPrice(): Promise<ApiResponse<Country[]>>`
- `getDataOnlyPackages(countrySlug: string): Promise<ApiResponse<PackagesData>>`

Update endpoint paths or response mapping in `src/services/esim-api.ts` to match the production API.
