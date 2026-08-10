import { Section } from "@/components/shared/Section";
import { Button } from "@/components/shared/Button";
import { Glow } from "@/components/shared/Glow";

export function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center sm:py-20">
        <Glow className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <h2 className="mx-auto max-w-lg text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-foreground-muted">
          Have an idea, project or opportunity? Let&apos;s talk.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Contact Me →</Button>
        </div>
      </div>
    </Section>
  );
}
