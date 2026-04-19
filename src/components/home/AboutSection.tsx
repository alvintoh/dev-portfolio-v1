import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { aboutData } from "@/data/home/about-data";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="text-md tracking-widest uppercase text-heading lg:hidden sticky top-10 bg-background/90 backdrop-blur-sm py-4 z-10">
        About
      </h2>

      <div className="sm:flex sm:flex-row sm:gap-6 sm:mb-16 sm:justify-around sm:items-center">
        <div className="hidden sm:block relative w-40 h-40 shrink-0 ring-2 ring-foreground/30 rounded-full">
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
        <Link
          href={aboutData.resumeLink ?? "#"}
          className="inline-flex items-center gap-1 mt-2 text-heading font-medium underline underline-offset-4 decoration-foreground hover:text-accent hover:decoration-accent transition-colors group"
        >
          View Full Resume
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
