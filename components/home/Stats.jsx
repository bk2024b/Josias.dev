import { Section } from "@/components/shared/Section";
import { StatCard } from "@/components/shared/StatCard";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <Section className="py-14 sm:py-16">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
}
