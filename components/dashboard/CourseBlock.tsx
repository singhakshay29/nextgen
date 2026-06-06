import CourseCard from "./components/CourseCard";
import CourseCardSkeleton from "./components/CourseCardSkeleton";

export default function CourseBlock({
  courses,
}: {
  courses?: {
    id: string;
    icon_name: string;
    title: string;
    progress: number;
  }[];
}) {
  return (
    <>
      <section className=' md:col-span-2 grid md:grid-cols-2 gap-4  auto-rows-[110px]'>
        {courses?.length
          ? courses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                featured={index === 0}
              />
            ))
          : Array.from({ length: 5 }).map((_, i) => (
              <CourseCardSkeleton key={i} featured={i === 0} />
            ))}
      </section>
    </>
  );
}
