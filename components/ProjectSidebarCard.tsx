"use client";

import { motion, easeOut } from "framer-motion";

export default function ProjectSidebarCard({
  live,
  source,
  role,
  timeframe,
  status,
  platform,
}: {
  live?: string;
  source?: string;
  role?: string;
  timeframe?: string;
  status?: string;
  platform?: string;
}) {
  const meta = [
    { label: "Role", value: role },
    { label: "Platform", value: platform },
    { label: "Status", value: status },
    { label: "Timeframe", value: timeframe },
  ].filter((item) => item.value);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 12 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.35, ease: easeOut },
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="card-strong h-max rounded-[1.8rem] p-5"
    >
      <div className="space-y-5">
        {meta.length ? (
          <div className="space-y-3">
            {meta.map((item) => (
              <div
                key={item.label}
                className="portfolio-glass rounded-[1.25rem] px-4 py-3"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--accent))]">
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-[rgb(var(--fg))]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex flex-col gap-3">
          {live ? (
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.995 }}
              className="btn btn-primary no-underline"
            >
              Visit Live Project
            </motion.a>
          ) : null}

          {source ? (
            <motion.a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.995 }}
              className="btn btn-secondary no-underline"
            >
              View Source Code
            </motion.a>
          ) : null}
        </div>
      </div>
    </motion.aside>
  );
}
