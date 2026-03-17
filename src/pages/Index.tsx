import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyDuoProSection from "@/components/WhyDuoProSection";
import StrengthsSection from "@/components/StrengthsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HowItWorksSection />
      <WhyDuoProSection />
      <StrengthsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
