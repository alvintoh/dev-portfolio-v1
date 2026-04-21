"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

import { techStackData } from "@/data/techstack/tech-stack-data";

type TechCategory = (typeof techStackData)[number];
type Tool = TechCategory["tools"][number];
type IconComponent = React.ComponentType<{
  size?: number | string;
  className?: string;
}>;

const COLOUR_PALETTE = [
  "bg-emerald-500/20 text-emerald-300 light:bg-emerald-100 light:text-emerald-700",
  "bg-blue-500/20 text-blue-300 light:bg-blue-100 light:text-blue-700",
  "bg-violet-500/20 text-violet-300 light:bg-violet-100 light:text-violet-700",
  "bg-amber-500/20 text-amber-300 light:bg-amber-100 light:text-amber-700",
  "bg-cyan-500/20 text-cyan-300 light:bg-cyan-100 light:text-cyan-700",
  "bg-rose-500/20 text-rose-300 light:bg-rose-100 light:text-rose-700",
  "bg-sky-500/20 text-sky-300 light:bg-sky-100 light:text-sky-700",
  "bg-orange-500/20 text-orange-300 light:bg-orange-100 light:text-orange-700",
  "bg-pink-500/20 text-pink-300 light:bg-pink-100 light:text-pink-700",
  "bg-teal-500/20 text-teal-300 light:bg-teal-100 light:text-teal-700",
  "bg-indigo-500/20 text-indigo-300 light:bg-indigo-100 light:text-indigo-700",
] as const;

export function TechStackGrid() {
  const [activeId, setActiveId] = useState<string>(techStackData[0].id);
  const [mobileNavVisible, setMobileNavVisible] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const lastScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-10% 0px -75% 0px" },
    );

    const refs = sectionRefs.current;
    for (const el of refs.values()) observer.observe(el);

    const lastId = techStackData[techStackData.length - 1].id;
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY.current) {
        setMobileNavVisible(true);
      } else if (currentY > lastScrollY.current) {
        setMobileNavVisible(false);
      }
      lastScrollY.current = currentY;

      const nearBottom =
        window.innerHeight + currentY >=
        document.documentElement.scrollHeight - 20;
      if (nearBottom) setActiveId(lastId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    sectionRefs.current
      .get(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile: sticky horizontal category pill strip — collapsed by default, expands on scroll-up */}
      <div
        className={`lg:hidden sticky top-10 z-10 -mx-6 md:-mx-12 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          mobileNavVisible ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="border-b border-foreground/10 bg-background/90 backdrop-blur-sm px-6 md:px-12">
          <div className="flex flex-wrap gap-2 py-3">
            {techStackData.map((category) => {
              const CatIcon = category.icon as IconComponent;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToSection(category.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 ${
                    activeId === category.id ?
                      "bg-surface text-heading"
                    : "text-foreground hover:text-heading"
                  }`}
                >
                  <CatIcon size={12} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex lg:pt-6 gap-20 lg:gap-46">
        {/* Left: sticky category sidebar */}
        <aside className="hidden lg:block w-40 shrink-0">
          <nav
            aria-label="Tech stack categories"
            className="sticky top-24 flex flex-col gap-1"
          >
            {techStackData.map((category) => {
              const CategoryIcon = category.icon as IconComponent;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToSection(category.id)}
                  className={`cursor-pointer text-left py-2 flex items-center gap-3 text-xs font-medium tracking-widest uppercase transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 ${
                    activeId === category.id ?
                      "text-heading"
                    : "text-foreground hover:text-heading"
                  }`}
                >
                  <CategoryIcon size={20} />
                  {category.label}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Right: stacked category sections */}
        <div className="flex-1 flex flex-col gap-14">
          {techStackData.map((category, index) => (
            <section
              key={category.id}
              id={category.id}
              ref={(el) => {
                if (el) sectionRefs.current.set(category.id, el);
                else sectionRefs.current.delete(category.id);
              }}
              className="scroll-mt-28 lg:scroll-mt-24"
            >
              <h2 className="mt-2 mb-2 text-sm font-semibold tracking-widest uppercase text-heading">
                {category.label}
              </h2>
              <p className="mb-5 text-sm leading-relaxed max-w-2xl">
                {category.description}
              </p>
              <hr className="border-foreground/20 mb-6" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 group/cards">
                {category.tools.map((tool) => (
                  <ToolCard
                    key={tool.name}
                    tool={tool}
                    colourClass={COLOUR_PALETTE[index % COLOUR_PALETTE.length]}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

type ToolCardProps = {
  tool: Tool;
  colourClass: string;
};

function ToolCard({ tool, colourClass }: ToolCardProps) {
  const Icon = tool.icon as IconComponent;
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-4 rounded-xl border border-foreground/20 bg-surface/40 transition-all duration-200 hover:border-foreground/40 hover:bg-surface/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg lg:group-hover/cards:opacity-50 lg:hover:opacity-100! focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70"
    >
      <div
        aria-hidden="true"
        className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${colourClass}`}
      >
        <Icon size={24} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-heading leading-tight group-hover:text-accent transition-colors duration-200">
          {tool.name}
        </p>
        <p className="text-xs text-foreground/60 mt-1">by {tool.by}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          {tool.description}
        </p>
      </div>
    </a>
  );
}
