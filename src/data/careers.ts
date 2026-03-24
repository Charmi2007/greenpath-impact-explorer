export type ImpactLevel = "High" | "Medium-High" | "Medium" | "Low";
export type Sector = "Renewable Energy" | "Sustainable Transport" | "Circular Economy" | "Carbon Management";
export type SkillCategory = "Technical" | "Management" | "Analytical" | "Creative";

export interface Career {
  id: number;
  role: string;
  sector: Sector;
  skills: string[];
  skillCategories: SkillCategory[];
  impactLevel: ImpactLevel;
  co2TonsSaved: number;
  avgSalary: string;
  growthIndex: string;
  caseStudy: string;
  caseStudyDesc: string;
  source: string;
}

export const careers: Career[] = [
  { id: 1, role: "Solar Engineer", sector: "Renewable Energy", skills: ["PV Design", "Electrical Systems", "Grid Integration"], skillCategories: ["Technical"], impactLevel: "High", co2TonsSaved: 180, avgSalary: "$60k", growthIndex: "1.3x", caseStudy: "Solar Village Initiative", caseStudyDesc: "Electrified 50+ villages in Rajasthan, reducing diesel dependency and saving 230 tons CO₂/year.", source: "IEA" },
  { id: 2, role: "Wind Turbine Technician", sector: "Renewable Energy", skills: ["Mechanical Repair", "Safety Systems", "Turbine Diagnostics"], skillCategories: ["Technical"], impactLevel: "High", co2TonsSaved: 200, avgSalary: "$55k", growthIndex: "1.5x", caseStudy: "Offshore Wind Expansion", caseStudyDesc: "Maintained fleet of 120 offshore turbines powering 80,000 homes.", source: "IRENA" },
  { id: 3, role: "Energy Storage Specialist", sector: "Renewable Energy", skills: ["Battery Chemistry", "Energy Modeling", "Systems Integration"], skillCategories: ["Technical", "Analytical"], impactLevel: "High", co2TonsSaved: 160, avgSalary: "$72k", growthIndex: "1.8x", caseStudy: "Grid Battery Pilot", caseStudyDesc: "Deployed 50MWh battery storage to stabilize renewable grid supply.", source: "DOE" },
  { id: 4, role: "Renewable Energy Analyst", sector: "Renewable Energy", skills: ["Data Analytics", "Energy Modeling", "Financial Analysis"], skillCategories: ["Analytical"], impactLevel: "Medium-High", co2TonsSaved: 100, avgSalary: "$65k", growthIndex: "1.4x", caseStudy: "National Grid Study", caseStudyDesc: "Modeled transition pathways for 100% renewable electricity by 2040.", source: "NREL" },
  { id: 5, role: "Green Building Architect", sector: "Renewable Energy", skills: ["Sustainable Design", "LEED Certification", "BIM"], skillCategories: ["Technical", "Creative"], impactLevel: "Medium-High", co2TonsSaved: 120, avgSalary: "$75k", growthIndex: "1.2x", caseStudy: "Net-Zero Campus", caseStudyDesc: "Designed university campus achieving net-zero energy consumption.", source: "USGBC" },
  { id: 6, role: "Solar Project Manager", sector: "Renewable Energy", skills: ["Project Planning", "Stakeholder Management", "Procurement"], skillCategories: ["Management"], impactLevel: "High", co2TonsSaved: 190, avgSalary: "$80k", growthIndex: "1.3x", caseStudy: "100MW Solar Farm", caseStudyDesc: "Led construction of solar farm powering 30,000 homes.", source: "Solar Power Europe" },
  { id: 7, role: "EV Designer", sector: "Sustainable Transport", skills: ["Battery Tech", "CAD", "Vehicle Dynamics"], skillCategories: ["Technical", "Creative"], impactLevel: "Medium-High", co2TonsSaved: 120, avgSalary: "$55k", growthIndex: "1.4x", caseStudy: "Electric Bus Fleet Pilot", caseStudyDesc: "Designed e-bus fleet reducing urban carbon intensity by 15% in Mumbai.", source: "UN" },
  { id: 8, role: "EV Charging Infrastructure Engineer", sector: "Sustainable Transport", skills: ["Power Electronics", "Network Planning", "Smart Grid"], skillCategories: ["Technical"], impactLevel: "Medium-High", co2TonsSaved: 90, avgSalary: "$68k", growthIndex: "1.6x", caseStudy: "Highway Charging Network", caseStudyDesc: "Built 500-station fast-charging corridor enabling long-range EV travel.", source: "IEA" },
  { id: 9, role: "Sustainable Logistics Manager", sector: "Sustainable Transport", skills: ["Supply Chain", "Route Optimization", "Fleet Management"], skillCategories: ["Management", "Analytical"], impactLevel: "Medium", co2TonsSaved: 75, avgSalary: "$62k", growthIndex: "1.2x", caseStudy: "Green Last-Mile Delivery", caseStudyDesc: "Transitioned urban delivery fleet to electric vehicles, cutting emissions 40%.", source: "WEF" },
  { id: 10, role: "Urban Mobility Planner", sector: "Sustainable Transport", skills: ["Urban Planning", "Data Analysis", "Public Policy"], skillCategories: ["Analytical", "Creative"], impactLevel: "Medium-High", co2TonsSaved: 110, avgSalary: "$70k", growthIndex: "1.3x", caseStudy: "Bike-Transit Integration", caseStudyDesc: "Designed integrated cycling-transit system reducing car trips by 25%.", source: "ITDP" },
  { id: 11, role: "Hydrogen Fuel Cell Engineer", sector: "Sustainable Transport", skills: ["Fuel Cell Tech", "Thermodynamics", "Prototyping"], skillCategories: ["Technical"], impactLevel: "High", co2TonsSaved: 150, avgSalary: "$78k", growthIndex: "1.7x", caseStudy: "Hydrogen Truck Fleet", caseStudyDesc: "Developed fuel cell system for long-haul trucks, eliminating diesel use.", source: "Hydrogen Council" },
  { id: 12, role: "Sustainable Aviation Researcher", sector: "Sustainable Transport", skills: ["Aerospace Engineering", "Biofuels", "Emissions Modeling"], skillCategories: ["Technical", "Analytical"], impactLevel: "Medium", co2TonsSaved: 80, avgSalary: "$82k", growthIndex: "1.1x", caseStudy: "SAF Blend Testing", caseStudyDesc: "Tested sustainable aviation fuel blends reducing flight emissions 50%.", source: "ICAO" },
  { id: 13, role: "Waste Circularity Manager", sector: "Circular Economy", skills: ["Supply Chain", "Lifecycle Analysis", "Waste Management"], skillCategories: ["Management", "Analytical"], impactLevel: "Medium", co2TonsSaved: 60, avgSalary: "$58k", growthIndex: "1.3x", caseStudy: "Recycling Startup Hub", caseStudyDesc: "Launched circular economy hub diverting 10,000 tons of waste from landfills annually.", source: "Ellen MacArthur Foundation" },
  { id: 14, role: "Circular Product Designer", sector: "Circular Economy", skills: ["Product Design", "Material Science", "Cradle-to-Cradle"], skillCategories: ["Creative", "Technical"], impactLevel: "Medium", co2TonsSaved: 50, avgSalary: "$52k", growthIndex: "1.4x", caseStudy: "Modular Electronics", caseStudyDesc: "Designed modular smartphone reducing e-waste by 70%.", source: "C2C Institute" },
  { id: 15, role: "Textile Sustainability Specialist", sector: "Circular Economy", skills: ["Textile Science", "Sustainability Reporting", "Supply Chain"], skillCategories: ["Technical", "Management"], impactLevel: "Medium", co2TonsSaved: 45, avgSalary: "$50k", growthIndex: "1.2x", caseStudy: "Circular Fashion Startups", caseStudyDesc: "Diverted 5,000 tons of textile waste from landfills through upcycling programs.", source: "Fashion Revolution" },
  { id: 16, role: "Industrial Symbiosis Coordinator", sector: "Circular Economy", skills: ["Industrial Ecology", "Stakeholder Engagement", "Process Optimization"], skillCategories: ["Management", "Analytical"], impactLevel: "Medium-High", co2TonsSaved: 70, avgSalary: "$63k", growthIndex: "1.3x", caseStudy: "Eco-Industrial Park", caseStudyDesc: "Connected 12 factories to share waste streams, saving 8,000 tons CO₂/year.", source: "UNIDO" },
  { id: 17, role: "Biomaterials Researcher", sector: "Circular Economy", skills: ["Bioengineering", "Lab Research", "Material Testing"], skillCategories: ["Technical", "Analytical"], impactLevel: "Medium", co2TonsSaved: 55, avgSalary: "$60k", growthIndex: "1.5x", caseStudy: "Algae-Based Packaging", caseStudyDesc: "Developed biodegradable packaging from seaweed replacing 2M plastic units.", source: "Nature" },
  { id: 18, role: "Remanufacturing Engineer", sector: "Circular Economy", skills: ["Reverse Engineering", "Quality Control", "Manufacturing"], skillCategories: ["Technical"], impactLevel: "Medium", co2TonsSaved: 65, avgSalary: "$57k", growthIndex: "1.2x", caseStudy: "Auto Parts Remanufacturing", caseStudyDesc: "Remanufactured 500K auto parts saving 85% of original manufacturing energy.", source: "ReMaTec" },
  { id: 19, role: "Carbon Analyst", sector: "Carbon Management", skills: ["Data Analytics", "Carbon Accounting", "Reporting"], skillCategories: ["Analytical"], impactLevel: "High", co2TonsSaved: 150, avgSalary: "$65k", growthIndex: "1.5x", caseStudy: "City Carbon Dashboard", caseStudyDesc: "Built real-time carbon monitoring dashboard improving policy transparency.", source: "CDP" },
  { id: 20, role: "Carbon Capture Engineer", sector: "Carbon Management", skills: ["Chemical Engineering", "Process Design", "CCS Tech"], skillCategories: ["Technical"], impactLevel: "High", co2TonsSaved: 250, avgSalary: "$85k", growthIndex: "1.6x", caseStudy: "Direct Air Capture Plant", caseStudyDesc: "Engineered DAC facility capturing 4,000 tons CO₂/year from atmosphere.", source: "IEA" },
  { id: 21, role: "Climate Policy Advisor", sector: "Carbon Management", skills: ["Policy Analysis", "Climate Science", "Stakeholder Engagement"], skillCategories: ["Analytical", "Management"], impactLevel: "High", co2TonsSaved: 200, avgSalary: "$78k", growthIndex: "1.3x", caseStudy: "National Carbon Budget", caseStudyDesc: "Advised government on carbon budget framework reducing emissions 20% in 5 years.", source: "UNFCCC" },
  { id: 22, role: "ESG Reporting Specialist", sector: "Carbon Management", skills: ["Financial Analysis", "Sustainability Reporting", "Compliance"], skillCategories: ["Analytical", "Management"], impactLevel: "Medium-High", co2TonsSaved: 90, avgSalary: "$70k", growthIndex: "1.4x", caseStudy: "Corporate ESG Framework", caseStudyDesc: "Developed ESG reporting standard adopted by 50+ companies.", source: "GRI" },
  { id: 23, role: "Forest Carbon Project Manager", sector: "Carbon Management", skills: ["Forestry", "Carbon Credits", "GIS Mapping"], skillCategories: ["Management", "Technical"], impactLevel: "High", co2TonsSaved: 180, avgSalary: "$62k", growthIndex: "1.2x", caseStudy: "Reforestation Initiative", caseStudyDesc: "Managed 10,000-hectare reforestation project sequestering 50K tons CO₂.", source: "Verra" },
  { id: 24, role: "Carbon Market Trader", sector: "Carbon Management", skills: ["Financial Markets", "Carbon Pricing", "Risk Analysis"], skillCategories: ["Analytical"], impactLevel: "Medium-High", co2TonsSaved: 100, avgSalary: "$90k", growthIndex: "1.5x", caseStudy: "Voluntary Carbon Market", caseStudyDesc: "Facilitated $50M in carbon credit trades accelerating offset projects.", source: "IETA" },
];

