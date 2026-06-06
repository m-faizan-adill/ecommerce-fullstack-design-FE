"use client";

import Button from "@/components/ui/Button";

export default function PromoBanner() {
  return (
    <div className="relative overflow-hidden bg-[#005ADE] rounded-xl px-7 py-6 text-[#FFFFFF] mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-xs min-h-26">

      <div
        className="absolute top-0 left-0 h-full w-[60%] sm:w-[58%] md:w-[62%] bg-[#237CFF] pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)"
        }}
      />

      <div className="flex flex-col z-10 max-w-xl md:max-w-2xl">
        <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.2px] leading-tight">
          Super discount on more than 100 USD
        </h3>
        <p className="text-sm md:text-base font-normal text-[#FFFFFF]/80 mt-1 leading-relaxed">
          Have you ever finally just write dummy info
        </p>
      </div>

      <Button
        className="z-10 bg-[#FF9017] hover:bg-[#E07A0B] text-[#FFFFFF] font-medium text-sm px-6 py-2.5 rounded-lg shadow-xs transition-all duration-200 shrink-0 border-none md:mr-4 active:scale-[0.98]"
      >
        Shop now
      </Button>
    </div>
  );
}