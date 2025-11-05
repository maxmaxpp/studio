import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import ServicesSection from "@/components/sections/services";
import TestimonialsSection from "@/components/sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24 space-y-16 md:space-y-24">
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
