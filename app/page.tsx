import About from "@/components/about";
import { Hero } from "@/components/hero";

export default async function Home() {
  return (
    <main className="min-h-screen max-w-7xl px-4 py-8 over-flow-x-hidden mx-auto">
      <Hero />
      <About />
    </main>
  );
}
