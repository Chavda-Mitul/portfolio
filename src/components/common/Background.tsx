"use client";

import { useEffect, useRef } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

export const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => {
      // Future: Add mouse interaction animations
    };
    const handleMouseLeave = () => {
      // Future: Add mouse interaction animations
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="top-0 fixed -z-10 h-full w-full overflow-hidden"
    >
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#0f0a1e", "#1e0533", "#3b0764", "#6d28d9"]}
        speed={0.08}
      />
      {/* Dark overlay ensures text readability at all gradient phases */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Grain texture for premium depth */}
      <div className="absolute inset-0 grain-overlay" />
    </div>
  );
};
