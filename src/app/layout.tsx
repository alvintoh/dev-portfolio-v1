import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
