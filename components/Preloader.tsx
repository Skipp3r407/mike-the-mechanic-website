"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Cog } from "lucide-react";
import logoMark from "@/public/logo-mark.png";
import { site } from "@/lib/site";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const minDelay = 900;
    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDelay - elapsed);
      window.setTimeout(() => setHidden(true), wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    // Safety fallback so the screen never gets stuck.
    const failSafe = window.setTimeout(() => setHidden(true), 4000);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(failSafe);
    };
  }, []);

  // Unmount after the fade-out transition completes.
  useEffect(() => {
    if (!hidden) return;
    const t = window.setTimeout(() => setRemoved(true), 650);
    return () => window.clearTimeout(t);
  }, [hidden]);

  // Lock scroll while the loader is visible.
  useEffect(() => {
    if (removed) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [removed]);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-900 transition-opacity duration-[600ms] ease-out ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(225,29,42,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid-steel bg-[size:46px_46px] opacity-40" />

      <div className="relative flex flex-col items-center">
        {/* Spinning gear */}
        <div className="relative flex items-center justify-center">
          <span className="absolute h-28 w-28 rounded-full bg-brand/15 blur-2xl" />
          <Cog
            aria-hidden="true"
            strokeWidth={1.5}
            className="h-24 w-24 animate-spin-slow text-brand drop-shadow-[0_0_22px_rgba(225,29,42,0.45)] [animation-duration:3.5s]"
          />
        </div>

        {/* Logo underneath the gear */}
        <Image
          src={logoMark}
          alt="Mike The Mechanic"
          width={300}
          height={108}
          priority
          className="mt-9 h-auto w-56 sm:w-64"
        />

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-steel">
          {site.tagline}
        </p>

        {/* Indeterminate progress bar */}
        <div className="mt-7 h-1 w-48 overflow-hidden rounded-full bg-charcoal-light">
          <span
            className="block h-full w-1/2 rounded-full bg-gradient-to-r from-brand to-brand-light"
            style={{ animation: "loader-sweep 1.2s ease-in-out infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
