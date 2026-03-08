import Link from "next/link";

import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaEnvelope, href: "mailto:hello@example.com", label: "Email" },
];

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {socials.map(({ icon: Icon, href, label }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="block text-[#8892b0] transition-colors duration-200 hover:text-[#64ffda]"
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
