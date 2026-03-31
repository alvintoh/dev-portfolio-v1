"use client";

import { useEffect, useMemo, useState } from "react";

import { AboutSection } from "@/components/AboutSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SocialLinks } from "@/components/SocialLinks";
import { Moon, Sun } from "lucide-react";
import { MouseGlow } from "../components/MouseGlow";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "theme";

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;

    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark" ? savedTheme
      : prefersLight ? "light"
      : "dark";

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const { toggleThemeAriaLabel, toggleThemeIcon } = useMemo(
    () => ({
      toggleThemeAriaLabel:
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
      toggleThemeIcon:
        theme === "dark" ? <Sun size={28} /> : <Moon size={28} />,
    }),
    [theme],
  );

  return (
    <div className="min-h-screen relative">
      <MouseGlow />

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Sidebar - Fixed on desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24">
            <HeroSection
              onToggleTheme={toggleTheme}
              toggleThemeAriaLabel={toggleThemeAriaLabel}
              toggleThemeIcon={toggleThemeIcon}
            />
            <div className="mt-8 lg:mt-12">
              <Navigation />
            </div>
            <div className="mt-8 lg:mt-auto">
              <SocialLinks />
            </div>
          </header>

          {/* Right Content - Scrollable */}
          <main className="pt-16 lg:w-[52%] lg:py-24">
            <div className="flex flex-col gap-12 lg:gap-12">
              <AboutSection />
              <ExperiencesSection />
              <ProjectsSection />
            </div>

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
