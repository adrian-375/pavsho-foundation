const OurExpertise = () => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Our Expertise</h1>
        <p className="text-foreground leading-relaxed mb-12">
          With a strong focus on climate action, biodiversity conservation, and community development, Pavsho Enviro Services delivers structured, standards-aligned solutions that promote environmental sustainability and long-term economic value across land-based sectors.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3 pb-2 border-b border-border">
              Carbon Fund Generation & Management
            </h2>
            <p className="text-foreground leading-relaxed">
              We support the development, structuring, and management of carbon offset projects aligned with international standards, enabling the generation, validation, and monetization of high-integrity carbon credits.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3 pb-2 border-b border-border">
              Sustainable Agriculture
            </h2>
            <p className="text-foreground leading-relaxed">
              We guide the implementation of climate-smart agricultural practices, including agroforestry, crop diversification, and sustainable land management systems that enhance productivity while reducing environmental impact.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3 pb-2 border-b border-border">
              Sustainable Forestry
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              We provide consultancy across key forestry and land-use interventions, including:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-1 ml-4">
              <li>Afforestation, Reforestation, and Revegetation (ARR)</li>
              <li>Agricultural Land Management (ALM)</li>
              <li>Improved Forest Management (IFM)</li>
              <li>Reduced Emissions from Deforestation and Degradation (REDD)</li>
              <li>Avoided Conversion of Grasslands and Shrublands (ACoGS)</li>
              <li>Wetlands Restoration and Conservation (WRC)</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              These initiatives support carbon sequestration, ecosystem restoration, biodiversity conservation, and long-term land resilience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-primary mb-3 pb-2 border-b border-border">
              GIS & Remote Sensing
            </h2>
            <p className="text-foreground leading-relaxed">
              We apply advanced geospatial technologies for land monitoring, soil assessment, deforestation tracking, and data-driven analysis to support transparent and sustainable project implementation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurExpertise;
