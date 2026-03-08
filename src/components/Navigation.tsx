"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(() => {});
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-4">
        {navItems.map(({ label, href }) => {
          const sectionId = href.replace("#", "");
          const isActive = activeSection === sectionId;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`group flex items-center gap-4 py-1 transition-all duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  const sectionId = href.replace("#", "");
                  setActiveSection(sectionId);
                  const element = document.querySelector(href);
                  if (element) {
                    const offset = 100;
                    const top =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                <span
                  className={`block h-px transition-all duration-300 ${
                    isActive ? "w-16 bg-[#e2e8f0]" : (
                      "w-8 bg-[#8892b0] group-hover:w-16 group-hover:bg-[#e2e8f0]"
                    )
                  }`}
                />
                <span
                  className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? "text-[#e2e8f0]" : (
                      "text-[#8892b0] group-hover:text-[#e2e8f0]"
                    )
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
