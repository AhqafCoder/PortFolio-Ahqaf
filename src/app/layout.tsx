import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ahqafali.dev"),
  title: {
    default: "Ahqaf Ali - Full-Stack Developer & R&D Engineer | AI, Robotics & Web Development",
    template: "%s | Ahqaf Ali - Developer Portfolio",
  },
  description:
    "Ahqaf Ali is a Full-Stack Developer and R&D Engineer from India specializing in AI, autonomous systems, VTOL drones, React, Next.js, Python, and scalable tech products. Winner of Smart India Hackathon 2025. Available for freelance and remote work.",
  keywords: [
    // Personal Branding
    "Ahqaf Ali",
    "Ahqaf Ali Portfolio",
    "Ahqaf Ali Developer",
    "Ahqaf Ali Engineer",
    "ahqafali",

    // Professional Titles
    "Full-Stack Developer",
    "Full Stack Developer India",
    "R&D Engineer",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "Robotics Engineer",

    // Technologies - Frontend
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Next.js 15",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "Framer Motion",
    "HTML5 CSS3",

    // Technologies - Backend
    "Node.js Developer",
    "Express.js",
    "Python Developer",
    "FastAPI",
    "Django",
    "REST API",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",

    // AI & Machine Learning
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "PyTorch",
    "Computer Vision",
    "Natural Language Processing",
    "LLM Integration",
    "OpenAI API",
    "AI Automation",

    // Robotics & Autonomous Systems
    "Autonomous Systems",
    "VTOL Drone",
    "Hybrid VTOL",
    "Drone Development",
    "Robotics",
    "IoT Developer",
    "Embedded Systems",
    "Arduino",
    "Raspberry Pi",
    "Flight Controller",

    // Cloud & DevOps
    "AWS",
    "Google Cloud",
    "Vercel",
    "Docker",
    "Git",
    "CI/CD",
    "Cloud Deployment",

    // Achievements
    "Smart India Hackathon Winner",
    "SIH 2025 Winner",
    "Hackathon Winner",
    "Tech Associate",
    "TEDx Organizer",

    // Location & Availability
    "Developer India",
    "Freelance Developer",
    "Remote Developer",
    "Hire Developer India",
    "B.Tech Computer Science",
    "Invertis University",

    // Project Types
    "Web Application",
    "Mobile App Development",
    "SaaS Development",
    "Startup Developer",
    "MVP Development",
    "Portfolio Website",
    "E-commerce Development",
  ],
  authors: [{ name: "Ahqaf Ali", url: "https://www.ahqafali.dev" }],
  creator: "Ahqaf Ali",
  publisher: "Ahqaf Ali",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ahqafali.dev",
    siteName: "Ahqaf Ali - Developer Portfolio",
    title: "Ahqaf Ali - Full-Stack Developer & R&D Engineer",
    description:
      "Building intelligent systems and scalable tech products. Full-Stack Developer specializing in AI, React, Next.js, Python, and autonomous drone systems. Smart India Hackathon 2025 Winner.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahqaf Ali - Full-Stack Developer & R&D Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ahqafali",
    creator: "@ahqafali",
    title: "Ahqaf Ali - Full-Stack Developer & R&D Engineer",
    description:
      "Building intelligent systems and scalable tech products. From web apps to hybrid VTOL drones — I build what others only plan. SIH 2025 Winner.",
    images: {
      url: "/og-image.png",
      alt: "Ahqaf Ali Portfolio",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.ahqafali.dev",
    languages: {
      "en-US": "https://www.ahqafali.dev",
    },
  },
  category: "technology",
  classification: "Portfolio, Developer, Engineer",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "msapplication-TileColor": "#000000",
    "apple-mobile-web-app-title": "Ahqaf Ali",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.ahqafali.dev/#person",
      name: "Ahqaf Ali",
      url: "https://www.ahqafali.dev",
      image: "https://www.ahqafali.dev/profile-image.jpg",
      sameAs: [
        "https://github.com/AhqafCoder",
        "https://linkedin.com/in/ahqafali",
        "https://twitter.com/ahqafali",
      ],
      jobTitle: ["Full-Stack Developer", "R&D Engineer"],
      description:
        "Full-Stack Developer and R&D Engineer specializing in AI, autonomous systems, and scalable tech products.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Invertis University",
      },
      knowsAbout: [
        "Full-Stack Development",
        "Artificial Intelligence",
        "Machine Learning",
        "React",
        "Next.js",
        "Node.js",
        "Python",
        "Autonomous Systems",
        "VTOL Drones",
        "Robotics",
        "IoT",
      ],
      award: [
        "Smart India Hackathon 2025 Winner",
        "Inverthon 2025 Winner",
        "Techathon 2024 Winner",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ahqafali.dev/#website",
      url: "https://www.ahqafali.dev",
      name: "Ahqaf Ali - Developer Portfolio",
      description: "Portfolio website of Ahqaf Ali, Full-Stack Developer and R&D Engineer",
      publisher: {
        "@id": "https://www.ahqafali.dev/#person",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.ahqafali.dev/#profilepage",
      url: "https://www.ahqafali.dev",
      name: "Ahqaf Ali Portfolio",
      isPartOf: {
        "@id": "https://www.ahqafali.dev/#website",
      },
      about: {
        "@id": "https://www.ahqafali.dev/#person",
      },
      mainEntity: {
        "@id": "https://www.ahqafali.dev/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="author" content="Ahqaf Ali" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.country" content="India" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="language" content="English" />
        <meta name="og:locale:alternate" content="en_IN" />
        <meta property="og:see_also" content="https://github.com/AhqafCoder" />
        <meta property="og:see_also" content="https://linkedin.com/in/ahqafali" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-black text-foreground`}
      >
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
