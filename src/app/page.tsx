import { AboutSection } from "@/components/home/AboutSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { Footer } from "@/components/home/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeNavigation } from "@/components/home/HomeNavigation";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SocialLinks } from "@/components/home/SocialLinks";
import { MouseGlow } from "@/components/MouseGlow";

export default function Home() {
  return (
    <div className="min-h-dvh relative">
      <MouseGlow />

      <div className="mx-auto min-h-dvh max-w-7xl px-6 py-8 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-16">
          {/* Left Sidebar — sticky below the layout nav header */}
          <aside className="lg:sticky lg:top-12 lg:flex lg:max-h-[calc(100vh-3rem)] lg:w-[48%] lg:flex-col lg:py-16">
            <HeroSection />
            <div className="mt-8 lg:mt-10">
              <HomeNavigation />
            </div>
            <div className="mt-8 lg:mt-auto">
              <SocialLinks />
            </div>
          </aside>

          {/* Right Content — scrollable */}
          <main className="lg:w-[52%] lg:py-8">
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
