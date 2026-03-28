import { useState, useMemo } from "react";
import { careers, type Sector, type ImpactLevel, type SkillCategory } from "@/data/careers";
import Navbar from "@/components/Navbar";
import FilterPanel from "@/components/dashboard/FilterPanel";
import CareerTable from "@/components/dashboard/CareerTable";
import KPICards from "@/components/dashboard/KPICards";
import Footer from "@/components/dashboard/Footer";

const CareersPage = () => {
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
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-foreground">Career Directory</h1>
          <p className="mt-2 text-muted-foreground">Explore {careers.length} green careers across {4} sectors. Filter, sort, and discover your sustainable path.</p>
        </div>
        <KPICards filteredCareers={filteredCareers} />
        <FilterPanel
          selectedSectors={selectedSectors}
          selectedImpact={selectedImpact}
          selectedSkills={selectedSkills}
          onSectorsChange={setSelectedSectors}
          onImpactChange={setSelectedImpact}
          onSkillsChange={setSelectedSkills}
        />
        <CareerTable careers={filteredCareers} />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
