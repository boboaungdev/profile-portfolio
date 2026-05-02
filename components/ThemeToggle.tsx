// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
  easeOut,
} from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduce = useReducedMotion();
  const isDark = theme === "dark";

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  // icon entrance/exit
  const iconVariants: Variants = {
    hidden: { opacity: 0, rotate: -90, scale: 0.8 },
    show: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: shouldReduce ? {} : { duration: 0.25, ease: easeOut },
    },
    exit: {
      opacity: 0,
      rotate: 90,
      scale: 0.8,
      transition: shouldReduce ? {} : { duration: 0.2, ease: easeOut },
    },
  };

  // ripple pulse
  const pulseVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 0.25,
      scale: 1.6,
      transition: shouldReduce ? {} : { duration: 0.35, ease: easeOut },
    },
    exit: {
      opacity: 0,
      scale: 2,
      transition: shouldReduce ? {} : { duration: 0.3, ease: easeOut },
    },
  };

  const onToggle = () => setTheme(isDark ? "light" : "dark");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.repeat) return;

      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName;
      const isTypingTarget =
        target?.isContentEditable ||
        tagName === "INPUT" ||
        tagName === "TEXTAREA" ||
        tagName === "SELECT";

      if (isTypingTarget) return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.key.toLowerCase() !== "d") return;

      setTheme(isDark ? "light" : "dark");
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDark, setTheme]);

  // Pre-mount: render a stable placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="portfolio-chip rounded-full p-2.5"
        aria-hidden
      >
        <Moon size={18} />
      </button>
    );
  }

  return (
    <motion.button
      aria-label="Toggle theme"
      aria-pressed={isDark}
      title={isDark ? "Switch to light" : "Switch to dark"}
      onClick={onToggle}
      whileTap={shouldReduce ? undefined : { scale: 0.96 }}
      className="portfolio-chip relative isolate rounded-full p-2.5
             focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))] 
             transition-[background-color,border-color] duration-200"
    >
      {/* Pulse ring keyed by theme so it plays each time theme changes */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          variants={pulseVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute inset-0 -z-10 rounded-full"
          style={{ mixBlendMode: "multiply" }}
        />
      </AnimatePresence>

      {/* Icon swap */}
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            variants={iconVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="block"
          >
            <Sun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            variants={iconVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="block"
          >
            <Moon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
