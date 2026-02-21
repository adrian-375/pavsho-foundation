const ProjectDelivery = () => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
          Project Delivery Framework
        </h1>
        <p className="text-foreground leading-relaxed mb-4">
          Pavsho Enviro Services applies an integrated carbon project delivery framework aligned with internationally recognised standards, including Verra requirements. The framework ensures disciplined execution, strong governance, and full alignment with voluntary carbon market integrity expectations.
        </p>
        <p className="text-foreground leading-relaxed mb-12">
          Governance, Free Prior and Informed Consent, environmental and social safeguards, grievance mechanisms, anti-corruption controls, and double-counting prevention are embedded across the entire project lifecycle to enable transparent, accountable, and high-integrity carbon outcomes.
        </p>

        <h2 className="font-serif text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">
          Integrated Carbon Project Delivery Framework
        </h2>

        {/* Overview */}
        <section className="mb-10">
          <h3 className="font-serif text-xl font-semibold text-primary mb-3">Overview</h3>
          <p className="text-foreground leading-relaxed">
            The Integrated Carbon Project Delivery Framework brings together structured project management practices and internationally recognised carbon standards to deliver high-integrity, scalable AFOLU carbon projects. Each project is designed to be technically robust, socially responsible, environmentally sound, and investment-ready from early feasibility through long-term monitoring and credit issuance.
          </p>
        </section>

        {/* What Defines the Framework */}
        <section className="mb-10">
          <h3 className="font-serif text-xl font-semibold text-primary mb-4">What Defines the Framework</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">1. Structured Phase-Based Delivery</h4>
              <p className="text-foreground leading-relaxed">
                Projects are implemented across clearly defined lifecycle phases, including initiation, design, implementation, monitoring, and long-term stewardship. Defined controls ensure risk management, quality assurance, stakeholder engagement, and compliance are maintained throughout.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">2. Alignment with International Carbon Standards</h4>
              <p className="text-foreground leading-relaxed mb-3">
                Carbon, community, and biodiversity requirements are embedded from the outset to ensure alignment with:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-1 ml-4">
                <li>Verra VCS methodologies</li>
                <li>CCB Gold safeguards</li>
                <li>SD VISta sustainable development outcomes</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-3">
                This integrated approach strengthens validation, verification, and long-term market credibility.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">3. Governance-Embedded Execution</h4>
              <p className="text-foreground leading-relaxed mb-3">
                Governance mechanisms are integrated into project implementation, including:
              </p>
              <ul className="list-disc list-inside text-foreground space-y-1 ml-4">
                <li>Free, Prior and Informed Consent</li>
                <li>Environmental and social safeguards</li>
                <li>Grievance and whistleblower mechanisms</li>
                <li>Anti-corruption controls</li>
                <li>Double-counting prevention systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lifecycle Coverage */}
        <section className="mb-10">
          <h3 className="font-serif text-xl font-semibold text-primary mb-4 pb-2 border-b border-border">
            Lifecycle Coverage
          </h3>
          <p className="text-foreground leading-relaxed mb-6">
            The framework governs the full carbon project lifecycle:
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-1">Project Origination & Feasibility</h4>
              <p className="text-foreground leading-relaxed">
                Baseline assessments, risk screening, stakeholder mapping, and safeguard planning.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Design & Standards Alignment</h4>
              <p className="text-foreground leading-relaxed">
                Carbon accounting design, biodiversity and community co-benefit integration, and methodology alignment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Implementation & Community Engagement</h4>
              <p className="text-foreground leading-relaxed">
                Restoration activities, livelihood support initiatives, FPIC maintenance, and local capacity building.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Monitoring, Reporting & Verification</h4>
              <p className="text-foreground leading-relaxed">
                Technology-enabled MRV using satellite imagery, GIS systems, field measurements, and structured data management.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Issuance & Long-Term Stewardship</h4>
              <p className="text-foreground leading-relaxed">
                Registry coordination, transparent claims management, ongoing monitoring, and adaptive project management.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="mb-10">
          <h3 className="font-serif text-xl font-semibold text-primary mb-4 pb-2 border-b border-border">
            Why It Matters to Investors & Partners
          </h3>
          <ul className="list-disc list-inside text-foreground space-y-2 ml-4">
            <li>Reduced delivery and compliance risk through structured execution</li>
            <li>Higher validation and verification confidence</li>
            <li>Clear accountability and decision-making pathways</li>
            <li>Scalable model for long-term nature-based assets</li>
            <li>Strong alignment with voluntary carbon market integrity expectations</li>
          </ul>
        </section>

        {/* Concluding Statement */}
        <section className="text-center py-10 border-t-2 border-primary">
          <p className="font-serif text-xl font-bold text-primary mb-4">
            Built for Scale. Governed for Integrity. Designed for Impact.
          </p>
          <p className="text-foreground leading-relaxed max-w-3xl mx-auto">
            The Integrated Carbon Project Delivery Framework ensures that every project delivers measurable climate benefits, meaningful community outcomes, and verifiable biodiversity impact while meeting the expectations of investors, registries, auditors, and stakeholders.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDelivery;
