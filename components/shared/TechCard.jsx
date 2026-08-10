import * as SimpleIcons from "react-icons/si";
import { Code2 } from "lucide-react";

export function TechCard({ name, icon }) {
  const Icon = (icon && SimpleIcons[icon]) || Code2;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground">
      <Icon className="h-4 w-4 shrink-0" />
      {name}
    </div>
  );
}
