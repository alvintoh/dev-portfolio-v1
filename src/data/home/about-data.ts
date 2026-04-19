type AboutData = {
  avatarImage?: string;
  avatarFallback: string;
  summary: string;
  resumeLink?: string;
};

export const aboutData: AboutData = {
  avatarImage: "/images/hero/avatar.png",
  avatarFallback: "AT",
  summary:
    "Honestly, Software engineering felt pretty daunting when I first started and now with AI to learn on top of everything else. But the more I leaned into it, the more I realised it wasn't adding to the noise. It was cutting through it.\n\nWhat changed my mind was how well AI unpacks complicated concepts. As a self-learner picking up new stacks through freeCodeCamp and YouTube, having something that can clarify, summarise, and guide in real time is genuinely game-changing. It made me faster, but more importantly, it made the learning actually stick.\n\nI don't think years of experience alone is the measure anymore. I care more about staying curious, learning fast, and applying the right tools responsibly. AI is part of my workflow, but fundamentals still come first: clear thinking, clean code, and building things that solve real problems.",
  resumeLink:
    "https://drive.google.com/file/d/1lur0JdkTcb7_lAYp85pWwJ8EaRDWUz_m/view?usp=drive_link",
};
