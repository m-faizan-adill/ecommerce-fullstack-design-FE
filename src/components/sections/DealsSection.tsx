"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { dealProducts } from "@/lib/data";

function useCountdown(targetSeconds: number) {
  const [time, setTime] = useState(targetSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / 86400);
  const hours = Math.floor((time % 86400) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return { days, hours, minutes, seconds };
}

const discounts = [-25, -15, -40, -25, -25];

export default function DealsSection() {
  const { days, hours, minutes, seconds } = useCountdown(
    4 * 86400 + 13 * 3600 + 34 * 60 + 56
  );

  const timeBlocks = [
    { label: "Days", value: days },
    { label: "Hour", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <section className="py-4 lg:px-8">
      <div className="bg-[#FFFFFF] md:border border-gray-200 rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Left Side - stacks on top on mobile */}
          <div className="flex lg:flex-col flex-row items-start justify-between lg:justify-start gap-3 p-5 border border-[#E0E0E0] lg:w-65 lg:shrink-0">
            <div>
              <h2 className="font-semibold text-gray-800 text-sm">Deals and offers</h2>
              <p className="text-xs text-gray-500">Electronics equipments</p>
            </div>

            {/* Timer */}
            <div className="flex gap-2">
              {timeBlocks.map((block) => (
                <div key={block.label} className="text-center">
                  <div className="bg-gray-700 text-white text-xs font-semibold w-10 h-10 flex flex-col items-center justify-center rounded">
                    <span className="text-sm leading-none">
                      {String(block.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] leading-none opacity-80">
                      {block.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Products - single scrollable row always */}
          <div className="flex overflow-x-auto scrollbar-hide flex-1">
            {dealProducts.slice(0, 5).map((product, i) => (
              <div
                key={product.id}
                className="min-w-36 lg:flex-1 flex flex-col items-center justify-center py-5 px-3 border border-[#E0E0E0] cursor-pointer group transition-colors duration-200 hover:bg-[#F5F8FF] hover:border-[#0D6EFD]"
              >
                <div className="relative w-20 h-20 mb-3 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs text-gray-700 text-center group-hover:text-[#0D6EFD] transition-colors duration-200">{product.name}</p>
                <span className="mt-2 text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full font-medium transition-all duration-200 group-hover:bg-red-500 group-hover:text-white">
                  {discounts[i]}%
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}