import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const serviceAreas = [
  "Amawalk", "Ardsley", "Ardsley on Hudson", "Armonk", "Bedford", "Bedford Hills",
  "Briarcliff Manor", "Bronxville", "Chappaqua", "Cortlandt Manor", "Cross River",
  "Croton on Hudson", "Dobbs Ferry", "Eastchester", "Elmsford", "Goldens Bridge",
  "Harrison", "Hartsdale", "Hastings on Hudson", "Irvington", "Katonah", "Larchmont",
  "Mamaroneck", "Millwood", "Mount Kisco", "North Salem", "Pleasantville", "Pound Ridge",
  "Purchase", "Rye", "Rye Brook", "Scarsdale", "Sleepy Hollow", "Somers", "South Salem",
  "Tarrytown", "Thornwood", "Waccabuc", "West Harrison", "White Plains", "Yorktown Heights",
];

const ServiceAreas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-dark pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="badge-label">Where We Work</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 text-section-dark-foreground">
            Service Areas
          </h1>
          <p className="text-section-dark-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
            DuoPro Painting & Restoration LLC proudly serves communities throughout Westchester County, NY.
          </p>
        </div>
      </section>

      {/* Wave */}
      <div className="bg-background">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] block -mt-px">
          <path d="M0,0 C360,60 720,-20 1080,30 C1260,45 1380,40 1440,30 L1440,60 L0,60 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Map */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Westchester County, NY</h2>
            <p className="text-muted-foreground mt-3">
              We provide professional painting services across 40+ communities in Westchester County.
            </p>
          </div>

          <ServiceAreaMap />

          {/* Cities Grid */}
          <div className="text-center mb-10">
            <span className="badge-label">Communities We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">40+ Locations</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
              >
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
            Don't See Your Town?
          </h2>
          <p className="text-section-dark-foreground/60 mb-8">
            We may still be able to help! Contact us today and we'll let you know if we service your area.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
