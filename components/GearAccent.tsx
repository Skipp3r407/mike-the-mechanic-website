import { Cog } from "lucide-react";

type GearAccentProps = {
  className?: string;
  size?: number;
  spin?: boolean;
};

/** Subtle automotive gear accent used as a background decoration. */
export default function GearAccent({
  className = "",
  size = 220,
  spin = true,
}: GearAccentProps) {
  return (
    <Cog
      aria-hidden="true"
      strokeWidth={1}
      style={{ width: size, height: size }}
      className={`pointer-events-none select-none text-steel/[0.06] ${
        spin ? "animate-spin-slow" : ""
      } ${className}`}
    />
  );
}
