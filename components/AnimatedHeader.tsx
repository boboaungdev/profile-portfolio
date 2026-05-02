"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function AnimatedHeader({ children }: PropsWithChildren) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-[rgba(var(--border))] bg-[rgba(var(--bg),0.72)] backdrop-blur-xl"
    >
      {children}
    </motion.header>
  );
}
