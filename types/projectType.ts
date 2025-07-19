export interface ProjectType {
  id: number;
  name: string;
  description?: string;
  thumbnail: string;
  status: "comfirmed" | "in-progress" | "completed";
  created_at: string;
}

export interface ProjectResponse {
  projects: ProjectType[];
  error: string | null;
}
