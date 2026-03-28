import { useEffect, useState } from "react";
import { Leaf, Sun, Car, Recycle, Trees } from "lucide-react";

const floatingItems = [
  { icon: Sun, label: "Solar", delay: 0 },
  { icon: Car, label: "EV", delay: 0.5 },
  { icon: Recycle, label: "Recycling", delay: 1 },
  { icon: Trees, label: "Carbon Capture", delay: 1.5 },
];

const HeroHeader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 px-6 text-primary-foreground">
      {/* Animated background circles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-foreground/20"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              top: `${10 + i * 12}%`,
              left: `${5 + i * 15}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl text-center">
        <div
          className="mb-6 flex items-center justify-center gap-3 transition-all duration-700"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(-20px)" }}
        >
          <Leaf className="h-8 w-8 animate-pulse" />
          <span className="font-display text-lg font-semibold tracking-wide uppercase opacity-90">GreenPath</span>
        </div>

        <h1
          className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl transition-all duration-1000"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(30px)" }}
        >
          Explore Your Path to a<br />Low-Carbon Future
        </h1>

        <p
          className="mx-auto mt-4 max-w-2xl text-lg opacity-90 transition-all duration-1000 delay-300"
          style={{ opacity: loaded ? 0.9 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)" }}
        >
          An interactive guide to careers that power a sustainable planet.
        </p>

        {/* Animated floating icons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {floatingItems.map(({ icon: Icon, label, delay }) => (
            <button
              key={label}
              className="group flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/25 hover:scale-110 cursor-pointer"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease ${0.5 + delay}s`,
              }}
            >
              <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <p
          className="mt-6 font-display text-sm font-medium italic transition-all duration-1000 delay-700"
          style={{ opacity: loaded ? 0.7 : 0 }}
        >
          "Choose your career, change the climate."
        </p>
      </div>
    </section>
  );
};

export default HeroHeader;
