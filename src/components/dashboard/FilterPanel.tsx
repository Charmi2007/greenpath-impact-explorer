import { sectors, impactLevels, skillCategories, type Sector, type ImpactLevel, type SkillCategory } from "@/data/careers";
import { Filter, X } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";

interface FilterPanelProps {
  selectedSectors: Sector[];
  selectedImpact: ImpactLevel[];
  selectedSkills: SkillCategory[];
  onSectorsChange: (v: Sector[]) => void;
  onImpactChange: (v: ImpactLevel[]) => void;
  onSkillsChange: (v: SkillCategory[]) => void;
}

const toggle = <T extends string>(arr: T[], val: T): T[] =>
  arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val];

const Chip = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95 ${
      active
        ? "bg-primary text-primary-foreground shadow-sm scale-105"
        : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105"
    }`}
  >
    {label}
    {active && <X className="inline-block ml-1 h-3 w-3" />}
  </button>
);

const FilterPanel = ({ selectedSectors, selectedImpact, selectedSkills, onSectorsChange, onImpactChange, onSkillsChange }: FilterPanelProps) => {
  const { ref, isVisible } = useAnimateOnScroll();
  const totalFilters = selectedSectors.length + selectedImpact.length + selectedSkills.length;

  const clearAll = () => {
    onSectorsChange([]);
    onImpactChange([]);
    onSkillsChange([]);
  };

  return (
    <div
      ref={ref}
      className={`rounded-xl bg-card p-5 shadow-card transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-foreground">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="font-display text-lg font-semibold">Filters</h3>
          {totalFilters > 0 && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-bold text-primary-foreground animate-scale-in">
              {totalFilters}
            </span>
          )}
        </div>
        {totalFilters > 0 && (
          <button
            onClick={clearAll}
            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors underline"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="space-y-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sector</p>
          <div className="flex flex-wrap gap-2">
            {sectors.map(s => (
              <Chip key={s} label={s} active={selectedSectors.includes(s)} onClick={() => onSectorsChange(toggle(selectedSectors, s))} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Impact Level</p>
          <div className="flex flex-wrap gap-2">
            {impactLevels.map(l => (
              <Chip key={l} label={l} active={selectedImpact.includes(l)} onClick={() => onImpactChange(toggle(selectedImpact, l))} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skillCategories.map(s => (
              <Chip key={s} label={s} active={selectedSkills.includes(s)} onClick={() => onSkillsChange(toggle(selectedSkills, s))} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
