import { ArrowRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import portfolioDeck from "@/assets/portfolio-deck.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${portfolioDeck})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/90">
              Westchester County's #1 Painters
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-primary-foreground mb-6 tracking-tight">
            Transform Your
            <br />
            Space With
            <br />
            <span className="text-primary">Expert Painting</span>
          </h1>

          <p className="text-lg text-primary-foreground/60 max-w-lg mb-10 leading-relaxed">
            Interior & exterior painting, deck refinishing, and restoration services.
            Premium quality. Guaranteed satisfaction.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              size="lg"
              className="bg-transparent border border-primary text-primary-foreground hover:bg-primary/20 gap-2 px-8 text-base font-bold"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get A Free Quote <ArrowRight className="h-4 w-4" />
            </Button>
            <a href="tel:9143084290">
              <Button
                size="lg"
                className="bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 text-base font-semibold gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="h-8 w-px bg-primary-foreground/20" />
            <div>
              <span className="text-2xl font-black text-primary-foreground">500+</span>
              <p className="text-xs text-primary-foreground/50">Happy Customers</p>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
