type Project = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  websiteUrl: string;
  stars?: number;
  forks?: number;
};

export const projectData: Project[] = [
  {
    title: "Convex Chat",
    description:
      "A full-stack messaging platform inspired by Slack, built for private and workplace communication. Create and join multi-channel workspaces, collaborate in real time, and sign in securely with Google or GitHub via OAuth 2.0.",
    image: "/images/projects/convex-chat.jpg",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Convex",
      "Vercel",
    ],
    websiteUrl: "https://convexchat-dev.vercel.app",
  },
  {
    title: "Gen Note",
    description:
      "A real-time collaborative note-taking app inspired by Notion, enhanced with AI-powered features. Generate images with DALL-E, utilize OpenAI autocomplete for writing assistance, and visualize ideas. Now all within a seamless editing experience.",
    image: "/images/projects/gen-note.jpg",
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Dall-E",
      "OpenAI",
      "Clerk",
      "Drizzle",
      "Firebase",
      "Vercel",
    ],
    websiteUrl: "https://gennote-dev.vercel.app",
  },
  {
    title: "Nimbus",
    description:
      "Built a location-aware weather dashboard using Next.js and the OpenWeather API, with real-time updates and a responsive interface.",
    image: "/images/projects/nimbus.jpg",
    stack: [
      "TypeScript",
      "Next.js",
      "OpenWeather API",
      "Tailwind CSS",
      "Vercel",
    ],
    websiteUrl: "http://nimbus-dev.vercel.app",
  },
  {
    title: "The Go Foundry",
    description:
      "Built a collection of production-style Go projects covering REST APIs, Slack bots, AWS Lambda, and AI integrations with reusable templates, tests, and Makefile-driven workflows.",
    image: "/images/projects/the-go-foundry.jpg",
    stack: [
      "Go",
      "Fiber",
      "MailChimp",
      "Slack",
      "Discord",
      "AWS Lambda",
      "Wolfram",
      "Wit.ai",
    ],
    websiteUrl: "https://github.com/alvintoh/the-go-foundry",
  },
  {
    title: "Orchestra Stack",
    description:
      "A Docker Compose collection for spinning up production-grade infrastructure, covering databases (ClickHouse, MongoDB, PostgreSQL), message queues (Kafka), and workflow orchestrators (Dagster, Prefect).",
    image: "/images/projects/orchestra-stack.jpg",
    stack: [
      "Docker",
      "ClickHouse",
      "MongoDB",
      "PostgreSQL",
      "Kafka",
      "Dagster",
      "Prefect",
    ],
    websiteUrl: "https://github.com/alvintoh/orchestra-stack",
  },
];
