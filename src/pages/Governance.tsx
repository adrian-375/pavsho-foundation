import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Governance = () => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">
          Governance, Risk & Safeguards
        </h1>
        <p className="text-foreground leading-relaxed mb-4">
          Pavsho Enviro Services operates under a structured governance, risk, and safeguards framework aligned with recognised voluntary carbon market standards and international integrity benchmarks. Ethical conduct, environmental protection, social responsibility, and risk controls are embedded across the full lifecycle of all AFOLU carbon projects.
        </p>
        <p className="text-foreground leading-relaxed mb-12">
          Through defined oversight mechanisms, policy controls, stakeholder engagement processes, Free, Prior and Informed Consent procedures, independent validation systems, and transparent registry tracking, the company upholds high standards of accountability, credibility, and carbon integrity.
        </p>

        {/* Governance & Ethical Conduct */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">
            Governance & Ethical Conduct
          </h2>
          <Accordion type="multiple" className="space-y-2">
            <AccordionItem value="code-of-ethics" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Code of Ethics & Business Conduct
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Pavsho Enviro Services upholds the highest standards of integrity, transparency, and accountability across all operations. This policy guides ethical decision-making, legal compliance, conflict-of-interest management, and responsible conduct throughout project activities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="anti-bribery" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Anti-Bribery & Anti-Corruption Policy
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                The company maintains zero tolerance for bribery, corruption, or unethical influence. Strong compliance controls ensure adherence to international anti-corruption requirements across employees, partners, and third parties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="anti-child-labour" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Anti-Child Labour Policy
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Pavsho Enviro Services strictly prohibits child labour and aligns with recognised international labour standards. All project activities ensure lawful employment practices and appropriate due diligence.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="anti-harassment" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Anti-Sexual Harassment Policy
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                A safe, respectful, and inclusive working environment is maintained across all operations. Confidential reporting channels and non-retaliation safeguards are enforced.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="whistleblower" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Whistleblower Policy
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Secure and confidential reporting mechanisms enable disclosure of unethical or improper conduct. All reports are investigated impartially and promptly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="grievance" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Grievance Redressal Policy
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Accessible and transparent grievance mechanisms are available to stakeholders. Complaints are addressed fairly, confidentially, and without retaliation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Environmental & Social Safeguards */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">
            Environmental & Social Safeguards
          </h2>
          <Accordion type="multiple" className="space-y-2">
            <AccordionItem value="indigenous" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Indigenous Peoples & FPIC
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                The company respects the rights, cultures, and livelihoods of Indigenous Peoples in alignment with recognised international frameworks. Free, Prior and Informed Consent is obtained and maintained where applicable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ess-framework" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Environmental & Social Safeguards Framework
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Environmental protection and social responsibility are integrated into project design and implementation. Safeguards support biodiversity conservation, ecosystem resilience, and community well-being.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="health-safety" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Health, Safety & Welfare
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Proactive risk identification, monitoring systems, and continuous improvement measures ensure safe and dignified working conditions across all project sites.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Risk Management Framework */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary">
            Risk Management Framework
          </h2>
          <p className="text-foreground leading-relaxed mb-6">
            Pavsho Enviro Services applies a precautionary and structured risk management approach tailored to AFOLU carbon interventions. Risks are identified, assessed, and mitigated throughout project development, validation, monitoring, and credit issuance.
          </p>

          <h3 className="font-serif text-lg font-semibold text-primary mb-4">Key Risk Categories</h3>
          <Accordion type="multiple" className="space-y-2">
            <AccordionItem value="additionality" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Additionality & Baseline Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Conservative baseline setting, demonstration of additionality, and independent technical review prior to validation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="permanence" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Permanence & Reversal Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Long-term project design, buffer contributions as required by standards, and active monitoring with adaptive management.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="leakage" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Leakage Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Landscape-level assessments and conservative accounting approaches to address potential displacement of emissions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="mrv" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Measurement, Reporting & Verification Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Approved methodologies, digital monitoring systems, QA/QC procedures, and independent third-party validation and verification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="env-biodiversity" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Environmental & Biodiversity Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Environmental screening, biodiversity safeguards, and ecosystem-based approaches to ensure net positive outcomes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="social-tenure" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Social & Land Tenure Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Land tenure due diligence, FPIC processes, benefit-sharing mechanisms, and grievance systems.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="regulatory" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Regulatory & Host Country Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Alignment with national climate frameworks and transparent avoidance of double claiming.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reputational" className="border border-border">
              <AccordionTrigger className="px-5 py-4 text-sm font-semibold text-foreground hover:text-primary hover:no-underline">
                Reputational & Integrity Risk
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-foreground leading-relaxed">
                Alignment with recognised integrity benchmarks and conservative crediting assumptions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="text-foreground leading-relaxed mt-6">
            Risk oversight is embedded within the company's governance structure and is subject to periodic review and escalation protocols.
          </p>
        </section>

        {/* Double Counting Prevention */}
        <section className="mb-12">
          <h2 className="font-serif text-xl font-bold text-primary mb-4 pb-2 border-b border-border">
            Double Counting Prevention
          </h2>
          <p className="text-foreground leading-relaxed">
            All emission reductions and removals are issued, transferred, and claimed only once. Registry tracking systems, internal controls, and transparent disclosures prevent double issuance, double claiming, and double counting.
          </p>
        </section>

        {/* Carbon Integrity */}
        <section className="mb-12 p-8 bg-secondary border border-border">
          <h2 className="font-serif text-xl font-bold text-primary mb-4">
            Carbon Integrity & Claims Statement
          </h2>
          <div className="text-foreground leading-relaxed space-y-4">
            <p>
              Pavsho Enviro Services is committed to maintaining high standards of environmental integrity, transparency, and accountability in the development and delivery of carbon credits. Emission reductions and removals are designed, implemented, validated, verified, issued, transferred, and retired in accordance with recognised voluntary carbon market standards.
            </p>
            <p>
              Each credit is uniquely identified and tracked through approved registries. Where applicable, corresponding adjustments or national authorisations are transparently disclosed.
            </p>
            <p>
              Environmental and social safeguards, respect for human rights, Indigenous Peoples' rights, FPIC, labour standards, and health and safety requirements are embedded across all project activities.
            </p>
            <p>
              All climate and carbon-related claims are based on verified outcomes and conservative assumptions to prevent overstatement or misrepresentation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Governance;
