"use client";
import { motion } from "framer-motion";
import HeroSection from "../dashboard/HeroSection";
import CourseBlock from "../dashboard/CourseBlock";
import ActivitySection from "../dashboard/ActivitySection";

export default function Main({
  courses,
}: {
  courses?: {
    id: string;
    icon_name: string;
    title: string;
    progress: number;
  }[];
}) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  return (
    <motion.section variants={container} initial='hidden' animate='show'>
      <section className='grid gap-4 grid-cols-1  md:grid-cols-4 auto-rows-min'>
        <section className='md:col-span-2 row-span-2 flex flex-col gap-4'>
          <HeroSection />
          <ActivitySection />
        </section>
        <section className='md:col-span-2 grid md:grid-cols-2 gap-4 auto-rows-min'>
          <CourseBlock courses={courses} />
        </section>
      </section>
    </motion.section>
  );
}
