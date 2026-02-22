interface ExpertiseSubPageProps {
  title: string;
  content: string;
  bullets?: string[];
  afterBullets?: string;
}

const ExpertiseSubPage = ({ title, content, bullets, afterBullets }: ExpertiseSubPageProps) => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h1>
        <p className="text-foreground leading-relaxed">{content}</p>
        {bullets && (
          <ul className="list-disc list-inside text-foreground space-y-1 ml-4 mt-4">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        {afterBullets && (
          <p className="text-foreground leading-relaxed mt-4">{afterBullets}</p>
        )}
      </div>
    </div>
  );
};

export const CarbonAssetDevelopment = () => (
  <ExpertiseSubPage
    title="Carbon Asset Development & Fund Management"
    content="We support the end-to-end development, structuring, and management of environmental asset projects aligned with leading international standards and registries. Our services enable the generation, validation, issuance, and monetisation of high-integrity carbon and environmental credits, supported by strong governance, transparent MRV systems, and market-aligned risk management frameworks."
  />
);

export const SustainableAgriculturePage = () => (
  <ExpertiseSubPage
    title="Sustainable Agriculture"
    content="We guide the implementation of climate-smart agricultural systems that enhance productivity while reducing environmental impact. Our expertise includes:"
    bullets={[
      "Agroforestry systems",
      "Crop diversification and regenerative agriculture",
      "Sustainable Agricultural Land Management (SALM)",
      "Soil organic carbon enhancement programmes",
    ]}
    afterBullets="These interventions improve soil health, increase resilience to climate variability, and generate measurable mitigation and adaptation outcomes."
  />
);

export const SustainableForestryPage = () => (
  <ExpertiseSubPage
    title="Sustainable Forestry & Land Use"
    content="We provide consultancy and implementation support across key forestry and ecosystem restoration interventions, including:"
    bullets={[
      "Afforestation, Reforestation, and Revegetation (ARR)",
      "Agricultural Land Management (ALM)",
      "Improved Forest Management (IFM)",
      "Reduced Emissions from Deforestation and Degradation (REDD+)",
      "Avoided Conversion of Grasslands and Shrublands (ACoGS)",
      "Wetlands Restoration and Conservation (WRC)",
    ]}
    afterBullets="These initiatives strengthen carbon sequestration, restore ecosystems, enhance biodiversity, and build long-term land resilience while delivering verified climate benefits."
  />
);

export const PlasticWasteRecycling = () => (
  <ExpertiseSubPage
    title="Plastic Waste Collection & Recycling"
    content="We design and support structured plastic waste recovery programmes that reduce environmental leakage and promote circular economy outcomes. Our services include:"
    bullets={[
      "Baseline waste assessments and material flow analysis",
      "Community-based and institutional collection systems",
      "Traceability and transparent monitoring frameworks",
      "Recycling value chain integration and credit generation support",
    ]}
    afterBullets="These programmes contribute to pollution reduction, improved waste governance, and measurable environmental impact."
  />
);

export const IntegratedWasteManagement = () => (
  <ExpertiseSubPage
    title="Integrated Waste Management"
    content="We provide technical advisory and project structuring services for sustainable waste management systems, including:"
    bullets={[
      "Municipal solid waste management frameworks",
      "Waste segregation and diversion strategies",
      "Organic waste treatment and composting systems",
      "Emission reduction initiatives within waste streams",
    ]}
    afterBullets="Our approach integrates environmental compliance, operational efficiency, and measurable mitigation outcomes to support both public and private sector stakeholders."
  />
);

export const GISRemoteSensing = () => (
  <ExpertiseSubPage
    title="GIS & Remote Sensing"
    content="We apply advanced geospatial technologies to enable transparent and data-driven project implementation. Our capabilities include:"
    bullets={[
      "Land-use and land-cover monitoring",
      "Soil and carbon stock assessment",
      "Deforestation and degradation tracking",
      "Satellite-based monitoring for compliance and verification",
    ]}
    afterBullets="Through robust spatial analytics and digital MRV systems, we enhance project credibility, traceability, and long-term performance monitoring."
  />
);
