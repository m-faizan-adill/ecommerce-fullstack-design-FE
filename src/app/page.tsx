import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DealsSection from "@/components/sections/DealsSection";
import CategorySection from "@/components/sections/CategorySection";
import MobileCategorySection from "@/components/sections/MobileCategorySection";
import InquiryBanner from "@/components/sections/InquiryBanner";
import RecommendedSection from "@/components/sections/RecommendedSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SuppliersSection from "@/components/sections/SuppliersSection";
import { homeOutdoorProducts, electronicsProducts } from "@/lib/data";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto">
        <HeroSection />
        <DealsSection />

        {/* Desktop category sections */}
        <div className="hidden lg:block">
          <CategorySection
            title="Home and outdoor"
            bannerImage="/assets/Image/backgrounds/Group 982.png"
            bannerLabel="Home and outdoor"
            items={homeOutdoorProducts}
            cols={4}
          />
          <CategorySection
            title="Consumer electronics and gadgets"
            bannerImage="/assets/Image/backgrounds/Mask group.png"
            bannerLabel="Consumer electronics"
            items={electronicsProducts}
            cols={4}
          />
        </div>

        {/* Mobile category sections */}
        <div className="lg:hidden bg-white">
          <MobileCategorySection title="Home and outdoor" items={homeOutdoorProducts} />
          <div className="border-t border-gray-100" />
          <MobileCategorySection title="Consumer electronics" items={electronicsProducts} />
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

