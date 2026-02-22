import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Ms. Shoba Rathna",
    title: "Director",
    bio: "Ms. Shoba Rathna serves as Director at Pavsho Enviro Services, contributing to the organisation's strategic growth, governance oversight, and operational management. A graduate with distinction in Bachelor of Arts from a reputed institution in India, she brings structured leadership, analytical thinking, and a forward-looking approach to institutional development.\n\nWith over five years of experience in leading and managing professional teams and supporting environmental initiatives, she plays an important role in strengthening organisational systems, stakeholder coordination, and disciplined project execution. Her leadership supports the company's commitment to high-integrity carbon and sustainability initiatives aligned with global environmental standards.\n\nDeeply passionate about nature, wildlife conservation, and sustainable natural resource management, Ms. Rathna advocates for responsible development that balances climate action, biodiversity protection, and community well-being. Her values-driven leadership reinforces the company's focus on integrity, transparency, and long-term ecological impact.",
  },
  {
    name: "Mr. Srikanth GCS",
    title: "Head, Climate, Community & Biodiversity | Geospatial Intelligence",
    bio: "Mr. Srikanth GCS holds a Bachelor's degree in Environmental Science and brings over two decades of experience in wildlife conservation, forestry management, pro-poor community development, and natural resource governance. His professional background integrates field-based conservation practice with advanced applications of Remote Sensing and GIS in land-use planning, landscape restoration, and climate mitigation initiatives.\n\nAt Pavsho Enviro Services, he leads Climate, Community & Biodiversity (CCB) integration across the company's environmental portfolio. His expertise spans Agriculture, Forestry and Other Land Use (AFOLU) interventions including mangrove restoration, Sustainable Agricultural Land Management (SALM), Afforestation, Reforestation and Revegetation (ARR), Improved Forest Management (IFM), REDD/REDD+, and grassland conservation. He supports the structuring of high-integrity carbon projects by embedding international safeguard principles and ensuring measurable environmental and social co-benefits.\n\nMr. Srikanth also heads Geospatial Intelligence and Digital Monitoring Systems within the organisation. With advanced proficiency in Remote Sensing and GIS, he specializes in land-use and land-cover analysis, baselining, stratification, spatial modelling, and long-term monitoring and verification for carbon initiatives. By integrating geospatial analytics with digital MRV frameworks, he strengthens transparency, data accuracy, risk management, and accountability across projects.\n\nHis multidisciplinary expertise bridges conservation science, climate finance structuring, and technology-enabled monitoring, reinforcing Pavsho Enviro Services' commitment to credible, high-integrity environmental solutions aligned with global standards.",
  },
  {
    name: "Mr. Uday Raksogi",
    title: "Lead, Finance",
    bio: "Mr. Uday Raksogi leads financial strategy and structuring for AFOLU and environmental asset projects at Pavsho Enviro Services. He oversees project financial modelling, carbon revenue forecasting, cost optimisation, and long-term budget planning to ensure financial viability across multi-decade crediting periods.\n\nHis expertise includes investment structuring, cash flow modelling for ARR, IFM, REDD+, SALM, and blue carbon initiatives, as well as risk assessment aligned with buffer allocation, non-permanence considerations, and safeguard compliance requirements. He plays a critical role in aligning project economics with international carbon market expectations and climate finance standards.\n\nMr. Raksogi also ensures regulatory compliance, financial transparency, and disciplined capital deployment across projects. Through structured financial governance and scenario-based modelling, he supports sustainable growth, investor confidence, and the long-term delivery of high-integrity carbon initiatives.",
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="border border-border bg-card transition-all duration-300 hover:shadow-md"
      style={{ borderRadius: "var(--radius)" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
      >
        <div>
          <h3 className="font-serif text-xl font-bold text-primary">{member.name}</h3>
          <p className="text-muted-foreground text-sm font-medium mt-1">{member.title}</p>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 md:px-8 pb-8">
          <div className="border-t border-border pt-6 space-y-3">
            {member.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Our Team</h1>
        <p className="text-foreground leading-relaxed mb-4">
          We are dedicated to building a sustainable future by combining technological innovation with deep environmental expertise to deliver end-to-end solutions that support responsible growth and meaningful climate action.
        </p>

        <h2 className="font-serif text-2xl font-bold text-primary mb-4 mt-12 pb-3 border-b-2 border-primary">
          Our Leadership Team
        </h2>
        <p className="text-foreground leading-relaxed mb-10">
          At Pavsho Enviro Services, our leadership team brings together vision, scientific expertise, and operational excellence. The team combines strengths across environmental science, forestry, carbon project development, geospatial intelligence, governance, finance, and organizational leadership to deliver high-integrity, standards-aligned carbon solutions.
        </p>

        <div className="space-y-4">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
