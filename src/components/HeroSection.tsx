"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";

import { useTheme } from "@/components/ThemeProvider";
import { heroData } from "@/data/hero-data";

export const HeroSection = () => {
  const { theme, toggleTheme, toggleThemeAriaLabel } = useTheme();
  const toggleThemeIcon = theme === "dark" ? <Sun size={28} /> : <Moon size={28} />;

  return (
    <section className="flex flex-col gap-4">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-normal text-heading">
            <Link href="/">{heroData.name}</Link>
          </h1>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={toggleThemeAriaLabel}
            className="inline-flex h-11 w-11 items-center justify-center text-heading transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-foreground/70 focus:outline-none"
          >
            {toggleThemeIcon}
          </button>
        </div>
        <h2 className="mt-3 text-lg sm:text-xl tracking-normal text-heading">
          {heroData.title}
        </h2>
        <p className="mt-4 max-w-sm leading-relaxed">{heroData.bio}</p>
      </div>
    </section>
  );
};
