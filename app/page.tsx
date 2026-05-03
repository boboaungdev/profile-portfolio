import type { Metadata } from "next";
import {
  Code2,
  Database,
  Rocket,
  Workflow,
} from "lucide-react";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { personJsonLd } from "@/lib/seo";
import { createPageMetadata } from "@/lib/seo";
import Hero from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { projects as projectsData } from "@/data/projects";
import { profile } from "@/data/profile";
import AnimatedInView from "@/components/AnimatedInView";
import AnimatedGrid from "@/components/AnimatedGrid";
import MotionProjectCard from "@/components/MotionProjectCard";
import AnimatedCTA from "@/components/AnimatedCTA";
import { TechBadge } from "@/components/TechBadge";
import { EXPERIENCE_LABEL } from "@/constants";

const strengths = [
  {
    title: "Backend-first thinking",
    description:
      "I design APIs, auth flows, data models, and realtime systems so the product stays maintainable as it scales.",
    icon: Database,
  },
  {
    title: "Clear product interfaces",
    description:
      "I care about frontend structure, legibility, and UI rhythm so complex workflows still feel approachable.",
    icon: Code2,
  },
  {
    title: "Reliable delivery",
    description:
      "From architecture to deploys, I build with production readiness, communication, and iteration speed in mind.",
    icon: Rocket,
  },
];

const workflow = [
  "Scoping features with clear API boundaries",
  "Building full-stack apps with modern React and Next.js",
  "Integrating realtime messaging, payments, or AI capabilities",
  "Shipping maintainable code with performance and deployment in mind",
];

const services = [
  {
    title: "Backend systems",
    description:
      "REST APIs, auth flows, database design, realtime services, and production-ready server architecture.",
  },
  {
    title: "Full-stack products",
    description:
      "Modern React and Next.js apps that connect clean UI with solid data and business logic.",
  },
  {
    title: "Realtime and communication",
    description:
      "Chat, notifications, Socket.IO workflows, and systems that need event-driven behavior.",
  },
  {
    title: "Mobile and web delivery",
    description:
      "Cross-platform app work with Expo React Native plus responsive web experiences.",
  },
];

const skillGroups = [
  {
    title: "Backend",
    summary: "APIs, auth, data modeling, and production server architecture.",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Redis",
      "REST APIs",
      "JWT Authentication",
      "Joi",
    ],
  },
  {
    title: "Frontend & UI",
    summary:
      "Modern web interfaces with product structure, styling systems, and polished delivery.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Bootstrap",
      "Zustand",
      "next-themes",
      "Lucide-React",
    ],
  },
  {
    title: "Mobile",
    summary:
      "Cross-platform app work with practical UX and native integrations.",
    skills: ["Expo React Native", "iOS", "Android", "OAuth"],
  },
  {
    title: "Realtime",
    summary:
      "Live communication, notifications, and event-driven product flows.",
    skills: ["Socket.IO", "WebRTC", "Realtime Messaging", "Push Notifications"],
  },
  {
    title: "Cloud & Deployment",
    summary:
      "Platforms and release tools used to ship, host, and maintain products.",
    skills: ["Docker", "CI/CD", "Vercel", "Render", "AWS Lambda"],
  },
  {
    title: "Tools & Delivery",
    summary:
      "Deployment, collaboration, and workflow tools used in real projects.",
    skills: [
      "Git/GitHub",
      "AI-Assisted Development",
    ],
  },
];

export const metadata: Metadata = createPageMetadata({
  description:
    "Portfolio homepage for Bo Bo Aung, featuring full-stack projects, skills, and contact details.",
  path: "/",
});

