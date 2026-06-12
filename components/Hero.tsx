import Image from "next/image";
import {
  Phone,
  Wrench,
  ShieldCheck,
  Star,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { site } from "@/lib/site";
import GearAccent from "./GearAccent";
import emblem from "@/public/emblem.png";

const badges = [
  { icon: ShieldCheck, label: "100% Recommended" },
  { icon: Star, label: "19 Facebook Reviews" },
  { icon: MapPin, label: "Serving Volusia County" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink-900 pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_-10%,rgba(225,29,42,0.22),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-grid-steel bg-[size:46px_46px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
      <div className="absolute -left-28 bottom-0 -z-10 hidden md:block">
        <GearAccent size={300} />
      </div>
      {/* Branded emblem watermark */}
      <div className="pointer-events-none absolute -right-16 top-16 -z-10 hidden opacity-[0.07] lg:block">
        <Image
          src={emblem}
          alt=""
          aria-hidden="true"
          width={560}
          height={560}
          className="h-[560px] w-[560px]"
        />
      </div>

      <div className="container-px grid items-center gap-12 pb-20 lg:grid-cols-12 lg:pb-28">
        <div className="lg:col-span-7">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-light">
            <Wrench className="h-3.5 w-3.5" />
            {site.tagline}
          </div>

          <h1
            className="animate-fade-up heading-stroke mt-6 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Mobile Mechanic
            <br />
            <span className="text-gradient-steel">Services in</span>{" "}
            <span className="text-brand">Volusia County</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-steel-light"
            style={{ animationDelay: "160ms" }}
          >
            Honest, reliable auto repair brought directly to your driveway,
            workplace, or roadside.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href={site.phoneHref}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-light"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-bold uppercase tracking-wide text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              <Wrench className="h-5 w-5 text-brand" />
              Request Service
            </a>
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "320ms" }}
          >
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-charcoal/60 px-4 py-2.5 text-sm font-semibold text-steel-light"
              >
                <badge.icon className="h-4 w-4 text-brand" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Visual stat card */}
        <div className="lg:col-span-5">
          <div
            className="animate-fade-up relative mx-auto max-w-md"
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-gradient-to-br from-brand/30 via-transparent to-steel/20 blur-xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal/70 shadow-card backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 bg-ink-800/80 px-6 py-4">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-steel">
                  Service Snapshot
                </span>
                <span className="flex items-center gap-1 text-brand">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-px bg-white/10">
                <Stat value="100%" label="Recommended" />
                <Stat value="19+" label="5-Star Reviews" />
                <Stat value="Same-Day" label="Help Available" />
                <Stat value="Mobile" label="We Come To You" />
              </div>
              <div className="space-y-2 px-6 py-5">
                <p className="text-sm font-semibold text-white">
                  Quote of the shop
                </p>
                <p className="text-sm leading-relaxed text-steel-light">
                  &ldquo;Mike was super awesome and very professional and helped
                  us out tremendously.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8 text-steel/60">
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-charcoal/80 px-6 py-5">
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel">
        {label}
      </div>
    </div>
  );
}
