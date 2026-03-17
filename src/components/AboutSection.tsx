import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import portfolioInterior from "@/assets/portfolio-interior.webp";

const highlights = [
  "Licensed & Insured",
  "Premium Quality Paints",
  "Free Estimates",
  "Satisfaction Guaranteed",
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={portfolioInterior} alt="DuoPro interior work" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl hidden md:block">
              <p className="text-4xl font-black">10+</p>
              <p className="text-sm font-medium opacity-90">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-label">About DuoPro</span>
            <h2 className="text-3xl md:text-4xl font-black mt-4 mb-6 tracking-tight">
              Professional Painters in
              <span className="text-primary"> Westchester County</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DuoPro Painting & Restoration LLC is a locally owned and operated painting business
              proudly serving Westchester County, NY. Our experienced and extensively-trained team
              uses only the highest quality paints to ensure superb coverage and premium finish.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We serve communities including Scarsdale, White Plains, Armonk, Briarcliff Manor,
              Bronxville, Chappaqua, Larchmont, Rye, Purchase, and many more.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
