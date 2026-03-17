import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/duopro-logo.png";

const serviceAreas = "Amawalk, Ardsley, Ardsley on Hudson, Armonk, Bedford, Bedford Hills, Briarcliff Manor, Bronxville, Chappaqua, Cortlandt Manor, Cross River, Croton on Hudson, Dobbs Ferry, Eastchester, Elmsford, Goldens Bridge, Harrison, Hartsdale, Hastings on Hudson, Irvington, Katonah, Larchmont, Mamaroneck, Millwood, Mount Kisco, North Salem, Pleasantville, Pound Ridge, Purchase, Rye, Rye Brook, Scarsdale, Sleepy Hollow, Somers, South Salem, Tarrytown, Thornwood, Waccabuc, West Harrison, White Plains, and Yorktown Heights.";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground/70 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src={logo} alt="DuoPro Painting" className="h-14 w-auto mb-4 rounded" />
          <p className="text-sm leading-relaxed mb-4">
            Professional painting services for residential and commercial properties in Westchester County, NY.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/duopropainting" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.facebook.com/duopropainting" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
          <div className="space-y-3 text-sm">
            <a href="#hero" className="block hover:text-primary transition-colors">Home</a>
            <a href="#services" className="block hover:text-primary transition-colors">Services</a>
            <a href="/service-areas" className="block hover:text-primary transition-colors">Service Areas</a>
            <a href="#contact" className="block hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">Services</h4>
          <div className="space-y-3 text-sm">
            <p>Interior Painting</p>
            <p>Exterior Painting</p>
            <p>Cabinet Refinishing</p>
            <p>Deck Refinishing</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-secondary-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href="tel:9143084290" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" />
              (914) 308-4290
            </a>
            <a href="mailto:duopropainting@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" />
              duopropainting@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              Westchester County, NY
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-secondary-foreground/10">
        <p className="text-xs text-center mb-4 leading-relaxed">
          <span className="font-bold text-secondary-foreground/80">Service Areas:</span>{" "}
          {serviceAreas}
        </p>
        <p className="text-center text-xs">
          © {new Date().getFullYear()} DuoPro Painting & Restoration LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
