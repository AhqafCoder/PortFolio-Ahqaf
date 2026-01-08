import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahqaf Ali - Full-Stack Developer",
  description: "Full-Stack Developer specializing in web development, AI/ML, and software engineering. Experienced in React, Node.js, Python, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-background text-foreground`}
      >
        <BackgroundEffects />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
