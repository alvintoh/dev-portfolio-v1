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
    "Honestly, Software engineering felt pretty daunting when I first started — and now with AI to learn on top of everything else. But the more I leaned into it, the more I realised it wasn't adding to the noise. It was cutting through it.\n\nWhat changed my mind was how well AI unpacks complicated concepts. As a self-learner picking up new stacks through freeCodeCamp and YouTube, having something that can clarify, summarise, and guide in real time is genuinely game-changing. It made me faster, but more importantly, it made the learning actually stick.\n\nI don't think years of experience is the measure anymore. I think it's how well you learn and what tools you bring to the table. Right now, AI is the most powerful one I've got, and I'm all in.",
  resumeLink:
    "https://drive.google.com/file/d/11c5LKzqDutyH7X15CJCRVE5RLU4JRmt7/view?usp=drive_link",
};
