import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const expertiseDropdown = [
  { label: "Carbon Asset Development and Fund Management", path: "/expertise/carbon-asset-development" },
  { label: "Sustainable Agriculture", path: "/expertise/sustainable-agriculture" },
  { label: "Sustainable Forestry and Land Use", path: "/expertise/sustainable-forestry" },
  { label: "Plastic Waste Collection and Recycling", path: "/expertise/plastic-waste-recycling" },
  { label: "Integrated Waste Management", path: "/expertise/integrated-waste-management" },
  { label: "GIS and Remote Sensing", path: "/expertise/gis-remote-sensing" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Approach", path: "/our-approach" },
  { label: "Our Expertise", path: "/our-expertise", dropdown: expertiseDropdown },
  { label: "Governance, Risk & Safeguards", path: "/governance" },
  { label: "Project Delivery Framework", path: "/project-delivery" },
  { label: "Ongoing Projects", path: "/ongoing-projects" },
  { label: "Our Team", path: "/our-team" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Mobile toggle */}
        <div className="flex items-center justify-between lg:hidden py-3">
          <span className="font-serif text-sm font-semibold text-primary">Navigation</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center justify-center flex-wrap gap-0" ref={dropdownRef}>
          {navItems.map((item) => (
            <div key={item.path} className="relative">
              {item.dropdown ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`inline-flex items-center gap-1 px-3 py-4 text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.path || location.pathname.startsWith("/expertise")
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {openDropdown === item.path && (
                    <div className="absolute left-0 top-full bg-background border border-border shadow-lg min-w-[320px] z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`block px-5 py-3 text-sm transition-colors hover:bg-secondary ${
                            location.pathname === sub.path
                              ? "text-primary font-medium bg-secondary"
                              : "text-foreground"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`px-3 py-4 text-sm font-medium transition-colors hover:text-primary block ${
                    location.pathname === item.path
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-3 py-3 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-6">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-3 py-2 text-sm transition-colors hover:text-primary ${
                          location.pathname === sub.path ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
