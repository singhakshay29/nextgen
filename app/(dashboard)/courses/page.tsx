
import CourseCardSkeleton from "@/components/dashboard/components/CourseCardSkeleton";
import { supabase } from "@/lib/supabase";

export default async function CoursesPage() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">My Courses</h1>
        <p className="text-zinc-400 mt-2">
          Continue your learning journey.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses?.length ? courses.map((course) => (
          <article
            key={course.id}
            className="rounded-2xl bg-zinc-900 p-5"
          >
            <h2 className="font-semibold text-lg">
              {course.title}
            </h2>

            <div className="mt-4 h-2 w-full rounded-full bg-zinc-700">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>

            <p className="mt-3 text-zinc-400">
              Progress: {course.progress}%
            </p>
          </article>
        )):
        Array.from({ length: 6 }).map((_, i) => (
          <CourseCardSkeleton key={i}  />
        ))}
      </section>
    </main>
  );
}
