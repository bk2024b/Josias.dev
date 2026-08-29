import { Code2, LayoutTemplate, Rocket, Sparkles } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const services = [
  {
    icon: LayoutTemplate,
    title: "Business Websites",
    text: "Modern websites designed to build credibility and turn visitors into customers.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    text: "Custom platforms built around the way your business actually works.",
  },
  {
    icon: Rocket,
    title: "SaaS & MVP Development",
    text: "Turn an idea into a working product you can launch, test and improve.",
  },
  {
    icon: Sparkles,
    title: "Website Redesign",
    text: "Transform an outdated website into a faster, clearer and more modern experience.",
  },
];

export function ServicesPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What I build"
        title="Digital products built around your goals."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, text }) => (
          <article key={title} className="group rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-accent">
              <Icon size={18} />
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground-muted">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
