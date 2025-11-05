import AboutSection from "@/components/sections/about";
import PortfolioSection from "@/components/sections/portfolio";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24">
      <AboutSection />
      <PortfolioSection />
    </div>
  );
}
