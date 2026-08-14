import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { now } from "@/data/now";

export const metadata = {
  title: "Now",
  description: "What Josias is currently working on.",
  alternates: { canonical: "/now" },
};

export default function NowPage() {
  return (
    <Section className="pt-16">
      <SectionHeading eyebrow="Right now" title="What I'm working on" />
      <ul className="max-w-lg space-y-4">
        {now.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-foreground"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-foreground-muted">
        Last updated regularly — this page reflects what I&apos;m focused on
        right now, not a fixed roadmap.
      </p>
    </Section>
  );
}
