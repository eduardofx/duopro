import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import portfolioDeck from "@/assets/portfolio-deck.webp";

const WhyDuoProSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[550px]">
        <div
          className="bg-cover bg-center min-h-[350px] lg:min-h-full"
          style={{ backgroundImage: `url(${portfolioDeck})` }}
        />
        <div className="section-dark section-padding flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <span className="badge-label">Why DuoPro</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4 mb-6 text-section-dark-foreground tracking-tight">
              The Leading Painting Contractor in
              <span className="text-primary"> Westchester County</span>
            </h2>
            <p className="text-section-dark-foreground/60 mb-8 leading-relaxed">
              Our comprehensive interior painting, exterior painting, and spray painting services have
              transformed homes and businesses throughout Westchester, NY for years. Whether you need
              residential painting in Scarsdale, commercial painting in White Plains, or deck refinishing
              in Armonk — our experienced team delivers.
            </p>

            <div className="flex items-center gap-8 mb-8">
              <div>
                <p className="text-3xl font-black text-primary">500+</p>
                <p className="text-xs text-section-dark-foreground/50">Satisfied Customers</p>
              </div>
              <div className="h-12 w-px bg-section-dark-foreground/15" />
              <div>
                <p className="text-3xl font-black text-primary">10+</p>
                <p className="text-xs text-section-dark-foreground/50">Years Experience</p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-bold shadow-lg shadow-primary/25"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get A Free Estimate <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyDuoProSection;
