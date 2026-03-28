import { useState } from "react";
import { caseStudies, sectorIcons } from "@/data/careers";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { ChevronRight } from "lucide-react";

const CaseStudies = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      className={`rounded-xl bg-card p-5 shadow-card transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <h3 className="mb-4 font-display text-lg font-semibold text-foreground">Featured Case Studies</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {caseStudies.map((cs, i) => (
          <div
            key={cs.title}
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            className={`rounded-lg border p-4 cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-0.5 ${
              activeIndex === i
                ? "border-primary bg-primary/5 shadow-elevated"
                : "border-border bg-muted/30"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              <span className={`text-2xl transition-transform duration-300 ${activeIndex === i ? "scale-125" : ""}`}>
                {sectorIcons[cs.sector]}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-bold text-foreground">{cs.title}</p>
                  <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${activeIndex === i ? "rotate-90" : ""}`} />
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{cs.sector}</p>
                <p className={`mt-2 text-sm leading-relaxed text-foreground transition-all duration-300 ${
                  activeIndex === i ? "opacity-100 max-h-40" : "opacity-70 max-h-10 overflow-hidden"
                }`}>
                  {cs.summary}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
