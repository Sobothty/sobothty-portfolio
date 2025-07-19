import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6">
      <h1 className="text-2xl font-bold mb-4">Protected Page</h1>
      <p>Hello {user.email}! This is a protected page.</p>
      <p>User ID: {user.id}</p>
    </div>
  );
}
