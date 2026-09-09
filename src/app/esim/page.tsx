import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy an eSIM",
  description: "Browse popular prepaid travel eSIM destinations.",
};

export default function Page() {
  return (
    <section className="container mx-auto mt-16">
      <div className="max-w-3xl">
        <p className="font-semibold text-primary">Travel data</p>
        <h1 className="mt-3 font-montserrat text-4xl font-bold md:text-5xl">
          Choose your eSIM destination
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Pick a country to explore its available data packages.
        </p>
      </div>
      {/* <CountriesGrid /> */}
    </section>
  );
}
