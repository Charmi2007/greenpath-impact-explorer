import type { Career, ImpactLevel } from "@/data/careers";

const impactBadge = (level: ImpactLevel) => {
  const styles: Record<ImpactLevel, string> = {
    High: "bg-success/15 text-success",
    "Medium-High": "bg-accent/15 text-accent",
    Medium: "bg-warning/15 text-warning",
    Low: "bg-destructive/15 text-destructive",
  };
  const icons: Record<ImpactLevel, string> = { High: "🟢", "Medium-High": "🟡", Medium: "🟠", Low: "🔴" };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${styles[level]}`}>
      {icons[level]} {level}
    </span>
  );
};

const CareerTable = ({ careers }: { careers: Career[] }) => (
  <div className="overflow-hidden rounded-xl bg-card shadow-card">
    <div className="p-5 pb-0">
      <h3 className="font-display text-lg font-semibold text-foreground">Career Directory</h3>
      <p className="text-sm text-muted-foreground">Explore green careers and their real-world impact</p>
    </div>
    <div className="overflow-x-auto p-5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <th className="pb-3 pr-4">Role</th>
            <th className="pb-3 pr-4">Sector</th>
            <th className="pb-3 pr-4">Key Skills</th>
            <th className="pb-3 pr-4">Impact</th>
            <th className="pb-3 pr-4">CO₂ Saved</th>
            <th className="pb-3">Case Study</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {careers.map(c => (
            <tr key={c.id} className="transition-colors hover:bg-muted/50">
              <td className="py-3 pr-4 font-medium text-foreground">{c.role}</td>
              <td className="py-3 pr-4 text-muted-foreground">{c.sector}</td>
              <td className="py-3 pr-4">
                <div className="flex flex-wrap gap-1">
                  {c.skills.slice(0, 2).map(s => (
                    <span key={s} className="rounded bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground">{s}</span>
                  ))}
                </div>
              </td>
              <td className="py-3 pr-4">{impactBadge(c.impactLevel)}</td>
              <td className="py-3 pr-4 font-semibold text-foreground">{c.co2TonsSaved}t</td>
              <td className="py-3 text-xs text-muted-foreground">{c.caseStudy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default CareerTable;
