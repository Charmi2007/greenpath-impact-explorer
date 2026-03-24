import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import type { Career } from "@/data/careers";
import { sectors, type Sector } from "@/data/careers";

interface ChartsSectionProps {
  filteredCareers: Career[];
}

const IMPACT_COLORS: Record<string, string> = {
  High: "#2E7D32",
  "Medium-High": "#66BB6A",
  Medium: "#FFC107",
  Low: "#FF7043",
};

const ChartsSection = ({ filteredCareers }: ChartsSectionProps) => {
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
      {/* Bar Chart */}
      <div className="rounded-xl bg-card p-5 shadow-card">
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Careers by Sector</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={sectorData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(140 20% 88%)" />
            <XAxis dataKey="sector" tick={{ fontSize: 11 }} />
            <YAxis allowDecimals={false} />
            <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(140 20% 88%)" }} />
            <Bar dataKey="count" fill="hsl(142 55% 30%)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="rounded-xl bg-card p-5 shadow-card">
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Carbon Impact Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={impactData} cx="50%" cy="50%" innerRadius={50} outerRadius={90} dataKey="value" paddingAngle={3}>
              {impactData.map(d => (
                <Cell key={d.name} fill={IMPACT_COLORS[d.name] || "#ccc"} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Skills Bar */}
      <div className="rounded-xl bg-card p-5 shadow-card">
        <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Top Skills in Demand</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={skillData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(140 20% 88%)" />
            <XAxis type="number" allowDecimals={false} />
            <YAxis dataKey="skill" type="category" width={120} tick={{ fontSize: 11 }} />
            <Tooltip />
            <Bar dataKey="count" fill="hsl(84 60% 45%)" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsSection;
