import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer",
    company: "Acme Corp",
    url: "#",
    description:
      "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams, including designers, product managers, and other developers to implement and advocate for best practices in web accessibility.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
  },
  {
    period: "2021 — 2024",
    title: "Frontend Engineer",
    company: "TechStart Inc",
    url: "#",
    description:
      "Developed and styled interactive web apps for the company's SaaS platform. Worked alongside senior engineers and designers to create reusable component libraries and implement new features across the product.",
    technologies: ["React", "JavaScript", "SCSS", "Storybook", "Redux"],
  },
  {
    period: "2019 — 2021",
    title: "UI Developer",
    company: "Digital Agency Co",
    url: "#",
    description:
      "Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery. Clients included major consumer brands in the fashion, tech, and entertainment industries.",
    technologies: ["JavaScript", "TypeScript", "HTML", "CSS", "jQuery"],
  },
  {
    period: "2018 — 2019",
    title: "Web Developer Intern",
    company: "StartUp Labs",
    url: "#",
    description:
      "Wrote modern, performant, maintainable code for a diverse array of internal tools and client projects. Collaborated with a small team to ship features for the company's core product.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 lg:scroll-mt-0">
      <h2 className="text-sm tracking-widest uppercase text-[#e2e8f0] mb-6 lg:hidden sticky top-0 bg-[#0a192f]/90 backdrop-blur-sm py-4 z-10">
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {experiences.map((exp, i) => (
          <Link
            key={i}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 p-4 -mx-4 rounded-lg transition-all duration-200 hover:bg-[#112240]/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg"
          >
            <span className="text-xs text-[#8892b0] mt-1 whitespace-nowrap">
              {exp.period}
            </span>
            <div>
              <h3 className="text-[#e2e8f0] group-hover:text-[#64ffda] transition-colors flex items-center gap-1">
                {exp.title} · {exp.company}
                <ArrowUpRight
                  size={16}
                  className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </h3>
              <p className="text-sm text-[#8892b0] mt-2">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#64ffda]/10 text-[#64ffda] px-3 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="#"
        className="inline-flex items-center gap-1 mt-8 text-[#e2e8f0] hover:text-[#64ffda] transition-colors group"
      >
        View Full Resume
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}
