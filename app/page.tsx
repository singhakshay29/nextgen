import { supabase } from "@/lib/supabase";

export default async function Home() {
  const response = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });
  const data = JSON.stringify(response.data, null, 2);
  return (
    <main>
      <pre>{data}</pre>
    </main>
  );
}
