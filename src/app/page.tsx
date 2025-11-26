import HeroSection from "@/components/sections/hero";
import ContactSection from "@/components/sections/contact";
import WorkflowSection from "@/components/sections/workflow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <WorkflowSection />
      <ContactSection />
    </div>
  );
}
