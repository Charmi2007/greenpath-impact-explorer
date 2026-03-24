import { useState, useMemo } from "react";
import { careers, type Sector, type ImpactLevel, type SkillCategory } from "@/data/careers";
import HeroHeader from "@/components/dashboard/HeroHeader";
import KPICards from "@/components/dashboard/KPICards";
import FilterPanel from "@/components/dashboard/FilterPanel";
import ChartsSection from "@/components/dashboard/ChartsSection";
import CareerTable from "@/components/dashboard/CareerTable";
import WhatIfSimulation from "@/components/dashboard/WhatIfSimulation";
import CaseStudies from "@/components/dashboard/CaseStudies";
import InsightPanel from "@/components/dashboard/InsightPanel";
import Footer from "@/components/dashboard/Footer";

const Index = () => {
  const [selectedSectors, setSelectedSectors] = useState<Sector[]>([]);
  const [selectedImpact, setSelectedImpact] = useState<ImpactLevel[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<SkillCategory[]>([]);

  const filteredCareers = useMemo(() => {
    return careers.filter(c => {
      if (selectedSectors.length && !selectedSectors.includes(c.sector)) return false;
      if (selectedImpact.length && !selectedImpact.includes(c.impactLevel)) return false;
      if (selectedSkills.length && !selectedSkills.some(s => c.skillCategories.includes(s))) return false;
      return true;
    });
  }, [selectedSectors, selectedImpact, selectedSkills]);

  return (
    <div className="min-h-screen bg-background">
      <HeroHeader />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <KPICards filteredCareers={filteredCareers} />
        <FilterPanel
          selectedSectors={selectedSectors}
          selectedImpact={selectedImpact}
          selectedSkills={selectedSkills}
          onSectorsChange={setSelectedSectors}
          onImpactChange={setSelectedImpact}
          onSkillsChange={setSelectedSkills}
        />
        <ChartsSection filteredCareers={filteredCareers} />
        <CareerTable careers={filteredCareers} />
        <div className="grid gap-6 lg:grid-cols-2">
          <WhatIfSimulation />
          <InsightPanel filteredCareers={filteredCareers} />
        </div>
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
