// src/components/Button.tsx
"use client";
import Link from "next/link";
import { forwardRef } from "react";
import clsx from "clsx";

type ButtonAs = typeof Link | "a";

type Props = {
  as?: ButtonAs;
  href?: string;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function Button(
    { className, as: As, href, variant = "primary", ...props },
    ref
  ) {
    const base =
      "btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ring))]";
    const styles = variant === "secondary" ? "btn-secondary" : "btn-primary";

    // Anchor or Next Link
    if (As && href) {
      if (As === "a") {
        return (
          <a
            href={href}
            className={clsx(base, styles, className)}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            ref={ref as unknown as React.Ref<HTMLAnchorElement>}
          >
            {props.children}
          </a>
        );
      }
      const L = As as typeof Link;
      return (
        <L href={href} className={clsx(base, styles, className)}>
          {props.children}
        </L>
      );
    }

    // Plain button
    return (
      <button
        ref={ref as unknown as React.Ref<HTMLButtonElement>}
        className={clsx(base, styles, className)}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  }
);
