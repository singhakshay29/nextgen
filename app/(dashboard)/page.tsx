import Main from "@/components/layout/Main";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const response = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });
  const courses = response.data || [];

  return (
    <Main courses={courses}/>
  );
}
