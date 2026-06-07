import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Breadcrumbs, Rating } from "@/components/ui";
import { cn } from "@/lib/utils";
import SupplierCard from "@/features/products/components/SupplierCard";
import { Tabs } from "@/components/ui/Tabs";
import PromoBanner from "@/features/carts/components/PromoBanner";

const MOCK_PRODUCT_DETAIL = {
  id: "gopro-hero-6",
  name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
  price: 129.95,
  oldPrice: 129.95,
  rating: 4.5,
  reviewsCount: 32,
  soldCount: 154,
  availability: "In stock",
  supplier: {
    name: "Guanjoi Trading LLC",
    country: "Germany",
    verified: true,
    shippingWorldwide: true,
  },
  pricingTiers: [
    { pcs: "50-100 pcs", price: 98.00 },
    { pcs: "100-700 pcs", price: 90.00 },
    { pcs: "700+ pcs", price: 78.00 },
  ],
  specs: {
    Condition: "Brand new",
    Material: "Plastic",
    Category: "Electronics, gadgets",
    "Item num": "23421",
  },
  features: [
    "Some great feature name here",
    "Lorem ipsum dolor sit amet, consectetur",
    "Duis aute irure dolor in reprehenderit",
    "Some great feature name here"
  ],
  images: ["/images/polo-main.png", "/images/polo-1.png", "/images/polo-2.png"],
  description: "Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ..."
};

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const { slug } = await params;
  const product = MOCK_PRODUCT_DETAIL;

  return (
    <>
      <Header />

      {/* Main Container: Mobile par transparent padding distributions */}
      <main className="max-w-7xl mx-auto min-h-screen lg:py-4 px-0 sm:px-6 lg:px-8 bg-gray-50 lg:bg-transparent">

        {/* Breadcrumbs: Hidden on mobile layouts */}
        <div className="hidden lg:block mb-4">
          <Breadcrumbs />
        </div>

        {/* Product Workspace Panel */}
        <div className="bg-[#FFFFFF] lg:border border-gray-200 rounded-none lg:rounded-lg p-0 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 relative">

          {/* LEFT COLUMN: Gallery View / Mobile Slider */}
          <div className="lg:col-span-4 flex flex-col gap-3 w-full">
            {/* Main Primary Image Container */}
            <div className="border-b lg:border border-gray-200 lg:rounded-lg p-4 relative aspect-square w-full flex items-center justify-center bg-[#FFFFFF]">
              <Image
                src="/images/polo-main.png"
                alt={product.name}
                width={340}
                height={340}
                className="object-contain max-h-75 lg:max-h-full"
                priority
              />
              
              {/* Mobile Only: Slider Dots / Arrow Indicators Overlay */}
              <div className="absolute bottom-4 right-4 flex lg:hidden bg-black/30 backdrop-blur-xs rounded-full px-2 py-1 items-center gap-2">
                <button className="text-white text-xs font-semibold opacity-80 px-1">&larr;</button>
                <button className="text-white text-xs font-semibold opacity-80 px-1">&rarr;</button>
              </div>
            </div>

            {/* Desktop Thumbnails Rows Array: Hidden on Mobile Viewports */}
            <div className="hidden lg:grid grid-cols-6 gap-2">
              {[1, 2, 3, 4, 5, 6].map((img, idx) => (
                <div key={idx} className={cn(
                  "border rounded-md p-1 aspect-square relative cursor-pointer hover:border-blue-500 transition bg-[#FFFFFF]",
                  idx === 0 ? "border-gray-800" : "border-gray-200"
                )}>
                  <div className="w-full h-full relative">
                    <Image src="/images/polo-main.png" alt="thumb" fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MIDDLE COLUMN: Core Info & Metrics */}
          <div className="lg:col-span-5 flex flex-col p-4 lg:p-0">

            {/* Availability Badge: Hidden on Mobile viewports */}
            <div className="hidden lg:flex items-center gap-1 text-[#00B517] text-sm font-medium mb-1.5">
              <span>✓</span> {product.availability}
            </div>

            {/* Rating / Meta Insights Row - Order sequence matching */}
            <div className="flex items-center flex-wrap gap-x-2 text-xs sm:text-sm text-[#8B96A5] order-1 lg:order-0 mb-1 lg:mb-4">
              <div className="flex items-center text-[#FF9017]">
                <Rating rating={product.rating} showValue={false} />
                <span className="ml-1 font-semibold text-[#FF9017]">{product.rating}</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <span className="text-xs">💬</span>
                <span>{product.reviewsCount} reviews</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <span className="text-xs">🛍️</span>
                <span>{product.soldCount} sold</span>
              </div>
            </div>

            {/* Product Title Section */}
            <h1 className="text-base lg:text-2xl font-medium lg:font-semibold text-[#1C1C1C] leading-snug order-2 lg:order-0 mb-2 lg:mb-3">
              {product.name}
            </h1>

            {/* Pricing Section Block */}
            <div className="order-3 lg:order-0 mb-4">
              {/* Mobile Price View */}
              <div className="block lg:hidden">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-bold text-[#FA3434]">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-[#8B96A5] font-normal">({product.pricingTiers[0].pcs})</span>
                </div>
              </div>

              {/* Desktop Only Segment Block Ranges */}
              <div className="hidden lg:grid bg-[#FFF0DF] p-3 grid-cols-3 gap-2 rounded-r-md">
                {product.pricingTiers.map((tier, index) => (
                  <div key={index} className="flex flex-col border-r last:border-0 border-orange-200/60 pl-2">
                    <span className="text-sm font-semibold text-[#FA3434]">${tier.price.toFixed(2)}</span>
                    <span className="text-xs text-[#606060]">{tier.pcs}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Actions Overlay Grid */}
            <div className="flex lg:hidden items-center gap-2 order-4 mb-5 w-full">
              <button className="flex-1 bg-[#0D6EFD] text-white font-medium py-2 px-4 rounded-md text-sm text-center shadow-xs active:bg-blue-700 transition">
                Send inquiry
              </button>
              <button className="p-2 border border-gray-200 rounded-md flex items-center justify-center text-blue-500 hover:bg-gray-50 shrink-0">
                <span className="text-lg">&hearts;</span>
              </button>
            </div>

            {/* Specifications Matrix Metadata Section */}
            <div className="flex flex-col gap-2 lg:gap-2.5 text-sm order-5 lg:order-0 border-b border-gray-100 pb-4 lg:pb-5">
              <div className="grid grid-cols-3 text-gray-500 lg:hidden"><span className="text-[#8B96A5]">Price:</span> <span className="col-span-2 text-[#505050] font-medium">Negotiable</span></div>
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="grid grid-cols-3 text-gray-500">
                  <span className="text-[#8B96A5]">{key}</span> 
                  <span className="col-span-2 text-[#505050]">{val}</span>
                </div>
              ))}
            </div>

            {/* Mobile Text Summary Summary Paragraph */}
            <div className="block lg:hidden order-6 mt-4">
              <p className="text-sm text-[#505050] leading-relaxed">
                {product.description}
              </p>
              <button className="text-sm text-[#0D6EFD] font-medium mt-1 inline-block">Read more</button>
            </div>
          </div>

          {/* RIGHT COLUMN: Supplier Details Card Widget */}
          <div className="order-7 lg:order-0 p-4 lg:p-0 bg-transparent lg:shrink-0 lg:sticky lg:top-4">
            <SupplierCard />
          </div>

        </div>

        {/* BOTTOM SECTION: Detailed Layout Information Tabs Panel (Hidden on Mobile viewports) */}
        <div className="hidden lg:grid mt-6 grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Tabs
              tabs={["Description", "Reviews", "Shipping"]}
              contents={[
                <div key="desc" className="flex flex-col text-sm">
                  <p className="text-[#505050] leading-relaxed mb-6">{product.description}</p>
                  
                  {/* Detailed Spec Block Table */}
                  <div className="border border-[#E0E2E6] overflow-hidden bg-[#FFFFFF] shadow-xs mb-6">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="grid grid-cols-3 text-sm border-b last:border-b-0 border-[#E0E2E6]">
                        <div className="bg-[#F1F3F5] text-[#4F5D77] p-3 pl-4 font-normal border-r border-[#E0E2E6]">{key}</div>
                        <div className="col-span-2 text-[#1C1C1C] p-3 pl-4 font-normal bg-[#FFFFFF]">{val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2.5">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-[#505050]">
                        <span className="text-[#8B96A5] text-xs">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>,
                <p key="reviews">Customer reviews go here.</p>,
                <p key="shipping">Shipping information goes here.</p>,
              ]}
            />
          </div>

          {/* Right Side Sticky Panel: "You may like" Section */}
          <div className="bg-[#FFFFFF] border border-gray-200 rounded-lg p-4 flex flex-col gap-4 h-max">
            <h3 className="font-semibold text-base text-[#1C1C1C]">You may like</h3>
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-14 h-14 relative border border-gray-100 rounded p-1 shrink-0 bg-[#FFFFFF]">
                  <Image src="/images/polo-main.png" alt="Related item" fill className="object-contain" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-sm font-normal text-[#505050] group-hover:text-blue-600 transition truncate">
                    Men Blazers Sets Elegant Formal
                  </span>
                  <span className="text-sm font-medium text-[#8B96A5]">$7.00 - $99.50</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Products Responsive Carousel Grid Layout */}
        <div className="mt-4 lg:mt-8 bg-[#FFFFFF] lg:border border-gray-200 rounded-none lg:rounded-lg p-4 lg:p-5 shadow-xs">
          <h3 className="font-semibold text-base lg:text-lg text-[#1C1C1C] mb-4">Similar products</h3>

          <div className="flex lg:grid lg:grid-cols-6 gap-3.5 lg:gap-4 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-hide">
            {[
              { id: 1, img: "/images/shorts.png", name: "T-shirts with multiple colors, for men" },
              { id: 2, img: "/images/jacket.png", name: "T-shirts with multiple colors, for men" },
              { id: 3, img: "/images/shorts.png", name: "T-shirts with multiple colors, for men" },
              { id: 4, img: "/images/jacket.png", name: "T-shirts with multiple colors, for men" },
              { id: 5, img: "/images/shorts.png", name: "T-shirts with multiple colors, for men" },
              { id: 6, img: "/images/jacket.png", name: "T-shirts with multiple colors, for men" },
            ].map((prod) => (
              <div key={prod.id} className="flex flex-col gap-2 cursor-pointer group min-w-35 max-w-40 lg:max-w-none">
                {/* Product Box Canvas UI */}
                <div className="w-full aspect-square rounded-md bg-[#F7F7F7] border border-gray-100 flex items-center justify-center p-3">
                  <div className="w-full h-full relative">
                    <Image
                      src="/images/polo-main.png" 
                      alt={prod.name}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                {/* Meta Details */}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1C1C1C]">$10.30</span>
                  <p className="text-xs text-[#505050] font-normal leading-tight mt-0.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {prod.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PromoBanner />
      </main>

      <Footer />
    </>
  );
}