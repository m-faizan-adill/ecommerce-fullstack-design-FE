import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DealsSection from "@/components/sections/DealsSection";
import CategorySection from "@/components/sections/CategorySection";
import InquiryBanner from "@/components/sections/InquiryBanner";
import RecommendedSection from "@/components/sections/RecommendedSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SuppliersSection from "@/components/sections/SuppliersSection";
import { homeOutdoorProducts, electronicsProducts } from "@/lib/data";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7FAFC]">

      <Header />
      <main className="max-w-7xl mx-auto">
        <HeroSection />
        <DealsSection />

        {/* Desktop category sections */}
        <div>
          <CategorySection
            title="Home and outdoor"
            bannerImage="/assets/Image/backgrounds/Group 969.png"
            items={homeOutdoorProducts}
            cols={4}
          />
          <CategorySection
            title="Consumer electronics and gadgets"
            bannerImage="/assets/Image/backgrounds/image 98.png"
            items={electronicsProducts}
            cols={4}
          />
        </div>

        <InquiryBanner />
        <RecommendedSection />
        <ServicesSection />
        <SuppliersSection />
      </main>

      <Footer />
    </div>
  );
}

