import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Server client automatically reads cookies
    const supabase = await createClient();

    // Now fetch data with authenticated user context
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching projects:", error);
      return NextResponse.json(
        {
          projects: [],
          error: error.message,
        },
        { status: 500 }
      );
    }

    // ✅ ADD THIS - Return success response
    return NextResponse.json({
      projects: data || [],
      error: null,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      {
        projects: [],
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}
