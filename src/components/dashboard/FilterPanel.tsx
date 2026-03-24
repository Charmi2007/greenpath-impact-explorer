import { sectors, impactLevels, skillCategories, type Sector, type ImpactLevel, type SkillCategory } from "@/data/careers";
import { Filter } from "lucide-react";

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
    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
      active
        ? "bg-primary text-primary-foreground shadow-sm"
        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
    }`}
  >
    {label}
  </button>
);

const FilterPanel = ({ selectedSectors, selectedImpact, selectedSkills, onSectorsChange, onImpactChange, onSkillsChange }: FilterPanelProps) => (
  <div className="rounded-xl bg-card p-5 shadow-card">
    <div className="mb-4 flex items-center gap-2 text-foreground">
      <Filter className="h-5 w-5 text-primary" />
      <h3 className="font-display text-lg font-semibold">Filters</h3>
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

export default FilterPanel;
