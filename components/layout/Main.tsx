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
      <section className='grid gap-4 grid-cols-1 '>
        <HeroSection />
        <CourseBlock courses={courses} />
        <ActivitySection />
      </section>
    </motion.section>
  );
}
