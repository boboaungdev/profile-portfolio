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

const profileInitials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const spotlightStats = [
  { label: "Years building", value: EXPERIENCE_LABEL },
  { label: "Projects shipped", value: "8+" },
  { label: "Focus", value: "Full stack" },
  { label: "Availability", value: "Open" },
];

const coreStackGroups = [
  {
    title: "Backend",
    detail: "Node.js, Express, MongoDB APIs",
  },
  {
    title: "Realtime",
    detail: "Socket.IO and WebRTC products",
  },
  {
    title: "Frontend",
    detail: "Next.js and React with production polish",
  },
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

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {spotlightStats.map((item) => (
                <div
                  key={item.label}
                  className="portfolio-glass rounded-[1.5rem] px-4 py-4"
                >
                  <p className="text-2xl font-semibold tracking-tight text-[rgb(var(--fg))]">
                    {item.value}
                  </p>
                  <p className="text-muted mt-1 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <AnimatedReveal>
            <div className="card-strong relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(27,111,117,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(194,88,49,0.12),transparent_28%)]" />

              <div className="relative grid gap-4">
                <div className="rounded-[1.6rem] border border-[rgba(var(--border))] bg-[rgba(var(--card),0.72)] px-4 py-4 backdrop-blur-xl">
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

                <div className="grid gap-4 md:grid-cols-[minmax(220px,0.78fr)_minmax(0,1.22fr)] lg:mx-auto lg:max-w-[430px] lg:grid-cols-1 2xl:max-w-none 2xl:grid-cols-[minmax(220px,0.78fr)_minmax(0,1.22fr)]">
                  <div className="rounded-[1.75rem] border border-[rgba(var(--border))] bg-[rgba(var(--card),0.72)] p-3 backdrop-blur-xl">
                    <div className="overflow-hidden rounded-[1.45rem]">
                      {profile.image ? (
                        <Image
                          src={profile.image}
                          alt={`${profile.name} portrait`}
                          width={640}
                          height={640}
                          priority
                          className="aspect-[4/5] w-full object-cover"
                        />
                      ) : (
                        <div className="flex aspect-[4/5] w-full items-center justify-center bg-[linear-gradient(135deg,rgba(var(--brand),0.18),rgba(var(--accent),0.22))] text-6xl font-semibold tracking-[0.12em] text-[rgb(var(--fg))]">
                          {profileInitials}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-[rgba(var(--border))] bg-[rgba(var(--card),0.72)] p-5 backdrop-blur-xl">
                    <div className="grid gap-5">
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--accent))]">
                          Core stack
                        </p>
                        <p className="text-muted mt-3 text-sm leading-7">
                          The strongest mix is backend architecture, realtime
                          workflows, and product-minded frontend delivery.
                        </p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-1">
                          {coreStackGroups.map((item) => (
                            <div
                              key={item.title}
                              className="rounded-[1.4rem] border border-[rgba(var(--border))] bg-[rgba(var(--card),0.58)] px-4 py-4"
                            >
                              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand))]">
                                {item.title}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-[rgb(var(--fg))]">
                                {item.detail}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

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
