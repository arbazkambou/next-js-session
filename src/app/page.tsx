import { Hero } from "@/components/home/hero";

export default async function Page() {
  return (
    <>
      <Hero />
      <section id="destinations" className="container mx-auto mt-24">
        <div className="mb-8">
          <p className="font-semibold text-primary">Popular destinations</p>
          <h2 className="mt-2 font-montserrat text-3xl font-bold md:text-4xl">
            Data plans at local prices
          </h2>
          <p className="mt-3 text-muted-foreground">
            Static typed props keep the first example focused on component
            composition.
          </p>
        </div>
        {/* <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCountries.map((country) => (
            <StartingPriceCard key={country.slug} country={country} />
          ))}
        </div> */}
      </section>
    </>
  );
}
