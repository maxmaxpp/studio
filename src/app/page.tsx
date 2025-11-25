import HeroSection from "@/components/sections/hero";
import PortfolioSection from "@/components/sections/portfolio";
import TestimonialsSection from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact";
import CreativeProcessSection from "@/components/sections/creative-process";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <CreativeProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
