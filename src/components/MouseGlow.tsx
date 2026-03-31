"use client";

import { useEffect, useState } from "react";

export function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block transition-opacity duration-300"
      style={{
        background: `radial-gradient(var(--glow-size) at ${position.x}px ${position.y}px, rgb(var(--glow-rgb) / var(--glow-opacity)), transparent var(--glow-fade))`,
      }}
    />
  );
}
