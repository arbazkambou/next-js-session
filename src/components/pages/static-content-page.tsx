import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StaticContentPageProps {
  eyebrow: string;
  title: string;
  description: string;
  points: { title: string; description: string }[];
}

export function StaticContentPage({ eyebrow, title, description, points }: StaticContentPageProps) {
  return (
    <section className="container mx-auto mt-16">
      <div className="max-w-3xl"><p className="font-semibold text-primary">{eyebrow}</p><h1 className="mt-3 font-montserrat text-4xl font-bold md:text-5xl">{title}</h1><p className="mt-5 text-lg text-muted-foreground">{description}</p><Button asChild className="mt-7"><Link href="/#destinations">Browse destinations <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">{points.map((point) => <article key={point.title} className="rounded-xl border bg-card p-6"><h2 className="font-montserrat text-xl font-semibold">{point.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{point.description}</p></article>)}</div>
    </section>
  );
}
