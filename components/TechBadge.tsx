// src/components/TechBadge.tsx
import clsx from "clsx";

export function TechBadge({
  label,
  small = false,
}: {
  label: string;
  small?: boolean;
}) {
  return (
    <span
      className={clsx(
        "portfolio-chip inline-flex items-center rounded-full",
        "text-[rgb(var(--fg))]",
        small ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]",
        "transition-colors",
        "hover:border-[rgba(var(--brand),0.22)] hover:bg-[rgba(var(--brand),0.08)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]"
      )}
    >
      {label}
    </span>
  );
}
