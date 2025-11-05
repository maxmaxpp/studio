import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import PortfolioSection from "@/components/sections/portfolio";
import ServicesSection from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";
import AnimationWrapper from "@/components/site/animation-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <AnimationWrapper>
        <AboutSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <ServicesSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <PortfolioSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <TestimonialsSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <ContactSection />
      </AnimationWrapper>
    </div>
  );
}
