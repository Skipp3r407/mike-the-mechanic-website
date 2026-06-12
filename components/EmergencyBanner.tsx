import { Phone, AlertTriangle } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import GearAccent from "./GearAccent";

export default function EmergencyBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#b3121d_0%,#e11d2a_55%,#ff3340_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-steel bg-[size:40px_40px] opacity-30" />
      <div className="absolute -right-16 -top-10 -z-10 opacity-30">
        <GearAccent size={300} />
      </div>

      <div className="container-px py-16 sm:py-20">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <AlertTriangle className="h-4 w-4" />
              Same-Day Help
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl">
              Car Won&rsquo;t Start? Need Help Today?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Call or text Mike and get mobile mechanic help without towing your
              vehicle to a shop.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink-900 px-8 py-5 text-lg font-bold uppercase tracking-wide text-white shadow-2xl ring-1 ring-white/20 transition-all hover:-translate-y-1 hover:bg-ink-800"
            >
              <Phone className="h-6 w-6 text-brand transition-transform group-hover:rotate-12" />
              Call {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
