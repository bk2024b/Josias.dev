import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectsExplorer } from "@/components/project/ProjectsExplorer";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Products, SaaS, client work and experiments built by Josias — including PhoneTimeline, TrimMyPDF and EarbudsTimeline.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Work"
        title="Projects"
        description="Products, SaaS, client work and experiments I've shipped."
      />
      <ProjectsExplorer projects={projects} />
    </Section>
  );
}
