"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!glowRef.current) return;
        glowRef.current.style.background = `radial-gradient(
          var(--glow-size) at ${e.clientX}px ${e.clientY}px,
          rgb(var(--glow-rgb) / var(--glow-opacity)),
          transparent var(--glow-fade)
        )`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
    />
  );
}
