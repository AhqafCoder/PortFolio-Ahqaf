import "./globals.css";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import Navbar from "@/app/components/Navbar";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Chandan | Developer Portfolio",
  description:
    "Chandan's premium developer portfolio built with Next.js, Tailwind CSS and modern UI design.",
  keywords: ["Chandan", "Developer", "Portfolio", "Next.js", "React"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} font-sans bg-black text-white relative`}
      >
        {/* Background Glow Effect — Green Theme */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full blur-[180px] opacity-10"
            style={{ background: "#00ff88" }}
          />
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full blur-[180px] opacity-8"
            style={{ background: "#00cc6a" }}
          />
        </div>

        <Navbar />

        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}