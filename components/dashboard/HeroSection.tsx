"use client";
import { motion } from "framer-motion";
import { item } from "../animations/StaggerContainer";

export default function HeroSection() {
  return (
    <motion.article
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
      className='col-span-1 md:col-span-2 rounded-3xl group relative overflow-hidden p-8 bg-zinc-900 '>
      <div className=' absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-r  from-purple-500/10 via-blue-500/10 to-cyan-500/10' />
      <header className='relative z-10'>
        <h1 className='text-4xl font-bold'>Welcome back, Akshay 👋</h1>

        <p className='mt-4 text-zinc-400'>🔥 12 Day Learning Streak</p>
        <div className='relative z-10 mt-10 flex gap-10'>
          <div>
            <p className='text-sm text-zinc-400'>Active Courses</p>
            <p className='text-2xl font-bold'>6</p>
          </div>

          <div>
            <p className='text-sm text-zinc-400'>Hours Learned</p>
            <p className='text-2xl font-bold'>49</p>
          </div>

          <div>
            <p className='text-sm text-zinc-400'>Avg Progress</p>
            <p className='text-2xl font-bold'>59%</p>
          </div>
        </div>
      </header>
    </motion.article>
  );
}
