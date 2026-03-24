import { caseStudies, sectorIcons } from "@/data/careers";

const CaseStudies = () => (
  <div className="rounded-xl bg-card p-5 shadow-card">
    <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Featured Case Studies</h3>
    <div className="grid gap-4 sm:grid-cols-2">
      {caseStudies.map(cs => (
        <div key={cs.title} className="rounded-lg border border-border bg-muted/30 p-4 transition-shadow hover:shadow-elevated">
          <div className="flex items-start gap-3">
            <span className="text-2xl">{sectorIcons[cs.sector]}</span>
            <div>
              <p className="font-display text-sm font-bold text-foreground">{cs.title}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{cs.sector}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{cs.summary}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CaseStudies;
