import { Search, Hammer, Rocket } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  { number: "01", icon: Search, title: "Understand", text: "We clarify the problem, goals, audience and scope before development starts." },
  { number: "02", icon: Hammer, title: "Build", text: "I design and develop the experience with a strong focus on quality and usability." },
  { number: "03", icon: Rocket, title: "Launch", text: "We ship the product, review the result and define the next iteration." },
];

export function Process() {
  return (
    <Section>
      <SectionHeading eyebrow="The process" title="From idea to launch." />
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map(({ number, icon: Icon, title, text }) => (
          <article key={number} className="relative rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium tracking-[0.18em] text-accent">{number}</span>
              <Icon size={18} className="text-foreground-muted" />
            </div>
            <h3 className="mt-8 text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground-muted">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
