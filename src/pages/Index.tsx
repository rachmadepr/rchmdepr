import { PortfolioHero } from "@/components/PortfolioHero"
import { AwardsSection } from "@/components/AwardsSection"
import { SocialSection } from "@/components/SocialSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <PortfolioHero />
      <AwardsSection />
      <SocialSection />
    </div>
  );
};

export default Index;
