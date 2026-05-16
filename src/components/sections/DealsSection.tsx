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
    <section className="lg:px-6 py-6">
      <div className="bg-white md:border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">

          {/* Left Side */}
          <div className="p-5 flex flex-row md:flex-col md:items-start md:justify-start md:gap-0 items-center justify-between gap-3 border-b lg:border-b-0 lg:border-r border-gray-200">
            <div className="">
              <h2 className="font-semibold text-gray-800 text-sm">
                Deals and offers
              </h2>
              <p className="text-xs text-gray-500">
                Hygiene equipments
              </p>
            </div>

            {/* Timer */}
            <div className="flex gap-2 md:mt-4">
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

          {/* Right Side Products */}
          <div className="flex overflow-x-auto scrollbar-hide">
            {dealProducts.slice(0, 5).map((product, i) => (
              <div
                key={product.id}
                className="min-w-40 flex flex-col items-center justify-center py-5 px-3 border-r border-b border-gray-200 last:border-r-0"
              >
                {/* Product Image */}
                <div className="relative w-20 h-20 mb-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Product Name */}
                <p className="text-xs text-gray-700 text-center">
                  {product.name}
                </p>

                {/* Discount */}
                <span className="mt-2 text-xs bg-red-100 text-red-500 px-3 py-1 rounded-full font-medium">
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