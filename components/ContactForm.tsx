"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants, easeOut } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    setStatus("Sending...");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
        cache: "no-store",
      });

      let payload: unknown = null;
      const ct = res.headers.get("content-type") || "";
      try {
        payload = ct.includes("application/json")
          ? await res.json()
          : await res.text();
      } catch {
        payload = null;
      }

      if (res.ok) {
        setStatus("Message sent!");
        formEl.reset();
      } else {
        const msg =
          (payload as { error?: string })?.error ||
          (typeof payload === "string" && payload) ||
          `Failed to send (HTTP ${res.status}).`;
        setStatus(msg);
      }
    } catch (error: unknown) {
      setStatus(error instanceof Error ? error.message : "Unexpected error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="card-strong w-full space-y-4 p-5 sm:p-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={item} className="space-y-2">
        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
          Start a conversation
        </p>
        <h3 className="text-2xl font-semibold tracking-tight">
          Tell me what you want to build
        </h3>
        <p className="text-sm leading-6 text-[rgb(var(--muted))]">
          Share the product idea, timeline, or technical problem. I&apos;ll
          reply with a clear next step.
        </p>
      </motion.div>

      <motion.input
        variants={item}
        name="name"
        placeholder="Your name"
        required
        className="w-full rounded-2xl border border-[rgba(var(--border))] bg-[rgba(var(--card),0.78)] p-3.5 text-[rgb(var(--fg))] placeholder:text-[rgb(var(--muted))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
      />

      <motion.input
        variants={item}
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        className="w-full rounded-2xl border border-[rgba(var(--border))] bg-[rgba(var(--card),0.78)] p-3.5 text-[rgb(var(--fg))] placeholder:text-[rgb(var(--muted))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
      />

      <motion.textarea
        variants={item}
        name="message"
        placeholder="Tell me about your project..."
        required
        rows={6}
        className="w-full rounded-2xl border border-[rgba(var(--border))] bg-[rgba(var(--card),0.78)] p-3.5 text-[rgb(var(--fg))] placeholder:text-[rgb(var(--muted))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
      />

      <motion.button
        variants={item}
        disabled={submitting}
        className="btn btn-primary disabled:opacity-70"
        type="submit"
        whileTap={{ scale: 0.98 }}
      >
        {submitting ? "Sending..." : "Send Message"}
      </motion.button>

      <AnimatePresence>
        {status && (
          <motion.p
            key={status}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-3 text-sm text-[rgb(var(--muted))]"
          >
            {status}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  );
}
