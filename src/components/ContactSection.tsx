import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Request submitted!", description: "We'll get back to you as soon as possible." });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge-label">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 tracking-tight">
            Get Your <span className="text-primary">Free Quote</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ready to transform your space? Contact us today for a free estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-muted rounded-2xl p-6 space-y-6">
              <a href="tel:9143084290" className="flex items-center gap-4 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Phone</p>
                  <p className="font-bold">(914) 308-4290</p>
                </div>
              </a>
              <a href="mailto:duopropainting@gmail.com" className="flex items-center gap-4 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Email</p>
                  <p className="font-bold text-sm">duopropainting@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Location</p>
                  <p className="font-bold">Westchester County, NY</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-secondary-foreground rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Why Choose DuoPro?</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/70">
                <li>✓ Free, no-obligation estimates</li>
                <li>✓ Licensed & fully insured</li>
                <li>✓ Premium quality paints</li>
                <li>✓ 100% satisfaction guaranteed</li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 bg-muted rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block uppercase tracking-wider">Name *</label>
                <Input required placeholder="Your name" className="bg-background border-border" />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block uppercase tracking-wider">Email *</label>
                <Input required type="email" placeholder="your@email.com" className="bg-background border-border" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block uppercase tracking-wider">Phone *</label>
                <Input required type="tel" placeholder="(914) 000-0000" className="bg-background border-border" />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground mb-1.5 block uppercase tracking-wider">Subject</label>
                <Input placeholder="Subject" className="bg-background border-border" />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground mb-1.5 block uppercase tracking-wider">Message *</label>
              <Textarea required rows={5} placeholder="Tell us about your project..." className="bg-background border-border" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold gap-2 shadow-lg shadow-primary/25" disabled={loading}>
              {loading ? "Submitting..." : "Submit Request"} <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
