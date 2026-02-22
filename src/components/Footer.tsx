const Footer = () => {
  return (
    <>
      {/* Standards Band */}
      <section className="py-12 px-6 bg-secondary border-t border-border">
        <div className="container mx-auto text-center">
          <p className="font-serif text-lg font-semibold text-primary mb-3 tracking-wide">
            Aligned With Leading International Standards
          </p>
          <p className="text-muted-foreground text-sm tracking-widest">
            VCS &nbsp;|&nbsp; CCB &nbsp;|&nbsp; SD VISta
          </p>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Pavsho Enviro Services</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">Get social with us</p>
              <p className="text-primary-foreground/70 text-sm italic mb-6">
                Investor discussions and data room access available upon request.
              </p>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                We provide end-to-end technical, advisory, and project support services for the design, development, and long-term management of high-integrity carbon projects across agriculture, forestry, and land-use sectors.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-primary-foreground/80">
                <p>
                  <span className="font-medium text-primary-foreground">Telephone:</span>{" "}
                  <a href="tel:+918310624214" className="hover:text-primary-foreground transition-colors">
                    +91-8310624214
                  </a>
                </p>
                <div>
                  <span className="font-medium text-primary-foreground">Address:</span>
                  <p className="mt-1">
                    Asare,<br />
                    #5, 2nd Floor, 7th Main Road<br />
                    Shankar Nagar, Bangalore – 560096
                  </p>
                </div>
                <p>
                  <span className="font-medium text-primary-foreground">Email:</span>{" "}
                  <a href="mailto:info.pavshoenviro@gmail.com" className="hover:text-primary-foreground transition-colors">
                    info.pavshoenviro@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-10 pt-6">
            <p className="text-sm text-primary-foreground/60 text-center">
              © 2019 by Pavsho Enviro Services
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