export default async function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />

      <Hero />

      <Section
        title="How I Work"
        subtitle="The same cleaner product feel you liked from the app now carries into the portfolio, with more focus on systems, delivery, and product clarity."
        animated
      >
        <AnimatedInView>
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="card-strong panel-grid rounded-[2rem] p-5 sm:p-6">
              <div className="grid gap-4 md:grid-cols-3">
                {strengths.map((item) => (
                  <div
                    key={item.title}
                    className="portfolio-glass rounded-[1.6rem] p-4"
                  >
                    <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[rgba(var(--brand),0.12)] text-[rgb(var(--brand))]">
                      <item.icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted mt-3 text-sm leading-7">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-strong rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-[rgba(var(--accent),0.14)] text-[rgb(var(--accent))]">
                  <Workflow className="size-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--accent))]">
                    Working style
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                    Practical engineering with product awareness
                  </h3>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {workflow.map((item, index) => (
                  <div
                    key={item}
                    className="portfolio-glass flex items-start gap-3 rounded-[1.4rem] px-4 py-3"
                  >
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--brand),0.12)] text-sm font-semibold text-[rgb(var(--brand))]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[rgb(var(--fg))]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedInView>
      </Section>

      <Section
        title="Projects"
        subtitle="Selected work across web, mobile, realtime, and backend systems."
        animated
      >
        <div id="projects" className="scroll-mt-24">
          <AnimatedGrid className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectsData.slice(0, 6).map((project) => (
              <MotionProjectCard key={project._id} project={project} />
            ))}
          </AnimatedGrid>

          <div className="mt-8 flex justify-center">
            <AnimatedCTA>
              <Button as="a" href="/projects" variant="secondary">
                View All Projects
              </Button>
            </AnimatedCTA>
          </div>
        </div>
      </Section>

      <Section
        title="What I Can Help Build"
        subtitle="The strongest fit is product work that needs both backend depth and a frontend that feels intentional."
        animated
      >
        <AnimatedInView>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-strong rounded-[1.8rem] p-5"
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand))]">
                  Service
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-muted mt-3 text-sm leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedInView>
      </Section>

      <Section
        id="skills"
        title="Skills"
        subtitle="A fuller view of the technologies and tools I work with across backend, frontend, mobile, and deployment."
        animated
      >
        <AnimatedInView>
          <div className="card-strong rounded-[2rem] p-5 sm:p-6">
            <div className="mb-6 grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
                  Core stack
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Skills organized by the work they support
                </h3>
                <p className="text-muted mt-3 max-w-2xl text-sm leading-7">
                  My strongest work sits at the intersection of backend systems,
                  product-minded frontend implementation, realtime features, and
                  cross-platform delivery.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { value: EXPERIENCE_LABEL, label: "Years building" },
                  { value: "6", label: "Skill areas" },
                  {
                    value: `${profile.fullSkills?.length ?? profile.skills.length}+`,
                    label: "Tools used",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="portfolio-glass rounded-[1.4rem] px-4 py-4"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-[rgb(var(--fg))]">
                      {item.value}
                    </p>
                    <p className="text-muted mt-1 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="portfolio-glass rounded-[1.7rem] p-5"
                >
                  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[rgb(var(--accent))]">
                    {group.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[rgb(var(--fg))]">
                    {group.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <TechBadge key={skill} label={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedInView>
      </Section>

      <Section
        title="Contact"
        subtitle="If you need a full-stack developer who can own backend complexity and still care about the UI, let's talk."
        animated
      >
        <AnimatedInView>
          <div
            id="contact"
            className="grid scroll-mt-24 gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
          >
            <div className="card-strong rounded-[2rem] p-5 sm:p-6">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
                Reach out
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Let&apos;s build something solid.
              </h3>
              <p className="text-muted mt-4 max-w-xl text-base leading-7">
                I enjoy products that need both strong engineering decisions and
                calm, usable interfaces. Backend-heavy apps, realtime systems,
                internal tools, and modern web products are all a good fit.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    label: "Email",
                    value: profile.email,
                    href: `mailto:${profile.email}`,
                    icon: SiGmail,
                  },
                  {
                    label: "GitHub",
                    value: profile.github,
                    href: profile.github,
                    icon: SiGithub,
                  },
                  {
                    label: "LinkedIn",
                    value: profile.linkedin,
                    href: profile.linkedin,
                    icon: FaLinkedinIn,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="portfolio-glass group rounded-[1.4rem] px-4 py-3 transition-transform duration-200 hover:-translate-y-0.5 hover:border-[rgba(var(--brand),0.28)] hover:bg-[rgba(var(--brand),0.08)] focus-visible:-translate-y-0.5 focus-visible:border-[rgba(var(--brand),0.3)] focus-visible:bg-[rgba(var(--brand),0.08)]"
                    target={item.label === "Email" ? undefined : "_blank"}
                    rel={item.label === "Email" ? undefined : "noreferrer"}
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(var(--brand),0.12)] text-[rgb(var(--brand))] transition-colors duration-200 group-hover:bg-[rgba(var(--brand),0.18)] group-focus-visible:bg-[rgba(var(--brand),0.18)]">
                        <item.icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--accent))] transition-colors duration-200 group-hover:text-[rgb(var(--brand))] group-focus-visible:text-[rgb(var(--brand))]">
                          {item.label}
                        </p>
                        <p className="mt-1 break-all text-sm text-[rgb(var(--fg))]">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </AnimatedInView>
      </Section>
    </>
  );
}
