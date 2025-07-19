import About from "@/components/about";
import { Hero } from "@/components/hero";
import TechStack from "@/components/tech-stack";
import { ProjectResponse } from "@/types/projectType";

export default async function Home() {
  return (
    <main className="min-h-screen px-4 py-8">
      <Hero />
      <About />
      <TechStack />
    </main>
  );
}
