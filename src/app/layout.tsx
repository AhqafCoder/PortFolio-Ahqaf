import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenis-provider";
import ToastHost from "@/components/toast-host";
import EasterEggs from "@/components/easter-eggs";
import { SITE, ORG, SOCIALS } from "@/lib/data";

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
    "Ahqaf Ali is an award-winning full-stack developer and R&D engineer from India — founder of WTFBuilds. Building web platforms, AI systems, custom Minecraft plugins, a hybrid VTOL drone and MineX, an autonomous AI mine rover. Linux daily-driver. Build. Ship. Repeat.",
  keywords: [
    "Ahqaf Ali",
    "AhqafCoder",
    "ahqafali.dev",
    "WTFBuilds",
    "full-stack developer",
    "R&D engineer",
    "VTOL drone",
    "MineX rover",
    "autonomous rover",
    "Minecraft plugin developer",
    "Linux robotics",
    "Next.js developer India",
    "AI workflows",
    "Smart India Hackathon",
  ],
  authors: [{ name: SITE.name, url: SITE.site }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.site,
    siteName: "Ahqaf Ali",
    title: "Ahqaf Ali — Full-Stack Developer & R&D Engineer",
    description:
      "Founder of WTFBuilds. From web apps to hybrid VTOL drones and an AI mine rover — I build what others only plan.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ahqafali",
    title: "Ahqaf Ali — Full-Stack Developer & R&D Engineer",
    description:
      "Founder of WTFBuilds. From web apps to hybrid VTOL drones and an AI mine rover — I build what others only plan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  width: "device-width",
  initialScale: 1,
};

const personId = `${SITE.site}#person`;
const orgId = `${SITE.site}#wtfbuilds`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: "Ahqaf Ali",
      alternateName: ["AhqafCoder", "Jugadu Gaming"],
      jobTitle: "Full-Stack Developer & R&D Engineer",
      email: `mailto:${SITE.email}`,
      url: SITE.site,
      description:
        "Award-winning full-stack developer and R&D engineer building web platforms, AI systems, custom Minecraft plugins, hybrid VTOL drones and autonomous rovers. Founder of WTFBuilds.",
      knowsAbout: [
        "Full-stack web development",
        "Robotics",
        "Autonomous drones",
        "AI/ML integration",
        "Minecraft plugin development",
        "Linux system administration",
      ],
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
        { "@id": orgId },
      ],
      founderOf: { "@id": orgId },
      sameAs: [
        "https://github.com/AhqafCoder",
        "https://linkedin.com/in/ahqafali",
        "https://instagram.com/ahqafali0403",
        "https://t.me/ahqafali",
        ORG.url,
      ],
    },
    {
      "@type": "Organization",
      "@id": orgId,
      name: ORG.name,
      url: ORG.url,
      slogan: ORG.tagline,
      description:
        "A build-in-public organization: tools for students, open source for everyone, robots for the hell of it.",
      foundingDate: "2026",
      founder: { "@id": personId },
      sameAs: ["https://github.com/WTFBuilds", "https://instagram.com/wtfbuilds", "https://linkedin.com/company/wtfbuilds"],
    },
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
