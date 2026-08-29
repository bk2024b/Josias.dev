import { Button } from "@/components/shared/Button";
import { Section } from "@/components/shared/Section";

export const metadata = {
  title: "Start a Project",
  description: "Tell Josias about your website, web application or SaaS project.",
  alternates: { canonical: "/start-project" },
};

const types = ["Business website", "Web application", "SaaS / MVP", "Website redesign", "Other"];
const budgets = ["Under $500", "$500–$1,500", "$1,500–$5,000", "$5,000+", "I'm not sure yet"];
const timelines = ["ASAP", "Within a month", "Within 3 months", "Flexible"];

function ChoiceGroup({ label, name, options }) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-foreground">{label}</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground-muted transition-colors hover:border-accent/50">
            <input type="radio" name={name} value={option} className="accent-[var(--accent)]" required />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function StartProjectPage() {
  return (
    <Section className="pt-16 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Start a project</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Let&apos;s build something great.</h1>
          <p className="mt-5 max-w-md leading-7 text-foreground-muted">Tell me about your project. I&apos;ll review it and get back to you.</p>
          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h2 className="font-semibold text-foreground">What happens next?</h2>
            <ol className="mt-5 space-y-4 text-sm text-foreground-muted">
              <li><span className="mr-3 text-accent">01</span>I review your project.</li>
              <li><span className="mr-3 text-accent">02</span>We discuss the scope and goals.</li>
              <li><span className="mr-3 text-accent">03</span>You receive a clear next step.</li>
            </ol>
          </div>
        </div>

        <form action="mailto:josiasboco@gmail.com" method="post" encType="text/plain" className="space-y-8 rounded-3xl border border-border bg-surface p-6 sm:p-8">
          <ChoiceGroup label="What do you need?" name="project_type" options={types} />
          <div>
            <label htmlFor="message" className="text-sm font-medium text-foreground">Tell me about your project</label>
            <textarea id="message" name="message" required rows={7} placeholder="What are you trying to build?" className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-foreground-muted focus:border-accent" />
          </div>
          <ChoiceGroup label="What&apos;s your estimated budget?" name="budget" options={budgets} />
          <ChoiceGroup label="When would you like to start?" name="timeline" options={timelines} />
          <div className="grid gap-4 sm:grid-cols-2">
            <div><label htmlFor="name" className="text-sm font-medium text-foreground">Name</label><input id="name" name="name" required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" /></div>
            <div><label htmlFor="email" className="text-sm font-medium text-foreground">Email</label><input id="email" name="email" type="email" required className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" /></div>
          </div>
          <div><label htmlFor="company" className="text-sm font-medium text-foreground">Company / organization <span className="text-foreground-muted">(optional)</span></label><input id="company" name="company" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent" /></div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-foreground-muted">No commitment. Just tell me what you&apos;re trying to build.</p>
            <Button type="submit">Send project request →</Button>
          </div>
        </form>
      </div>
    </Section>
  );
}
