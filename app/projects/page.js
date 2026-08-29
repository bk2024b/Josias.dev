import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectsExplorer } from "@/components/project/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Web Development Projects & Case Studies",
  description:
    "Explore web applications, SaaS products and data-driven platforms built by Josias, a freelance web developer.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Web Development Projects & Case Studies · Josias.dev",
    description:
      "Explore web applications, SaaS products and data-driven platforms built by Josias.",
  },
};

export default function ProjectsPage() {
  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Work"
        title="Web development projects & case studies"
        description="Real products I've designed and shipped — from business-focused tools and SaaS products to data-driven web applications."
      />
      <ProjectsExplorer projects={projects} />
    </Section>
  );
}
