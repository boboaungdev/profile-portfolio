"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import TagBadge from "@/components/TagBadge";

type Props = {
  title: string;
  shortDesc?: string;
  tags?: string[];
};

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeOut } },
};

export default function ProjectHeaderAnimated({
  title,
  shortDesc,
  tags,
}: Props) {
  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.h1
        variants={itemUp}
        className="select-text text-3xl font-bold tracking-tight md:text-5xl"
        style={{ userSelect: "text" }}
      >
        {title}
      </motion.h1>

      {shortDesc ? (
        <motion.p
          variants={itemUp}
          className="select-text text-base text-[rgb(var(--muted))] md:text-lg"
          style={{ userSelect: "text" }}
        >
          {shortDesc}
        </motion.p>
      ) : null}

      {tags?.length ? (
        <motion.div variants={container} className="flex flex-wrap gap-2 pt-1">
          {tags.map((t) => (
            <motion.span key={t} variants={itemUp}>
              <TagBadge>{t}</TagBadge>
            </motion.span>
          ))}
        </motion.div>
      ) : null}
    </motion.header>
  );
}
