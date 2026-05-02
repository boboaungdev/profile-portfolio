import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types";
import { TechBadge } from "@/components/TechBadge";

type Props = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = true }: Props) {
  const tags = Array.from(new Set(project.tags));
  const titleSize = compact ? "text-xl" : "text-2xl";
  const href = `/projects/${project._id}`;
  const projectLabel =
    project.platform
      ?.replace("Website, web app, and API platform", "Product platform")
      .replace("Cross-platform mobile app", "Mobile app")
      .replace("Portfolio website", "Portfolio")
      .replace("Marketing portfolio website", "Portfolio") || "Project";

  return (
    <Link href={href} className="group block h-full no-underline">
      <article
        className={`card card-hover flex h-full flex-col overflow-hidden ${
          compact ? "p-4" : "p-5"
        }`}
      >
        {project.images?.length > 0 && (
          <div className="relative overflow-hidden rounded-[1.4rem]">
            <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent_45%,rgba(24,20,18,0.42)_100%)]" />
            <span className="portfolio-chip absolute left-3 top-3 z-20 rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--brand))]">
              {projectLabel}
            </span>
            <Image
              src={project.images[0]}
              alt={project.title}
              width={1200}
              height={600}
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              className={`${compact ? "h-48" : "h-56"} w-full object-cover transition duration-300 group-hover:scale-[1.02]`}
              priority={compact}
            />
          </div>
        )}

        <div
          className={`flex flex-1 flex-col ${
            project.images?.length ? (compact ? "pt-4" : "pt-5") : ""
          }`}
        >
          <div className="flex items-start justify-between gap-4">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[rgb(var(--accent))]">
              {project.tags[0]}
            </span>
            <ArrowUpRight className="mt-0.5 size-4 text-[rgb(var(--muted))]" />
          </div>

          <h3
            className={`mt-3 mb-2 min-h-[3.5rem] break-words font-semibold ${titleSize} line-clamp-2 leading-snug transition group-hover:text-[rgb(var(--brand))]`}
          >
            {project.title}
          </h3>

          <p className="text-muted min-h-[3.25rem] text-sm leading-6 line-clamp-2">
            {project.shortDesc}
          </p>

          <div className="mt-auto flex flex-wrap gap-1 pt-4">
            {tags.slice(0, compact ? 3 : tags.length).map((t, i) => (
              <TechBadge key={`${project._id}-${t}-${i}`} label={t} small />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
