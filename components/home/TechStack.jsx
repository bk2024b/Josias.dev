import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechCard } from "@/components/shared/TechCard";
import { stack } from "@/data/stack";

export function TechStack() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Stack"
        title="Tech Stack"
        description="Technologies I actually use, day to day — not a wall of logos."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group) => (
          <div key={group.category}>
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-foreground-muted">
              {group.category}
            </p>
            <div className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <TechCard key={item.name} name={item.name} icon={item.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
