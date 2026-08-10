import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { uses } from "@/data/uses";

export const metadata = {
  title: "Uses",
  description: "The hardware, tools and software Josias uses to build products.",
};

export default function UsesPage() {
  return (
    <Section className="pt-16">
      <SectionHeading
        eyebrow="Setup"
        title="Uses"
        description="The hardware and tools that make up my day-to-day workspace."
      />
      <div className="grid gap-10 sm:grid-cols-2">
        {uses.map((group) => (
          <div key={group.category}>
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-foreground-muted">
              {group.category}
            </p>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
