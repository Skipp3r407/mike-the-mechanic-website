import {
  Stethoscope,
  Disc3,
  BatteryCharging,
  Zap,
  Gauge,
  AlertTriangle,
  Droplets,
  Car,
  Wrench,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Stethoscope,
    title: "Mobile Diagnostics",
    description:
      "Full computer scans and troubleshooting to pinpoint the real problem before any parts are replaced.",
  },
  {
    icon: Disc3,
    title: "Brake Repair",
    description:
      "Pads, rotors, calipers, and brake lines serviced safely at your location.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Replacement",
    description:
      "Dead battery? Fast testing and on-the-spot replacement so you can get moving.",
  },
  {
    icon: Zap,
    title: "Alternators & Starters",
    description:
      "Charging and starting system repairs to keep your vehicle reliable.",
  },
  {
    icon: Gauge,
    title: "Tune-Ups",
    description:
      "Plugs, filters, and routine maintenance to restore performance and fuel economy.",
  },
  {
    icon: AlertTriangle,
    title: "Check Engine Light",
    description:
      "Code reading and honest fixes for that frustrating dashboard warning.",
  },
  {
    icon: Droplets,
    title: "Oil Changes",
    description:
      "Convenient oil and filter changes done right in your driveway.",
  },
  {
    icon: Car,
    title: "Suspension Repairs",
    description:
      "Struts, shocks, and steering work for a smoother, safer ride.",
  },
  {
    icon: Wrench,
    title: "General Auto Repair",
    description:
      "From small fixes to bigger jobs, trusted repairs across most makes and models.",
  },
  {
    icon: ClipboardCheck,
    title: "Pre-Purchase Inspections",
    description:
      "Buying used? Get an honest inspection before you spend a dime.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative scroll-mt-20 bg-ink-900">
      <div className="absolute inset-0 -z-10 bg-grid-steel bg-[size:46px_46px] opacity-50" />
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Mobile Services <span className="text-gradient-steel">On Demand</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-light">
            Professional auto repair brought to you. No towing, no waiting rooms,
            no hassle.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 5) * 70}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60 p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-card-hover"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand/10 blur-2xl transition-all duration-300 group-hover:bg-brand/25" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-ink-800 text-brand transition-colors group-hover:border-brand/40 group-hover:bg-brand group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold uppercase tracking-wide text-white">
                {service.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-steel-light">
                {service.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
