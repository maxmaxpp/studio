import HeroSection from "@/components/sections/hero";
import TestimonialsSection from "@/components/sections/testimonials";
import WorkflowSection from "@/components/sections/workflow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <WorkflowSection />
      <TestimonialsSection />
    </div>
  );
}
