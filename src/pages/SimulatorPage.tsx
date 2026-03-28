import { useState, useMemo } from "react";
import { careers } from "@/data/careers";
import Navbar from "@/components/Navbar";
import WhatIfSimulation from "@/components/dashboard/WhatIfSimulation";
import InsightPanel from "@/components/dashboard/InsightPanel";
import Footer from "@/components/dashboard/Footer";

const SimulatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-foreground">Career Impact Simulator</h1>
          <p className="mt-2 text-muted-foreground">Select a green career, adjust your timeline, and see your potential environmental contribution.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <WhatIfSimulation />
          <InsightPanel filteredCareers={careers} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SimulatorPage;
