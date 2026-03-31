import Link from "next/link";

import { ArrowUpRight, GitFork, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { projectData } from "@/data/project-data";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="text-md tracking-widest uppercase text-heading lg:hidden sticky top-0 bg-background/90 backdrop-blur-sm py-4 z-10">
        Projects
      </h2>
      <div className="flex flex-col gap-2 group/cards">
        {projectData.map((project, i) => (
          <Link
            key={i}
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-6 p-4 -mx-4 rounded-lg transition-all duration-200 hover:bg-surface/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:group-hover/cards:opacity-50 lg:hover:opacity-100!"
          >
            <div className="overflow-hidden rounded-md border-2 border-foreground/30 group-hover:border-accent/30 sm:mt-1 w-full sm:w-30 h-20 sm:h-18">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div>
              <h3 className="text-heading group-hover:text-accent transition-colors flex items-center gap-1">
                {project.title}
                <ArrowUpRight
                  size={16}
                  className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </h3>
              <p className="text-sm text-foreground mt-2">
                {project.description}
              </p>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 text-accent font-medium px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-foreground">
                {project.stars && (
                  <span className="flex items-center gap-1">
                    <Star size={14} /> {project.stars}
                  </span>
                )}
                {project.forks && (
                  <span className="flex items-center gap-1">
                    <GitFork size={14} /> {project.forks}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="#"
        className="inline-flex items-center gap-1 mt-8 text-heading hover:text-accent transition-colors group"
      >
        View Full Project Archive
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}
