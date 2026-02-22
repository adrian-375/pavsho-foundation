import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import serviceAgriculture from "@/assets/service-agriculture.jpg";
import serviceForestry from "@/assets/service-forestry.jpg";
import serviceGis from "@/assets/service-gis.jpg";
import serviceCarbon from "@/assets/service-carbon.jpg";
import servicePlastic from "@/assets/service-plastic.jpg";
import serviceWaste from "@/assets/service-waste.jpg";

const AnimatedCounter = ({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, decimals]);

  const formatted = decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();

  return <span ref={ref}>{formatted}{suffix}</span>;
};

const services = [
  {
    title: "Carbon Asset Development & Fund Management",
    description: "We support the end-to-end development, structuring, and management of environmental asset projects aligned with leading international standards and registries. Our services enable the generation, validation, issuance, and monetisation of high-integrity carbon and environmental credits, supported by strong governance, transparent MRV systems, and market-aligned risk management frameworks.",
    image: serviceCarbon,
  },
  {
    title: "Sustainable Agriculture",
    description: "We guide the implementation of climate-smart agricultural systems that enhance productivity while reducing environmental impact. Our expertise includes agroforestry systems, crop diversification and regenerative agriculture, Sustainable Agricultural Land Management (SALM), and soil organic carbon enhancement programmes.",
    image: serviceAgriculture,
  },
  {
    title: "Sustainable Forestry & Land Use",
    description: "We provide consultancy and implementation support across key forestry and ecosystem restoration interventions, including ARR, ALM, IFM, REDD+, ACoGS, and WRC. These initiatives strengthen carbon sequestration, restore ecosystems, enhance biodiversity, and build long-term land resilience.",
    image: serviceForestry,
  },
  {
    title: "Plastic Waste Collection & Recycling",
    description: "We design and support structured plastic waste recovery programmes that reduce environmental leakage and promote circular economy outcomes. Our services include baseline waste assessments, community-based collection systems, traceability frameworks, and recycling value chain integration.",
    image: servicePlastic,
  },
  {
    title: "Integrated Waste Management",
    description: "We provide technical advisory and project structuring services for sustainable waste management systems, including municipal solid waste frameworks, waste segregation strategies, organic waste treatment, and emission reduction initiatives within waste streams.",
    image: serviceWaste,
  },
  {
    title: "GIS & Remote Sensing",
    description: "We apply advanced geospatial technologies to enable transparent and data-driven project implementation. Our capabilities include land-use monitoring, soil and carbon stock assessment, deforestation tracking, and satellite-based monitoring for compliance and verification.",
    image: serviceGis,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[75vh]"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-forest-dark/80" />
        <div className="relative z-10 text-center px-6 py-24 max-w-4xl mx-auto">
          <h1 className="animate-fade-in font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-primary-foreground via-primary-foreground/90 to-primary-foreground/70 bg-clip-text">
              Pavsho Enviro Services
            </span>
          </h1>
          <p className="animate-fade-in-delay-1 text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4">
            High-integrity AFOLU carbon projects designed in alignment with leading international carbon standards and registries.
          </p>
          <p className="animate-fade-in-delay-2 text-primary-foreground/75 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Structured climate solutions built on verified methodologies, robust governance frameworks, and integrated environmental and social safeguards.
          </p>

          {/* Metrics Strip */}
          <div className="animate-fade-in-delay-3 mt-14 flex items-center justify-center gap-0">
            <div className="flex-1 max-w-[200px] text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                <AnimatedCounter target={35000} />
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">Hectares</div>
            </div>
            <div className="w-px h-14 bg-primary-foreground/20" />
            <div className="flex-1 max-w-[200px] text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                <AnimatedCounter target={13000} />
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">Farmers</div>
            </div>
            <div className="w-px h-14 bg-primary-foreground/20" />
            <div className="flex-1 max-w-[240px] text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                <AnimatedCounter target={4.79} decimals={2} suffix=" Million" />
              </div>
              <div className="text-primary-foreground/60 text-sm mt-1">tCO₂e (40-Year Period)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to="/our-expertise"
                className="group block border border-border bg-card overflow-hidden transition-all duration-250 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-hover"
                  />
                </div>
                <div className="p-5">
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
