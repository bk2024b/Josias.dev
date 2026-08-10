export function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:text-left">
      <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-foreground-muted">{label}</div>
    </div>
  );
}
