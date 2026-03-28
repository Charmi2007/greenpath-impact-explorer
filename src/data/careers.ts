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
  { id: 7, role: "Geothermal Energy Engineer", sector: "Renewable Energy", skills: ["Geology", "Drilling Tech", "Heat Exchange Systems"], skillCategories: ["Technical"], impactLevel: "High", co2TonsSaved: 170, avgSalary: "$77k", growthIndex: "1.4x", caseStudy: "Iceland Geothermal Plant", caseStudyDesc: "Engineered geothermal plant providing 24/7 clean heat and electricity to 20,000 residents.", source: "GEA" },
  { id: 8, role: "EV Designer", sector: "Sustainable Transport", skills: ["Battery Tech", "CAD", "Vehicle Dynamics"], skillCategories: ["Technical", "Creative"], impactLevel: "Medium-High", co2TonsSaved: 120, avgSalary: "$55k", growthIndex: "1.4x", caseStudy: "Electric Bus Fleet Pilot", caseStudyDesc: "Designed e-bus fleet reducing urban carbon intensity by 15% in Mumbai.", source: "UN" },
  { id: 9, role: "EV Charging Infrastructure Engineer", sector: "Sustainable Transport", skills: ["Power Electronics", "Network Planning", "Smart Grid"], skillCategories: ["Technical"], impactLevel: "Medium-High", co2TonsSaved: 90, avgSalary: "$68k", growthIndex: "1.6x", caseStudy: "Highway Charging Network", caseStudyDesc: "Built 500-station fast-charging corridor enabling long-range EV travel.", source: "IEA" },
  { id: 10, role: "Sustainable Logistics Manager", sector: "Sustainable Transport", skills: ["Supply Chain", "Route Optimization", "Fleet Management"], skillCategories: ["Management", "Analytical"], impactLevel: "Medium", co2TonsSaved: 75, avgSalary: "$62k", growthIndex: "1.2x", caseStudy: "Green Last-Mile Delivery", caseStudyDesc: "Transitioned urban delivery fleet to electric vehicles, cutting emissions 40%.", source: "WEF" },
  { id: 11, role: "Urban Mobility Planner", sector: "Sustainable Transport", skills: ["Urban Planning", "Data Analysis", "Public Policy"], skillCategories: ["Analytical", "Creative"], impactLevel: "Medium-High", co2TonsSaved: 110, avgSalary: "$70k", growthIndex: "1.3x", caseStudy: "Bike-Transit Integration", caseStudyDesc: "Designed integrated cycling-transit system reducing car trips by 25%.", source: "ITDP" },
  { id: 12, role: "Hydrogen Fuel Cell Engineer", sector: "Sustainable Transport", skills: ["Fuel Cell Tech", "Thermodynamics", "Prototyping"], skillCategories: ["Technical"], impactLevel: "High", co2TonsSaved: 150, avgSalary: "$78k", growthIndex: "1.7x", caseStudy: "Hydrogen Truck Fleet", caseStudyDesc: "Developed fuel cell system for long-haul trucks, eliminating diesel use.", source: "Hydrogen Council" },
  { id: 13, role: "Sustainable Aviation Researcher", sector: "Sustainable Transport", skills: ["Aerospace Engineering", "Biofuels", "Emissions Modeling"], skillCategories: ["Technical", "Analytical"], impactLevel: "Medium", co2TonsSaved: 80, avgSalary: "$82k", growthIndex: "1.1x", caseStudy: "SAF Blend Testing", caseStudyDesc: "Tested sustainable aviation fuel blends reducing flight emissions 50%.", source: "ICAO" },
  { id: 14, role: "Railway Electrification Engineer", sector: "Sustainable Transport", skills: ["Electrical Engineering", "Rail Systems", "Project Management"], skillCategories: ["Technical", "Management"], impactLevel: "High", co2TonsSaved: 140, avgSalary: "$73k", growthIndex: "1.3x", caseStudy: "National Rail Electrification", caseStudyDesc: "Electrified 800km of diesel rail corridor, eliminating 120,000 tons CO₂/year.", source: "UIC" },
  { id: 15, role: "Waste Circularity Manager", sector: "Circular Economy", skills: ["Supply Chain", "Lifecycle Analysis", "Waste Management"], skillCategories: ["Management", "Analytical"], impactLevel: "Medium", co2TonsSaved: 60, avgSalary: "$58k", growthIndex: "1.3x", caseStudy: "Recycling Startup Hub", caseStudyDesc: "Launched circular economy hub diverting 10,000 tons of waste from landfills annually.", source: "Ellen MacArthur Foundation" },
  { id: 16, role: "Circular Product Designer", sector: "Circular Economy", skills: ["Product Design", "Material Science", "Cradle-to-Cradle"], skillCategories: ["Creative", "Technical"], impactLevel: "Medium", co2TonsSaved: 50, avgSalary: "$52k", growthIndex: "1.4x", caseStudy: "Modular Electronics", caseStudyDesc: "Designed modular smartphone reducing e-waste by 70%.", source: "C2C Institute" },
  { id: 17, role: "Textile Sustainability Specialist", sector: "Circular Economy", skills: ["Textile Science", "Sustainability Reporting", "Supply Chain"], skillCategories: ["Technical", "Management"], impactLevel: "Medium", co2TonsSaved: 45, avgSalary: "$50k", growthIndex: "1.2x", caseStudy: "Circular Fashion Startups", caseStudyDesc: "Diverted 5,000 tons of textile waste from landfills through upcycling programs.", source: "Fashion Revolution" },
  { id: 18, role: "Industrial Symbiosis Coordinator", sector: "Circular Economy", skills: ["Industrial Ecology", "Stakeholder Engagement", "Process Optimization"], skillCategories: ["Management", "Analytical"], impactLevel: "Medium-High", co2TonsSaved: 70, avgSalary: "$63k", growthIndex: "1.3x", caseStudy: "Eco-Industrial Park", caseStudyDesc: "Connected 12 factories to share waste streams, saving 8,000 tons CO₂/year.", source: "UNIDO" },
  { id: 19, role: "Biomaterials Researcher", sector: "Circular Economy", skills: ["Bioengineering", "Lab Research", "Material Testing"], skillCategories: ["Technical", "Analytical"], impactLevel: "Medium", co2TonsSaved: 55, avgSalary: "$60k", growthIndex: "1.5x", caseStudy: "Algae-Based Packaging", caseStudyDesc: "Developed biodegradable packaging from seaweed replacing 2M plastic units.", source: "Nature" },
  { id: 20, role: "Remanufacturing Engineer", sector: "Circular Economy", skills: ["Reverse Engineering", "Quality Control", "Manufacturing"], skillCategories: ["Technical"], impactLevel: "Medium", co2TonsSaved: 65, avgSalary: "$57k", growthIndex: "1.2x", caseStudy: "Auto Parts Remanufacturing", caseStudyDesc: "Remanufactured 500K auto parts saving 85% of original manufacturing energy.", source: "ReMaTec" },
  { id: 21, role: "Food Waste Reduction Strategist", sector: "Circular Economy", skills: ["Food Science", "Logistics", "Behavior Design"], skillCategories: ["Analytical", "Creative"], impactLevel: "Medium", co2TonsSaved: 40, avgSalary: "$48k", growthIndex: "1.3x", caseStudy: "Zero-Waste Restaurant Chain", caseStudyDesc: "Designed waste reduction system cutting food waste by 80% across 200 restaurant locations.", source: "FAO" },
  { id: 22, role: "Carbon Analyst", sector: "Carbon Management", skills: ["Data Analytics", "Carbon Accounting", "Reporting"], skillCategories: ["Analytical"], impactLevel: "High", co2TonsSaved: 150, avgSalary: "$65k", growthIndex: "1.5x", caseStudy: "City Carbon Dashboard", caseStudyDesc: "Built real-time carbon monitoring dashboard improving policy transparency.", source: "CDP" },
  { id: 23, role: "Carbon Capture Engineer", sector: "Carbon Management", skills: ["Chemical Engineering", "Process Design", "CCS Tech"], skillCategories: ["Technical"], impactLevel: "High", co2TonsSaved: 250, avgSalary: "$85k", growthIndex: "1.6x", caseStudy: "Direct Air Capture Plant", caseStudyDesc: "Engineered DAC facility capturing 4,000 tons CO₂/year from atmosphere.", source: "IEA" },
  { id: 24, role: "Climate Policy Advisor", sector: "Carbon Management", skills: ["Policy Analysis", "Climate Science", "Stakeholder Engagement"], skillCategories: ["Analytical", "Management"], impactLevel: "High", co2TonsSaved: 200, avgSalary: "$78k", growthIndex: "1.3x", caseStudy: "National Carbon Budget", caseStudyDesc: "Advised government on carbon budget framework reducing emissions 20% in 5 years.", source: "UNFCCC" },
  { id: 25, role: "ESG Reporting Specialist", sector: "Carbon Management", skills: ["Financial Analysis", "Sustainability Reporting", "Compliance"], skillCategories: ["Analytical", "Management"], impactLevel: "Medium-High", co2TonsSaved: 90, avgSalary: "$70k", growthIndex: "1.4x", caseStudy: "Corporate ESG Framework", caseStudyDesc: "Developed ESG reporting standard adopted by 50+ companies.", source: "GRI" },
  { id: 26, role: "Forest Carbon Project Manager", sector: "Carbon Management", skills: ["Forestry", "Carbon Credits", "GIS Mapping"], skillCategories: ["Management", "Technical"], impactLevel: "High", co2TonsSaved: 180, avgSalary: "$62k", growthIndex: "1.2x", caseStudy: "Reforestation Initiative", caseStudyDesc: "Managed 10,000-hectare reforestation project sequestering 50K tons CO₂.", source: "Verra" },
  { id: 27, role: "Carbon Market Trader", sector: "Carbon Management", skills: ["Financial Markets", "Carbon Pricing", "Risk Analysis"], skillCategories: ["Analytical"], impactLevel: "Medium-High", co2TonsSaved: 100, avgSalary: "$90k", growthIndex: "1.5x", caseStudy: "Voluntary Carbon Market", caseStudyDesc: "Facilitated $50M in carbon credit trades accelerating offset projects.", source: "IETA" },
  { id: 28, role: "Methane Emissions Auditor", sector: "Carbon Management", skills: ["Gas Detection", "Environmental Auditing", "Regulatory Compliance"], skillCategories: ["Technical", "Analytical"], impactLevel: "High", co2TonsSaved: 220, avgSalary: "$68k", growthIndex: "1.4x", caseStudy: "Oil & Gas Methane Reduction", caseStudyDesc: "Identified and sealed methane leaks across 50 facilities, preventing 15,000 tons CO₂-equivalent annually.", source: "EPA" },
  { id: 29, role: "Ocean Energy Researcher", sector: "Renewable Energy", skills: ["Marine Engineering", "Wave Dynamics", "Prototype Testing"], skillCategories: ["Technical", "Analytical"], impactLevel: "Medium", co2TonsSaved: 85, avgSalary: "$70k", growthIndex: "1.6x", caseStudy: "Tidal Energy Pilot", caseStudyDesc: "Developed tidal stream turbine prototype generating 2MW of clean ocean power.", source: "EMEC" },
  { id: 30, role: "Smart Grid Architect", sector: "Renewable Energy", skills: ["IoT", "Power Systems", "Software Engineering"], skillCategories: ["Technical", "Analytical"], impactLevel: "High", co2TonsSaved: 175, avgSalary: "$88k", growthIndex: "1.7x", caseStudy: "City Smart Grid Rollout", caseStudyDesc: "Architected AI-driven smart grid reducing energy waste by 30% across a metro area.", source: "IEEE" },
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

