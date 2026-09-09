import { Headset, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const destinations = ["United States", "United Kingdom", "Japan", "Turkey"];

export function Footer() {
  return (
    <footer id="support" className="mt-24 border-t bg-muted/40">
      <div className="container mx-auto grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-4">
          <p className="font-montserrat text-xl font-semibold">
            eSIM<span className="text-primary">Card</span>
          </p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Stay connected wherever your trip takes you with simple, affordable
            travel data.
          </p>
          <p className="flex gap-2 text-sm">
            <MapPin className="h-5 w-5 text-primary" /> Longwood, Florida, USA
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-semibold">Popular destinations</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {destinations.map((name) => (
              <li key={name}>
                <Link
                  className="hover:text-primary"
                  href={`/esim/${name.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-semibold">Support & company</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              <Link className="hover:text-primary" href="/about-us">
                About us
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href="/how-it-works">
                How it works
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href="/support">
                Help & support
              </Link>
            </p>
            <a
              className="flex items-center gap-2 hover:text-primary"
              href="mailto:support@esimcard.com"
            >
              <Mail className="h-5 w-5" /> support@esimcard.com
            </a>
            <a
              className="flex items-center gap-2 hover:text-primary"
              href="mailto:tickets@esimcard.com"
            >
              <Headset className="h-5 w-5" /> tickets@esimcard.com
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © 2026 ESIMCARD LLC. Session scaffold.
      </div>
    </footer>
  );
}
