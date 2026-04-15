import { AboutSection } from "@/components/AboutSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { MouseGlow } from "@/components/MouseGlow";
import { Navigation } from "@/components/Navigation";
import { PageNav } from "@/components/PageNav";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <MouseGlow />

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        {/* Mobile-only fixed hamburger — lives outside the content flow */}
        <div className="fixed top-2 right-4 z-50 lg:hidden">
          <PageNav variant="mobile-menu" />
        </div>

        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Sidebar - Fixed on desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24">
            <HeroSection />
            <div className="mt-8 lg:mt-16">
              <Navigation />
            </div>
            <div className="mt-8 lg:mt-auto">
              <SocialLinks />
            </div>
          </header>

          {/* Right Content - Scrollable */}
          <main className="pt-16 lg:w-[52%] lg:py-12">
            <PageNav variant="desktop-tabs" />
            <div className="flex flex-col gap-12 mt-8 lg:gap-12">
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
