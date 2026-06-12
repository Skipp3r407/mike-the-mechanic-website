"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const serviceOptions = [
  "Mobile Diagnostics",
  "Brake Repair",
  "Battery Replacement",
  "Alternators & Starters",
  "Tune-Up",
  "Check Engine Light",
  "Oil Change",
  "Suspension Repair",
  "General Auto Repair",
  "Pre-Purchase Inspection",
  "Other / Not Sure",
];

const contactMethods = ["Phone Call", "Text Message", "Email"];

type Status = "idle" | "submitting" | "success";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Demo only: simulate a network request.
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <section
      id="contact"
      className="section-pad relative scroll-mt-20 overflow-hidden bg-ink-800"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(225,29,42,0.12),transparent_45%)]" />
      <div className="container-px grid gap-12 lg:grid-cols-12">
        {/* Info column */}
        <Reveal className="lg:col-span-5">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand">
            Get In Touch
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Request Service{" "}
            <span className="text-gradient-steel">Today</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel-light">
            Tell Mike what&rsquo;s going on with your vehicle and the best way to
            reach you. We&rsquo;ll get back to you fast — usually same day.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={site.phoneHref}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/60 p-5 transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                <Phone className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-steel">
                  Call or Text
                </span>
                <span className="block font-display text-lg font-bold text-white">
                  {site.phone}
                </span>
              </span>
            </a>

            <a
              href={site.emailHref}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/60 p-5 transition-all hover:-translate-y-1 hover:border-brand/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-light text-brand">
                <Mail className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-steel">
                  Email
                </span>
                <span className="block truncate font-semibold text-white">
                  {site.email}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal/60 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-light text-brand">
                <MapPin className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-steel">
                  Service Area
                </span>
                <span className="block font-semibold text-white">
                  {site.location} · {site.serviceArea}
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        {/* Form column */}
        <Reveal className="lg:col-span-7" delay={120}>
          <div className="rounded-3xl border border-white/10 bg-charcoal/70 p-6 shadow-card sm:p-8">
            {status === "success" ? (
              <div className="flex min-h-[460px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase tracking-tight text-white">
                  Request Sent!
                </h3>
                <p className="mt-3 max-w-sm text-steel-light">
                  Thanks for reaching out. This is a demo form — in production
                  your request would be sent straight to Mike. For now, call or
                  text{" "}
                  <a href={site.phoneHref} className="font-semibold text-brand">
                    {site.phone}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white/40"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </Field>

                <Field label="Phone" htmlFor="phone" required>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(386) 555-0142"
                    className={inputClass}
                  />
                </Field>

                <Field label="Email" htmlFor="email" className="sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>

                <Field
                  label="Vehicle Year / Make / Model"
                  htmlFor="vehicle"
                  className="sm:col-span-2"
                >
                  <input
                    id="vehicle"
                    name="vehicle"
                    type="text"
                    placeholder="2015 Honda Accord"
                    className={inputClass}
                  />
                </Field>

                <Field label="Service Needed" htmlFor="service">
                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Preferred Contact Method" htmlFor="method">
                  <select
                    id="method"
                    name="method"
                    defaultValue="Phone Call"
                    className={inputClass}
                  >
                    {contactMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Message" htmlFor="message" className="sm:col-span-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe the issue or what you need help with..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-light disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Submit Request
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-xs text-steel">
                    Demo form for presentation purposes. No data is stored or
                    sent.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-ink-900/80 px-4 py-3 text-sm text-white placeholder:text-steel/70 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/30";

function Field({
  label,
  htmlFor,
  children,
  required,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-steel-light"
      >
        {label}
        {required && <span className="ml-1 text-brand">*</span>}
      </label>
      {children}
    </div>
  );
}
