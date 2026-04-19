"use client";

import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

import { techStackData } from "@/data/techstack/tech-stack-data";

type TechCategory = (typeof techStackData)[number];
type Tool = TechCategory["tools"][number];

type CategoryId =
  | "frontend"
  | "backend"
  | "api-data"
  | "integrations"
  | "cloud-cicd"
  | "agentic-ai";

const ALL_ID = "all";

const CATEGORY_COLOURS: Record<CategoryId, string> = {
  frontend: "bg-blue-500/15 text-blue-400",
  backend: "bg-violet-500/15 text-violet-400",
  "api-data": "bg-amber-500/15 text-amber-400",
  integrations: "bg-rose-500/15 text-rose-400",
  "cloud-cicd": "bg-sky-500/15 text-sky-400",
  "agentic-ai": "bg-emerald-500/15 text-emerald-400",
};

const tabs = [
  { id: ALL_ID, label: "All" },
  ...techStackData.map((c) => ({ id: c.id, label: c.label })),
];

export function TechStackGrid() {
  const [activeTab, setActiveTab] = useState<string>(ALL_ID);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );

  const toggleExpand = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) next.delete(categoryId);
      else next.add(categoryId);
      return next;
    });
  };

  const visibleCategories =
    activeTab === ALL_ID
      ? techStackData
      : techStackData.filter((c) => c.id === activeTab);

  const isAllMode = activeTab === ALL_ID;

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-surface mb-8">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedCategories(new Set());
              }}
              className={`pb-2 text-xs font-medium tracking-widest uppercase whitespace-nowrap transition-colors duration-150 border-b-2 -mb-px ${
                isActive
                  ? "border-accent text-heading"
                  : "border-transparent text-foreground/50 hover:text-foreground/80"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Category sections */}
      <div className="flex flex-col gap-10">
        {visibleCategories.map((category) => {
          const isExpanded = expandedCategories.has(category.id);
          const favourite = category.tools.find((t) => t.isFavourite);
          const otherTools = category.tools.filter((t) => !t.isFavourite);
          const colourClass = CATEGORY_COLOURS[category.id as CategoryId];

          const displayedTools =
            isAllMode && !isExpanded
              ? favourite
                ? [favourite]
                : []
              : category.tools;

          return (
            <div key={category.id}>
              {/* Section header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground/50">
                  {category.label}
                </h2>
                {isAllMode && otherTools.length > 0 && (
                  <button
                    type="button"
                    onClick={() => toggleExpand(category.id)}
                    className="flex items-center gap-1 text-accent text-sm font-medium hover:text-accent/80 transition-colors duration-150"
                  >
                    {isExpanded ? (
                      <>
                        Show less <ChevronUp size={14} />
                      </>
                    ) : (
                      <>
                        +{otherTools.length} more <ChevronDown size={14} />
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Uniform left-aligned grid — favourite is item #1, others follow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {displayedTools.map((tool) => (
                  <ToolCard
                    key={tool.name}
                    tool={tool}
                    colourClass={colourClass}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type ToolCardProps = {
  tool: Tool;
  colourClass: string;
};

function ToolCard({ tool, colourClass }: ToolCardProps) {
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl border transition-all duration-200 ${
        tool.isFavourite
          ? "border-surface ring-1 ring-accent/30 bg-surface/60"
          : "border-surface bg-surface/40 hover:bg-surface/60"
      }`}
    >
      <div
        className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${colourClass}`}
      >
        {tool.shortName}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-heading leading-tight">
            {tool.name}
          </span>
          {tool.isFavourite && (
            <>
              <span className="sr-only">Favourite</span>
              <Star
                size={12}
                aria-hidden="true"
                className="shrink-0 fill-accent text-accent"
              />
            </>
          )}
        </div>
        <p className="text-xs leading-relaxed text-foreground/70 mt-1">
          {tool.description}
        </p>
      </div>
    </div>
  );
}
