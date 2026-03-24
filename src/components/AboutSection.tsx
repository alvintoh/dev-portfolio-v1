import { aboutData } from "@/data/about-data";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="text-sm tracking-widest uppercase text-heading mb-6 lg:hidden sticky top-0 bg-background/90 backdrop-blur-sm py-4 z-10">
        About
      </h2>

      <div className="sm:flex sm:flex-row sm:gap-6 sm:mb-20 sm:justify-around sm:items-center margin">
        <div className="hidden sm:block relative w-40 h-40 shrink-0 ring-2 ring-accent/30 rounded-full">
          {aboutData.avatarImage ?
            <Image
              src={aboutData.avatarImage}
              alt={aboutData.avatarFallback}
              fill
              sizes="160px"
              className="rounded-full object-cover"
              priority
            />
          : <div className="w-full h-full rounded-full bg-heading flex items-center justify-center text-background font-bold text-3xl leading-none">
              {aboutData.avatarFallback}
            </div>
          }
        </div>
      </div>

      <div className="flex flex-col gap-6 text-foreground">
        <p className="whitespace-pre-line">{aboutData.summary}</p>
      </div>
    </section>
  );
}
