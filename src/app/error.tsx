"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Homepage" },
  { href: "/esim/united-states", label: "United States eSIM" },
  { href: "/esim/japan", label: "Japan eSIM" },
];

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="container mx-auto mt-16 grid items-center gap-16 lg:grid-cols-2">
      <div className="space-y-6">
        <p className="font-semibold text-destructive">Something went wrong</p>
        <h1 className="font-montserrat text-4xl font-bold md:text-5xl">
          We hit an unexpected connection problem.
        </h1>
        <p className="text-muted-foreground">
          This route-level error boundary caught an exception without replacing
          the shared layout.
        </p>
        <Button onClick={reset}>
          <RotateCcw className="mr-2 h-4 w-4" /> Try again
        </Button>
        <div>
          <h2 className="mb-3 font-semibold">While you wait</h2>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex min-h-[360px] items-center justify-center rounded-[30px] bg-muted">
        <div className="rounded-full bg-destructive/10 p-12">
          <AlertTriangle className="h-32 w-32 text-destructive" />
        </div>
      </div>
    </section>
  );
}
