"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { TechStackResponse } from "@/utils/techStack";
import { Code, Server, Database, Layers } from "lucide-react";
import TechStack from "./tech-stack";

interface TechItem {
  id: number;
  created_at: string;
  tech_name: string;
  slug: string;
  layer: number | null;
}

const TechSection = () => {
  const [data, setData] = useState<TechStackResponse>({
    techStack: [],
    error: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        const response = await fetch("/api/tech-stack");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setData({ techStack: [], error: "Failed to fetch tech stack" + error });
      } finally {
        setLoading(false);
      }
    };

    fetchTechStack();
  }, []);

  // Memoize categorized technologies
  const categorizedTech = useMemo(() => {
    const techStack = data.techStack as TechItem[];

    return {
      frontendTech: techStack.filter((tech) => tech.layer === 1),
      backendTech: techStack.filter((tech) => tech.layer === 2),
      databaseTech: techStack.filter((tech) => tech.layer === 3),
      otherTech: techStack.filter((tech) => tech.layer === null),
    };
  }, [data.techStack]);

  if (loading) {
    return (
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              My <span className="text-blue-400">Tech Stack</span>
            </h2>
            <div className="text-gray-400">Loading technologies...</div>
          </div>
        </div>
      </section>
    );
  }

  if (data.error) {
    return (
      <section className="py-10 sm:py-16 lg:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              My <span className="text-blue-400">Tech Stack</span>
            </h2>
            <div className="text-red-400">Error: {data.error}</div>
          </div>
        </div>
      </section>
    );
  }

  const categories = [
    {
      title: "Frontend",
      icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-blue-500 to-cyan-500",
      technologies: categorizedTech.frontendTech,
    },
    {
      title: "Backend",
      icon: <Server className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-green-500 to-emerald-500",
      technologies: categorizedTech.backendTech,
    },
    {
      title: "Database",
      icon: <Database className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-purple-500 to-pink-500",
      technologies: categorizedTech.databaseTech,
    },
    {
      title: "Programming languages & Tools",
      icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
      color: "from-orange-500 to-red-500",
      technologies: categorizedTech.otherTech,
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            My <span className="text-blue-400">Tech Stack</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-400 max-w-3xl mx-auto px-2">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Side - Tech Categories */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-800 border border-gray-700 rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4 sm:mb-5 lg:mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${category.color} rounded-full mr-3 sm:mr-4`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {category.technologies.length} technologies
                    </p>
                  </div>
                </div>

                {/* Technologies Grid */}
                {category.technologies.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.id}
                        className="group bg-gray-700 border border-gray-600 rounded-lg lg:rounded-xl p-3 sm:p-4 hover:bg-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 sm:mb-3 relative">
                            <Image
                              src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${tech.slug}.svg`}
                              alt={tech.tech_name}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain filter invert group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <h4 className="text-white font-medium text-xs sm:text-sm group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                            {tech.tech_name.trim()}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 sm:py-8 text-gray-500 text-sm">
                    No technologies in this category
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Icon Cloud */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                  Interactive Tech Cloud
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Drag to explore my technology stack
                </p>
              </div>

              <div className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                <TechStack />
              </div>

              <div className="text-center mt-4 sm:mt-6">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-xs sm:text-sm">
                  <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  {data.techStack.length} Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
