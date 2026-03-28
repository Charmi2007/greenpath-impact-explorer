import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, Sector as RechartsSector } from "recharts";
import type { Career } from "@/data/careers";
import { sectors } from "@/data/careers";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

interface ChartsSectionProps {
  filteredCareers: Career[];
}

const IMPACT_COLORS: Record<string, string> = {
  High: "#2E7D32",
  "Medium-High": "#66BB6A",
  Medium: "#FFC107",
  Low: "#FF7043",
};

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value, percent } = props;
  return (
    <g>
      <text x={cx} y={cy - 8} dy={0} textAnchor="middle" fill="hsl(150 30% 12%)" fontSize={14} fontWeight={700}>
        {payload.name}
      </text>
      <text x={cx} y={cy + 12} dy={0} textAnchor="middle" fill="hsl(150 10% 45%)" fontSize={12}>
        {value} ({(percent * 100).toFixed(0)}%)
      </text>
      <RechartsSector cx={cx} cy={cy} innerRadius={innerRadius - 4} outerRadius={outerRadius + 6} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <RechartsSector cx={cx} cy={cy} innerRadius={outerRadius + 8} outerRadius={outerRadius + 12} startAngle={startAngle} endAngle={endAngle} fill={fill} opacity={0.3} />
    </g>
  );
};

const ChartsSection = ({ filteredCareers }: ChartsSectionProps) => {
  const [activePieIndex, setActivePieIndex] = useState(0);
  const { ref: ref1, isVisible: v1 } = useAnimateOnScroll();
  const { ref: ref2, isVisible: v2 } = useAnimateOnScroll();
  const { ref: ref3, isVisible: v3 } = useAnimateOnScroll();

  const sectorData = sectors.map(s => ({
    sector: s.replace("Sustainable ", "").replace("Renewable ", ""),
    fullName: s,
    count: filteredCareers.filter(c => c.sector === s).length,
  }));

  const impactData = Object.entries(
    filteredCareers.reduce<Record<string, number>>((acc, c) => {
      acc[c.impactLevel] = (acc[c.impactLevel] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const allSkills = filteredCareers.flatMap(c => c.skills);
  const skillCounts: Record<string, number> = {};
  allSkills.forEach(s => { skillCounts[s] = (skillCounts[s] || 0) + 1; });
  const skillData = Object.entries(skillCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([skill, count]) => ({ skill, count }));

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div ref={ref1} className={`rounded-xl bg-card p-5 shadow-card transition-all duration-700 hover:shadow-elevated ${v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Careers by Sector</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={sectorData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(140 20% 88%)" />
            <XAxis dataKey="sector" tick={{ fontSize: 11 }} />
            <YAxis allowDecimals={false} />
            <Tooltip
              contentStyle={{ borderRadius: 8, border: "1px solid hsl(140 20% 88%)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              cursor={{ fill: "hsl(142 55% 30% / 0.08)" }}
            />
            <Bar dataKey="count" fill="hsl(142 55% 30%)" radius={[6, 6, 0, 0]} animationDuration={1200} animationBegin={200} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div ref={ref2} className={`rounded-xl bg-card p-5 shadow-card transition-all duration-700 hover:shadow-elevated ${v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "150ms" }}>
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Carbon Impact Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              activeIndex={activePieIndex}
              activeShape={renderActiveShape}
              data={impactData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={90}
              dataKey="value"
              paddingAngle={3}
              onMouseEnter={(_, index) => setActivePieIndex(index)}
              animationDuration={1200}
            >
              {impactData.map(d => (
                <Cell key={d.name} fill={IMPACT_COLORS[d.name] || "#ccc"} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div ref={ref3} className={`rounded-xl bg-card p-5 shadow-card transition-all duration-700 hover:shadow-elevated ${v3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "300ms" }}>
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Top Skills in Demand</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={skillData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(140 20% 88%)" />
            <XAxis type="number" allowDecimals={false} />
            <YAxis dataKey="skill" type="category" width={120} tick={{ fontSize: 11 }} />
            <Tooltip cursor={{ fill: "hsl(84 60% 45% / 0.08)" }} />
            <Bar dataKey="count" fill="hsl(84 60% 45%)" radius={[0, 6, 6, 0]} animationDuration={1200} animationBegin={400} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsSection;
