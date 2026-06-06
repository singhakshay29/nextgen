"use client";

import { BookOpen, Home, Settings } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: "home",
    href: "/",
    icon: Home,
  },
  {
    id: "courses",
    href: "/courses",
    icon: BookOpen,
  },
  {
    id: "settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className='hidden md:flex flex-col justify-between min-h-screen w-20 border-r border-zinc-800'>
      <ul className='p-4 space-y-3'>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className=' relative flex h-12 w-12 items-center justify-center rounded-xl  text-zinc-400  hover:text-white'>
                  {isActive && (
            <motion.div layoutId="active-tab"
              className=" absolute inset-0 rounded-xl  bg-zinc-800 "
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
            />
          )}
          <Icon
            size={22}
            className={`relative z-10 ${
              isActive
                ? "text-white"
                : "text-zinc-400"
            }`}
          />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className='p-4'>
        <div
          className='
            flex  h-10  w-10 items-center justify-center rounded-full  bg-zinc-800 font-semibol  '>
          A
        </div>
      </div>
    </nav>
  );
}
