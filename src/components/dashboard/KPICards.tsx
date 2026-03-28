import { Briefcase, TrendingUp, Layers, Zap } from "lucide-react";
import type { Career } from "@/data/careers";
import { useAnimateOnScroll, useCountUp } from "@/hooks/useAnimateOnScroll";

interface KPICardsProps {
  filteredCareers: Career[];
}

const KPICard = ({ label, value, icon: Icon, color, delay }: {
  label: string; value: number; icon: React.ElementType; color: string; delay: number;
}) => {
  const { ref, isVisible } = useAnimateOnScroll();
  const animatedValue = useCountUp(value, 1200, 0, isVisible);

  return (
    <div
      ref={ref}
      className={`rounded-xl bg-card p-5 shadow-card transition-all duration-500 hover:shadow-elevated hover:scale-[1.03] hover:-translate-y-1 cursor-default ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3">
        <div className={`rounded-lg bg-secondary p-2 ${color} transition-transform duration-300 hover:rotate-12`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
      </div>
      <p className="mt-3 font-display text-3xl font-bold text-foreground tabular-nums">{animatedValue}</p>
    </div>
  );
};

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
      {kpis.map(({ label, value, icon, color }, i) => (
        <KPICard key={label} label={label} value={value} icon={icon} color={color} delay={i * 100} />
      ))}
    </div>
  );
};

export default KPICards;
