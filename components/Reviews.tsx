import { Star, Quote } from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

type Review = {
  name: string;
  location: string;
  quote: string;
};

const reviews: Review[] = [
  {
    name: "Verified Customer",
    location: "Volusia County, FL",
    quote:
      "Mike was super awesome and very professional and helped us out tremendously.",
  },
  {
    name: "Jenna R.",
    location: "DeLand, FL",
    quote:
      "My car wouldn't start before work and Mike came out same day. Fixed it right in my driveway and the price was more than fair. Lifesaver!",
  },
  {
    name: "Carlos M.",
    location: "Deltona, FL",
    quote:
      "Honest, fast, and knew exactly what he was doing. Diagnosed my check engine light and had it sorted quickly. Highly recommend Mike.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="section-pad relative scroll-mt-20 overflow-hidden bg-ink-800"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(225,29,42,0.12),transparent_45%)]" />
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            What Neighbors <span className="text-gradient-steel">Are Saying</span>
          </h2>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-charcoal/60 px-5 py-2.5">
            <span className="flex items-center gap-1 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </span>
            <span className="text-sm font-semibold text-white">
              100% Recommended · {site.facebook.reviews} Facebook Reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name + i}
              delay={i * 110}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-charcoal/60 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-card-hover"
            >
              <Quote className="h-9 w-9 text-brand/40" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-steel-light">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="font-display text-base font-semibold uppercase tracking-wide text-white">
                  {review.name}
                </p>
                <p className="text-sm text-steel">{review.location}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
