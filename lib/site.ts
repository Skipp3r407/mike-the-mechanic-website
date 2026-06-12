export const site = {
  name: "Mike The Mechanic - Volusia",
  shortName: "Mike The Mechanic",
  tagline: "Here to get your ride right!",
  phone: "813-750-2877",
  phoneHref: "tel:+18137502877",
  email: "mike_32130@yahoo.com",
  emailHref: "mailto:mike_32130@yahoo.com",
  location: "DeLeon Springs, Florida",
  serviceArea: "Volusia County",
  facebook: {
    followers: 115,
    posts: 899,
    recommended: 100,
    reviews: 19,
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Mike", href: "#why" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
] as const;
