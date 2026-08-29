import { Code2, LayoutTemplate, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

export const metadata = {
  title: "Services",
  description: "Web development services for businesses, founders and startups.",
  alternates: { canonical: "/services" },
};

const services = [
  { icon: LayoutTemplate, title: "Business Websites", text: "Modern websites designed to build credibility and turn visitors into customers.", items: ["Company websites", "Restaurant websites", "Professional websites", "Landing pages"] },
  { icon: Code2, title: "Web Applications", text: "Custom platforms built around the way your business actually works.", items: ["Dashboards", "Management platforms", "Booking systems", "Customer portals"] },
  { icon: Rocket, title: "SaaS & MVP Development", text: "Turn an idea into a working product you can launch, test and improve.", items: ["SaaS products", "MVPs", "AI-powered tools", "Data-driven applications"] },
  { icon: Sparkles, title: "Website Redesign", text: "Transform an outdated website into a faster, clearer and more modern experience.", items: ["UX improvements", "Visual redesign", "Performance", "Mobile experience"] },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-16 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Services</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">Web development built around your business.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground-muted">I design and build modern digital products for businesses, founders and startups.</p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text, items }) => (
            <article key={title} className="rounded-3xl border border-border bg-surface p-7 sm:p-8">
              <Icon size={22} className="text-accent" />
              <h2 className="mt-6 text-2xl font-semibold text-foreground">{title}</h2>
              <p className="mt-3 leading-7 text-foreground-muted">{text}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-foreground-muted">
                {items.map((item) => <li key={item} className="rounded-lg border border-border bg-background px-3 py-2">{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The process" title="From idea to launch." />
        <div className="grid gap-4 md:grid-cols-3">
          {["Understand the problem, goals and scope.", "Design and develop the right solution.", "Launch, review and plan the next iteration."].map((text, index) => (
            <div key={text} className="rounded-2xl border border-border bg-surface p-6">
              <span className="text-xs font-medium tracking-[0.18em] text-accent">0{index + 1}</span>
              <p className="mt-5 leading-7 text-foreground-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="rounded-3xl border border-border bg-surface p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">Have an idea? Let&apos;s build it.</h2>
          <p className="mx-auto mt-3 max-w-xl text-foreground-muted">Tell me what you&apos;re trying to build and I&apos;ll help turn it into a clear next step.</p>
          <Button href="/start-project" className="mt-7">Start a project →</Button>
        </div>
      </Section>
    </>
  );
}
