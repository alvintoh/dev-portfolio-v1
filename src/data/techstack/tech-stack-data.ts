import {
  BarChart3,
  Bot,
  Cloud,
  CloudCog,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe,
  KeyRound,
  Lock,
  Monitor,
  Plug,
  RefreshCw,
  Server,
  ShieldCheck,
  Shuffle,
  Timer,
  Workflow,
} from "lucide-react";
import type React from "react";
import {
  SiAnthropic,
  SiApachekafka,
  SiBun,
  SiClerk,
  SiClickhouse,
  SiFigma,
  SiFirebase,
  SiGithubactions,
  SiGithubcopilot,
  SiJavascript,
  SiJenkins,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiOpenjdk,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiSentry,
  SiSpringboot,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type IconComponent = React.ComponentType<{
  size?: number | string;
  className?: string;
}>;

type Tool = {
  name: string;
  icon: IconComponent;
  by: string;
  url: string;
  description: string;
};

type TechCategory = {
  id: string;
  label: string;
  icon: IconComponent;
  description: string;
  tools: Tool[];
};

export const techStackData = [
  {
    id: "agentic-ai",
    label: "Agentic AI",
    icon: Bot,
    description:
      "AI agents sit at the centre of how I prototype and ship today. Claude Code drives my day-to-day engineering workflow, while GPT and GitHub Copilot cover complementary gaps across the stack. n8n and Inngest handle the automation and background-job orchestration that ties it all together.",
    tools: [
      {
        name: "Claude Code",
        icon: SiAnthropic,
        by: "Anthropic",
        url: "https://claude.ai/code",
        description:
          "Anthropic's agentic CLI for AI-assisted coding and workflows",
      },
      {
        name: "n8n",
        icon: Workflow,
        by: "n8n GmbH",
        url: "https://n8n.io",
        description:
          "Open-source workflow automation platform with 400+ integrations",
      },
      {
        name: "Inngest",
        icon: Timer,
        by: "Inngest",
        url: "https://www.inngest.com",
        description:
          "Durable event-driven background jobs with retries and observability",
      },
      {
        name: "GPT",
        icon: SiOpenai,
        by: "OpenAI",
        url: "https://openai.com",
        description:
          "OpenAI's large language model APIs for generative text and reasoning",
      },
      {
        name: "GitHub Copilot",
        icon: SiGithubcopilot,
        by: "GitHub",
        url: "https://github.com/features/copilot",
        description:
          "AI pair programmer providing inline completions in the IDE",
      },
      {
        name: "Figma AI",
        icon: SiFigma,
        by: "Figma",
        url: "https://www.figma.com",
        description:
          "AI-powered design assistance for generating and iterating on UI",
      },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    description:
      "TypeScript is my default for any new project — it eliminates an entire class of runtime bugs before they reach production. JavaScript remains essential for scripting and tooling across the stack. Java powers the enterprise-grade APIs and microservices I've built with Spring Boot.",
    tools: [
      {
        name: "TypeScript",
        icon: SiTypescript,
        by: "Microsoft",
        url: "https://www.typescriptlang.org",
        description:
          "Typed JS superset — primary language for all UI and tooling work",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        by: "TC39 / ECMA",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description:
          "Scripting, automation, and tooling layer across the stack",
      },
      {
        name: "Java",
        icon: SiOpenjdk,
        by: "Oracle",
        url: "https://www.java.com",
        description: "Enterprise-grade statically-typed JVM language",
      },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: Monitor,
    description:
      "React and Next.js form the core of every UI I ship. Next.js App Router gives me server components, streaming, and edge rendering out of the box — without reaching for a separate meta-framework. Tailwind CSS keeps styles consistent and fast to iterate on, including this site.",
    tools: [
      {
        name: "React",
        icon: SiReact,
        by: "Meta",
        url: "https://react.dev",
        description: "Declarative UI component model powering the view layer",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        by: "Vercel",
        url: "https://nextjs.org",
        description:
          "Full-stack React framework with App Router and server components",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        by: "Tailwind Labs",
        url: "https://tailwindcss.com",
        description:
          "Utility-first CSS framework for rapid, consistent UI styling",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    description:
      "Bun has become my go-to runtime for new JS/TS services — measurably faster than Node.js for both startup time and throughput. Node.js remains the stable choice when ecosystem compatibility matters most. Spring Boot handles the heavier enterprise microservices I've built in Java.",
    tools: [
      {
        name: "Bun",
        icon: SiBun,
        by: "Oven",
        url: "https://bun.sh",
        description: "Fast all-in-one JS runtime, bundler, and package manager",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        by: "OpenJS Foundation",
        url: "https://nodejs.org",
        description: "Server-side JS runtime with a vast ecosystem of packages",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        by: "Broadcom / VMware",
        url: "https://spring.io/projects/spring-boot",
        description:
          "Production-ready Java framework for microservices and APIs",
      },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: Database,
    description:
      "PostgreSQL is my default for anything relational — battle-tested, rich in features, and pairs seamlessly with Prisma for type-safe queries. MongoDB works well when the data model is dynamic or document-shaped, especially for prototypes that evolve quickly.",
    tools: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        by: "PostgreSQL Global Group",
        url: "https://www.postgresql.org",
        description:
          "Advanced open-source relational database with rich querying",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        by: "MongoDB, Inc.",
        url: "https://www.mongodb.com",
        description:
          "Flexible document-oriented NoSQL database for unstructured data",
      },
    ],
  },
  {
    id: "cache",
    label: "Cache",
    icon: Gauge,
    description:
      "Redis sits between the application layer and the database, handling session storage, rate-limiting counters, and hot-read caching. Its sub-millisecond latency makes it the right tool whenever response speed is non-negotiable and the data fits in memory.",
    tools: [
      {
        name: "Redis",
        icon: SiRedis,
        by: "Redis Ltd.",
        url: "https://redis.io",
        description:
          "In-memory key-value store for sub-millisecond caching and session storage",
      },
    ],
  },
  {
    id: "queue",
    label: "Queue",
    icon: Shuffle,
    description:
      "Kafka decouples producers from consumers in high-throughput, event-driven systems. It gives me durable, replayable streams that can fan out to multiple downstream services without tight coupling — essential for systems where message loss is not an option.",
    tools: [
      {
        name: "Kafka",
        icon: SiApachekafka,
        by: "Apache / Confluent",
        url: "https://kafka.apache.org",
        description:
          "Distributed event streaming platform for high-throughput pipelines",
      },
    ],
  },
  {
    id: "data",
    label: "Data",
    icon: BarChart3,
    description:
      "ClickHouse handles analytical queries over large datasets where row-oriented databases fall short. Prisma and tRPC keep the data-access layer end-to-end type-safe from schema to client, reducing the surface area for type drift. REST remains the standard choice for public-facing APIs.",
    tools: [
      {
        name: "ClickHouse",
        icon: SiClickhouse,
        by: "ClickHouse, Inc.",
        url: "https://clickhouse.com",
        description:
          "High-performance OLAP column store for analytical workloads",
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        by: "Prisma",
        url: "https://www.prisma.io",
        description: "Type-safe ORM with migrations and a declarative schema",
      },
      {
        name: "tRPC",
        icon: SiTrpc,
        by: "tRPC",
        url: "https://trpc.io",
        description:
          "End-to-end type-safe API layer eliminating client/server drift",
      },
      {
        name: "REST",
        icon: Globe,
        by: "IETF / Roy Fielding",
        url: "https://restfulapi.net",
        description:
          "Standard HTTP API design pattern for resource-oriented services",
      },
    ],
  },
  {
    id: "auth",
    label: "Authentication",
    icon: ShieldCheck,
    description:
      "Clerk is my default for new projects — it ships a complete auth UI and user management layer out of the box, letting me skip the plumbing. Better Auth gives me more control when I need a self-hosted or custom auth flow. Google and GitHub OAuth layer on top for frictionless social sign-in.",
    tools: [
      {
        name: "Clerk",
        icon: SiClerk,
        by: "Clerk",
        url: "https://clerk.com",
        description:
          "Full-stack auth and user management with drop-in components",
      },
      {
        name: "Better Auth",
        icon: Lock,
        by: "Better Auth",
        url: "https://www.better-auth.com",
        description: "Self-hosted, modern TypeScript authentication framework",
      },
      {
        name: "Google/GitHub OAuth",
        icon: KeyRound,
        by: "Google / GitHub",
        url: "https://oauth.net",
        description: "Social sign-in via OAuth 2.0 for frictionless onboarding",
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: Plug,
    description:
      "Firebase and Convex both provide real-time data sync with minimal backend setup — useful for reactive features that would otherwise require custom WebSocket infrastructure. Sentry sits across every layer to surface errors and performance regressions before users report them.",
    tools: [
      {
        name: "Firebase",
        icon: SiFirebase,
        by: "Google",
        url: "https://firebase.google.com",
        description: "Google's BaaS for real-time database, auth, and storage",
      },
      {
        name: "Convex",
        icon: RefreshCw,
        by: "Convex",
        url: "https://www.convex.dev",
        description:
          "Reactive serverless database with real-time sync and TypeScript-first API",
      },
      {
        name: "Sentry",
        icon: SiSentry,
        by: "Sentry",
        url: "https://sentry.io",
        description:
          "Error monitoring and performance tracing across the stack",
      },
    ],
  },
  {
    id: "ci-cd",
    label: "CI/CD",
    icon: GitBranch,
    description:
      "Lefthook runs lint and type checks as a pre-commit gate so broken code never reaches the remote. GitHub Actions handles CI pipelines for most projects with zero infrastructure to maintain. Jenkins takes over for the more complex, self-hosted enterprise pipelines I've worked on.",
    tools: [
      {
        name: "Lefthook",
        icon: GitBranch,
        by: "evilmartians",
        url: "https://lefthook.dev",
        description:
          "Fast git hooks manager enforcing quality gates before commit",
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        by: "GitHub",
        url: "https://github.com/features/actions",
        description:
          "CI/CD pipelines natively integrated with GitHub repositories",
      },
      {
        name: "Jenkins",
        icon: SiJenkins,
        by: "Jenkins",
        url: "https://www.jenkins.io",
        description:
          "Self-hosted continuous integration server for complex pipelines",
      },
    ],
  },
  {
    id: "hosting",
    label: "Hosting",
    icon: Cloud,
    description:
      "Vercel is where my Next.js projects land first — zero-config deploys with a global edge network and per-commit preview URLs. AWS provides the underlying compute and storage for more complex workloads. Azure covers the Microsoft ecosystem requirements I encounter in enterprise contexts.",
    tools: [
      {
        name: "AWS",
        icon: Cloud,
        by: "Amazon",
        url: "https://aws.amazon.com",
        description:
          "Comprehensive cloud infrastructure for compute, storage, and more",
      },
      {
        name: "Azure",
        icon: CloudCog,
        by: "Microsoft",
        url: "https://azure.microsoft.com",
        description:
          "Microsoft's enterprise cloud platform for hybrid workloads",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        by: "Vercel",
        url: "https://vercel.com",
        description:
          "Edge-first hosting platform built for Next.js deployments",
      },
    ],
  },
] satisfies TechCategory[];
