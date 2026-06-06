import Main from "@/components/layout/Main";
import Sidebar from "@/components/layout/Sidebar";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const response = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });
  const courses = response.data || [];

  return (
    <main className='min-h-screen bg-zinc-950 text-white'>
      <section className='flex'>
        <Sidebar />
        <section className='flex-1 p-8'>
            <Main courses={courses}/>
        </section>
      </section>
    </main>
  );
}
