import { useState } from "react";
import { caseStudies, sectorIcons, type CaseStudy } from "@/data/careers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/dashboard/Footer";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { ChevronRight, MapPin, Calendar, ExternalLink, Tag, ArrowLeft } from "lucide-react";

const CaseStudyCard = ({ cs, onClick, index }: { cs: CaseStudy; onClick: () => void; index: number }) => {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-1 hover:border-primary/40 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="text-3xl transition-transform duration-300 group-hover:scale-125">
          {sectorIcons[cs.sector]}
        </span>
        <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
      </div>
      <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
        {cs.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{cs.sector}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80 line-clamp-3">{cs.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {cs.tags.map(tag => (
          <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{cs.location}</span>
        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{cs.year}</span>
      </div>
    </div>
  );
};

const CaseStudyDetail = ({ cs, onBack }: { cs: CaseStudy; onBack: () => void }) => {
  return (
    <div className="animate-fade-in space-y-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to all case studies
      </button>

      {/* Hero */}
      <div className="rounded-xl bg-gradient-hero p-8 text-primary-foreground">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">{sectorIcons[cs.sector]}</span>
          <span className="rounded-full bg-primary-foreground/20 px-3 py-1 text-sm backdrop-blur-sm">{cs.sector}</span>
        </div>
        <h1 className="font-display text-3xl font-extrabold">{cs.title}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm opacity-90">
          <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{cs.location}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{cs.year}</span>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {cs.keyMetrics.map((m, i) => (
          <div
            key={m.label}
            className="rounded-xl bg-card p-5 shadow-card text-center transition-all duration-300 hover:shadow-elevated hover:scale-[1.03]"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <p className="font-display text-2xl font-bold text-primary">{m.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
          </div>
        ))}
      </div>

      {/* Full description */}
      <div className="rounded-xl bg-card p-6 shadow-card">
        <h2 className="font-display text-xl font-bold text-foreground mb-4">About This Project</h2>
        <p className="text-foreground leading-relaxed">{cs.fullDescription}</p>
      </div>

      {/* Impact & Related */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-success/5 border border-success/20 p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-2">Environmental Impact</h3>
          <p className="text-2xl font-bold text-success">{cs.impact}</p>
        </div>
        <div className="rounded-xl bg-card p-6 shadow-card">
          <h3 className="font-display text-lg font-bold text-foreground mb-3">Related Careers</h3>
          <div className="flex flex-wrap gap-2">
            {cs.relatedCareers.map(career => (
              <span key={career} className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
                {career}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {cs.tags.map(tag => (
          <span key={tag} className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            <Tag className="h-3 w-3" />{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const CaseStudiesPage = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [sectorFilter, setSectorFilter] = useState<string>("All");

  const selectedStudy = caseStudies.find(cs => cs.id === selectedId);
  const sectorOptions = ["All", ...new Set(caseStudies.map(cs => cs.sector))];
  const filtered = sectorFilter === "All" ? caseStudies : caseStudies.filter(cs => cs.sector === sectorFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        {selectedStudy ? (
          <CaseStudyDetail cs={selectedStudy} onBack={() => setSelectedId(null)} />
        ) : (
          <>
            <div>
              <h1 className="font-display text-3xl font-extrabold text-foreground">Case Studies</h1>
              <p className="mt-2 text-muted-foreground">Real-world projects making a measurable impact on our planet. Click any card to explore in depth.</p>
            </div>

            {/* Sector filter tabs */}
            <div className="flex flex-wrap gap-2">
              {sectorOptions.map(s => (
                <button
                  key={s}
                  onClick={() => setSectorFilter(s)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    sectorFilter === s
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {s !== "All" && <span className="mr-1">{sectorIcons[s as keyof typeof sectorIcons]}</span>}
                  {s}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((cs, i) => (
                <CaseStudyCard key={cs.id} cs={cs} index={i} onClick={() => setSelectedId(cs.id)} />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
