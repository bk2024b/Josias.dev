import { Section } from "@/components/shared/Section";
import { currentlyBuilding } from "@/data/building";

export function CurrentlyBuilding() {
  return (
    <Section className="py-14 sm:py-16">
      <div className="rounded-2xl border border-border bg-surface p-8">
        <p className="text-xs font-medium uppercase tracking-wide text-accent">
          Currently Building
        </p>
        <p className="mt-3 max-w-xl text-foreground">
          {currentlyBuilding.title}
        </p>
        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-background">
          <div
            className="h-full rounded-full bg-accent transition-all duration-700"
            style={{ width: `${currentlyBuilding.progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-foreground-muted">
          {currentlyBuilding.progress}%
        </p>
      </div>
    </Section>
  );
}
