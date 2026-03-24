import Link from "next/link";

import { ArrowUpRight, GitFork, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Build a Spotify Connected App",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
    technologies: ["React", "Spotify API", "Node.js", "Express"],
    url: "#",
    stars: 584,
    forks: 210,
  },
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
    url: "#",
    stars: 632,
    forks: 148,
  },
  {
    title: "Portfolio V4",
    description:
      "An old portfolio site built with Gatsby and hosted on Netlify. Designed and developed as a single-page application with smooth scrolling, section-based navigation, and animated transitions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Gatsby", "Styled Components", "Netlify"],
    url: "#",
    stars: 312,
    forks: 87,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive web application that visualizes various sorting and pathfinding algorithms. Built to help students and developers understand how common algorithms work through real-time visual demonstrations.",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
    technologies: ["TypeScript", "React", "D3.js", "Canvas API"],
    url: "#",
    stars: 215,
    forks: 64,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="text-sm tracking-widest uppercase text-heading mb-6 lg:hidden sticky top-0 bg-background/90 backdrop-blur-sm py-4 z-10">
        Projects
      </h2>
      <div className="flex flex-col gap-2">
        {projects.map((project, i) => (
          <Link
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-6 p-4 -mx-4 rounded-lg transition-all duration-200 hover:bg-surface/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
          >
            <div className="overflow-hidden rounded border-2 border-[#233554] group-hover:border-accent/30 transition-colors sm:mt-1 w-full sm:w-[120px] h-20 sm:h-[72px]">
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
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-accent/10 text-accent px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-foreground">
                <span className="flex items-center gap-1">
                  <Star size={14} /> {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} /> {project.forks}
                </span>
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
