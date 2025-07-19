import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
    );

    const { data, error } = await supabase
      .from("tech_stack") // or "techstack" - adjust based on your table name
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching tech stack:", error);
      return NextResponse.json(
        {
          techStack: [],
          error: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      techStack: data || [],
      error: null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        techStack: [],
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
