import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TimelineItem } from "@/components/shared/TimelineItem";
import { experience } from "@/data/experience";

export const metadata = {
  title: "About",
  description:
    "Josias is a developer and product builder focused on turning ideas into useful digital products.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pb-0 pt-16">
        <SectionHeading eyebrow="About" title="About Josias" />
        <div className="max-w-2xl space-y-5 text-foreground-muted">
          <p>
            I&apos;m Josias, a developer and product builder focused on
            turning ideas into useful digital products. I care more about
            what ships and gets used than about collecting technologies.
          </p>
          <p>
            Most of what I build starts the same way: a problem I run into
            myself, or notice other people running into, that doesn&apos;t
            have a good enough solution yet. PhoneTimeline, TrimMyPDF and
            EarbudsTimeline all started that way.
          </p>
          <p>
            I work across the stack — from database design to interface
            details — but I spend most of my time thinking about the product
            itself: what it should feel like, what it can skip, and what
            makes it worth coming back to.
          </p>
          <p>
            Outside of client work, I&apos;m usually building something of
            my own, writing about what I&apos;m learning, or improving one
            of the products I&apos;ve already shipped.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="Journey" />
        <div className="max-w-xl">
          {experience.map((item, i) => (
            <TimelineItem
              key={item.year}
              {...item}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