export const sectors: Sector[] = ["Renewable Energy", "Sustainable Transport", "Circular Economy", "Carbon Management"];
export const impactLevels: ImpactLevel[] = ["High", "Medium-High", "Medium", "Low"];
export const skillCategories: SkillCategory[] = ["Technical", "Management", "Analytical", "Creative"];

export const sectorImpactRange: Record<Sector, [number, number]> = {
  "Renewable Energy": [100, 250],
  "Sustainable Transport": [70, 150],
  "Circular Economy": [30, 80],
  "Carbon Management": [120, 200],
};

export const sectorIcons: Record<Sector, string> = {
  "Renewable Energy": "🌍",
  "Sustainable Transport": "🚗",
  "Circular Economy": "♻️",
  "Carbon Management": "🌳",
};

export const caseStudies = [
  { title: "Solar Villages (Rajasthan, India)", sector: "Renewable Energy" as Sector, summary: "Electrified 50+ villages, reduced diesel dependency and saved 230 tons CO₂/year." },
  { title: "E-Bus Fleet (Mumbai)", sector: "Sustainable Transport" as Sector, summary: "Reduced urban carbon intensity by 15% with electric bus deployment." },
  { title: "Circular Fashion Startups", sector: "Circular Economy" as Sector, summary: "Diverted textile waste from landfills through innovative upcycling programs." },
  { title: "Urban Carbon Tracking Program", sector: "Carbon Management" as Sector, summary: "Improved policy transparency & offset planning with real-time monitoring." },
];
