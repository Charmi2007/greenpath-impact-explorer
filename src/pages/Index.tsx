import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { careers, type Sector, type ImpactLevel, type SkillCategory } from "@/data/careers";
import Navbar from "@/components/Navbar";
import HeroHeader from "@/components/dashboard/HeroHeader";
import KPICards from "@/components/dashboard/KPICards";
import ChartsSection from "@/components/dashboard/ChartsSection";
import Footer from "@/components/dashboard/Footer";
import { ArrowRight, BookOpen, Briefcase, Sparkles } from "lucide-react";

const QuickLinkCard = ({ title, description, icon: Icon, to, delay }: {
  title: string; description: string; icon: React.ElementType; to: string; delay: number;
}) => (
  <Link
    to={to}
    className="group rounded-xl bg-card p-6 shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 hover:border-primary/30 border border-transparent"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center justify-between">
      <div className="rounded-lg bg-primary/10 p-2.5">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
    </div>
    <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">{title}</h3>
    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
  </Link>
);

const Index = () => {
  const filteredCareers = careers;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroHeader />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <KPICards filteredCareers={filteredCareers} />
        <ChartsSection filteredCareers={filteredCareers} />

        {/* Quick navigation cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <QuickLinkCard
            title="Career Directory"
            description="Browse all 30 green careers with filters, sorting, and detailed profiles."
            icon={Briefcase}
            to="/careers"
            delay={0}
          />
          <QuickLinkCard
            title="Case Studies"
            description="Explore real-world projects making a measurable climate impact."
            icon={BookOpen}
            to="/case-studies"
            delay={100}
          />
          <QuickLinkCard
            title="Impact Simulator"
            description="Calculate your potential CO₂ reduction over a full career timeline."
            icon={Sparkles}
            to="/simulator"
            delay={200}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
