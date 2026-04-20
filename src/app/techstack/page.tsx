import type { Metadata } from "next";

import { MouseGlow } from "@/components/MouseGlow";
import { TechStackGrid } from "@/components/techstack/TechStackGrid";

export const metadata: Metadata = {
  title: "Tech Stack — Alvin Toh",
  description:
    "The tools, languages, and frameworks Alvin Toh uses across frontend, backend, data, cloud, and agentic AI workflows.",
};

export default function TechStackPage() {
  return (
    <div className="min-h-dvh relative">
      <MouseGlow />

      <div className="mx-auto max-w-7xl px-6 py-8 md:px-12 lg:pt-16">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-heading">
            Tech Stack
          </h1>
          <p className="mt-4 text-md leading-relaxed max-w-2xl">
            Tools I reach for across the full stack from agentic workflows,
            languages to infrastructure. Each category highlights my current
            go-to.
          </p>
        </div>

        <TechStackGrid />
      </div>
    </div>
  );
}
