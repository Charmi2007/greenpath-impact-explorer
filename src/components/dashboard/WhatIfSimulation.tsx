import { useState } from "react";
import { careers, sectorImpactRange, sectorIcons } from "@/data/careers";
import { Sparkles } from "lucide-react";

const WhatIfSimulation = () => {
  const [selectedId, setSelectedId] = useState(careers[0].id);
  const career = careers.find(c => c.id === selectedId)!;
  const [min, max] = sectorImpactRange[career.sector];
  const homesEstimate = Math.round(career.co2TonsSaved * 1.4);

  return (
    <div className="rounded-xl bg-card shadow-card overflow-hidden">
      <div className="bg-gradient-hero p-5 text-primary-foreground">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <h3 className="font-display text-lg font-semibold">What-If Simulation</h3>
        </div>
        <p className="mt-1 text-sm opacity-80">Select a career to see your potential climate impact</p>
      </div>
      <div className="p-5">
        <select
          value={selectedId}
          onChange={e => setSelectedId(Number(e.target.value))}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {careers.map(c => (
            <option key={c.id} value={c.id}>{c.role} — {c.sector}</option>
          ))}
        </select>

        <div className="mt-5 rounded-lg bg-secondary/50 p-4">
          <p className="text-2xl">{sectorIcons[career.sector]}</p>
          <p className="mt-2 font-display text-base font-bold text-foreground">
            {career.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            As a <strong>{career.role}</strong>, you could help reduce ~<strong>{career.co2TonsSaved} tons</strong> of CO₂ annually,
            power <strong>{homesEstimate} homes</strong>, and support national climate goals.
          </p>
          <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
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
