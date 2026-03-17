import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/duopro-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/#hero", isAnchor: true },
    { label: "Services", href: "/#services", isAnchor: true },
    { label: "Gallery", href: "/gallery", isAnchor: false },
    { label: "Service Areas", href: "/service-areas", isAnchor: false },
    { label: "Contact", href: "/#contact", isAnchor: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="DuoPro Painting" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            l.isAnchor ? (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}`}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"}`}
              >
                {l.label}
              </Link>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className={`bg-transparent font-semibold ${scrolled ? "border-foreground/30 text-foreground hover:bg-foreground/10" : "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"}`}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get A Quote
          </Button>
          <a href="tel:9143084290">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-semibold">
              <Phone className="h-3.5 w-3.5" />
              (914) 308-4290
            </Button>
          </a>
        </div>

        <button className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-secondary border-t border-primary-foreground/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            l.isAnchor ? (
              <a
                key={l.label}
                href={l.href}
                className="block text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="block text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            )
          ))}
          <a href="tel:9143084290">
            <Button size="sm" className="w-full bg-primary text-primary-foreground gap-2 mt-2 font-semibold">
              <Phone className="h-3.5 w-3.5" />
              (914) 308-4290
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;