type Tool = {
  name: string;
  shortName: string;
  description: string;
  isFavourite: boolean;
};

type TechCategory = {
  id: string;
  label: string;
  tools: Tool[];
};

export const techStackData: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    tools: [
      {
        name: "TypeScript",
        shortName: "TS",
        description: "Typed JS superset — primary language for all UI and tooling work",
        isFavourite: true,
      },
      {
        name: "React",
        shortName: "Rx",
        description: "Declarative UI component model powering the view layer",
        isFavourite: false,
      },
      {
        name: "Next.js",
        shortName: "Nx",
        description: "Full-stack React framework with App Router and server components",
        isFavourite: false,
      },
      {
        name: "JavaScript",
        shortName: "JS",
        description: "Scripting, automation, and tooling layer across the stack",
        isFavourite: false,
      },
      {
        name: "Tailwind CSS",
        shortName: "Tw",
        description: "Utility-first CSS framework for rapid, consistent UI styling",
        isFavourite: false,
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    tools: [
      {
        name: "Bun",
        shortName: "Bu",
        description: "Fast all-in-one JS runtime, bundler, and package manager",
        isFavourite: true,
      },
      {
        name: "Node.js",
        shortName: "No",
        description: "Server-side JS runtime with a vast ecosystem of packages",
        isFavourite: false,
      },
      {
        name: "Java",
        shortName: "Jv",
        description: "Enterprise-grade statically-typed JVM language",
        isFavourite: false,
      },
      {
        name: "Spring Boot",
        shortName: "SB",
        description: "Production-ready Java framework for microservices and APIs",
        isFavourite: false,
      },
    ],
  },
  {
    id: "api-data",
    label: "API & Data",
    tools: [
      {
        name: "tRPC",
        shortName: "tR",
        description: "End-to-end type-safe API layer eliminating client/server drift",
        isFavourite: true,
      },
      {
        name: "REST",
        shortName: "RS",
        description: "Standard HTTP API design pattern for resource-oriented services",
        isFavourite: false,
      },
      {
        name: "Prisma",
        shortName: "Pr",
        description: "Type-safe ORM with migrations and a declarative schema",
        isFavourite: false,
      },
      {
        name: "Kafka",
        shortName: "Kf",
        description: "Distributed event streaming platform for high-throughput pipelines",
        isFavourite: false,
      },
      {
        name: "PostgreSQL",
        shortName: "PG",
        description: "Advanced open-source relational database with rich querying",
        isFavourite: false,
      },
      {
        name: "MongoDB",
        shortName: "Mg",
        description: "Flexible document-oriented NoSQL database for unstructured data",
        isFavourite: false,
      },
      {
        name: "ClickHouse",
        shortName: "CH",
        description: "High-performance OLAP column store for analytical workloads",
        isFavourite: false,
      },
      {
        name: "Redis",
        shortName: "Rd",
        description: "In-memory key-value store for caching and real-time data",
        isFavourite: false,
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    tools: [
      {
        name: "Clerk",
        shortName: "Cl",
        description: "Full-stack auth and user management with drop-in components",
        isFavourite: true,
      },
      {
        name: "Better Auth",
        shortName: "BA",
        description: "Self-hosted, modern TypeScript authentication framework",
        isFavourite: false,
      },
      {
        name: "Firebase",
        shortName: "Fi",
        description: "Google's BaaS for real-time database, auth, and storage",
        isFavourite: false,
      },
      {
        name: "Convex",
        shortName: "Cx",
        description: "Reactive serverless database with real-time sync and TypeScript-first API",
        isFavourite: false,
      },
      {
        name: "Google/GitHub OAuth",
        shortName: "Ou",
        description: "Social sign-in via OAuth 2.0 for frictionless onboarding",
        isFavourite: false,
      },
      {
        name: "Sentry",
        shortName: "Se",
        description: "Error monitoring and performance tracing across the stack",
        isFavourite: false,
      },
    ],
  },
  {
    id: "cloud-cicd",
    label: "Cloud & CI/CD",
    tools: [
      {
        name: "Vercel",
        shortName: "Ve",
        description: "Edge-first hosting platform built for Next.js deployments",
        isFavourite: true,
      },
      {
        name: "AWS",
        shortName: "AW",
        description: "Comprehensive cloud infrastructure for compute, storage, and more",
        isFavourite: false,
      },
      {
        name: "Azure",
        shortName: "Az",
        description: "Microsoft's enterprise cloud platform for hybrid workloads",
        isFavourite: false,
      },
      {
        name: "Lefthook",
        shortName: "Lh",
        description: "Fast git hooks manager enforcing quality gates before commit",
        isFavourite: false,
      },
      {
        name: "GitHub Actions",
        shortName: "GA",
        description: "CI/CD pipelines natively integrated with GitHub repositories",
        isFavourite: false,
      },
      {
        name: "Jenkins",
        shortName: "Je",
        description: "Self-hosted continuous integration server for complex pipelines",
        isFavourite: false,
      },
    ],
  },
  {
    id: "agentic-ai",
    label: "Agentic AI",
    tools: [
      {
        name: "Claude Code",
        shortName: "CC",
        description: "Anthropic's agentic CLI for AI-assisted coding and workflows",
        isFavourite: true,
      },
      {
        name: "n8n",
        shortName: "n8",
        description: "Open-source workflow automation platform with 400+ integrations",
        isFavourite: false,
      },
      {
        name: "Inngest",
        shortName: "In",
        description: "Durable event-driven background jobs with retries and observability",
        isFavourite: false,
      },
      {
        name: "GPT",
        shortName: "GP",
        description: "OpenAI's large language model APIs for generative text and reasoning",
        isFavourite: false,
      },
      {
        name: "GitHub Copilot",
        shortName: "Co",
        description: "AI pair programmer providing inline completions in the IDE",
        isFavourite: false,
      },
      {
        name: "Figma AI",
        shortName: "FA",
        description: "AI-powered design assistance for generating and iterating on UI",
        isFavourite: false,
      },
    ],
  },
] as const satisfies TechCategory[];
