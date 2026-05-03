import { Compass, FileText, Home, Mail, Search } from "lucide-react";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const quickLinks = [
  {
    title: "Back to home",
    description:
      "Return to the main portfolio page and jump into the featured sections.",
    href: "/",
    icon: Home,
  },
  {
    title: "View projects",
    description:
      "Browse the full project archive across web, mobile, backend, and trading work.",
    href: "/projects",
    icon: Compass,
  },
  {
    title: "Open resume",
    description:
      "See the resume page with skills, selected experience, and contact details.",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "Contact page",
    description:
      "Head to the contact form if you were trying to reach out directly.",
    href: "/contact",
    icon: Mail,
  },
];

export default function NotFound() {
  return (
    <Section className="pt-10">
      <div className="card-strong panel-grid relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,111,117,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(194,88,49,0.15),transparent_30%)]" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
          <div>
            <p className="text-[clamp(5rem,18vw,10rem)] font-semibold leading-none tracking-[-0.08em] text-[rgba(var(--brand),0.2)]">
              404
            </p>

            <span className="portfolio-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
              <Search className="size-3.5" />
              Page not found
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              The page you&apos;re looking for isn&apos;t here.
            </h1>

            <p className="text-muted mt-5 max-w-2xl text-base leading-7 sm:text-lg">
              The link may be outdated, the URL may be incorrect, or the page
              may have been moved while the portfolio was being updated.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href="/">
                Go Home
                <Home className="size-4" />
              </Button>
              <Button as="a" href="/projects" variant="secondary">
                Browse Projects
                <Compass className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="portfolio-glass rounded-[1.6rem] p-5 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[rgba(var(--brand),0.12)] text-[rgb(var(--brand))]">
                    <link.icon className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {link.title}
                    </h2>
                    <p className="text-muted mt-2 text-sm leading-7">
                      {link.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
