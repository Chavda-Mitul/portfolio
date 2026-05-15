"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FiArrowDown } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { quentine, mono } from "@/app/fonts";

export const Hero = () => {
  const ref = useRef(null);

  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-full sm:max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Available for work pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border"
              style={{
                backgroundColor: "hsl(145 60% 30% / 0.12)",
                borderColor: "hsl(145 60% 40% / 0.3)",
                color: "hsl(145 70% 60%)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "hsl(145 70% 55%)" }}
              />
              Available for work
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              className={`${quentine.className} text-5xl md:text-7xl lg:text-8xl font-bold`}
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {selfData.name}
            </motion.h1>

            <motion.p
              className={`${mono.className} text-lg md:text-xl`}
              style={{ color: "hsl(var(--secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {selfData.roles[0]}
              <span className="cursor-blink ml-0.5">|</span>
            </motion.p>

            <motion.p
              className="text-sm md:text-base max-w-xl leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.7)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {selfData.desc}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <Button
              onClick={handleViewWork}
              className="font-mono text-sm px-6 py-2.5 rounded-xl"
              style={{
                background: "hsl(var(--accent))",
                color: "#fff",
                border: "none",
              }}
            >
              View Work
            </Button>
            <Button
              variant="outline"
              asChild
              className="font-mono text-sm px-6 py-2.5 rounded-xl border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-200"
            >
              <a href="/docs/Resume.pdf" download="Resume.pdf">
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          scroll
        </span>
        <FiArrowDown
          className="animate-bounce"
          style={{ color: "hsl(var(--accent))", width: 18, height: 18 }}
        />
      </motion.div>
    </section>
  );
};
