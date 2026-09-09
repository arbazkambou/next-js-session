export function PackagesSkeleton() {
  return (
    <div className="space-y-10" aria-label="Loading packages">
      <div className="max-w-3xl space-y-4">
        <div className="h-12 w-12 animate-pulse rounded-full bg-muted" />
        <div className="h-9 w-2/3 animate-pulse rounded-lg bg-muted" />
        <div className="h-5 w-full animate-pulse rounded-lg bg-muted" />
        <div className="h-5 w-4/5 animate-pulse rounded-lg bg-muted" />
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-72 animate-pulse rounded-xl border bg-muted"
          />
        ))}
      </div>
    </div>
  );
}
