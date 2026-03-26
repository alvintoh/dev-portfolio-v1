import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

type Social = {
  icon: IconType;
  href: string;
  label: string;
};

export const socialData: Social[] = [
  { icon: FaGithub, href: "https://github.com/alvintoh", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/alvintohyz",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@robo_gman",
    label: "Youtube",
  },
  { icon: FaEnvelope, href: "mailto:alvin4292@gmail.com", label: "Email" },
];
