"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function StickyCallButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={site.phoneHref}
      aria-label={`Call ${site.phone}`}
      className={`fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-300 lg:hidden ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
        <Phone className="relative h-5 w-5" />
      </span>
      Call Mike Now
    </a>
  );
}
