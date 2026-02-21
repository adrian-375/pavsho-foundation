const ContactUs = () => {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Contact Us</h1>
        <div className="space-y-4 text-foreground leading-relaxed">
          <p>
            <span className="font-semibold">Telephone:</span>{" "}
            <a href="tel:+918310624214" className="text-primary hover:underline">+91-8310624214</a>
          </p>
          <div>
            <span className="font-semibold">Address:</span>
            <p className="mt-1">
              Asare,<br />
              #5, 2nd Floor, 7th Main Road<br />
              Shankar Nagar, Bangalore – 560096
            </p>
          </div>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:info.pavshoenviro@gmail.com" className="text-primary hover:underline">
              info.pavshoenviro@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
