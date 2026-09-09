import { PackagesList } from "@/components/packages/packages-list";

interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;

  return (
    <section className="container mx-auto mt-16">
      <div className="mb-10 max-w-3xl">
        <h1 className="font-montserrat text-4xl font-bold md:text-5xl">
          eSIM country packages
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          This heading and paragraph are fully static. They render in the
          Partial Prerendering shell immediately, while the country details and
          packages below stream in through Suspense.
        </p>
      </div>

      <PackagesList slug={slug} />

      <aside className="mt-8 rounded-xl border border-dashed bg-muted/50 p-5 text-sm text-muted-foreground">
        <strong className="text-foreground">Session tip:</strong> throttle or
        increase the delay in <code>src/services/esim-api.ts</code> to keep the
        Suspense fallback visible.
      </aside>
    </section>
  );
}
