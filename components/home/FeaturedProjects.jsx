import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Selected work"
        title="Featured Projects"
        action={
          <Button href="/projects" variant="ghost" className="px-0">
            View all projects →
          </Button>
        }
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
