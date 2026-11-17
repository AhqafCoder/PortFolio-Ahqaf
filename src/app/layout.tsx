import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import ToastHost from "@/components/toast-host";
import EasterEggs from "@/components/easter-eggs";
import { SITE } from "@/lib/data";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });
const pixel = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-pressstart" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.site),
  title: {
    default: "Ahqaf Ali — Full-Stack Developer & R&D Engineer",
    template: "%s — Ahqaf Ali",
  },
  description:
    "Ahqaf Ali is an award-winning full-stack developer and R&D engineer from India — shipping web platforms, AI workflows and hybrid VTOL drone systems. Build. Ship. Repeat.",
  keywords: [
    "Ahqaf Ali",
    "AhqafCoder",
    "full-stack developer",
    "R&D engineer",
    "VTOL drone",
    "Next.js developer India",
    "AI workflows",
    "Smart India Hackathon",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.site,
    siteName: "Ahqaf Ali",
    title: "Ahqaf Ali — Full-Stack Developer & R&D Engineer",
    description: "From web apps to hybrid VTOL drones — I build what others only plan.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ahqafali",
    title: "Ahqaf Ali — Full-Stack Developer & R&D Engineer",
    description: "From web apps to hybrid VTOL drones — I build what others only plan.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ahqaf Ali",
  alternateName: ["AhqafCoder", "Jugadu Gaming"],
  jobTitle: "Full-Stack Developer & R&D Engineer",
  email: `mailto:${SITE.email}`,
  url: SITE.site,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bareilly",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Invertis University" },
  worksFor: [
    { "@type": "Organization", name: "Invertis Incubation Center" },
    { "@type": "Organization", name: "EduSphere Technologies" },
  ],
  sameAs: [
    "https://github.com/AhqafCoder",
    "https://linkedin.com/in/ahqafali",
    "https://instagram.com/ahqafali0403",
    "https://t.me/ahqafali",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${pixel.variable}`}>
      <body className="font-display antialiased">
        <LenisProvider />
        <ToastHost />
        <EasterEggs />
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
