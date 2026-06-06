import { item } from "../animations/StaggerContainer";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

import { BookOpen, Rocket, Code2, Gauge, FileCode,Palette } from "lucide-react";

const iconMap = {
  BookOpen,
  Rocket,
  Code2,
  Gauge,
  FileCode,
  Palette
};

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
      <section className='col-span-1 md:col-span-2 grid md:grid-cols-2 gap-4'>
        
        {courses?.map((course) => {
          const Icon =
            Icons[course?.icon_name as keyof typeof iconMap] ?? Icons.BookOpen;
          return (
            <motion.article
              key={course.id}
              variants={item}
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className='relative group overflow-hidden rounded-2xl bg-zinc-800 p-5'>
                 <div className=' absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-r  from-purple-500/10 via-blue-500/10 to-cyan-500/10' />
              <div className='absolute inset-0  pointer-events-none ' />
              <div className='relative z-10'>
                <div className='flex items-center gap-3 mb-3'>
                  <Icon size={22} />
                  <h3 className='font-medium'>{course.title}</h3>
                </div>

                <div className='h-2 w-full overflow-hidden rounded-full bg-zinc-700'>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: course.progress / 100,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                    }}
                    style={{
                      transformOrigin: "left",
                    }}
                    className=' h-full bg-gradient-to-r from-blue-500 to-cyan-400'
                  />
                </div>
              </div>
              <p className='text-sm text-zinc-400 mt-2'>
                Progress: {course.progress}%
              </p>
            </motion.article>
          );
        })}
      </section>
    </>
  );
}
