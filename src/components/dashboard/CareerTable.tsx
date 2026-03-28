import { useState } from "react";
import type { Career, ImpactLevel } from "@/data/careers";
import { sectorIcons } from "@/data/careers";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { ChevronDown, ExternalLink } from "lucide-react";

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

const CareerRow = ({ career, index }: { career: Career; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <tr
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer transition-colors hover:bg-muted/50 group"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <td className="py-3 pr-4">
          <div className="flex items-center gap-2">
            <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
            <span className="font-medium text-foreground group-hover:text-primary transition-colors">{career.role}</span>
          </div>
        </td>
        <td className="py-3 pr-4 text-muted-foreground">
          <span className="mr-1">{sectorIcons[career.sector]}</span>{career.sector}
        </td>
        <td className="py-3 pr-4">
          <div className="flex flex-wrap gap-1">
            {career.skills.slice(0, 2).map(s => (
              <span key={s} className="rounded bg-secondary px-1.5 py-0.5 text-xs text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground">{s}</span>
            ))}
          </div>
        </td>
        <td className="py-3 pr-4">{impactBadge(career.impactLevel)}</td>
        <td className="py-3 pr-4 font-semibold text-foreground">{career.co2TonsSaved}t</td>
        <td className="py-3 text-xs text-muted-foreground">{career.caseStudy}</td>
      </tr>
      {expanded && (
        <tr className="animate-fade-in">
          <td colSpan={6} className="px-4 pb-4">
            <div className="rounded-lg bg-secondary/40 p-4 border-l-4 border-primary">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Case Study</p>
                  <p className="text-sm font-semibold text-foreground">{career.caseStudy}</p>
                  <p className="mt-1 text-sm text-foreground leading-relaxed">{career.caseStudyDesc}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Career Details</p>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-muted-foreground">Salary:</span> <strong className="text-foreground">{career.avgSalary}</strong></p>
                    <p><span className="text-muted-foreground">Growth:</span> <strong className="text-foreground">{career.growthIndex}</strong></p>
                    <p><span className="text-muted-foreground">Source:</span> <span className="text-primary">{career.source}</span></p>
                    <p className="text-muted-foreground">All skills: {career.skills.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const CareerTable = ({ careers }: { careers: Career[] }) => {
  const { ref, isVisible } = useAnimateOnScroll();
  const [sortKey, setSortKey] = useState<"co2TonsSaved" | "role" | "sector">("co2TonsSaved");
  const [sortAsc, setSortAsc] = useState(false);

  const sorted = [...careers].sort((a, b) => {
    const mul = sortAsc ? 1 : -1;
    if (sortKey === "co2TonsSaved") return (a.co2TonsSaved - b.co2TonsSaved) * mul;
    return a[sortKey].localeCompare(b[sortKey]) * mul;
  });

  const handleSort = (key: typeof sortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl bg-card shadow-card transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="p-5 pb-0">
        <h3 className="font-display text-lg font-semibold text-foreground">Career Directory</h3>
        <p className="text-sm text-muted-foreground">Click any row to expand details • Click headers to sort</p>
      </div>
      <div className="overflow-x-auto p-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="pb-3 pr-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("role")}>
                Role {sortKey === "role" && (sortAsc ? "↑" : "↓")}
              </th>
              <th className="pb-3 pr-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("sector")}>
                Sector {sortKey === "sector" && (sortAsc ? "↑" : "↓")}
              </th>
              <th className="pb-3 pr-4">Key Skills</th>
              <th className="pb-3 pr-4">Impact</th>
              <th className="pb-3 pr-4 cursor-pointer hover:text-foreground transition-colors" onClick={() => handleSort("co2TonsSaved")}>
                CO₂ Saved {sortKey === "co2TonsSaved" && (sortAsc ? "↑" : "↓")}
              </th>
              <th className="pb-3">Case Study</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sorted.map((c, i) => (
              <CareerRow key={c.id} career={c} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CareerTable;
