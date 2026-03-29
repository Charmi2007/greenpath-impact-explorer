import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/dashboard/Footer";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { Star, Send, Download, MessageSquare, BarChart3, Users } from "lucide-react";

interface FeedbackEntry {
  id: number;
  name: string;
  role: "Student" | "Professional" | "Educator" | "Other";
  region: string;
  careerMappingRating: number;
  impactVisualizationRating: number;
  overallRating: number;
  suggestions: string;
  timestamp: string;
}

const StarRating = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          className="transition-transform hover:scale-125 active:scale-95"
        >
          <Star className={`h-6 w-6 transition-colors ${(hover || value) >= n ? "fill-warning text-warning" : "text-muted-foreground"}`} />
        </button>
      ))}
    </div>
  );
};

const FeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackEntry[]>([]);
  const [form, setForm] = useState({
    name: "", role: "Student" as FeedbackEntry["role"], region: "",
    careerMappingRating: 0, impactVisualizationRating: 0, overallRating: 0, suggestions: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const stats = useMemo(() => {
    if (!feedbacks.length) return null;
    const avg = (key: keyof Pick<FeedbackEntry, "careerMappingRating" | "impactVisualizationRating" | "overallRating">) =>
      (feedbacks.reduce((s, f) => s + f[key], 0) / feedbacks.length).toFixed(1);
    return {
      total: feedbacks.length,
      avgOverall: avg("overallRating"),
      avgCareer: avg("careerMappingRating"),
      avgViz: avg("impactVisualizationRating"),
      topSuggestions: feedbacks.filter(f => f.suggestions.trim()).map(f => f.suggestions),
    };
  }, [feedbacks]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.overallRating) return;
    const entry: FeedbackEntry = {
      ...form,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    };
    setFeedbacks(prev => [entry, ...prev]);
    setSubmitted(true);
    setForm({ name: "", role: "Student", region: "", careerMappingRating: 0, impactVisualizationRating: 0, overallRating: 0, suggestions: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const exportCSV = () => {
    if (!feedbacks.length) return;
    const headers = ["Name", "Role", "Region", "Career Mapping Rating", "Impact Viz Rating", "Overall Rating", "Suggestions", "Timestamp"];
    const rows = feedbacks.map(f => [f.name, f.role, f.region, f.careerMappingRating, f.impactVisualizationRating, f.overallRating, `"${f.suggestions.replace(/"/g, '""')}"`, f.timestamp]);
    const csv = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "greenpath_feedback.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const { ref: formRef, isVisible: formVisible } = useAnimateOnScroll();
  const { ref: statsRef, isVisible: statsVisible } = useAnimateOnScroll();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-foreground">Feedback & Ratings</h1>
          <p className="mt-2 text-muted-foreground">Help us improve GreenPath — rate features, suggest new careers, and share your experience.</p>
        </div>

        {/* Summary cards */}
        {stats && (
          <div
            ref={statsRef}
            className={`grid grid-cols-2 gap-4 lg:grid-cols-4 transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="rounded-xl bg-card p-5 shadow-card">
              <div className="flex items-center gap-2 text-muted-foreground"><MessageSquare className="h-5 w-5 text-primary" /><span className="text-sm font-medium">Total Feedback</span></div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">{stats.total}</p>
            </div>
            <div className="rounded-xl bg-card p-5 shadow-card">
              <div className="flex items-center gap-2 text-muted-foreground"><Star className="h-5 w-5 fill-warning text-warning" /><span className="text-sm font-medium">Avg Rating</span></div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">{stats.avgOverall} <span className="text-lg text-muted-foreground">/ 5</span></p>
            </div>
            <div className="rounded-xl bg-card p-5 shadow-card">
              <div className="flex items-center gap-2 text-muted-foreground"><BarChart3 className="h-5 w-5 text-accent" /><span className="text-sm font-medium">Career Mapping</span></div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">{stats.avgCareer} <span className="text-lg text-muted-foreground">/ 5</span></p>
            </div>
            <div className="rounded-xl bg-card p-5 shadow-card">
              <div className="flex items-center gap-2 text-muted-foreground"><Users className="h-5 w-5 text-info" /><span className="text-sm font-medium">Suggestions</span></div>
              <p className="mt-2 font-display text-3xl font-bold text-foreground">{stats.topSuggestions.length}</p>
            </div>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Form */}
          <div
            ref={formRef}
            className={`rounded-xl bg-card p-6 shadow-card transition-all duration-700 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-5">Share Your Feedback</h3>
            {submitted && (
              <div className="mb-4 rounded-lg bg-success/10 p-3 text-sm font-medium text-success animate-fade-in">
                ✅ Thank you for your feedback!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                  required
                  maxLength={100}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">I am a...</label>
                  <select
                    value={form.role}
                    onChange={e => setForm(f => ({ ...f, role: e.target.value as FeedbackEntry["role"] }))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>Student</option>
                    <option>Professional</option>
                    <option>Educator</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Region / College</label>
                  <input
                    value={form.region}
                    onChange={e => setForm(f => ({ ...f, region: e.target.value }))}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="e.g., Mumbai, India"
                    maxLength={100}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">How useful was the career mapping?</label>
                <StarRating value={form.careerMappingRating} onChange={v => setForm(f => ({ ...f, careerMappingRating: v }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Was the impact visualization clear?</label>
                <StarRating value={form.impactVisualizationRating} onChange={v => setForm(f => ({ ...f, impactVisualizationRating: v }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Overall experience</label>
                <StarRating value={form.overallRating} onChange={v => setForm(f => ({ ...f, overallRating: v }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Suggestions (careers/skills to add?)</label>
                <textarea
                  value={form.suggestions}
                  onChange={e => setForm(f => ({ ...f, suggestions: e.target.value }))}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="What careers or skills should we add? Any other suggestions?"
                  maxLength={1000}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-95"
              >
                <Send className="h-4 w-4" /> Submit Feedback
              </button>
            </form>
          </div>

          {/* Recent feedback & export */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-foreground">Recent Feedback</h3>
              {feedbacks.length > 0 && (
                <button
                  onClick={exportCSV}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="h-4 w-4" /> Export CSV
                </button>
              )}
            </div>
            {feedbacks.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-8 text-center">
                <MessageSquare className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">No feedback yet — be the first!</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {feedbacks.map(f => (
                  <div key={f.id} className="rounded-xl bg-card p-4 shadow-card animate-fade-in">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-foreground">{f.name}</p>
                        <p className="text-xs text-muted-foreground">{f.role} • {f.region || "—"}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(n => (
                          <Star key={n} className={`h-4 w-4 ${f.overallRating >= n ? "fill-warning text-warning" : "text-muted-foreground"}`} />
                        ))}
                      </div>
                    </div>
                    {f.suggestions && <p className="mt-2 text-sm text-foreground leading-relaxed">{f.suggestions}</p>}
                    <p className="mt-2 text-xs text-muted-foreground">{new Date(f.timestamp).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
