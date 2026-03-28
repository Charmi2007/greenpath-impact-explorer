import { useState, useMemo } from "react";
import { careers, sectorImpactRange, sectorIcons } from "@/data/careers";
import { Sparkles, TrendingUp, Home, Leaf } from "lucide-react";
import { useAnimateOnScroll, useCountUp } from "@/hooks/useAnimateOnScroll";

const WhatIfSimulation = () => {
  const [selectedId, setSelectedId] = useState(careers[0].id);
  const [yearsWorking, setYearsWorking] = useState(5);
  const career = careers.find(c => c.id === selectedId)!;
  const [min, max] = sectorImpactRange[career.sector];
  const totalCO2 = career.co2TonsSaved * yearsWorking;
  const homesEstimate = Math.round(career.co2TonsSaved * 1.4);
  const treesEquivalent = Math.round(totalCO2 * 16.5);

  const { ref, isVisible } = useAnimateOnScroll();
  const animatedCO2 = useCountUp(totalCO2, 800, 0, isVisible);
  const animatedHomes = useCountUp(homesEstimate, 800, 0, isVisible);
  const animatedTrees = useCountUp(treesEquivalent, 800, 0, isVisible);

  return (
    <div
      ref={ref}
      className={`rounded-xl bg-card shadow-card overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="bg-gradient-hero p-5 text-primary-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <h3 className="font-display text-lg font-semibold">What-If Simulation</h3>
        </div>
        <p className="mt-1 text-sm opacity-80">Select a career and adjust the timeline</p>
      </div>
      <div className="p-5 space-y-4">
        <select
          value={selectedId}
          onChange={e => setSelectedId(Number(e.target.value))}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        >
          {careers.map(c => (
            <option key={c.id} value={c.id}>{c.role} — {c.sector}</option>
          ))}
        </select>

        {/* Years slider */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Career duration</span>
            <span className="font-semibold text-foreground">{yearsWorking} year{yearsWorking !== 1 ? "s" : ""}</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            value={yearsWorking}
            onChange={e => setYearsWorking(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>1 yr</span><span>15 yrs</span><span>30 yrs</span>
          </div>
        </div>

        {/* Impact stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg bg-success/10 p-3 text-center transition-transform hover:scale-105">
            <TrendingUp className="h-5 w-5 mx-auto text-success mb-1" />
            <p className="font-display text-xl font-bold text-foreground tabular-nums">{animatedCO2}</p>
            <p className="text-xs text-muted-foreground">tons CO₂ saved</p>
          </div>
          <div className="rounded-lg bg-info/10 p-3 text-center transition-transform hover:scale-105">
            <Home className="h-5 w-5 mx-auto text-info mb-1" />
            <p className="font-display text-xl font-bold text-foreground tabular-nums">{animatedHomes}</p>
            <p className="text-xs text-muted-foreground">homes powered/yr</p>
          </div>
          <div className="rounded-lg bg-primary/10 p-3 text-center transition-transform hover:scale-105">
            <Leaf className="h-5 w-5 mx-auto text-primary mb-1" />
            <p className="font-display text-xl font-bold text-foreground tabular-nums">{animatedTrees}</p>
            <p className="text-xs text-muted-foreground">trees equivalent</p>
          </div>
        </div>

        <div className="rounded-lg bg-secondary/50 p-4">
          <p className="text-2xl">{sectorIcons[career.sector]}</p>
          <p className="mt-2 font-display text-base font-bold text-foreground">{career.role}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            As a <strong>{career.role}</strong> over <strong>{yearsWorking} years</strong>, you could prevent <strong>{totalCO2} tons</strong> of CO₂ from entering the atmosphere — equivalent to planting <strong>{treesEquivalent.toLocaleString()}</strong> trees.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span>Sector range: {min}–{max}t CO₂/yr</span>
            <span>Growth: {career.growthIndex}</span>
            <span>Salary: {career.avgSalary}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIfSimulation;
