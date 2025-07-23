import About from "@/components/about";
import { Hero } from "@/components/hero";

export default async function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
      </div>
    </main>
  );
}
