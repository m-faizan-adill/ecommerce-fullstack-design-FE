import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Breadcrumbs, Rating, Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import SupplierCard from "@/features/products/components/SupplierCard";

const MOCK_PRODUCT_DETAIL = {
  id: "gopro-hero-6",
  name: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
  price: 98.00,
  oldPrice: 129.95,
  rating: 4.5,
  reviewsCount: 32,
  soldCount: 154,
  availability: "In stock",
  supplier: {
    name: "Guanjoi Trading LLC",
    country: "Germany, Berlin",
    verified: true,
    shippingWorldwide: true,
  },
  pricingTiers: [
    { pcs: "50-100 pcs", price: 98.00 },
    { pcs: "100-700 pcs", price: 90.00 },
    { pcs: "700+ pcs", price: 78.00 },
  ],
  specs: {
    Type: "Classic shoes",
    Material: "Plastic material",
    Design: "Modern nice",
    Model: "#8786867",
    Certificate: "ISO-898921212",
    Size: "34mm x 450mm x 19mm",
    Memory: "360B RAM",
  },
  features: [
    "Some great feature name here",
    "Lorem ipsum dolor sit amet, consectetur",
    "Duis aute irure dolor in reprehenderit",
    "Some great feature name here"
  ],
  images: ["/images/polo-main.png", "/images/polo-1.png", "/images/polo-2.png"],
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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

      {/* Main Container */}
      <main className="max-w-7xl mx-auto min-h-screen py-2 px-4 sm:px-6 lg:px-8">

        {/* Breadcrumbs */}
        <div className="mb-4">
          <Breadcrumbs />
        </div>

        {/* Product Workspace Panel */}
        <div className="bg-[#FFFFFF] border border-gray-200 rounded-xl p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

          {/* LEFT COLUMN: Gallery View (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {/* Main Primary Banner Image */}
            <div className="border border-gray-200 rounded-lg p-4 relative aspect-square w-full flex items-center justify-center bg-[#FFFFFF]">
              <Image
                src="/images/polo-main.png"
                alt={product.name}
                width={340}
                height={340}
                className="object-contain"
                priority
              />
            </div>

            {/* Thumbnails Rows Array */}
            <div className="grid grid-cols-6 gap-2">
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

          {/* MIDDLE COLUMN: Core Info & Metrics (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col">

            {/* Availability Badge */}
            <div className="flex items-center gap-1 text-[#00B517] text-sm font-medium mb-1.5">
              <span>✓</span> {product.availability}
            </div>

            {/* Title Block */}
            <h1 className="text-xl lg:text-2xl font-semibold text-[#1C1C1C] leading-snug mb-3">
              {product.name}
            </h1>

            {/* Rating / Meta Insights Row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#8B96A5] mb-4">
              <div className="flex items-center text-[#FF9017]">
                <Rating rating={product.rating} showValue={false} />
                <span className="ml-1.5 font-medium">{product.rating}</span>
              </div>
              <span className="text-[#787A80]">•</span>
              <div className="flex items-center gap-1">
                <span className="material-icons text-base text-[#8B96A5]">💬</span>
                <span>{product.reviewsCount} reviews</span>
              </div>
              <span className="text-[#787A80]">•</span>
              <div className="flex items-center gap-1">
                <span className="material-icons text-base text-[#8B96A5]">🛍️</span>
                <span>{product.soldCount} sold</span>
              </div>
            </div>

            {/* Price Tier Segment Block (Exact match with screenshot ranges) */}
            <div className="bg-[#FFF0DF] p-3 grid grid-cols-3 gap-2 mb-4 rounded-r-md">
              {product.pricingTiers.map((tier, index) => (
                <div key={index} className="flex flex-col border-r last:border-0 border-orange-200/60 pl-2">
                  <span className="text-sm font-semibold text-[#FA3434]">${tier.price.toFixed(2)}</span>
                  <span className="text-xs text-[#606060]">{tier.pcs}</span>
                </div>
              ))}
            </div>

            {/* Specifications Matrix Metadata Section */}
            <div className="flex flex-col gap-2.5 text-sm mb-5 border-b border-gray-100 pb-5">
              <div className="grid grid-cols-3 text-gray-500"><span className="text-[#8B96A5]">Price:</span> <span className="col-span-2 text-[#505050] font-medium">Negotiable</span></div>
              <div className="grid grid-cols-3 text-gray-500"><span className="text-[#8B96A5]">Type:</span> <span className="col-span-2 text-[#505050]">{product.specs.Type}</span></div>
              <div className="grid grid-cols-3 text-gray-500"><span className="text-[#8B96A5]">Material:</span> <span className="col-span-2 text-[#505050]">{product.specs.Material}</span></div>
              <div className="grid grid-cols-3 text-gray-500"><span className="text-[#8B96A5]">Design:</span> <span className="col-span-2 text-[#505050]">{product.specs.Design}</span></div>
            </div>
          </div>

          {/* RIGHT COLUMN: Supplier Details Card Widget (3 Columns) */}
          <div className="shrink-0 lg:sticky lg:top-4">            <SupplierCard />
          </div>

        </div>

        {/* BOTTOM SECTION: Detailed Layout Information Tabs Panel */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Main Description & Technical Specs Area */}
          <div className="lg:col-span-3 bg-[#FFFFFF] border border-gray-200 rounded-xl p-6">

            {/* Tabs Headers Minimal Mockup Row */}
            <div className="flex items-center gap-6 border-b border-gray-200 pb-3 mb-5 text-sm font-medium text-[#8B96A5]">
              <span className="text-[#0070F3] border-b-2 border-[#0070F3] pb-3 -mb-3.5 cursor-pointer">Description</span>
              <span className="hover:text-gray-800 cursor-pointer">Reviews</span>
              <span className="hover:text-gray-800 cursor-pointer">Shipping</span>
              <span className="hover:text-gray-800 cursor-pointer">About seller</span>
            </div>

            {/* Description Body Paragraphs */}
            <p className="text-[#505050] text-sm leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Structured Specifications Grid Mapping */}
            <div className="border border-gray-200 rounded-lg overflow-hidden max-w-lg mb-6">
              {Object.entries(product.specs).map(([key, val], index) => (
                <div key={key} className={cn(
                  "grid grid-cols-3 text-sm p-2.5",
                  index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F7FAFC]"
                )}>
                  <span className="text-[#505050] font-medium pl-2">{key}</span>
                  <span className="col-span-2 text-[#606060]">{val}</span>
                </div>
              ))}
            </div>

            {/* Features Checklists Array list */}
            <div className="flex flex-col gap-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-[#505050]">
                  <span className="text-gray-400">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Sticky Panel: "You may like" Section */}
          <div className="bg-[#FFFFFF] border border-gray-200 rounded-xl p-4 flex flex-col gap-4 h-max">
            <h3 className="font-semibold text-base text-[#1C1C1C]">You may like</h3>

            {/* Map over related layout cards arrays */}
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
      </main>

      <Footer />
    </>
  );
}