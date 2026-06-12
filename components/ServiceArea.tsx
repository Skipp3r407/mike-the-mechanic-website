import { MapPin, Navigation } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const areas = [
  "DeLeon Springs",
  "DeLand",
  "Deltona",
  "Orange City",
  "Daytona Beach",
  "Debary",
];

export default function ServiceArea() {
  return (
    <section
      id="service-area"
      className="section-pad relative scroll-mt-20 overflow-hidden bg-ink-900"
    >
      <div className="absolute inset-0 -z-10 bg-grid-steel bg-[size:46px_46px] opacity-40" />
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Where We Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Proudly Serving{" "}
            <span className="text-gradient-steel">All Of {site.serviceArea}</span>
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-steel-light">
            Based in {site.location}, Mike brings mobile mechanic service across
            the county. If you&rsquo;re nearby and not listed, just ask —
            chances are we can come to you.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-brand/30 bg-brand/10 px-5 py-4">
            <Navigation className="h-6 w-6 text-brand" />
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                Service Hub
              </p>
              <p className="text-sm text-steel-light">
                {site.location} · {site.serviceArea}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-charcoal/60 px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-charcoal"
              >
                <MapPin className="h-5 w-5 shrink-0 text-brand" />
                <span className="text-sm font-semibold text-white">{area}</span>
              </div>
            ))}
            <div className="col-span-2 flex items-center justify-center gap-2.5 rounded-xl border border-brand/40 bg-brand px-4 py-4 text-white shadow-glow sm:col-span-3">
              <MapPin className="h-5 w-5 shrink-0" />
              <span className="font-display text-sm font-bold uppercase tracking-wide">
                + All of {site.serviceArea}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
