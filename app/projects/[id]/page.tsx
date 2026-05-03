import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";
import ExpandableText from "@/components/ExpandableText";
import ProjectHeaderAnimated from "@/components/ProjectHeaderAnimated";
import InViewFadeUp from "@/components/InViewFadeUp";
import ProjectSidebarCard from "@/components/ProjectSidebarCard";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p._id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item._id === id);

  if (!project) {
    return createPageMetadata({
      title: "Project",
      description: "Project details",
      path: `/projects/${id}`,
      imageWidth: 1200,
      imageHeight: 630,
    });
  }

  return createPageMetadata({
    title: project.title,
    description: project.shortDesc,
    path: `/projects/${project._id}`,
    imagePath: project.images[0],
  });
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p._id === id);
  if (!project) return notFound();

  const hasImages = Array.isArray(project.images) && project.images.length > 0;
  const sections = [
    {
      title: "Highlights",
      items: project.highlights,
    },
    {
      title: "Architecture",
      items: project.architecture,
    },
    {
      title: "Outcome",
      items: project.impact,
    },
  ].filter((section) => section.items?.length);

  return (
    <div className="container-max space-y-8 md:space-y-10">
      <ProjectHeaderAnimated
        title={project.title}
        shortDesc={project.shortDesc}
        tags={project.tags}
      />

      {hasImages ? (
        <InViewFadeUp>
          <ProjectGallery images={project.images} alt={project.title} />
        </InViewFadeUp>
      ) : (
        <InViewFadeUp>
          <div className="card rounded-[1.7rem] p-6 text-[rgb(var(--muted))]">
            No images available.
          </div>
        </InViewFadeUp>
      )}

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <InViewFadeUp className="card-strong rounded-[2rem] p-5 sm:p-6">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--brand))]">
                Project overview
              </p>
              <h2 className="select-text text-2xl font-semibold tracking-tight sm:text-3xl">
                Summary
              </h2>
              {project.longDesc ? (
                <ExpandableText
                  text={project.longDesc}
                  collapsedHeight={164}
                  className="max-w-none"
                />
              ) : null}
            </div>
          </InViewFadeUp>

          {sections.map((section) => (
            <InViewFadeUp
              key={section.title}
              className="card-strong rounded-[2rem] p-5 sm:p-6"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[rgb(var(--accent))]">
                    Details
                  </p>
                  <h3 className="mt-2 select-text text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h3>
                </div>

                <div className="grid gap-3">
                  {section.items?.map((item, index) => (
                    <div
                      key={`${section.title}-${index}`}
                      className="portfolio-glass flex gap-3 rounded-[1.4rem] px-4 py-4"
                    >
                      <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--brand),0.12)] text-sm font-semibold text-[rgb(var(--brand))]">
                        {index + 1}
                      </span>
                      <p className="select-text text-sm leading-7 text-[rgb(var(--fg))]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </InViewFadeUp>
          ))}
        </div>

        <ProjectSidebarCard
          live={project.live}
          source={project.source}
          role={project.role}
          timeframe={project.timeframe}
          status={project.status}
          platform={project.platform}
        />
      </section>
    </div>
  );
}
