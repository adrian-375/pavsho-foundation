const OurTeam = () => {
  const team = [
    {
      name: "Mr. Adrian Charles",
      title: "Chief Executive Officer",
      bio: "Mr. Adrian Charles serves as the Chief Executive Officer of Pavsho Enviro Services. A graduate with distinction in Bachelor of Science in Data Science, he represents a forward-looking generation of leadership that integrates analytical capability with strategic innovation.\n\nWith a strong foundation in data-driven decision-making and technology-enabled solutions, he guides the company toward sustainable growth, global relevance, and structured execution of high-integrity carbon initiatives.",
    },
    {
      name: "Dr. Abhishek M",
      title: "Chief Sustainability & Carbon Innovation Officer",
      bio: "Dr. Abhishek M, PhD in Environmental Science, serves as Chief Sustainability & Carbon Innovation Officer at Pavsho Enviro Services. He brings extensive expertise in carbon project design, implementation, business development, and digital monitoring, reporting, and verification systems.\n\nHis experience spans agriculture and forestry initiatives, including mangrove restoration, Sustainable Agricultural Land Management, Climate, Community & Biodiversity projects, and carbon credit structuring.\n\nDr. Abhishek is experienced with major international registries including Verra, Gold Standard, ICR, Global Carbon Council, ART-TREES, Cercarbono, and Plan Vivo, ensuring standards compliance and high-quality carbon outcomes.",
    },
    {
      name: "Ms. Thrupthy Chondama",
      title: "Senior Manager, Operations (AFOLU)",
      bio: "Ms. Thrupthy Chondama serves as Senior Manager of Operations (AFOLU). She holds a Master's degree in Forestry and brings strong expertise in forestry, SALM, and ARR project implementation.\n\nHer academic foundation and field-level execution experience support efficient management of complex land-based climate initiatives aligned with recognised carbon standards.",
    },
    {
      name: "Ms. Shoba Rathna",
      title: "Director",
      bio: "",
    },
    {
      name: "Mr. Srikanth GCS",
      title: "Head – Climate, Community & Biodiversity | Geospatial Intelligence",
      bio: "",
    },
    {
      name: "Mr. Uday Raksogi",
      title: "Lead – Finance",
      bio: "",
    },
    {
      name: "Mr. Steven",
      title: "Lead, Climate, Community & Biodiversity",
      bio: "Mr. Steven leads Climate, Community & Biodiversity integration across Pavsho Enviro Services projects. He supports integration of CCB principles into ARR, IFM, REDD/REDD+, grassland protection, mangrove restoration, and SALM initiatives.\n\nHis expertise ensures measurable environmental and social co-benefits while maintaining alignment with international safeguard requirements.",
    },
  ];

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

        <div className="space-y-10">
          {team.map((member) => (
            <div key={member.name} className="flex gap-6 items-start">
              <div className="hidden sm:flex w-20 h-20 rounded-full bg-secondary flex-shrink-0 items-center justify-center">
                <span className="font-serif text-xl font-bold text-primary">
                  {member.name.split(" ").pop()?.[0]}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-muted-foreground text-sm font-medium mb-3">{member.title}</p>
                {member.bio && member.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-foreground leading-relaxed mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
