import type { PropsWithChildren, ReactNode } from "react";
import AnimatedSectionHeader from "@/components/AnimatedSectionHeader";

type Props = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  id?: string;
  className?: string;
  align?: "left" | "center";
  animated?: boolean; // 👈 new
}>;

export function Section({
  title,
  subtitle,
  id,
  className,
  align = "center",
  animated = false,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`container-max section-pad ${className || ""}`}
    >
      {title ? (
        animated ? (
          <AnimatedSectionHeader
            title={title}
            subtitle={subtitle}
            align={align}
            className="mb-8"
          />
        ) : (
          <div
            className={`mb-8 ${align === "left" ? "text-left" : "text-center"}`}
          >
            <span className="portfolio-chip mb-4 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
              Portfolio section
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle ? (
              <p className="text-muted mx-auto mt-3 max-w-2xl text-base leading-7">
                {subtitle}
              </p>
            ) : null}
          </div>
        )
      ) : null}

      {children as ReactNode}
    </section>
  );
}
