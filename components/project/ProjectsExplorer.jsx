"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsExplorer({ projects }) {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((p) => p.category === category),
    [category, projects]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              category === cat
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border bg-surface text-foreground-muted hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-foreground-muted">No projects in this category yet.</p>
      )}
    </>
  );
}
