import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    title: "Structured Framework",
    description: "Pavsho Enviro Services adopts a structured, standards-aligned framework for the design, development, and implementation of environmental asset projects, including AFOLU carbon initiatives, plastic waste recovery and recycling programmes, and integrated waste management solutions.",
  },
  {
    title: "Standards Alignment",
    description: "From early-stage feasibility assessments and baseline studies through project registration, implementation, long-term monitoring, and credit issuance, each phase is guided by approved methodologies, rigorous governance systems, and embedded environmental and social safeguards.",
  },
  {
    title: "Transparent Monitoring",
    description: "Our approach ensures disciplined execution, transparent monitoring, and credible reporting, maintaining full alignment with international best practices and evolving voluntary environmental market integrity expectations.",
  },
];

const OurApproach = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Our Approach</h1>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="p-6 border border-border bg-card"
              style={{
                transitionDelay: `${i * 150}ms`,
                borderRadius: "var(--radius)",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />}
                  {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />}
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-primary mb-3">{pillar.title}</h3>
              <p className="text-foreground leading-relaxed text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
