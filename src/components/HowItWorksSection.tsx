import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Get a Quote",
    description: "Contact us to discuss your project. We'll provide a quick, fair, and free estimate.",
  },
  {
    step: "02",
    title: "We Paint",
    description: "Our team gets to work with meticulous attention to detail using premium paints.",
  },
  {
    step: "03",
    title: "Enjoy",
    description: "Love your beautifully finished space. Satisfaction guaranteed on every project.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-label">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">
            Simple <span className="text-primary">3-Step</span> Process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative text-center p-8 rounded-2xl bg-muted border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-6xl font-black text-primary/10 mb-4">{s.step}</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
