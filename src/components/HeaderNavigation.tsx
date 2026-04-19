"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";

import { useTheme } from "@/components/ThemeProvider";

const headerNavigationItems = [
  { label: "Home", href: "/" },
  { label: "Tech Stack", href: "/techstack" },
  { label: "Projects Archive", href: "/#projects-archive" },
  { label: "Heroes", href: "/#heroes" },
] as const;

type HeaderNavigationProps = {
  variant?: "desktop-tabs" | "mobile-menu";
};

export function HeaderNavigation({ variant }: HeaderNavigationProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, toggleThemeAriaLabel } = useTheme();

  const showDesktopTabs = !variant || variant === "desktop-tabs";
  const showMobileMenu = !variant || variant === "mobile-menu";

  const ThemeToggleButton = (
    <button
      type="button"
      aria-label={toggleThemeAriaLabel}
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70"
    >
      {theme === "dark" ?
        <Sun size={20} />
      : <Moon size={20} />}
    </button>
  );

  return (
    <div className="relative flex w-full items-center">
      {/* Desktop: centered tab strip with theme toggle pinned right */}
      {showDesktopTabs && (
        <>
          {/* Spacer matches the toggle width to keep tabs visually centered */}
          <div className="hidden lg:block w-9" aria-hidden="true" />
          <nav
            aria-label="Page navigation"
            className="hidden flex-1 lg:flex justify-center"
          >
            {headerNavigationItems.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={label}
                  href={href}
                  className={`pt-6 px-6 py-3 text-xs font-medium tracking-widest uppercase transition-all duration-200 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/70 ${
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
          <div className="hidden lg:flex items-center">{ThemeToggleButton}</div>
        </>
      )}

      {/* Mobile: theme toggle + hamburger */}
      {showMobileMenu && (
        <div className="flex flex-1 items-center justify-end gap-2 lg:hidden">
          {ThemeToggleButton}

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
              {/*
               * Portaled to document.body so it escapes the <header>'s backdrop-filter
               * containing block. backdrop-filter on an ancestor makes it the containing
               * block for position:fixed children, breaking fixed inset-0 coverage.
               * At z-30, it sits below the header (z-40) so the nav bar stays accessible.
               */}
              {createPortal(
                <div
                  aria-hidden="true"
                  className="fixed inset-0 z-30 bg-background/70 backdrop-blur-sm"
                  onClick={() => setMenuOpen(false)}
                />,
                document.body,
              )}

              {/* Dropdown stays in the header for correct absolute positioning */}
              <nav
                aria-label="Page navigation"
                className="absolute right-0 top-12 z-50 min-w-44 rounded-lg border border-surface bg-background py-2 shadow-lg"
              >
                <ul>
                  {headerNavigationItems.map(({ label, href }) => {
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
