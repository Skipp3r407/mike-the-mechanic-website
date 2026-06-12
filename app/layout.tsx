import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const siteUrl = "https://mikethemechanicvolusia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mike The Mechanic - Volusia | Mobile Mechanic in Volusia County",
    template: "%s | Mike The Mechanic - Volusia",
  },
  description:
    "Mobile mechanic services in Volusia County, FL. Honest, reliable auto repair brought directly to your driveway, workplace, or roadside. Call 813-750-2877 - here to get your ride right!",
  keywords: [
    "mobile mechanic Volusia County",
    "auto repair DeLeon Springs",
    "mobile mechanic DeLand",
    "car repair Deltona",
    "roadside auto repair Florida",
    "check engine light repair",
    "brake repair mobile mechanic",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title: "Mike The Mechanic - Volusia | Mobile Mechanic in Volusia County",
    description:
      "Honest, reliable mobile auto repair brought directly to your driveway, workplace, or roadside in Volusia County, FL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mike The Mechanic - Volusia",
    description:
      "Mobile mechanic services in Volusia County, FL. Here to get your ride right!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    image: `${siteUrl}/og.jpg`,
    telephone: site.phone,
    email: site.email,
    url: siteUrl,
    slogan: site.tagline,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "DeLeon Springs",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Volusia County, Florida",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: site.facebook.reviews,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
