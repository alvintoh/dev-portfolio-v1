"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const pageNavItems = [
  { label: "Home", href: "/" },
  { label: "Tech Stack", href: "/#tech-stack" },
  { label: "Projects Archive", href: "/#projects-archive" },
  { label: "Heroes", href: "/#heroes" },
] as const;

type PageNavProps = {
  variant?: "desktop-tabs" | "mobile-menu";
};

export function PageNav({ variant }: PageNavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const showDesktopTabs = !variant || variant === "desktop-tabs";
  const showMobileMenu = !variant || variant === "mobile-menu";

  return (
    <div className="relative">
      {/* Desktop: tab strip */}
      {showDesktopTabs && (
        <nav
          aria-label="Page navigation"
          className="hidden lg:flex justify-center"
        >
          {pageNavItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-200 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 ${
                  isActive ?
                    "border-accent text-heading"
                  : "border-transparent text-foreground hover:text-heading hover:border-foreground/40"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      )}

      {/* Mobile: hamburger button + backdrop + dropdown */}
      {showMobileMenu && (
        <div className="lg:hidden flex justify-end">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm border border-surface/50 shadow-sm text-heading transition-colors duration-200 hover:text-accent focus-visible:ring-2 focus-visible:ring-foreground/70 focus:outline-none"
          >
            {menuOpen ?
              <X size={24} />
            : <Menu size={24} />}
          </button>

          {menuOpen && (
            <>
              {/* Full-screen backdrop — mutes the rest of the page */}
              <div
                aria-hidden="true"
                className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm"
                onClick={() => setMenuOpen(false)}
              />

              {/* Dropdown — right edge flush with button, gap of 4px below */}
              <nav
                aria-label="Page navigation"
                className="absolute right-0 top-12 z-50 min-w-44 rounded-lg border border-surface bg-background py-2 shadow-lg"
              >
                <ul>
                  {pageNavItems.map(({ label, href }) => {
                    const isActive = pathname === href;
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className={`block px-4 py-2.5 text-xs font-medium tracking-widest uppercase transition-colors duration-200 ${
                            isActive ? "text-accent" : (
                              "text-foreground hover:text-heading"
                            )
                          }`}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </>
          )}
        </div>
      )}
    </div>
  );
}
