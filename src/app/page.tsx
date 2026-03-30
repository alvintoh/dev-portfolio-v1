import { AboutSection } from "@/components/AboutSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SocialLinks } from "@/components/SocialLinks";
import { MouseGlow } from "../components/MouseGlow";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <MouseGlow />

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Sidebar - Fixed on desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24">
            <HeroSection />
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
