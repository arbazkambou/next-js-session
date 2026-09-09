export function CountriesGridSkeleton() {
  return (
    <div
      className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      aria-label="Loading destinations"
    >
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="h-40 animate-pulse rounded-xl border bg-muted"
        />
      ))}
    </div>
  );
}
