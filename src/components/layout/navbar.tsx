import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "Home" },
  { href: "/esim", label: "Buy eSIM" },
  { href: "/about-us", label: "About us" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/support", label: "Support" },
];

// Server Component by default: this navigation is intentionally static.
export function Navbar() {
  return (
    <header className="container relative z-50 mx-auto mt-4 flex items-center justify-between rounded-xl border bg-background/90 px-5 py-4 shadow-sm backdrop-blur">
      <Link href="/" className="font-montserrat text-2xl font-bold tracking-tight">
        eSIM<span className="text-primary">Card</span>
      </Link>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary">{link.label}</Link>)}
      </nav>
      <Button asChild size="sm"><Link href="/esim/united-states">Get an eSIM</Link></Button>
    </header>
  );
}
