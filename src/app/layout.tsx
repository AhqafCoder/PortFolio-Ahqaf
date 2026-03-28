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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ahqafali.dev"),
  title: {
    default: "Ahqaf Ali - Full-Stack Developer & R&D Engineer | AI, Robotics & Web Development Expert",
    template: "%s | Ahqaf Ali - Developer Portfolio",
  },
  description:
    "Ahqaf Ali is an award-winning Full-Stack Developer and R&D Engineer from India. Expertise in AI/ML, autonomous drones, React, Next.js, Python, Node.js. Smart India Hackathon 2025 Winner. 800+ open source contributions. Available for freelance, remote work & collaborations.",
  keywords: [
    // Personal Branding (High Priority)
    "Ahqaf Ali",
    "Ahqaf Ali Portfolio",
    "Ahqaf Ali Developer",
    "Ahqaf Ali Engineer",
    "Ahqaf Ali GitHub",
    "Ahqaf Ali LinkedIn",
    "ahqafali",
    "ahqafali.dev",
    "Ahqaf Ali website",
    "Ahqaf Ali contact",

    // Professional Titles
    "Full-Stack Developer",
    "Full Stack Developer India",
    "Full Stack Web Developer",
    "R&D Engineer",
    "Research and Development Engineer",
    "Software Engineer",
    "Software Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "ML Engineer",
    "Robotics Engineer",
    "Drone Engineer",
    "Autonomous Systems Engineer",

    // Technologies - Frontend
    "React Developer",
    "React.js Developer",
    "React Expert",
    "Next.js Developer",
    "Next.js 14",
    "Next.js 15",
    "Next.js Expert",
    "TypeScript Developer",
    "TypeScript Expert",
    "JavaScript Developer",
    "JavaScript Expert",
    "Tailwind CSS Developer",
    "Tailwind CSS Expert",
    "Framer Motion",
    "HTML5 CSS3",
    "Responsive Design",
    "UI/UX Developer",
    "Frontend Expert India",

    // Technologies - Backend
    "Node.js Developer",
    "Node.js Expert",
    "Express.js Developer",
    "Python Developer",
    "Python Expert",
    "FastAPI Developer",
    "Django Developer",
    "Flask Developer",
    "REST API Developer",
    "RESTful API",
    "GraphQL Developer",
    "API Development",
    "Backend Expert India",

    // Database
    "PostgreSQL Developer",
    "MongoDB Developer",
    "MySQL Developer",
    "Redis",
    "Firebase Developer",
    "Supabase Developer",
    "Database Design",
    "SQL Expert",
    "NoSQL Expert",

    // AI & Machine Learning
    "Artificial Intelligence Developer",
    "AI Solutions",
    "Machine Learning Developer",
    "ML Solutions",
    "Deep Learning",
    "Neural Networks",
    "TensorFlow Developer",
    "PyTorch Developer",
    "Keras",
    "Computer Vision Developer",
    "Image Recognition",
    "Object Detection",
    "Natural Language Processing",
    "NLP Developer",
    "LLM Integration",
    "LLM Developer",
    "ChatGPT Integration",
    "OpenAI API Developer",
    "Claude API",
    "AI Automation",
    "AI Chatbot Developer",
    "Generative AI",
    "AI Agent Development",

    // Robotics & Autonomous Systems
    "Autonomous Systems Developer",
    "VTOL Drone Developer",
    "Hybrid VTOL",
    "Drone Development",
    "UAV Developer",
    "Unmanned Aerial Vehicle",
    "Robotics Developer",
    "ROS Developer",
    "Robot Operating System",
    "IoT Developer",
    "Internet of Things",
    "Embedded Systems Developer",
    "Arduino Developer",
    "Raspberry Pi Developer",
    "ESP32",
    "Flight Controller",
    "Autonomous Navigation",
    "Sensor Integration",

    // Cloud & DevOps
    "AWS Developer",
    "Amazon Web Services",
    "Google Cloud Developer",
    "GCP Developer",
    "Azure Developer",
    "Vercel Deployment",
    "Netlify",
    "Docker Developer",
    "Kubernetes",
    "DevOps Engineer",
    "CI/CD Pipeline",
    "GitHub Actions",
    "Cloud Architecture",
    "Serverless Developer",
    "Microservices",

    // Achievements & Recognition
    "Smart India Hackathon Winner",
    "SIH 2025 Winner",
    "SIH Winner",
    "Hackathon Winner India",
    "Award Winning Developer",
    "Tech Associate",
    "TEDx Organizer",
    "TEDx Invertis",
    "GDG Member",
    "Google Developer Groups",
    "Open Source Contributor",
    "800+ GitHub Contributions",

    // Location & Availability
    "Developer India",
    "Indian Developer",
    "Freelance Developer India",
    "Remote Developer",
    "Hire Developer India",
    "Hire Full Stack Developer",
    "Hire AI Developer",
    "Hire React Developer",
    "Hire Python Developer",
    "B.Tech Computer Science",
    "CSE Student",
    "Invertis University",
    "Developer Bareilly",
    "Developer Uttar Pradesh",

    // Project Types & Services
    "Web Application Development",
    "Mobile App Development",
    "SaaS Development",
    "SaaS Developer",
    "Startup Developer",
    "Startup CTO",
    "Technical Co-founder",
    "MVP Development",
    "Minimum Viable Product",
    "Portfolio Website Development",
    "E-commerce Development",
    "Custom Software Development",
    "API Integration",
    "Third Party Integration",
    "Payment Gateway Integration",
    "Real-time Applications",
    "WebSocket Developer",

    // Industry Specific
    "EdTech Developer",
    "FinTech Developer",
    "HealthTech Developer",
    "AgriTech Developer",
    "Drone Technology",
    "Aviation Technology",
    "Smart Agriculture",
    "Precision Agriculture",

    // Soft Skills & Work Style
    "Problem Solver",
    "Innovation Expert",
    "Tech Innovator",
    "Self-taught Developer",
    "Quick Learner",
    "Team Player",
    "Remote Collaboration",
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
    title: "Ahqaf Ali - Full-Stack Developer & R&D Engineer | AI Expert",
    description:
      "Award-winning Full-Stack Developer & R&D Engineer. Expert in AI/ML, React, Next.js, Python, autonomous drones. Smart India Hackathon 2025 Winner. 800+ contributions. Hire for freelance & remote projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahqaf Ali - Full-Stack Developer & R&D Engineer Portfolio",
        type: "image/png",
      },
      {
        url: "/profile-image.jpg",
        width: 800,
        height: 800,
        alt: "Ahqaf Ali Profile Photo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ahqafali",
    creator: "@ahqafali",
    title: "Ahqaf Ali - Full-Stack Developer & R&D Engineer",
    description:
      "Award-winning developer building AI systems & autonomous drones. React, Next.js, Python expert. SIH 2025 Winner. Available for hire.",
    images: {
      url: "/og-image.png",
      alt: "Ahqaf Ali Portfolio - Full-Stack Developer & R&D Engineer",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.ahqafali.dev",
    languages: {
      "en-US": "https://www.ahqafali.dev",
      "en-IN": "https://www.ahqafali.dev",
    },
  },
  category: "technology",
  classification: "Portfolio, Developer, Engineer, AI Expert, Robotics",
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
    "msapplication-TileImage": "/icon-192.png",
    "apple-mobile-web-app-title": "Ahqaf Ali",
    "application-name": "Ahqaf Ali Portfolio",
    "mobile-web-app-capable": "yes",
    "theme-color": "#000000",
  },
  appLinks: {
    web: {
      url: "https://www.ahqafali.dev",
      should_fallback: true,
    },
  },
};

