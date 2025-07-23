"use client";

import { useState, useEffect } from "react";
import { IconCloud } from "./magicui/icon-cloud";

interface TechItem {
  id: number;
  created_at: string;
  tech_name: string;
  slug: string;
  layer: number | null;
}

interface TechStackResponse {
  techStack: TechItem[];
  error: string | null;
}

const TechStack = () => {
  const [data, setData] = useState<TechStackResponse>({
    techStack: [],
    error: null,
  });
  const [loading, setLoading] = useState(true);

  // Function to get the correct icon URL
  const getIconUrl = (slug: string) => {
    return `https://cdn.simpleicons.org/${slug}/${slug}`;
  };

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (data.error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-400">Error: {data.error}</div>
      </div>
    );
  }

  // Map tech stack to image URLs for IconCloud
  const images = data.techStack.map((tech) => getIconUrl(tech.slug));

  return (
    <div>
      <IconCloud images={images} />
    </div>
  );
};

export default TechStack;
