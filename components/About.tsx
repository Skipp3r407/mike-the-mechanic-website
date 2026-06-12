import { Phone, Wrench, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";
import GearAccent from "./GearAccent";

const highlights = [
  "Local, owner-operated service",
  "Most makes & models",
  "Upfront, honest pricing",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative scroll-mt-20 overflow-hidden bg-ink-900"
    >
      <div className="absolute -left-32 top-1/2 -z-10 -translate-y-1/2">
        <GearAccent size={360} />
      </div>

      <div className="container-px grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-brand/30 to-transparent blur-lg" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal/70 p-8 shadow-card">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-glow">
                <Wrench className="h-8 w-8" />
              </div>
              <p className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-white">
                Mike
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Owner &amp; Lead Mechanic
              </p>
              <p className="mt-4 text-sm leading-relaxed text-steel-light">
                Serving DeLeon Springs and all of {site.serviceArea} with
                dependable mobile auto repair.
              </p>
              <ul className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-white"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            About Mike
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Your Trusted Neighbor{" "}
            <span className="text-gradient-steel">Under The Hood</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-steel-light">
            &ldquo;Hey neighbors, I&rsquo;m Mike — a local mechanic serving
            Volusia County. My goal is simple: help people get their vehicles
            running right without the stress of waiting at a shop. Whether your
            car will not start, your check engine light is on, or you need
            trusted repairs, I&rsquo;m here to help get your ride right.&rdquo;
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-light"
            >
              <Phone className="h-5 w-5" />
              Talk To Mike
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-white/40"
            >
              Request Service
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
