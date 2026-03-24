import { Leaf, Sun, Car, Recycle, Trees } from "lucide-react";

const HeroHeader = () => (
  <section className="relative overflow-hidden bg-gradient-hero py-16 px-6 text-primary-foreground">
    <div className="absolute inset-0 opacity-10">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-primary-foreground/20" style={{
          width: `${60 + i * 40}px`, height: `${60 + i * 40}px`,
          top: `${10 + i * 12}%`, left: `${5 + i * 15}%`,
        }} />
      ))}
    </div>
    <div className="relative mx-auto max-w-6xl text-center">
      <div className="mb-6 flex items-center justify-center gap-3">
        <Leaf className="h-8 w-8" />
        <span className="font-display text-lg font-semibold tracking-wide uppercase opacity-90">GreenPath</span>
      </div>
      <h1 className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
        Explore Your Path to a<br />Low-Carbon Future
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
        An interactive guide to careers that power a sustainable planet.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm opacity-80">
        {[
          { icon: Sun, label: "Solar" },
          { icon: Car, label: "EV" },
          { icon: Recycle, label: "Recycling" },
          { icon: Trees, label: "Carbon Capture" },
        ].map(({ icon: Icon, label }) => (
          <span key={label} className="flex items-center gap-2">
            <Icon className="h-5 w-5" /> {label}
          </span>
        ))}
      </div>
      <p className="mt-6 font-display text-sm font-medium italic opacity-70">
        "Choose your career, change the climate."
      </p>
    </div>
  </section>
);

export default HeroHeader;
