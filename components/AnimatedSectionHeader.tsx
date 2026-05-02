"use client";

import { motion, type Variants, easeOut } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
};

export default function AnimatedSectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  const alignCls =
    align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignCls} ${className || ""}`}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.span
        variants={item}
        className="portfolio-chip inline-flex rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]"
      >
        Portfolio section
      </motion.span>
      <motion.h2
        variants={item}
        className="select-text text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ userSelect: "text" }}
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          variants={item}
          className="select-text max-w-2xl text-base leading-7 text-[rgb(var(--muted))]"
          style={{ userSelect: "text" }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
