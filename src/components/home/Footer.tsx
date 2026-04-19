import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 pb-12 text-sm text-foreground">
      <p>
        Inspired by{" "}
        <Link
          href="https://github.com/bchiang7"
          className="text-heading hover:text-accent transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </Link>{" "}
        portfolio website. Designed with{" "}
        <Link
          href="https://https://claude.com/product/claude-code"
          className="text-heading hover:text-accent transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude Code
        </Link>{" "}
        and coded in{" "}
        <Link
          href="https://code.visualstudio.com"
          className="text-heading hover:text-accent transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visual Studio Code Insiders
        </Link>
        . Built with{" "}
        <Link
          href="https://nextjs.org"
          className="text-heading hover:text-accent transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://tailwindcss.com"
          className="text-heading hover:text-accent transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </Link>
        , deployed with{" "}
        <Link
          href="https://vercel.com"
          className="text-heading hover:text-accent transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </Link>
        .
      </p>
    </footer>
  );
}
