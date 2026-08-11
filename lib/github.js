// Real contribution data via a community-run public API (no token required).
// Falls back to null on any failure so the UI can degrade gracefully.
const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";

export async function getGithubContributions(username) {
  try {
    const res = await fetch(`${CONTRIBUTIONS_API}/${username}?y=last`, {
      next: { revalidate: 3600 }, // refresh at most once an hour
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (!data?.contributions?.length) return null;

    // Keep the most recent ~371 days (53 weeks) for a GitHub-style grid.
    const days = data.contributions.slice(-371);
    const total = days.reduce((sum, day) => sum + day.count, 0);

    return { total, days };
  } catch {
    return null;
  }
}
