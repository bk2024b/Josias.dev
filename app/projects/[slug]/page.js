import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/shared/BrandIcons";
import { Section } from "@/components/shared/Section";
import { ProjectTag } from "@/components/shared/ProjectTag";
import { Button } from "@/components/shared/Button";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.type}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.type} · Josias.dev`,
      description: project.description,
      images: project.image ? [project.image] : undefined,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: project.url || `https://josias-dev.vercel.app/projects/${project.slug}`,
    image: project.image ? `https://josias-dev.vercel.app${project.image}` : undefined,
    creator: { "@type": "Person", name: "Josias Boco" },
    keywords: project.technologies.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="pb-0 pt-16">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"><ArrowLeft size={14} /> All projects</Link>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">{project.type}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{project.name}</h1>
            <p className="mt-3 max-w-xl text-foreground-muted">{project.tagline}</p>
          </div>
          <div className="flex gap-3">
            {project.url && <Button href={project.url}>Live Site <ArrowUpRight size={15} /></Button>}
            {project.github && <Button href={project.github} variant="secondary"><GithubIcon size={15} /> GitHub</Button>}
          </div>
        </div>
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface">
          {project.image ? <Image src={project.image} alt={`${project.name} project interface`} fill sizes="100vw" className="object-cover" priority /> : <div className="flex h-full items-center justify-center text-foreground-muted">{project.name}</div>}
        </div>
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="flex flex-col gap-12">
            <ProjectSection title="Overview" text={project.overview} />
            <ProjectSection title="Problem" text={project.problem} />
            <ProjectSection title="Solution" text={project.solution} />
            <div><h2 className="text-xl font-semibold text-foreground">Features</h2><ul className="mt-4 grid gap-2 sm:grid-cols-2">{project.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm text-foreground-muted"><span className="h-1 w-1 rounded-full bg-accent" />{f}</li>)}</ul></div>
            <ProjectSection title="Challenges" text={project.challenges} />
            <ProjectSection title="Results" text={project.results} />
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-surface p-6"><p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">Tech Stack</p><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((t) => <ProjectTag key={t}>{t}</ProjectTag>)}</div></aside>
        </div>
      </Section>
      {related.length > 0 && <Section className="pt-0"><h2 className="mb-8 text-xl font-semibold text-foreground">Related Projects</h2><div className="grid gap-6 sm:grid-cols-2">{related.map((p) => <ProjectCard key={p.slug} project={p} />)}</div></Section>}
      <Section className="pt-0"><div className="rounded-3xl border border-border bg-surface p-8 text-center"><h2 className="text-2xl font-semibold text-foreground">Have a project like this?</h2><p className="mt-2 text-foreground-muted">Let&apos;s discuss what you&apos;re building.</p><Button href="/start-project" className="mt-5">Start a project →</Button></div></Section>
    </>
  );
}

function ProjectSection({ title, text }) {
  if (!text) return null;
  return <div><h2 className="text-xl font-semibold text-foreground">{title}</h2><p className="mt-3 leading-7 text-foreground-muted">{text}</p></div>;
}
