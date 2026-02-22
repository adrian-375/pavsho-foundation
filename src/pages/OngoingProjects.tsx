import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface ProjectCardProps {
  project: {
    title: string;
    emoji: string;
    preview: { label: string; value: string }[];
    keyMetric?: { value: string; label: string };
    expandedSections: { heading: string; content: string | string[] }[];
  };
}

const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border border-border bg-card transition-shadow duration-300 hover:shadow-lg"
      style={{ borderRadius: "var(--radius)" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {project.emoji} Project
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-4">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
              {project.preview.map((item) => (
                <div key={item.label} className="text-sm">
                  <span className="text-muted-foreground">{item.label}: </span>
                  <span className="text-foreground font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            {project.keyMetric && (
              <div className="mt-2">
                <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                  <AnimatedNumber
                    target={parseInt(project.keyMetric.value.replace(/[^0-9]/g, ""))}
                    suffix=""
                  />
                </span>
                <span className="text-sm text-muted-foreground ml-2">{project.keyMetric.label}</span>
              </div>
            )}
          </div>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 md:px-8 pb-8 space-y-6">
          <div className="border-t border-border pt-6" />
          {project.expandedSections.map((section, i) => (
            <div key={i}>
              <h4 className="font-serif text-lg font-semibold text-primary mb-3">
                {section.heading}
              </h4>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-1 text-foreground leading-relaxed">
                  {section.content.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-foreground leading-relaxed">{section.content}</p>
              )}
              {i < project.expandedSections.length - 1 && (
                <div className="border-b border-border mt-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Sustainable Agricultural Land Management – India",
    emoji: "🌱",
    preview: [
      { label: "Country", value: "India" },
      { label: "Coverage", value: "35,000 hectares" },
      { label: "Farmers", value: "13,000" },
      { label: "Annual Reduction", value: "116,774 tCO₂e" },
    ],
    keyMetric: { value: "116774", label: "tCO₂e reduced annually" },
    expandedSections: [
      {
        heading: "Overview",
        content:
          "This large-scale Sustainable Agricultural Land Management (SALM) project supports over 13,000 smallholder farmers across 35,000 hectares in India. Through climate-smart agricultural practices, improved soil health management, and structured capacity building, the initiative delivers measurable emission reductions while enhancing productivity and farmer livelihoods.",
      },
      {
        heading: "Scale & Impact",
        content: [
          "35,000 hectares under sustainable land management",
          "13,000 smallholder farmers supported",
          "116,774 tCO₂e annual emission reductions",
          "4.79 million tCO₂e projected over 40-year crediting period",
        ],
      },
      {
        heading: "Standard Alignment",
        content:
          "Validated under the Verified Carbon Standard (VCS) framework, ensuring high-integrity carbon accounting, robust monitoring, and independent third-party verification.",
      },
    ],
  },
  {
    title: "Integrated Coastal Blue Carbon Initiative – Kenya",
    emoji: "🌊",
    preview: [
      { label: "Country", value: "Kenya" },
      { label: "Project Type", value: "Mangrove Restoration" },
      { label: "Focus", value: "Coastal Blue Carbon" },
    ],
    expandedSections: [
      {
        heading: "Rationale",
        content:
          "Coastal mangrove ecosystems in Kenya face ongoing degradation from land-use change, unsustainable harvesting, and climate pressures. This initiative targets the restoration and long-term conservation of mangrove habitats to enhance blue carbon sequestration, strengthen coastal resilience, and support community livelihoods.",
      },
      {
        heading: "Key Components",
        content: [
          "Mangrove restoration and reforestation across degraded coastal zones",
          "Community-based natural resource management and livelihood integration",
          "Biodiversity monitoring and ecological assessment",
          "Carbon stock quantification and blue carbon methodology alignment",
        ],
      },
      {
        heading: "Climate Benefits",
        content:
          "Mangrove ecosystems sequester carbon at rates significantly higher than terrestrial forests. Restoration activities are designed to deliver verified emission reductions and removals while protecting biodiversity-rich coastal zones.",
      },
      {
        heading: "Partnership Model",
        content:
          "The project is structured through partnerships with local communities, conservation organisations, and government agencies to ensure long-term sustainability, transparent governance, and equitable benefit sharing.",
      },
    ],
  },
  {
    title: "Integrated Solid Waste & Circular Economy Initiative – Karnataka",
    emoji: "♻️",
    preview: [
      { label: "Region", value: "Karnataka" },
      { label: "Project Type", value: "Waste Management" },
      { label: "Focus", value: "Circular Economy" },
    ],
    expandedSections: [
      {
        heading: "Overview",
        content:
          "This initiative addresses urban and peri-urban solid waste management challenges in Karnataka through integrated collection, segregation, recycling, and resource recovery systems. The project supports circular economy principles by converting waste streams into reusable materials and reducing landfill-bound waste volumes.",
      },
      {
        heading: "Key Components",
        content: [
          "Door-to-door waste collection and source segregation programmes",
          "Material recovery and recycling facility operations",
          "Plastic waste collection and processing for circular reuse",
          "Community awareness and behavioural change campaigns",
          "Data-driven monitoring of waste diversion and recovery metrics",
        ],
      },
      {
        heading: "Environmental Impact",
        content:
          "By diverting waste from landfills and enabling material recovery, the project reduces methane emissions from organic waste decomposition, decreases plastic pollution, and supports resource-efficient urban systems aligned with sustainability goals.",
      },
    ],
  },
];

const OngoingProjects = () => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
          Ongoing Projects
        </h1>
        <p className="text-foreground leading-relaxed mb-12">
          Pavsho Enviro Services is actively delivering high-integrity climate and environmental projects across agriculture, coastal ecosystems, and waste management sectors.
        </p>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
