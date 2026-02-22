import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import serviceAgriculture from "@/assets/service-agriculture.jpg";
import serviceForestry from "@/assets/service-forestry.jpg";
import serviceGis from "@/assets/service-gis.jpg";
import serviceCarbon from "@/assets/service-carbon.jpg";
import serviceCcb from "@/assets/service-ccb.jpg";

const services = [
  {
    title: "Sustainable Agriculture",
    description: "Pavsho Enviro Services supports climate-smart agricultural systems through sustainable land-use planning, regenerative practices, and structured implementation approaches that enhance productivity while reducing environmental impact.",
    image: serviceAgriculture,
  },
  {
    title: "Sustainable Forestry",
    description: "The company delivers responsible forest management and restoration initiatives designed to increase carbon storage, protect biodiversity, and strengthen long-term ecosystem resilience.",
    image: serviceForestry,
  },
  {
    title: "GIS & Remote Sensing",
    description: "Advanced geospatial technologies are applied for land monitoring, deforestation tracking, baseline development, and data-driven verification to support transparent AFOLU project implementation.",
    image: serviceGis,
  },
  {
    title: "AFOLU Carbon Project Development",
    description: "Pavsho Enviro Services develops high-integrity AFOLU carbon projects aligned with recognised international standards, supporting feasibility assessment, design, validation, monitoring, and long-term credit issuance.",
    image: serviceCarbon,
  },
  {
    title: "Climate, Community & Biodiversity Integration",
    description: "Projects are structured to integrate climate mitigation outcomes with measurable community benefits and biodiversity safeguards, ensuring alignment with recognised environmental and social standards.",
    image: serviceCcb,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[70vh]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-forest-dark/75" />
        <div className="relative z-10 text-center px-6 py-20 max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            High-integrity AFOLU carbon projects designed in alignment with leading international carbon standards and registries.
          </h1>
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Structured climate solutions built on verified methodologies, robust governance frameworks, and integrated environmental and social safeguards.
          </p>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/our-expertise"
                className="group block border border-border bg-card overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-hover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm font-semibold text-primary mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
