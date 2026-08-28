import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import JaaliPattern from "@/components/JaaliPattern";

export const metadata = {
  title: "Contact Us — Jain Opticians",
  description: "Reach Jain Opticians by phone, WhatsApp, email or in person at our Jaipur boutiques.",
};

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 141 400 1122",
    href: "tel:+911414001122",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 98290 00000",
    href: "https://wa.me/919829000000",
  },
  {
    icon: Mail,
    label: "VIP Concierge",
    value: "concierge@jainopticians.example",
    href: "mailto:concierge@jainopticians.example",
  },
  {
    icon: MapPin,
    label: "Flagship Boutique",
    value: "22 Prithviraj Road, C-Scheme, Jaipur",
    href: "/locate-us",
  },
];

export default function ContactUsPage() {
  return (
    <>
      <section className="relative bg-ink text-cream py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <JaaliPattern id="contact-hero-jaali" color="#F6F1E7" size={72} />
        </div>
        <div className="container-px max-w-container mx-auto relative">
          <span className="eyebrow text-brass-light">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl mt-4 max-w-xl">Contact Us</h1>
          <p className="mt-5 text-cream/75 max-w-lg text-[15px]">
            Whether it's a repair, a prescription question, or a frame you
            saw and want held aside — the fastest way to reach us is by
            phone or WhatsApp during boutique hours.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-cream">
        <div className="container-px max-w-container mx-auto grid lg:grid-cols-2 gap-16">
          <Reveal>
            <span className="eyebrow">Direct Lines</span>
            <div className="mt-6 space-y-6">
              {CONTACT_METHODS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <span className="flex items-center justify-center w-11 h-11 shrink-0 border border-hairline group-hover:border-brass group-hover:bg-brass/5 transition-colors">
                    <Icon size={18} className="text-brass" />
                  </span>
                  <span>
                    <span className="block eyebrow">{label}</span>
                    <span className="block font-display text-lg mt-0.5 group-hover:text-brass transition-colors">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 border-t border-hairline pt-8">
              <span className="eyebrow">Boutique Hours</span>
              <p className="mt-3 text-sm text-ink/70 font-mono">
                Mon – Sat: 10:00 AM – 8:30 PM<br />
                Sunday: 11:00 AM – 6:00 PM (C-Scheme only)
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Send an Enquiry</span>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
