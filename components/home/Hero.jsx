import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { SocialLink } from "@/components/shared/SocialLink";
import { GridBackground } from "@/components/shared/GridBackground";
import { Glow } from "@/components/shared/Glow";
import { Container } from "@/components/shared/Container";
import { socials } from "@/data/socials";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <GridBackground className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <Glow className="left-1/2 top-[-120px] -translate-x-1/2" />

      <Container className="grid gap-14 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <div className="animate-fade-up">
          <Badge dot>Available for new opportunities</Badge>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-6xl">
            Hi, I&apos;m <span className="text-accent">Josias</span>.
            <br />
            I build products
            <br />
            people enjoy using.
          </h1>

          <p className="mt-6 max-w-lg text-base text-foreground-muted sm:text-lg">
            Full-stack developer focused on building fast, modern and
            scalable web products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/projects">View Projects →</Button>
            <Button href="/contact" variant="secondary">
              Contact Me →
            </Button>
          </div>

          <div className="mt-10 flex gap-3">
            {socials.map((s) => (
              <SocialLink key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface">
            <Image
              src="/images/profile/josias.jpg"
              alt="Josias"
              fill
              sizes="(min-width: 1024px) 384px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-8 -left-6 w-64 rounded-xl border border-border bg-surface/95 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:-left-10">
            <p className="text-[11px] font-medium uppercase tracking-wide text-foreground-muted">
              Building in public
            </p>
            <pre className="mt-2 overflow-x-auto text-[11px] leading-relaxed text-foreground-muted">
              <code>
                <span className="text-accent">1</span> {"while (building) {"}
                {"\n"}
                <span className="text-accent">2</span> {"  learn();"}
                {"\n"}
                <span className="text-accent">3</span> {"  ship();"}
                {"\n"}
                <span className="text-accent">4</span> {"  impact();"}
                {"\n"}
                <span className="text-accent">5</span> {"}"}
              </code>
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}
