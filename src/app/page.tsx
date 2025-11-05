import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { BackedBy } from "@/components/backed-by";
import { FeaturesSection } from "@/components/features-section";
import { TeamSection } from "@/components/team-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div className="font-helvetica">
      <div className="sm:px-8 md:px-18">
        <Header />
      </div>
      <div className="px-8 md:px-18">
        <HeroSection />
        <BackedBy />
        <FeaturesSection />
        <TeamSection />
        <PricingSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
