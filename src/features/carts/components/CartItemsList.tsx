"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Select } from "@/components/ui/FormSelect";
import { ArrowIcon } from "@/components/ui/ArrowIcon";
import { CartItem } from "@/types";



const QTY_OPTIONS = Array.from({ length: 10 }, (_, i) => ({
  value: String(i + 1),
  label: `Qty: ${i + 1}`,
}));

interface CartItemsListProps {
  carts: CartItem[];
}

export default function CartItemsList({ carts }: CartItemsListProps) {
  return (
    <div className="lg:col-span-3 bg-[#FFFFFF] border border-[#DEE2E7] rounded-xl p-5 shadow-sm">
      <div className="flex flex-col divide-y divide-[#DEE2E7]">
        {carts.map((item) => (
          <div key={item.id} className="py-5 first:pt-0 last:pb-5 flex flex-col sm:flex-row gap-4 justify-between items-start">
            <div className="flex gap-4">
              <div className="w-20 h-20 border border-[#E0E0E0] rounded-lg p-1.5 flex items-center justify-center bg-[#F7F7F7] shrink-0">
                <div className="w-full h-full relative">
                  <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply" />
                </div>
              </div>

              <div className="flex flex-col">
                <h3 className="font-medium text-base leading-5.5 text-[#1C1C1C] hover:text-blue-600 cursor-pointer max-w-md transition">
                  {item.name}
                </h3>
                <div className="text-base font-normal leading-6 tracking-[-0.2px] text-[#8B96A5] mt-1 space-y-0.5">
                  <p>Size: {item.size}, Color: {item.color}, Material: {item.material}</p>
                  <p>Seller: {item.seller}</p>
                </div>
                
                <div className="flex items-center gap-2 mt-3">
                  <Button variant="outline" size="sm" className="text-[#FA3434] border border-[#DEE2E7] bg-white hover:bg-red-50 hover:text-[#FA3434] px-3 py-1 text-sm rounded-lg">
                    Remove
                  </Button>
                  <Button variant="outline" size="sm" className="text-[#0D6EFD] border border-[#DEE2E7] bg-white hover:bg-blue-50 hover:text-[#0D6EFD] px-3 py-1 text-sm rounded-lg">
                    Save for later
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end justify-between h-full gap-4 w-full sm:w-auto">
              <span className="text-base font-medium leading-5.5 text-right text-[#1C1C1C]">${item.price.toFixed(2)}</span>
              <div className="w-32">
                <Select options={QTY_OPTIONS} defaultValue={item.qty} placeholder="Qty" className="bg-white border-[#DEE2E7]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#DEE2E7] pt-4 flex items-center justify-between">
        <Link href="/products">
          <Button variant="filled" className="bg-[#0D6EFD] hover:bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 font-medium text-sm">
            <ArrowIcon direction="left" /> Back to shop
          </Button>
        </Link>
        <Button variant="outline" className="text-sm font-medium text-[#0D6EFD] border border-[#DEE2E7] rounded-lg px-4 py-2 hover:bg-gray-50 transition shadow-xs">
          Remove all
        </Button>
      </div>
    </div>
  );
}