"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, Wrench, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-900/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-ink-900/80 to-transparent"
      }`}
    >
      <nav className="container-px flex h-[140px] items-center justify-between sm:h-[164px]">
        <a
          href="#top"
          aria-label="Mike The Mechanic - back to top"
          className="-ml-3 flex items-center sm:-ml-5 xl:mr-10"
        >
          <Logo priority className="h-[109px] sm:h-[132px]" />
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-steel-light transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/40"
          >
            <Phone className="h-4 w-4 text-brand" />
            {site.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-brand-light"
          >
            <Wrench className="h-4 w-4" />
            Request Service
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white xl:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 top-[140px] bg-ink-900/95 backdrop-blur-sm transition-opacity duration-300 sm:top-[164px] ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-[140px] origin-top border-b border-white/10 bg-ink-800 px-5 pb-8 pt-4 shadow-2xl transition-all duration-300 sm:top-[164px] ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-4 text-base font-semibold uppercase tracking-wider text-steel-light transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-base font-bold uppercase tracking-wide text-white"
            >
              <Phone className="h-5 w-5" />
              Call {site.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-base font-bold uppercase tracking-wide text-white"
            >
              <Wrench className="h-5 w-5 text-brand" />
              Request Service
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