export interface CaseStudy {
  id: number;
  title: string;
  sector: Sector;
  summary: string;
  fullDescription: string;
  impact: string;
  location: string;
  year: string;
  relatedCareers: string[];
  keyMetrics: { label: string; value: string }[];
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Solar Villages (Rajasthan, India)",
    sector: "Renewable Energy",
    summary: "Electrified 50+ villages, reduced diesel dependency and saved 230 tons CO₂/year.",
    fullDescription: "A landmark initiative that brought solar microgrids to remote villages across Rajasthan, India. By replacing diesel generators with distributed solar systems, the project not only cut carbon emissions but also provided reliable, affordable electricity to over 25,000 residents. The initiative included training local technicians, creating 150+ green jobs, and establishing community-owned energy cooperatives that ensure long-term sustainability.",
    impact: "230 tons CO₂ reduced annually",
    location: "Rajasthan, India",
    year: "2021",
    relatedCareers: ["Solar Engineer", "Solar Project Manager"],
    keyMetrics: [
      { label: "Villages Electrified", value: "50+" },
      { label: "CO₂ Saved/Year", value: "230 tons" },
      { label: "Residents Impacted", value: "25,000+" },
      { label: "Green Jobs Created", value: "150+" },
    ],
    tags: ["Solar", "Rural Development", "Microgrids"],
  },
  {
    id: 2,
    title: "E-Bus Fleet (Mumbai)",
    sector: "Sustainable Transport",
    summary: "Reduced urban carbon intensity by 15% with electric bus deployment.",
    fullDescription: "Mumbai's metropolitan transport authority launched one of Asia's largest electric bus fleets, deploying 500 e-buses across 40 routes. The project replaced aging diesel buses in the most congested corridors, dramatically improving air quality for millions of commuters. Integrated smart charging infrastructure was deployed at 25 depots, with AI-optimized scheduling to minimize grid impact during peak hours.",
    impact: "15% reduction in urban carbon intensity",
    location: "Mumbai, India",
    year: "2022",
    relatedCareers: ["EV Designer", "EV Charging Infrastructure Engineer", "Urban Mobility Planner"],
    keyMetrics: [
      { label: "E-Buses Deployed", value: "500" },
      { label: "Routes Covered", value: "40" },
      { label: "Carbon Reduction", value: "15%" },
      { label: "Daily Riders", value: "200,000+" },
    ],
    tags: ["Electric Vehicles", "Public Transit", "Urban"],
  },
  {
    id: 3,
    title: "Circular Fashion Startups",
    sector: "Circular Economy",
    summary: "Diverted textile waste from landfills through innovative upcycling programs.",
    fullDescription: "A consortium of fashion startups pioneered a closed-loop textile recycling system that collects, sorts, and transforms post-consumer garments into new fabric. The network spans 8 countries and partners with major retail brands for take-back programs. Advanced chemical recycling technology enables fiber-to-fiber recycling at scale, while AI-powered sorting achieves 95% material identification accuracy.",
    impact: "5,000 tons textile waste diverted annually",
    location: "Europe & South Asia",
    year: "2023",
    relatedCareers: ["Textile Sustainability Specialist", "Circular Product Designer", "Waste Circularity Manager"],
    keyMetrics: [
      { label: "Waste Diverted", value: "5,000 tons/yr" },
      { label: "Countries Active", value: "8" },
      { label: "Sorting Accuracy", value: "95%" },
      { label: "Brand Partners", value: "25+" },
    ],
    tags: ["Textiles", "Upcycling", "Closed-Loop"],
  },
  {
    id: 4,
    title: "Urban Carbon Tracking Program",
    sector: "Carbon Management",
    summary: "Improved policy transparency & offset planning with real-time monitoring.",
    fullDescription: "A city-scale carbon monitoring platform that integrates satellite data, IoT sensors, and municipal datasets to create real-time emissions maps. The dashboard tracks emissions by sector, neighborhood, and time of day, enabling targeted policy interventions. The platform has been adopted by 12 cities globally and contributed to evidence-based climate action plans that collectively target 40% emission reductions by 2030.",
    impact: "Adopted by 12 cities, targeting 40% emission cuts",
    location: "Global (12 cities)",
    year: "2023",
    relatedCareers: ["Carbon Analyst", "Climate Policy Advisor", "ESG Reporting Specialist"],
    keyMetrics: [
      { label: "Cities Using Platform", value: "12" },
      { label: "Emission Reduction Target", value: "40%" },
      { label: "Data Points Tracked", value: "2M+" },
      { label: "Policy Actions Triggered", value: "85" },
    ],
    tags: ["Monitoring", "IoT", "Policy"],
  },
  {
    id: 5,
    title: "Offshore Wind Mega-Farm (North Sea)",
    sector: "Renewable Energy",
    summary: "Largest offshore wind installation powering 1.3 million homes with clean energy.",
    fullDescription: "A groundbreaking offshore wind farm spanning 400 km² in the North Sea, featuring 277 next-generation turbines with 15MW capacity each. The project pioneered floating foundation technology for deeper waters, opening up vast new areas for wind energy. It includes an integrated hydrogen production facility that converts excess power into green hydrogen for industrial use, creating a blueprint for sector coupling.",
    impact: "4.1 GW capacity, powering 1.3M homes",
    location: "North Sea, Europe",
    year: "2024",
    relatedCareers: ["Wind Turbine Technician", "Smart Grid Architect", "Ocean Energy Researcher"],
    keyMetrics: [
      { label: "Turbines Installed", value: "277" },
      { label: "Capacity", value: "4.1 GW" },
      { label: "Homes Powered", value: "1.3M" },
      { label: "Green H₂ Output", value: "50k tons/yr" },
    ],
    tags: ["Offshore Wind", "Hydrogen", "Mega-Project"],
  },
  {
    id: 6,
    title: "Direct Air Capture Facility (Iceland)",
    sector: "Carbon Management",
    summary: "World's largest DAC plant removing 36,000 tons of CO₂ from the atmosphere annually.",
    fullDescription: "Located in Iceland's volcanic landscape, this facility uses geothermal energy to power massive fan arrays that pull CO₂ directly from ambient air. The captured carbon is dissolved in water and injected deep underground, where it mineralizes into basalt rock within two years — permanently removing it from the carbon cycle. The facility serves as a proof of concept for scaling negative emissions technology.",
    impact: "36,000 tons CO₂ captured per year",
    location: "Hellisheiði, Iceland",
    year: "2024",
    relatedCareers: ["Carbon Capture Engineer", "Geothermal Energy Engineer", "Methane Emissions Auditor"],
    keyMetrics: [
      { label: "CO₂ Captured/Year", value: "36,000 tons" },
      { label: "Mineralization Time", value: "< 2 years" },
      { label: "Energy Source", value: "100% Geothermal" },
      { label: "Scale-up Planned", value: "10x by 2030" },
    ],
    tags: ["DAC", "Negative Emissions", "Geothermal"],
  },
];
