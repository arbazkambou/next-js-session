import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mx-auto mt-10 grid items-center gap-12 lg:grid-cols-2">
      <div className="space-y-7">
        <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"><Globe2 className="h-4 w-4" /> Coverage in 190+ destinations</p>
        <h1 className="font-montserrat text-4xl font-bold leading-tight md:text-6xl">One eSIM.<br /><span className="text-primary">A world of connection.</span></h1>
        <p className="max-w-xl text-lg text-muted-foreground">Choose a destination, install your eSIM in minutes, and land online without expensive roaming bills.</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg"><Link href="#destinations">Browse destinations <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          <Button asChild variant="outline" size="lg"><Link href="/esim/united-states">View example route</Link></Button>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
          <span className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Instant delivery</span>
          <span className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> No roaming fees</span>
        </div>
      </div>
      <div className="hero-grid relative min-h-[430px] overflow-hidden rounded-[2rem] bg-primary/5 p-8">
        <div className="absolute inset-10 rotate-3 rounded-[2rem] bg-gradient-to-br from-primary to-emerald-950 shadow-2xl" />
        <div className="relative mx-auto mt-14 flex h-64 max-w-xs flex-col justify-between rounded-3xl border border-white/20 bg-white/10 p-7 text-white shadow-xl backdrop-blur">
          <div className="flex items-center justify-between"><span className="font-semibold">eSIMCard</span><Wifi /></div>
          <div><p className="text-sm text-white/70">Global data</p><p className="mt-1 text-4xl font-bold">10 GB</p></div>
          <div className="flex justify-between text-sm"><span>30 days</span><span>Ready to install</span></div>
        </div>
      </div>
    </section>
  );
}
