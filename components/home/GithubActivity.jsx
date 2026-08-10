import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

// contributions is fetched dynamically where possible; falls back to null.
export function GithubActivity({ contributions }) {
  return (
    <Section>
      <SectionHeading eyebrow="Open source" title="GitHub Activity" />
      <div className="rounded-2xl border border-border bg-surface p-8">
        <div
          className="grid gap-1 opacity-70"
          style={{ gridTemplateColumns: "repeat(26, minmax(0, 1fr))" }}
          aria-hidden
        >
          {Array.from({ length: 26 * 7 }).map((_, i) => (
            <span
              key={i}
              className="aspect-square rounded-[2px]"
              style={{
                background:
                  i % 9 === 0
                    ? "var(--accent)"
                    : i % 5 === 0
                    ? "rgba(0,210,106,0.35)"
                    : "var(--border)",
              }}
            />
          ))}
        </div>
        <p className="mt-6 text-sm text-foreground-muted">
          {contributions
            ? `${contributions.toLocaleString()} contributions in the last year`
            : "Live contribution count — connect the GitHub API to populate this."}
        </p>
      </div>
    </Section>
  );
}
