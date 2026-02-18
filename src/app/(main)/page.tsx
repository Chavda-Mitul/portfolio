"use client";

import { Navbar, Footer } from "@/components/common";
import {
  Hero,
  Skills,
  Experience,
  Projects,
  Contact,
} from "@/components/sections";
import { Background } from "@/components/common";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Background />
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}
