import type { Metadata } from "next";

import { Section } from "@/components/Section";
import AnimatedGrid from "@/components/AnimatedGrid";
import MotionProjectCard from "@/components/MotionProjectCard";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore full-stack, mobile, realtime, and backend projects built by Bo Bo Aung.",
  path: "/projects",
  imageWidth: 1200,
  imageHeight: 630,
});

export default async function ProjectsPage() {
  return (
    <Section
      title="Projects"
      subtitle="A broader look at the products, apps, and systems I have built."
      animated
    >
      <AnimatedGrid className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <MotionProjectCard key={p._id} project={p} />
        ))}
      </AnimatedGrid>
    </Section>
  );
}
