import { Brain, Layers3, Gauge, Wrench } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

const reasons = [
  { icon: Brain, title: "Product mindset", text: "I think beyond the page: users, business goals, flows and the product as a whole." },
  { icon: Layers3, title: "Modern stack", text: "I build with modern tools such as Next.js, React, Supabase and Tailwind CSS." },
  { icon: Wrench, title: "End-to-end", text: "From architecture and interface to development, deployment and launch." },
  { icon: Gauge, title: "Built to perform", text: "Fast, responsive experiences with clean foundations that can grow with the product." },
];

export function WhyWorkWithMe() {
  return (
    <Section>
      <SectionHeading eyebrow="Why work with me" title="Built by someone who ships products." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-2xl border border-border bg-surface p-6">
            <Icon size={20} className="text-accent" />
            <h3 className="mt-5 font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-foreground-muted">{text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
