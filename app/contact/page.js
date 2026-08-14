import { Mail } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Glow } from "@/components/shared/Glow";
import { SocialLink } from "@/components/shared/SocialLink";
import { socials } from "@/data/socials";

export const metadata = {
  title: "Contact",
  description: "Have an idea, project or opportunity? Get in touch with Josias.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const email = socials.find((s) => s.icon === "mail")?.href.replace("mailto:", "");

  return (
    <Section className="pt-16">
      <div className="relative mx-auto max-w-xl text-center">
        <Glow className="left-1/2 top-0 -translate-x-1/2" />
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s build something.
        </h1>
        <p className="mt-4 text-foreground-muted">
          Have an idea, project or opportunity? Let&apos;s talk.
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
        >
          <Mail size={16} /> {email}
        </a>

        <div className="mt-10 flex justify-center gap-3">
          {socials
            .filter((s) => s.icon !== "mail")
            .map((s) => (
              <SocialLink key={s.label} {...s} />
            ))}
        </div>
      </div>
    </Section>
  );
}
