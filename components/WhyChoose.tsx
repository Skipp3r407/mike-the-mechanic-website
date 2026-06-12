import {
  Truck,
  HandHeart,
  MapPin,
  Timer,
  BadgeDollarSign,
  Smile,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: Truck,
    title: "Mobile Service That Comes To You",
    description:
      "Skip the shop. Mike brings the tools and expertise to your driveway, job, or roadside.",
  },
  {
    icon: HandHeart,
    title: "Honest Recommendations",
    description:
      "Straight answers and only the repairs you actually need — no upsells, no games.",
  },
  {
    icon: MapPin,
    title: "Local Volusia County Mechanic",
    description:
      "A trusted neighbor who knows the area and treats your vehicle like his own.",
  },
  {
    icon: Timer,
    title: "Fast Response Times",
    description:
      "Quick scheduling and same-day help when you need to get back on the road.",
  },
  {
    icon: BadgeDollarSign,
    title: "Fair Pricing",
    description:
      "Transparent, competitive rates without the overhead of a big repair shop.",
  },
  {
    icon: Smile,
    title: "Customer-Focused Service",
    description:
      "Friendly, professional service with a 100% recommendation track record.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="section-pad relative scroll-mt-20 overflow-hidden bg-ink-800"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(225,29,42,0.12),transparent_45%)]" />
      <div className="container-px">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
              Why Choose Mike
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
              The Difference Is{" "}
              <span className="text-gradient-steel">In The Details</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-steel-light lg:text-right">
              A professional mobile mechanic experience built on trust,
              convenience, and quality work you can count on.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal
              key={reason.title}
              delay={(i % 3) * 90}
              className="group flex gap-4 rounded-2xl border border-white/10 bg-charcoal/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-charcoal"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <reason.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold uppercase tracking-wide text-white">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel-light">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
