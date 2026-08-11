import { Section } from "@/components/shared/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getGithubContributions } from "@/lib/github";

const GITHUB_USERNAME = "bk2024b";

// GitHub's own level scale (0-4) mapped to the site's accent color at
// increasing opacity, so the graph stays on-brand instead of GitHub-green.
const LEVEL_COLORS = [
  "var(--color-border)",
  "rgba(0,210,106,0.25)",
  "rgba(0,210,106,0.45)",
  "rgba(0,210,106,0.7)",
  "var(--color-accent)",
];

export async function GithubActivity() {
  const data = await getGithubContributions(GITHUB_USERNAME);

  // Group days into weeks (columns), left to right, oldest to newest.
  const weeks = [];
  if (data) {
    for (let i = 0; i < data.days.length; i += 7) {
      weeks.push(data.days.slice(i, i + 7));
    }
  }

  return (
    <Section>
      <SectionHeading eyebrow="Open source" title="GitHub Activity" />
      <div className="rounded-2xl border border-border bg-surface p-8">
        {data ? (
          <>
            <div className="flex gap-1 overflow-x-auto pb-2" aria-hidden>
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day) => (
                    <span
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      className="h-2.5 w-2.5 rounded-[2px]"
                      style={{ background: LEVEL_COLORS[day.level] }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-foreground-muted">
              {data.total.toLocaleString()} contributions in the last year ·{" "}
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent"
              >
                @{GITHUB_USERNAME}
              </a>
            </p>
          </>
        ) : (
          <p className="text-sm text-foreground-muted">
            Contribution data is temporarily unavailable —{" "}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent"
            >
              view the profile on GitHub
            </a>
            .
          </p>
        )}
      </div>
    </Section>
  );
}
