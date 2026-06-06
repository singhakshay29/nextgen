import { item } from "../animations/StaggerContainer";
import { motion } from "framer-motion";

const levels = ["bg-zinc-700", "bg-cyan-900", "bg-cyan-700", "bg-cyan-500"];
const activityData = [
  0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 3, 2, 1, 0, 0, 0, 1, 2, 3, 2, 1, 1, 2, 3, 2, 1,
  0, 0, 2, 3, 3, 2, 1, 0, 1,
];
export default function ActivitySection() {
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
      className='col-span-1 md:col-span-2 rounded-3xl group relative bg-zinc-900 p-6'>
         <div className=' absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-linear-to-r  from-purple-500/10 via-blue-500/10 to-cyan-500/10' />
      <h2 className='font-medium'>Learning Activity</h2>

      <section className='grid grid-cols-7 gap-2 mt-6'>
        {activityData.map((level, index) => (
          <span key={index} className={`h-4 w-4 rounded ${levels[level]}`} />
        ))}
      </section>
      <div className='flex items-center gap-2 mt-6 text-xs text-zinc-400'>
        <span>Less</span>

        {levels.map((color) => (
          <span key={color} className={`h-3 w-3 rounded-sm ${color}`} />
        ))}

        <span>More</span>
      </div>
    </motion.article>
  );
}
