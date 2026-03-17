import Link from "next/link";

import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SocialLinks } from "@/components/SocialLinks";
import { MouseGlow } from "../components/MouseGlow";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <MouseGlow />

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-16 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Sidebar - Fixed on desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24">
            <HeroSection />
            <div className="mt-8 lg:mt-20">
              <Navigation />
            </div>
            <div className="mt-8 lg:mt-auto">
              <SocialLinks />
            </div>
          </header>

          {/* Right Content - Scrollable */}
          <main className="pt-16 lg:w-[52%] lg:py-24">
            <div className="flex flex-col gap-24 lg:gap-36">
              <AboutSection />
              <ExperienceSection />
              <ProjectsSection />
            </div>

            {/* Footer */}
            <footer className="mt-24 pb-12 text-sm text-[#8892b0]">
              <p>
                Loosely designed in{" "}
                <Link
                  href="https://www.figma.com/"
                  className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma
                </Link>{" "}
                and coded in{" "}
                <Link
                  href="https://code.visualstudio.com/"
                  className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visual Studio Code
                </Link>
                . Built with{" "}
                <Link
                  href="https://react.dev/"
                  className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </Link>{" "}
                and{" "}
                <Link
                  href="https://tailwindcss.com/"
                  className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </Link>
                , deployed with{" "}
                <Link
                  href="https://vercel.com/"
                  className="text-[#e2e8f0] hover:text-[#64ffda] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </Link>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
