import { Briefcase, TrendingUp, Layers, Zap } from "lucide-react";
import type { Career } from "@/data/careers";

interface KPICardsProps {
  filteredCareers: Career[];
}

const KPICards = ({ filteredCareers }: KPICardsProps) => {
  const totalCareers = filteredCareers.length;
  const sectorsCount = new Set(filteredCareers.map(c => c.sector)).size;
  const highImpact = filteredCareers.filter(c => c.impactLevel === "High").length;
  const avgCO2 = totalCareers > 0
    ? Math.round(filteredCareers.reduce((s, c) => s + c.co2TonsSaved, 0) / totalCareers)
    : 0;

  const kpis = [
    { label: "Total Careers", value: totalCareers, icon: Briefcase, color: "text-primary" },
    { label: "Avg CO₂ Saved (tons/yr)", value: avgCO2, icon: TrendingUp, color: "text-success" },
    { label: "Sectors Covered", value: sectorsCount, icon: Layers, color: "text-info" },
    { label: "High Impact Jobs", value: highImpact, icon: Zap, color: "text-warning" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {kpis.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="rounded-xl bg-card p-5 shadow-card transition-shadow hover:shadow-elevated">
          <div className="flex items-center gap-3">
            <div className={`rounded-lg bg-secondary p-2 ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{label}</span>
          </div>
          <p className="mt-3 font-display text-3xl font-bold text-foreground">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default KPICards;
