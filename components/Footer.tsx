import Image from "next/image";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import Logo from "./Logo";
import elevateLogo from "@/public/elevate-logo.png";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-[84px]" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-light">
              Mobile Mechanic Services. Honest, reliable auto repair brought
              directly to you across {site.serviceArea}.
            </p>
            <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {site.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-steel-light transition-colors hover:text-brand"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-3 text-sm text-steel-light transition-colors hover:text-brand"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-center gap-3 break-all text-sm text-steel-light transition-colors hover:text-brand"
                >
                  <Mail className="h-4 w-4 text-brand" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-steel-light">
                <MapPin className="h-4 w-4 text-brand" />
                {site.location}
              </li>
              <li className="flex items-center gap-3 text-sm text-steel-light">
                <Facebook className="h-4 w-4 text-brand" />
                100% Recommended · {site.facebook.reviews} Reviews
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-steel">
            © {year} {site.name}. Mobile Mechanic Services · Serving{" "}
            {site.serviceArea}.
          </p>
          <p className="text-xs text-steel">
            Demo website concept. Not an active commercial site.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center border-t border-white/10 pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-steel/70">
            Website Designed By
          </p>
          <a
            href="https://www.elevatedigitalstudios.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 flex items-center gap-3"
          >
            <Image
              src={elevateLogo}
              alt="Elevate Digital Studios"
              sizes="44px"
              className="h-11 w-11 select-none"
            />
            <span className="font-display text-lg font-bold tracking-wide text-white transition-colors group-hover:text-brand">
              Elevate Digital Studios
            </span>
          </a>
          <a
            href="https://www.elevatedigitalstudios.net"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-xs text-steel/70 transition-colors hover:text-brand"
          >
            www.elevatedigitalstudios.net
          </a>
        </div>
      </div>
    </footer>
  );
}
