import Link from "next/link";

import { socialData } from "@/data/social-links-data";

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {socialData.map(({ icon: Icon, href, label }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="block text-foreground transition-colors duration-200 hover:text-accent"
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
