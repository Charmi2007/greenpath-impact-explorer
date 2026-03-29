import { useState, useMemo } from "react";
import { careers, sdgInfo, type Career } from "@/data/careers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/dashboard/Footer";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { ChevronRight, GraduationCap, Award, BookOpen, ExternalLink, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const allInterests = [...new Set(careers.flatMap(c => c.skills))].sort();

const CareerPathPage = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const matchedCareers = useMemo(() => {
    if (!selectedSkills.length) return [];
    return careers
      .map(c => ({
        career: c,
        matchCount: c.skills.filter(s => selectedSkills.includes(s)).length,
      }))
      .filter(m => m.matchCount > 0)
      .sort((a, b) => b.matchCount - a.matchCount);
  }, [selectedSkills]);

  const toggleSkill = (s: string) =>
    setSelectedSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-foreground">Career Path Explorer</h1>
          <p className="mt-2 text-muted-foreground">Select skills or interests to discover matching green career paths and upskilling opportunities.</p>
        </div>

        {/* Skill selector */}
        <div className="rounded-xl bg-card p-5 shadow-card">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-display text-lg font-semibold text-foreground">Select Your Skills & Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {allInterests.map(s => (
              <button
                key={s}
                onClick={() => toggleSkill(s)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95 ${
                  selectedSkills.includes(s)
                    ? "bg-primary text-primary-foreground shadow-sm scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:scale-105"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {selectedSkills.length > 0 && (
            <button onClick={() => setSelectedSkills([])} className="mt-3 text-xs font-medium text-primary underline">Clear all</button>
          )}
        </div>

        {/* Results */}
        {selectedSkills.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{matchedCareers.length} career{matchedCareers.length !== 1 ? "s" : ""} match your selection</p>
            {matchedCareers.map(({ career, matchCount }) => (
              <CareerPathCard
                key={career.id}
                career={career}
                matchCount={matchCount}
                selectedSkills={selectedSkills}
                expanded={expandedId === career.id}
                onToggle={() => setExpandedId(expandedId === career.id ? null : career.id)}
              />
            ))}
          </div>
        )}

        {selectedSkills.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-12 text-center">
            <Sparkles className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
            <p className="text-lg font-semibold text-foreground">Pick skills above to explore career paths</p>
            <p className="text-sm text-muted-foreground mt-1">We'll match you with green careers and show upskilling opportunities</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

const CareerPathCard = ({ career, matchCount, selectedSkills, expanded, onToggle }: {
  career: Career; matchCount: number; selectedSkills: string[]; expanded: boolean; onToggle: () => void;
}) => {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      className={`rounded-xl bg-card shadow-card overflow-hidden transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div onClick={onToggle} className="p-5 cursor-pointer hover:bg-muted/30 transition-colors">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-display text-lg font-bold text-foreground">{career.role}</h3>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{matchCount}/{selectedSkills.length} skills match</span>
              {/* SDG badges */}
              <div className="flex gap-1">
                {career.sdgs.map(sdg => (
                  <Tooltip key={sdg}>
                    <TooltipTrigger>
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold bg-secondary text-secondary-foreground cursor-help transition-transform hover:scale-110">
                        {sdg}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-semibold">SDG {sdg}</p>
                      <p className="text-xs">{sdgInfo[sdg].title}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{career.sector} • {career.avgSalary} • Growth: {career.growthIndex}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {career.skills.map(s => (
                <span key={s} className={`rounded px-2 py-0.5 text-xs font-medium transition-colors ${
                  selectedSkills.includes(s)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}>{s}</span>
              ))}
            </div>
          </div>
          <ChevronRight className={`h-5 w-5 text-muted-foreground transition-transform duration-200 mt-1 flex-shrink-0 ${expanded ? "rotate-90" : ""}`} />
        </div>
      </div>

      {expanded && (
        <div className="border-t border-border px-5 pb-5 pt-4 space-y-5 animate-fade-in">
          {/* Responsibilities */}
          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              <BookOpen className="h-4 w-4" /> Responsibilities
            </h4>
            <ul className="space-y-1">
              {career.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary mt-1">•</span>{r}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Education */}
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                <GraduationCap className="h-4 w-4" /> Education Paths
              </h4>
              <ul className="space-y-1">
                {career.education.map((e, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-accent mt-1">▸</span>{e}
                  </li>
                ))}
              </ul>
            </div>
            {/* Certifications */}
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                <Award className="h-4 w-4" /> Certifications
              </h4>
              <ul className="space-y-1">
                {career.certifications.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-warning mt-1">★</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Upskilling */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">🎓 Upskilling Opportunities</h4>
            <div className="flex flex-wrap gap-2">
              {career.upskillLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {link.title} <span className="text-xs opacity-70">({link.provider})</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPathPage;