// Enhanced JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.ahqafali.dev/#person",
      name: "Ahqaf Ali",
      givenName: "Ahqaf",
      familyName: "Ali",
      url: "https://www.ahqafali.dev",
      image: {
        "@type": "ImageObject",
        url: "https://www.ahqafali.dev/profile-image.jpg",
        width: 800,
        height: 800,
      },
      sameAs: [
        "https://github.com/AhqafCoder",
        "https://linkedin.com/in/ahqafali",
        "https://twitter.com/ahqafali",
        "mailto:ahqafaliofficial@gmail.com",
      ],
      jobTitle: "Full-Stack Developer & R&D Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Invertis Incubation Center",
        url: "https://invertis.org",
      },
      description:
        "Award-winning Full-Stack Developer and R&D Engineer from India specializing in AI, autonomous systems, React, Next.js, Python, and scalable tech products. Smart India Hackathon 2025 Winner with 800+ open source contributions.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Invertis University",
        url: "https://invertis.org",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bareilly",
          addressRegion: "Uttar Pradesh",
          addressCountry: "India",
        },
      },
      knowsAbout: [
        "Full-Stack Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "React.js",
        "Next.js",
        "Node.js",
        "Python",
        "TypeScript",
        "JavaScript",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "MongoDB",
        "TensorFlow",
        "PyTorch",
        "Computer Vision",
        "Natural Language Processing",
        "Autonomous Systems",
        "VTOL Drones",
        "Robotics",
        "IoT",
        "Arduino",
        "Raspberry Pi",
        "AWS",
        "Docker",
        "DevOps",
      ],
      award: [
        "Smart India Hackathon 2025 Winner",
        "Inverthon 2025 Winner",
        "Techathon 2024 Winner",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Software Developer",
        occupationLocation: {
          "@type": "Country",
          name: "India",
        },
        skills: "Full-Stack Development, AI/ML, React, Next.js, Python, Node.js, Autonomous Systems, Drone Technology",
      },
      email: "ahqafaliofficial@gmail.com",
      nationality: {
        "@type": "Country",
        name: "India",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ahqafali.dev/#website",
      url: "https://www.ahqafali.dev",
      name: "Ahqaf Ali - Full-Stack Developer & R&D Engineer Portfolio",
      description:
        "Official portfolio website of Ahqaf Ali, an award-winning Full-Stack Developer and R&D Engineer specializing in AI, autonomous systems, and modern web technologies.",
      publisher: {
        "@id": "https://www.ahqafali.dev/#person",
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.ahqafali.dev/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.ahqafali.dev/#profilepage",
      url: "https://www.ahqafali.dev",
      name: "Ahqaf Ali - Developer Portfolio",
      description: "Portfolio showcasing projects, skills, and achievements of Ahqaf Ali",
      isPartOf: {
        "@id": "https://www.ahqafali.dev/#website",
      },
      about: {
        "@id": "https://www.ahqafali.dev/#person",
      },
      mainEntity: {
        "@id": "https://www.ahqafali.dev/#person",
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ahqafali.dev",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://www.ahqafali.dev/#about",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Projects",
            item: "https://www.ahqafali.dev/#projects",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: "https://www.ahqafali.dev/#contact",
          },
        ],
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://www.ahqafali.dev/#skills",
      name: "Technical Skills",
      description: "Technical skills and expertise of Ahqaf Ali",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "React.js" },
        { "@type": "ListItem", position: 2, name: "Next.js" },
        { "@type": "ListItem", position: 3, name: "TypeScript" },
        { "@type": "ListItem", position: 4, name: "Python" },
        { "@type": "ListItem", position: 5, name: "Node.js" },
        { "@type": "ListItem", position: 6, name: "AI/ML" },
        { "@type": "ListItem", position: 7, name: "TensorFlow" },
        { "@type": "ListItem", position: 8, name: "Autonomous Systems" },
        { "@type": "ListItem", position: 9, name: "VTOL Drones" },
        { "@type": "ListItem", position: 10, name: "IoT" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.ahqafali.dev/#services",
      name: "Development Services",
      provider: {
        "@id": "https://www.ahqafali.dev/#person",
      },
      serviceType: "Software Development",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Web Development",
              description: "End-to-end web application development using React, Next.js, Node.js",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI/ML Solutions",
              description: "Custom AI and machine learning solutions, LLM integration, computer vision",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Autonomous Systems",
              description: "VTOL drone development, robotics, IoT solutions",
            },
          },
        ],
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
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Basic meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Author and ownership */}
        <meta name="author" content="Ahqaf Ali" />
        <meta name="copyright" content="Ahqaf Ali" />
        <meta name="designer" content="Ahqaf Ali" />
        <meta name="owner" content="Ahqaf Ali" />

        {/* Geo and language */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Bareilly, India" />
        <meta name="geo.country" content="India" />
        <meta name="ICBM" content="28.3670, 79.4304" />
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US" />

        {/* Crawler instructions */}
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Social media additional */}
        <meta property="og:locale:alternate" content="en_IN" />
        <meta property="og:see_also" content="https://github.com/AhqafCoder" />
        <meta property="og:see_also" content="https://linkedin.com/in/ahqafali" />
        <meta property="article:author" content="Ahqaf Ali" />

        {/* Additional SEO */}
        <meta name="subject" content="Full-Stack Developer Portfolio" />
        <meta name="topic" content="Software Development, AI, Robotics, Web Development" />
        <meta name="summary" content="Portfolio of Ahqaf Ali - Award-winning Full-Stack Developer and R&D Engineer" />
        <meta name="abstract" content="Ahqaf Ali is a Full-Stack Developer specializing in AI, autonomous systems, and modern web technologies." />
        <meta name="classification" content="Portfolio, Technology, Software Development" />
        <meta name="url" content="https://www.ahqafali.dev" />
        <meta name="identifier-URL" content="https://www.ahqafali.dev" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Ahqaf Ali - Developer Portfolio" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        {/* Structured Data */}
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
