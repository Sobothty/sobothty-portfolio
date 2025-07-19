export interface TechStackItem {
  id: number;
  created_at: string;
  tech_name: string;
  slug: string;
}

export interface TechStackResponse {
  techStack: TechStackItem[];
  error: string | null;
}

export default async function getTechStack(): Promise<TechStackResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/tech-stack`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", // Use 'force-cache' if data doesn't change often
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TechStackResponse = await response.json();
    console.log("Fetched tech stack data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching tech stack:", error);
    return {
      techStack: [],
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

// Helper function to get tech stack by category (if you want to categorize)
export function categorizeTechStack(techStack: TechStackItem[]) {
  const categories = {
    frontend: [] as TechStackItem[],
    backend: [] as TechStackItem[],
    database: [] as TechStackItem[],
    styling: [] as TechStackItem[],
  };

  techStack.forEach((tech) => {
    const slug = tech.slug.toLowerCase();

    if (slug.includes("react") || slug.includes("next")) {
      categories.frontend.push(tech);
    } else if (slug.includes("spring") || slug.includes("laravel")) {
      categories.backend.push(tech);
    } else if (slug.includes("mysql") || slug.includes("postgresql")) {
      categories.database.push(tech);
    } else if (slug.includes("tailwind")) {
      categories.styling.push(tech);
    } else {
      categories.frontend.push(tech); // Default to frontend
    }
  });

  return categories;
}
