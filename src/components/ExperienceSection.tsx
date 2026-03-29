import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { experienceData } from "@/data/experience-data";

export function ExperiencesSection() {
  return (
    <section id="experience" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="text-sm tracking-widest uppercase text-heading mb-6 lg:hidden sticky top-0 bg-background/90 backdrop-blur-sm py-4 z-10">
        Experience
      </h2>
      <div className="flex flex-col gap-2 group/cards">
        {experienceData.map((exp, i) => (
          <Link
            key={i}
            href={exp.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-1 sm:gap-6 p-4 -mx-4 rounded-lg transition-all duration-200 hover:bg-surface/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:group-hover/cards:opacity-50 lg:hover:!opacity-100"
          >
            <span className="text-xs font-bold text-foreground mt-1 whitespace-nowrap">
              {exp.period}
            </span>
            <div>
              <h3 className="text-heading group-hover:text-accent transition-colors flex items-center gap-1">
                {exp.title} · {exp.company}
                <ArrowUpRight
                  size={16}
                  className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                {exp.location && (
                  <span className="text-xs font-medium text-foreground/70 ml-auto">
                    {exp.location}
                  </span>
                )}
              </h3>
              <p className="text-sm text-foreground mt-2">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-accent/10 text-accent px-3 font-medium py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
