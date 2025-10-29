import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AccelerationSection from "@/components/AccelerationSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AccelerationSection />
      <CTASection />
    </main>
  );
};

export default Index;
