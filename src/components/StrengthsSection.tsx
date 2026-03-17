import { Award, Shield, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: Award,
    title: "Professionalism",
    description: "Expert team, reliable service, and meticulous attention to detail on every project.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Fully licensed & insured, adhering to national and local building regulations.",
  },
  {
    icon: BookOpen,
    title: "Experience",
    description: "Years of expertise in residential and commercial painting throughout Westchester.",
  },
];

const StrengthsSection = () => {
  return (
    <section className="section-dark section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-label">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 text-section-dark-foreground tracking-tight">
            The DuoPro <span className="text-primary">Difference</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center p-8 rounded-2xl border border-section-dark-foreground/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-section-dark-foreground">{s.title}</h3>
              <p className="text-section-dark-foreground/60 leading-relaxed text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection;
