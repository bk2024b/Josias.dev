export function TimelineItem({ year, title, isLast = false }) {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      <div className="flex flex-col items-center">
        <span className="flex h-3 w-3 shrink-0 rounded-full bg-accent" />
        {!isLast && <span className="mt-2 w-px flex-1 bg-border" />}
      </div>
      <div className="-mt-1.5">
        <p className="text-sm font-medium text-accent">{year}</p>
        <p className="mt-1 text-foreground">{title}</p>
      </div>
    </div>
  );
}
