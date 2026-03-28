import type { Career } from "@/data/careers";
import { Lightbulb, Leaf } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

const InsightPanel = ({ filteredCareers }: { filteredCareers: Career[] }) => {
  const { ref, isVisible } = useAnimateOnScroll();

  const topSector = filteredCareers.reduce<Record<string, number>>((acc, c) => {
    acc[c.sector] = (acc[c.sector] || 0) + c.co2TonsSaved;
    return acc;
  }, {});
  const best = Object.entries(topSector).sort((a, b) => b[1] - a[1])[0];

  const topSkills = filteredCareers.flatMap(c => c.skillCategories);
  const skillCount: Record<string, number> = {};
  topSkills.forEach(s => { skillCount[s] = (skillCount[s] || 0) + 1; });
  const dominantSkill = Object.entries(skillCount).sort((a, b) => b[1] - a[1])[0];

  return (
    <div
      ref={ref}
      className={`rounded-xl bg-card p-5 shadow-card transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="flex items-center gap-2 text-foreground">
        <Lightbulb className="h-5 w-5 text-warning animate-pulse" />
        <h3 className="font-display text-lg font-semibold">Key Insights</h3>
      </div>
      <div className="mt-4 space-y-3 text-sm text-foreground">
        {best && (
          <p className="rounded-lg bg-success/5 p-3 border-l-3 border-success transition-all hover:bg-success/10">
            🔍 <strong>{best[0]}</strong> careers contribute the highest total CO₂ reduction ({best[1]} tons/year) among your filtered selection.
          </p>
        )}
        {dominantSkill && (
          <p className="rounded-lg bg-info/5 p-3 border-l-3 border-info transition-all hover:bg-info/10">
            📊 <strong>{dominantSkill[0]}</strong> skills dominate the green job market, appearing in {dominantSkill[1]} of {filteredCareers.length} roles.
          </p>
        )}
        <p className="rounded-lg bg-warning/5 p-3 border-l-3 border-warning transition-all hover:bg-warning/10">
          💡 Increasing awareness in transport-related design roles could boost overall impact significantly.
        </p>
      </div>
      <div className="mt-5 rounded-lg bg-secondary/50 p-4 transition-all hover:bg-secondary/70">
        <div className="flex items-center gap-2 text-primary">
          <Leaf className="h-4 w-4" />
          <p className="text-sm font-semibold">Our Mission</p>
        </div>
        <p className="mt-1 text-sm italic text-muted-foreground">
          Green careers are more than jobs—they are choices that shape our shared future. Explore, simulate, and start building your sustainable path today.
        </p>
      </div>
    </div>
  );
};

export default InsightPanel;
