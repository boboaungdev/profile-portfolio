import Image from "next/image";
import { ArrowRight, BriefcaseBusiness, Mail, Sparkles } from "lucide-react";

import { Button } from "@/components/Button";
import { TechBadge } from "@/components/TechBadge";
import { EXPERIENCE_LABEL } from "@/constants";
import { profile } from "@/data/profile";
import AnimatedTitle from "@/components/AnimatedTitle";
import AnimatedReveal from "@/components/AnimatedReveal";
import AnimatedParagraph from "./AnimatedParagraph";
import AnimatedGroup from "./AnimatedGroup";

const spotlightStats = [
  { label: "Years building", value: EXPERIENCE_LABEL },
  { label: "Projects shipped", value: "8+" },
  { label: "Focus", value: "Full stack" },
];

export default async function Hero() {
  return (
    <section className="portfolio-hero-shell">
      <div className="container-max relative py-8 md:py-10 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:items-center">
          <div className="relative z-10 space-y-8">
            <div className="space-y-5">
              <span className="portfolio-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
                <Sparkles className="size-3.5" />
                Developer portfolio
              </span>

              <div className="space-y-4">
                <AnimatedTitle className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Building calm, scalable products with{" "}
                  <span className="bg-[linear-gradient(135deg,rgb(var(--brand)),rgb(var(--accent)))] bg-clip-text text-transparent">
                    backend depth
                  </span>{" "}
                  and modern frontend polish.
                </AnimatedTitle>

                <AnimatedParagraph
                  className="text-muted max-w-2xl text-base leading-7 sm:text-lg"
                  staggerWords
                >
                  {profile.bio}
                </AnimatedParagraph>
              </div>
            </div>

            <AnimatedGroup>
              <Button as="a" href="#projects" className="min-w-40">
                View Projects
                <ArrowRight className="size-4" />
              </Button>
              <Button
                as="a"
                href="#skills"
                variant="secondary"
                className="min-w-40"
              >
                See All Skills
              </Button>
              <Button
                as="a"
                href="#contact"
                variant="secondary"
                className="min-w-40"
              >
                Contact Me
                <Mail className="size-4" />
              </Button>
            </AnimatedGroup>

            <AnimatedGroup>
              {profile.skills.slice(0, 8).map((skill) => (
                <TechBadge key={skill} label={skill} />
              ))}
            </AnimatedGroup>

            <AnimatedGroup>
              {spotlightStats.map((item) => (
                <div
                  key={item.label}
                  className="portfolio-glass min-w-[150px] rounded-[1.5rem] px-4 py-4"
                >
                  <p className="text-2xl font-semibold tracking-tight text-[rgb(var(--fg))]">
                    {item.value}
                  </p>
                  <p className="text-muted mt-1 text-sm">{item.label}</p>
                </div>
              ))}
            </AnimatedGroup>
          </div>

          <AnimatedReveal>
            <div className="card-strong panel-grid relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,111,117,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(194,88,49,0.15),transparent_28%)]" />

              <div className="relative grid gap-4">
                <div className="portfolio-glass rounded-[1.75rem] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
                        {profile.name}
                      </p>
                      <h2 className="text-2xl font-semibold tracking-tight">
                        Full-stack systems that stay readable as they grow
                      </h2>
                    </div>
                    <span className="portfolio-chip inline-flex size-11 items-center justify-center rounded-2xl text-[rgb(var(--accent))]">
                      <BriefcaseBusiness className="size-5" />
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                  <div className="portfolio-glass rounded-[1.75rem] p-4">
                    <div className="overflow-hidden rounded-[1.5rem]">
                      <Image
                        src={profile.image}
                        alt={`${profile.name} portrait`}
                        width={640}
                        height={640}
                        priority
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="portfolio-glass rounded-[1.75rem] p-4">
                      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--accent))]">
                        Core stack
                      </p>
                      <div className="mt-4 grid gap-3">
                        {[
                          "Node.js, Express, MongoDB APIs",
                          "Realtime products with Socket.IO and WebRTC",
                          "Next.js and React interfaces with production polish",
                        ].map((item, index) => (
                          <div
                            key={item}
                            className="flex gap-3 rounded-2xl border border-[rgba(var(--border))] bg-[rgba(var(--card),0.58)] px-3 py-3"
                          >
                            <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--brand),0.12)] text-xs font-semibold text-[rgb(var(--brand))]">
                              {index + 1}
                            </span>
                            <p className="text-sm leading-6 text-[rgb(var(--fg))]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="portfolio-glass rounded-[1.75rem] p-4">
                      <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--accent))]">
                        Availability
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                        Open to product-focused freelance work, backend-heavy
                        app builds, and full-stack collaboration on ambitious
                        teams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
