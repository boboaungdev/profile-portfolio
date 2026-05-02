import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Bo Bo Aung about freelance work, backend-heavy products, realtime systems, or full-stack app builds.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      subtitle="Tell me about your product, scope, or technical challenge and I will get back to you with a clear next step."
      align="left"
      animated
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="card-strong rounded-[2rem] p-5 sm:p-6">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
            Reach out
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Let&apos;s talk about the build.
          </h2>
          <p className="text-muted mt-4 max-w-xl text-base leading-7">
            I work best on products that need strong backend thinking, clean UI
            structure, and reliable delivery across the stack.
          </p>

          <div className="mt-6 grid gap-3">
            {[
              { label: "Email", value: profile.email },
              { label: "GitHub", value: profile.github },
              { label: "LinkedIn", value: profile.linkedin },
            ].map((item) => (
              <div
                key={item.label}
                className="portfolio-glass rounded-[1.4rem] px-4 py-3"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--accent))]">
                  {item.label}
                </p>
                <p className="mt-1 break-all text-sm text-[rgb(var(--fg))]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
