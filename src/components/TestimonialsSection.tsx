import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Our house sold before it even hit the market at a price way above what we thought we could get. The paint job went a long way in making that happen.",
    name: "Sarah M.",
    role: "Homeowner, Scarsdale",
    initial: "S",
  },
  {
    text: "DuoPro is professional, knowledgeable, reasonably priced, and their team does an excellent job every time we call them.",
    name: "James K.",
    role: "Property Manager, White Plains",
    initial: "J",
  },
  {
    text: "Great to work with! Love that they give opinions on what types of colors will look great. It's nice to have that professional direction!",
    name: "Linda R.",
    role: "Homeowner, Armonk",
    initial: "L",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-label">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
