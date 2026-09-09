import Link from "next/link";
import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="container mx-auto mt-16 grid items-center gap-16 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="font-semibold text-primary">404 — Page not found</p>
        <h1 className="font-montserrat text-4xl font-bold md:text-5xl">
          This destination is off the map.
        </h1>
        <p className="max-w-xl text-muted-foreground">
          The page or country package you requested does not exist. Try one of
          our popular destinations instead.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Go to homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/esim/united-states">Browse an example</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-2 pt-3 text-sm">
          <Link className="text-primary hover:underline" href="/esim/japan">
            Japan eSIM packages
          </Link>
          <Link
            className="text-primary hover:underline"
            href="/esim/united-kingdom"
          >
            United Kingdom eSIM packages
          </Link>
        </div>
      </div>
      <div className="flex min-h-[360px] items-center justify-center rounded-[30px] bg-muted">
        <div className="text-center">
          <p className="font-montserrat text-8xl font-bold text-primary/20">
            404
          </p>
          <SearchX className="mx-auto -mt-5 h-24 w-24 text-primary" />
        </div>
      </div>
    </section>
  );
}
