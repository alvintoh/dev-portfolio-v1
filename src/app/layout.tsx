import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

import { HeaderNavigation } from "@/components/HeaderNavigation";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const interMono = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Alvin Toh — Full Stack Agentic Engineer",
  description:
    "Portfolio of Alvin Toh, a Full Stack Agentic Engineer with 5+ years building cloud-native apps and AI-powered workflows in TypeScript, Java, and Go.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interMono.variable} antialiased font-sans`}
      >
        <ThemeProvider>
          {/* Persistent nav — lives in layout so it never unmounts on page transitions */}
          <header className="sticky top-0 z-40 w-full border-b border-surface/40 bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/60">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <HeaderNavigation />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
