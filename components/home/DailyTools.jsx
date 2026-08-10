import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { uses } from "@/data/uses";

export function DailyTools() {
  const flat = uses.flatMap((group) => group.items).slice(0, 8);

  return (
    <Section>
      <SectionHeading
        eyebrow="Workspace"
        title="Daily Tools"
        action={
          <Button href="/uses" variant="ghost" className="px-0">
            See full setup →
          </Button>
        }
      />
      <div className="flex flex-wrap gap-3">
        {flat.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </Section>
  );
}
