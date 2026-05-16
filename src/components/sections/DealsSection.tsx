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
  const { days, hours, minutes, seconds } = useCountdown(4 * 86400 + 13 * 3600 + 34 * 60 + 56);

  const timeBlocks = [
    { label: "Days", value: days },
    { label: "Hour", value: hours },
    { label: "Min", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <section className="px-4 lg:px-6 py-4">
      <div className="bg-white border border-gray-200 rounded p-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-3">
          <div>
            <h2 className="font-semibold text-gray-800">Deals and offers</h2>
            <p className="text-xs text-gray-500">Hygiene equipments</p>
          </div>
          <div className="flex gap-2">
            {timeBlocks.map((block) => (
              <div key={block.label} className="text-center">
                <div className="bg-gray-800 text-white text-sm font-bold w-10 h-10 flex items-center justify-center rounded">
                  {String(block.value).padStart(2, "0")}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{block.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {dealProducts.map((product, i) => (
            <div key={product.id} className="shrink-0 w-36 text-center">
              <div className="relative w-full h-28 mb-2 bg-gray-50 rounded overflow-hidden">
                <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
              </div>
              <p className="text-xs text-gray-700 truncate">{product.name}</p>
              <span className="inline-block mt-1 bg-red-100 text-red-500 text-xs px-2 py-0.5 rounded">
                {discounts[i]}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
