"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, BookOpen, Settings } from "lucide-react";

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

export default function MobileBottomBar() {
  const pathname = usePathname();

  return (
    <nav
      className=" md:hidden fixed bottom-0 left-0 right-0 z-50  border-t  border-zinc-800  bg-zinc-950/90  backdrop-blur-md">
      <ul className="flex items-center justify-around p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className="relative flex h-12 w-12 items-center justify-center rounded-x "
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-tab"
                    className=" absolute  inset-0  rounded-xl  bg-zinc-80   "
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
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
    </nav>
  );
}