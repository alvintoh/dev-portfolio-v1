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
    title: "Build a personalized Slack Clone App",
    description:
      "A full-stack messaging platform inspired by Slack, built for private and workplace communication. Create and join multi-channel workspaces, collaborate in real time, and sign in securely with Google or GitHub via OAuth 2.0.",
    image: "/images/projects/slack-clone.jpg",
    stack: ["Next.js", "React", "Tailwind CSS", "Convex", "Vercel"],
    websiteUrl: "https://nextjs-slackgo.vercel.app",
  },
  {
    title: "AI Note-Taking App",
    description:
      "A real-time collaborative note-taking app inspired by Notion, enhanced with AI-powered features. Generate images with DALL-E, utilize OpenAI autocomplete for writing assistance, and visualize ideas. Now all within a seamless editing experience.",
    image: "/images/projects/ai-note.jpg",
    stack: [
      "Next.js",
      "React",
      "Dall-E",
      "OpenAI",
      "Clerk",
      "Drizzle",
      "Firebase",
      "Vercel",
    ],
    websiteUrl: "https://nextjs-notego.vercel.app",
  },
];
