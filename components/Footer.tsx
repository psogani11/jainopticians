import Link from "next/link";
import { Instagram, Facebook, MapPin } from "lucide-react";
import Newsletter from "./Newsletter";
import { stores } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-px max-w-container mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="font-display text-2xl">Jain Opticians</span>
          <p className="mt-4 text-sm text-cream/70 max-w-xs">
            Independent eye care and designer eyewear, dispensing in Jaipur
            since our first boutique opened on MI Road.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-brass-light">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-brass-light">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <span className="eyebrow text-brass-light">Navigate</span>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li><Link href="/" className="hover:text-cream">Home</Link></li>
            <li><Link href="/categories-brands" className="hover:text-cream">Categories & Brands</Link></li>
            <li><Link href="/locate-us" className="hover:text-cream">Store Locator</Link></li>
            <li><Link href="/contact-us" className="hover:text-cream">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <span className="eyebrow text-brass-light">Boutique Hours</span>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            {stores.map((store) => (
              <li key={store.id} className="flex gap-2">
                <MapPin size={15} className="shrink-0 mt-0.5 text-brass-light" />
                <span>
                  <span className="block text-cream">{store.area}</span>
                  {store.hours.map((h) => (
                    <span key={h.day} className="block font-mono text-xs text-cream/60">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="eyebrow text-brass-light">Stay In Touch</span>
          <p className="mt-4 text-sm text-cream/70">
            Seasonal collection previews and appointment reminders, once a month.
          </p>
          <div className="mt-4">
            <Newsletter />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-px max-w-container mx-auto py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs font-mono text-cream/50">
          <span>© {new Date().getFullYear()} Jain Opticians, Jaipur. All rights reserved.</span>
          <span>Registered dispensing opticians</span>
        </div>
      </div>
    </footer>
  );
}
