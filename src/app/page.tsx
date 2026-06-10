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
import { Container } from "@/components/ui";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="bg-[#F7FAFC]">
        <Container noPadding>
          <HeroSection />
        </Container>
        <Container noPadding>
          <DealsSection />
        </Container>


        <Container noPadding>
          <CategorySection
            title="Home and outdoor"
            bannerImage="/assets/Image/backgrounds/Group 969.png"
            items={homeOutdoorProducts}
          />
          <CategorySection
            title="Consumer electronics and gadgets"
            bannerImage="/assets/Image/backgrounds/image 98.png"
            items={electronicsProducts}
          />
        </Container>

        <Container>
          <InquiryBanner />
          <RecommendedSection />
          <ServicesSection />
          <SuppliersSection />
        </Container>
      </div>

      <Footer />
      {/* <Header />

      <Container noPadding className="bg-[#F7FAFC]">
        <HeroSection />
        <DealsSection />

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

      </Container>
      <Footer /> */}
    </div>
  );
}

