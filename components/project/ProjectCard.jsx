import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectTag } from "@/components/shared/ProjectTag";
import { GithubIcon } from "@/components/shared/BrandIcons";

export function ProjectCard({ project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-200 hover:border-accent/40">
      <Link
        href={`/projects/${project.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden bg-background"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-foreground-muted">
            {project.name}
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
              {project.name}
            </h3>
          </Link>
          <p className="mt-2 text-sm text-foreground-muted">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <ProjectTag key={tech}>{tech}</ProjectTag>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-5 pt-2 text-sm">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground transition-colors hover:text-accent"
            >
              Live Site <ArrowUpRight size={14} />
            </Link>
          )}
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-foreground-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" /> GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
