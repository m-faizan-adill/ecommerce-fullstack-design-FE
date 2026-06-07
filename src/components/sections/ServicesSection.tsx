import Image from "next/image";

import { InventoryIcon, SearchIcon, SecurityIcon, SendIcon } from "@/assets";

const services = [
  { label: "Source from Industry Hubs", image: "/assets/Image/backgrounds/Group 969.png", icon: <SearchIcon className="w-4 h-4 text-[#1C1C1C]" /> },
  { label: "Customize Your Products", image: "/assets/Image/backgrounds/image 98.png", icon: <InventoryIcon className="w-4 h-4 text-[#1C1C1C]" /> },
  { label: "Fast, reliable shipping by ocean or air", image: "/assets/Image/backgrounds/image 106.png", icon: <SendIcon className="w-4 h-4 text-[#1C1C1C]" /> },
  { label: "Product monitoring and inspection", image: "/assets/Image/backgrounds/image 107.png", icon: <SecurityIcon className="w-4 h-4 text-[#1C1C1C]" /> },
];

export default function ServicesSection() {
  return (
    <section className="px-4 lg:px-8 py-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <h2 className="font-semibold text-lg lg:text-2xl text-[#1C1C1C] mb-5 tracking-tight">
        Our extra services
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <div 
            key={service.label} 
            className="flex flex-col bg-[#FFFFFF] border border-[#E0E2E6] rounded-lg overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-200"
          >
            {/* Top Half: Product / Service Background Image Wrapper */}
            <div className="relative h-28 lg:h-32 w-full bg-[#EAF1F7]">
              <Image 
                src={service.image} 
                alt={service.label} 
                fill 
                className="object-cover group-hover:scale-102 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-black/5" />

              <div className="absolute -bottom-6 right-4 w-12 h-12 bg-[#D1E7FF] border border-[#FFFFFF] rounded-full flex items-center justify-center shadow-xs z-10">
                {service.icon}
              </div>
            </div>

            {/* Bottom Half */}
            <div className="p-4 pt-5 pb-5 bg-[#FFFFFF] flex flex-col justify-start min-h-21">
              <p className="text-sm font-medium text-[#1C1C1C] leading-snug max-w-[85%] pr-2">
                {service.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}