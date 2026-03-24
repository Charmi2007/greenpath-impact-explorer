import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card px-6 py-8">
    <div className="mx-auto max-w-6xl text-center">
      <p className="text-sm font-semibold text-primary">🌱 Join our next Green Careers Workshop — Discover your path.</p>
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Leaf className="h-3 w-3" />
        <span>Developed by Team GreenPath | Student Sustainability Initiative 2024</span>
      </div>
    </div>
  </footer>
);

export default Footer;
