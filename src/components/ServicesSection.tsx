import { ArrowRight, Paintbrush, Home, Hammer, Droplets } from "lucide-react";
import { motion } from "framer-motion";
import portfolioInterior from "@/assets/portfolio-interior.webp";
import portfolioDeck from "@/assets/portfolio-deck.webp";

const services = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    description: "Walls, ceilings, trim, baseboards, doors, windows, mantels, crown molding and more.",
    image: portfolioInterior,
  },
  {
    icon: Home,
    title: "Exterior Painting",
    description: "Siding, exterior trim, sheds, garages, guest houses, pressure wash and more.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
  {
    icon: Droplets,
    title: "Cabinet Refinishing",
    description: "Kitchen & bathroom cabinets — expert refinishing for a fresh, modern look.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    icon: Hammer,
    title: "Deck Refinishing & Repairs",
    description: "Interior & exterior deck refinishing, carpentry repair, staining and sealing.",
    image: portfolioDeck,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-label">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">
            What We <span className="text-primary">Do Best</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Professional painting services for residential and commercial properties
            throughout Westchester County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer h-80"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
              <div className="absolute top-6 left-6">
                <div className="w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-3">{s.description}</p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
