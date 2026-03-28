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
    default: "Ahqaf Ali - Full-Stack Developer & R&D Engineer",
    template: "%s | Ahqaf Ali",
  },
  description:
    "Full-Stack Developer and R&D Engineer specializing in AI, autonomous systems, and scalable tech products. Building intelligent systems from web apps to hybrid VTOL drones.",
  keywords: [
    "Ahqaf Ali",
    "Full-Stack Developer",
    "R&D Engineer",
    "AI Developer",
    "Autonomous Systems",
    "VTOL Drone",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Python Developer",
    "Machine Learning",
    "Software Engineer",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "Ahqaf Ali", url: "https://www.ahqafali.dev" }],
  creator: "Ahqaf Ali",
  publisher: "Ahqaf Ali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ahqafali.dev",
    siteName: "Ahqaf Ali Portfolio",
    title: "Ahqaf Ali - Full-Stack Developer & R&D Engineer",
    description:
      "Building intelligent systems and scalable tech products. From web apps to hybrid VTOL drones — I build what others only plan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahqaf Ali - Full-Stack Developer & R&D Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahqaf Ali - Full-Stack Developer & R&D Engineer",
    description:
      "Building intelligent systems and scalable tech products. From web apps to hybrid VTOL drones.",
    images: ["/og-image.png"],
    creator: "@ahqafali",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.ahqafali.dev",
  },
  category: "technology",
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
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
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
