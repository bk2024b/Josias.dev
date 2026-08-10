import Link from "next/link";
import { navigation } from "@/data/navigation";
import { socials } from "@/data/socials";
import { SocialLink } from "@/components/shared/SocialLink";
import { Container } from "@/components/shared/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border">
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="text-sm font-semibold tracking-tight text-foreground">
            Josias<span className="text-accent">.dev</span>
          </Link>
          <p className="mt-3 text-sm text-foreground-muted">
            Building products with code, curiosity and intention.
          </p>
          <p className="mt-6 text-xs text-foreground-muted">
            Built with Next.js · Hosted on Vercel
          </p>
        </div>

        <div className="flex flex-wrap gap-10 sm:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation
                .filter((i) => ["Projects", "Blog", "Contact"].includes(i.label))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
              Social
            </p>
            <div className="mt-4 flex gap-3">
              {socials.map((s) => (
                <SocialLink key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container>
          <p className="text-xs text-foreground-muted">© {year} Josias.</p>
        </Container>
      </div>
    </footer>
  );
}
