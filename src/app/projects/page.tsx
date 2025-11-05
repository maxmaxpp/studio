import PortfolioSection from '@/components/sections/portfolio';
import AnimationWrapper from '@/components/site/animation-wrapper';

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <AnimationWrapper>
        <PortfolioSection />
      </AnimationWrapper>
    </div>
  );
}
