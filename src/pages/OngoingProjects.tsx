import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

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

interface ProjectTab {
  label: string;
  content: React.ReactNode;
}

interface Project {
  title: string;
  location: string;
  summary: string;
  keyMetric?: { value: number; label: string };
  preview: { label: string; value: string }[];
  tabs: ProjectTab[];
}

const projects: Project[] = [
  {
    title: "Sustainable Agricultural Land Management in India",
    location: "India",
    summary: "Promoting SALM across 35,000 hectares of cropland in Karnataka, engaging over 13,000 farmers.",
    keyMetric: { value: 116774, label: "tCO\u2082e reduced annually" },
    preview: [
      { label: "Coverage", value: "35,000 hectares" },
      { label: "Farmers", value: "13,000" },
      { label: "Annual Reduction", value: "116,774 tCO\u2082e" },
    ],
    tabs: [
      {
        label: "Overview",
        content: (
          <div className="space-y-4 text-foreground leading-[1.85]">
            <p>Our ongoing project, "Sustainable Agricultural Practices in India," promotes Sustainable Agricultural Land Management (SALM) across 35,000 hectares of cropland in Karnataka, engaging over 13,000 farmers. The initiative focuses on restoring degraded lands, enhancing soil organic carbon, and reducing greenhouse gas (GHG) emissions through climate-smart agricultural practices.</p>
            <p>The project supports farmers in transitioning from conventional, input-intensive farming to regenerative systems. Key interventions include the application of organic fertilizers such as vermicompost and farmyard manure, diversified crop rotations across Kharif, Rabi, and Summer seasons, residue retention, reduced or no tillage, and the complete avoidance of crop burning. These measures improve soil fertility, strengthen biodiversity, enhance moisture retention, and prevent significant CO\u2082, CH\u2084, and N\u2082O emissions associated with residue burning and excessive synthetic fertilizer use.</p>
            <p>Agroforestry is integrated into farm landscapes through boundary and bund plantations, combining native and locally adapted tree species with crops to enhance carbon sequestration, improve microclimates, and diversify farmer incomes.</p>
            <p>The project is currently undergoing validation and first verification under the VCS framework. It is estimated to generate approximately 116,774 tCO\u2082e annually and nearly 4.79 million tCO\u2082e over a 40-year crediting period.</p>
            <p>Beyond climate mitigation, the initiative strengthens farmer livelihoods through capacity building, organic value chain development, certification support, and market linkages, delivering measurable environmental, social, and economic benefits.</p>
          </div>
        ),
      },
      {
        label: "Scale & Impact",
        content: (
          <ul className="list-disc list-inside space-y-2 text-foreground leading-[1.85]">
            <li>35,000 hectares under sustainable land management</li>
            <li>13,000 smallholder farmers supported</li>
            <li>116,774 tCO\u2082e annual emission reductions</li>
            <li>4.79 million tCO\u2082e projected over 40-year crediting period</li>
          </ul>
        ),
      },
      {
        label: "Standard Alignment",
        content: (
          <p className="text-foreground leading-[1.85]">Validated under the Verified Carbon Standard (VCS) framework, ensuring high-integrity carbon accounting, robust monitoring, and independent third-party verification.</p>
        ),
      },
    ],
  },
  {
    title: "Integrated Coastal Blue Carbon Initiative, Kenya",
    location: "Kenya",
    summary: "Large-scale blue carbon opportunity focused on rehabilitating degraded coastal ecosystems.",
    preview: [
      { label: "Project Type", value: "Mangrove Restoration" },
      { label: "Focus", value: "Coastal Blue Carbon" },
    ],
    tabs: [
      {
        label: "Overview",
        content: (
          <p className="text-foreground leading-[1.85]">The Kenyan Mangrove Restoration Project represents a large-scale blue carbon opportunity focused on rehabilitating degraded coastal ecosystems through scientifically designed restoration and long-term community stewardship. The initiative aims to restore native mangrove species including Rhizophora, Avicennia, and Sonneratia, strengthening carbon sequestration in both above-ground biomass and coastal sediments while enhancing shoreline protection and ecosystem resilience.</p>
        ),
      },
      {
        label: "Project Rationale",
        content: (
          <div className="space-y-4 text-foreground leading-[1.85]">
            <p>Kenya's coastal mangrove systems have experienced degradation due to overharvesting, hydrological disruption, and land-use pressures. Loss of mangroves reduces natural carbon sinks, weakens coastal protection, and threatens fisheries-dependent communities. Restoring these ecosystems offers one of the most effective nature-based climate mitigation solutions, delivering long-term carbon storage alongside biodiversity and socio-economic benefits.</p>
            <p>The project supports Kenya's Nationally Determined Contributions (NDCs) and is designed in alignment with leading international carbon and biodiversity standards to ensure measurable, additional, and verifiable climate outcomes.</p>
          </div>
        ),
      },
      {
        label: "Key Components",
        content: (
          <div className="space-y-6 text-foreground leading-[1.85]">
            <div>
              <h5 className="font-semibold text-accent mb-2">1. Native Mangrove Restoration</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Large-scale planting and assisted natural regeneration</li>
                <li>Restoration of degraded and fragmented mangrove corridors</li>
                <li>Use of locally adapted species to ensure ecological stability</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <h5 className="font-semibold text-accent mb-2">2. Hydrological Rehabilitation</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Re-establishment of natural tidal flow and sediment processes</li>
                <li>Improved nutrient cycling and long-term ecosystem functionality</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <h5 className="font-semibold text-accent mb-2">3. Community-Centered Governance</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Free, Prior, and Informed Consent (FPIC) framework</li>
                <li>Transparent benefit-sharing mechanisms</li>
                <li>Local participation in restoration and long-term monitoring</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <h5 className="font-semibold text-accent mb-2">4. Sustainable Livelihood Development</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Community nurseries and restoration employment</li>
                <li>Mangrove-compatible aquaculture and fisheries enhancement</li>
                <li>Eco-tourism and clean energy interventions</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        label: "Climate & Environmental Benefits",
        content: (
          <ul className="list-disc list-inside space-y-2 text-foreground leading-[1.85]">
            <li>Long-term carbon sequestration in biomass and sediments</li>
            <li>Reduction of greenhouse gas emissions from degraded coastal zones</li>
            <li>Strengthened coastal protection against storms and sea-level rise</li>
            <li>Habitat restoration for regionally significant biodiversity</li>
            <li>Improved ecosystem connectivity and resilience</li>
          </ul>
        ),
      },
      {
        label: "Investment & Impact Potential",
        content: (
          <p className="text-foreground leading-[1.85]">The project offers a scalable blue carbon model combining climate mitigation, biodiversity conservation, and inclusive economic development. A minimum of 60% of project revenues is allocated to local communities and partners, reinforcing equitable growth and long-term stewardship. This initiative positions mangrove restoration as a high-integrity, community-driven climate solution with measurable environmental and social impact.</p>
        ),
      },
    ],
  },
  {
    title: "Integrated Solid Waste & Circular Economy Initiative, Karnataka",
    location: "Karnataka, India",
    summary: "Modernizing municipal solid waste systems through an integrated, climate-aligned waste management programme.",
    preview: [
      { label: "Project Type", value: "Waste Management" },
      { label: "Focus", value: "Circular Economy" },
    ],
    tabs: [
      {
        label: "Overview",
        content: (
          <p className="text-foreground leading-[1.85]">Karnataka's rapidly growing towns and cities present a significant opportunity to modernize municipal solid waste (MSW) systems through an integrated, climate-aligned waste management programme. This project opportunity proposes the development and implementation of scalable waste management solutions across multiple urban local bodies (ULBs), targeting improved collection efficiency, scientific processing, methane reduction, plastic recovery, and circular economy value creation.</p>
        ),
      },
      {
        label: "Project Rationale",
        content: (
          <p className="text-foreground leading-[1.85]">Urban centres in Karnataka are experiencing increasing waste generation due to population growth, changing consumption patterns, and urban expansion. A large portion of waste remains inadequately segregated, leading to open dumping, landfill emissions, groundwater contamination, and loss of recyclable value. Organic waste decomposition in unmanaged landfills generates methane, a potent greenhouse gas, while recyclable materials such as plastics are often lost to informal or inefficient systems. This project aims to transition participating cities toward decentralized, resource-efficient, and climate-resilient waste systems.</p>
        ),
      },
      {
        label: "Key Components",
        content: (
          <div className="space-y-6 text-foreground leading-[1.85]">
            <div>
              <h5 className="font-semibold text-accent mb-2">1. Source Segregation & Collection Systems</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Strengthening door-to-door segregated waste collection</li>
                <li>Community awareness and behavioural change campaigns</li>
                <li>Digital tracking and traceability systems</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <h5 className="font-semibold text-accent mb-2">2. Organic Waste Management</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Decentralized composting units and biomethanation plants</li>
                <li>Conversion of wet waste into compost and biogas</li>
                <li>Methane avoidance and emission reduction quantification</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <h5 className="font-semibold text-accent mb-2">3. Plastic Waste Recovery & Recycling</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Material Recovery Facilities (MRFs)</li>
                <li>Traceable plastic collection and recycling systems</li>
                <li>Support for plastic credit generation under recognized standards</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <h5 className="font-semibold text-accent mb-2">4. Scientific Landfill Management</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Legacy waste remediation and biomining</li>
                <li>Engineered landfill cells for residual waste</li>
                <li>Landfill gas monitoring and potential capture</li>
              </ul>
            </div>
            <div className="border-t border-border pt-4">
              <h5 className="font-semibold text-accent mb-2">5. Informal Sector Integration</h5>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Formal inclusion of waste pickers</li>
                <li>Capacity building and occupational safety measures</li>
                <li>Structured livelihood enhancement programmes</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        label: "Climate & Environmental Benefits",
        content: (
          <ul className="list-disc list-inside space-y-2 text-foreground leading-[1.85]">
            <li>Reduction of methane emissions from unmanaged waste</li>
            <li>Diversion of recyclable materials from landfills</li>
            <li>Improved air and groundwater quality</li>
            <li>Contribution to India's climate commitments and Swachh Bharat objectives</li>
            <li>Potential generation of carbon and plastic credits</li>
          </ul>
        ),
      },
      {
        label: "Investment & Impact Potential",
        content: (
          <div className="space-y-4 text-foreground leading-[1.85]">
            <p>The project will be developed through public-private partnerships (PPP), municipal collaborations, and climate finance mechanisms. Revenue streams may include tipping fees, compost sales, recycled material sales, carbon credits, plastic credits, and extended producer responsibility (EPR) partnerships.</p>
            <p>By implementing integrated waste management systems across multiple towns and cities in Karnataka, the project can:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Divert 60 to 80% of municipal waste from landfills</li>
              <li>Generate measurable GHG emission reductions</li>
              <li>Create green jobs and strengthen local economies</li>
              <li>Establish scalable circular economy models for replication across India</li>
            </ul>
            <p>This initiative represents a high-impact environmental infrastructure opportunity aligned with climate mitigation, urban resilience, and sustainable development goals.</p>
          </div>
        ),
      },
    ],
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="border border-border bg-card transition-all duration-300 hover:shadow-lg"
      style={{ borderRadius: "var(--radius)" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {project.location}
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
              {project.title}
            </h3>
            <p className="text-foreground text-sm leading-relaxed mb-4">{project.summary}</p>
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
                  <AnimatedNumber target={project.keyMetric.value} />
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
        className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 md:px-8 pb-8">
          <div className="border-t border-border pt-8" />
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={(e) => { e.stopPropagation(); setActiveTab(i); }}
                className={`px-4 py-2 text-sm font-medium transition-colors border ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:text-primary hover:border-primary"
                }`}
                style={{ borderRadius: "var(--radius)" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div>{project.tabs[activeTab]?.content}</div>
        </div>
      </div>
    </div>
  );
};

const OngoingProjects = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-[850px]">
        {/* Section divider */}
        <div className="border-t border-border mb-12" />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
          Our Projects
        </h1>
        <p className="text-foreground leading-[1.85] mb-12">
          Pavsho Enviro Services is actively delivering high-integrity climate and environmental projects across agriculture, coastal ecosystems, and waste management sectors.
        </p>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OngoingProjects;
