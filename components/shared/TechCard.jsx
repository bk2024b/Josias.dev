export function TechCard({ name }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground">
      {name}
    </div>
  );
}
