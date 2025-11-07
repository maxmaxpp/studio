import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import CreativeProcessSection from "@/components/sections/creative-process";
import ServicesSection from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 space-y-24 md:space-y-32">
      <AboutSection />
      <ServicesSection />
      <CreativeProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
