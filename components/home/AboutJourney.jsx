import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { TimelineItem } from "@/components/shared/TimelineItem";
import { experience } from "@/data/experience";

export function AboutJourney() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="About" title="A bit about me" />
          <p className="text-foreground-muted">
            I&apos;m Josias, a developer and product builder focused on
            turning ideas into useful digital products. I care more about
            what ships and gets used than about collecting technologies —
            every project here started as a real problem I wanted solved
            properly.
          </p>
          <p className="mt-4 text-foreground-muted">
            I work across the stack, but I spend most of my time thinking
            about the product itself: what it should feel like, what it can
            skip, and what makes it worth coming back to.
          </p>
          <Button href="/about" variant="secondary" className="mt-8">
            More about me →
          </Button>
        </div>

        <div>
          <p className="mb-8 text-sm font-medium tracking-wide text-accent">
            Journey
          </p>
          <div>
            {experience.map((item, i) => (
              <TimelineItem
                key={item.year}
                {...item}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
