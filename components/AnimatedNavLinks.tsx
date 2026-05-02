"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Item = { href: string; label: string; isExternal?: boolean };

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedNavLinks({ items }: { items: Item[] }) {
  return (
    <motion.nav
      className="hidden md:flex items-center gap-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map(({ href, label, isExternal }) => (
        <motion.div key={href} variants={item}>
          {isExternal ? (
            <a
              href={href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-[rgb(var(--fg))] no-underline transition hover:bg-[rgba(var(--brand),0.08)]"
              target="_blank"
              rel="noreferrer"
            >
              {label}
              <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-[rgb(var(--brand))] transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ) : (
            <Link
              href={href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-[rgb(var(--fg))] no-underline transition hover:bg-[rgba(var(--brand),0.08)]"
            >
              {label}
              <span className="pointer-events-none absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-[rgb(var(--brand))] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          )}
        </motion.div>
      ))}
    </motion.nav>
  );
}
