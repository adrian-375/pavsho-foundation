interface ExpertiseSubPageProps {
  title: string;
  content: string;
}

const ExpertiseSubPage = ({ title, content }: ExpertiseSubPageProps) => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h1>
        <p className="text-foreground leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export const WetlandRestoration = () => (
  <ExpertiseSubPage
    title="Wetland Restoration and Conservation"
    content="We deliver structured wetland restoration and conservation initiatives that strengthen carbon sequestration, water regulation, and biodiversity outcomes, integrating ecological expertise with data-driven monitoring to ensure long-term environmental resilience."
  />
);

export const SustainableAgriculturePage = () => (
  <ExpertiseSubPage
    title="Sustainable Agriculture"
    content="We support climate-smart agricultural systems through sustainable land-use planning, regenerative practices, and measurable performance frameworks that enhance productivity while reducing environmental impact."
  />
);

export const SustainableForestryPage = () => (
  <ExpertiseSubPage
    title="Sustainable Forestry"
    content="We guide responsible forest management and restoration initiatives designed to increase carbon storage, protect biodiversity, and maintain ecosystem integrity through standards-aligned implementation."
  />
);

export const ClimateCommunityBiodiversity = () => (
  <ExpertiseSubPage
    title="Climate, Community and Biodiversity"
    content="By integrating scientific methodologies, recognized standards, and stakeholder engagement processes, we help advance nature-positive climate initiatives that deliver measurable environmental and social outcomes."
  />
);

export const GISRemoteSensing = () => (
  <ExpertiseSubPage
    title="GIS & Remote Sensing"
    content="We apply advanced geospatial technologies for land monitoring, deforestation tracking, and performance verification, enabling transparent, data-driven decision-making across AFOLU projects."
  />
);
