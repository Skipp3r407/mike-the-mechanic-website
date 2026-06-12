import Image from "next/image";
import logoMark from "@/public/logo-mark.png";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

/** Official Mike The Mechanic brand logo (skull emblem + wordmark). */
export default function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Image
      src={logoMark}
      alt="Mike The Mechanic - Volusia County mobile mechanic"
      priority={priority}
      sizes="(max-width: 1024px) 160px, 220px"
      className={`h-auto w-auto select-none ${className}`}
    />
  );
}
