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
          <Badge dot>Available for selected projects</Badge>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:text-6xl">
            I build modern websites
            <br />
            and web applications
            <br />
            <span className="text-accent">that help businesses grow.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            From high-performing business websites to SaaS platforms and
            data-driven products, I turn ideas into fast, polished digital
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/start-project">Start a project →</Button>
            <Button href="/projects" variant="secondary">
              View my work →
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-foreground-muted">
            <span>Independent web developer</span>
            <span aria-hidden="true">·</span>
            <span>Remote worldwide</span>
          </div>

          <div className="mt-7 flex gap-3">
            {socials.map((s) => (
              <SocialLink key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in [animation-delay:150ms] opacity-0 [animation-fill-mode:forwards]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-surface p-6 sm:p-8">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-background/70 p-5 backdrop-blur-sm sm:p-6">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-foreground-muted">
                  What I build
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    "Business websites",
                    "Web applications",
                    "SaaS & MVPs",
                    "Data-driven products",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-3 py-3 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-border bg-surface/80 p-4">
                <p className="text-[11px] font-medium uppercase tracking-wide text-foreground-muted">
                  From idea to launch
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  Strategy, design, development and launch — handled end to end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
