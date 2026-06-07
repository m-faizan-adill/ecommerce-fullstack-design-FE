"use client";

import { CartIcon } from "@/assets";
import Button from "@/components/ui/Button";
import Image from "next/image";

const SAVED_ITEMS = [
    { id: "s1", name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/images/tablet.png" },
    { id: "s2", name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/images/iphone.png" },
    { id: "s3", name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/images/watch.png" },
    { id: "s4", name: "GoPro HERO6 4K Action Camera - Black", price: 99.50, image: "/images/laptop.png" },
];

export default function SavedForLater() {
    return (
        <div className="bg-[#FFFFFF] border border-[#DEE2E7] rounded-xl p-5 shadow-sm mt-6">
            <h2 className="text-xl font-semibold text-[#1C1C1C] mb-4">Saved for later</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {SAVED_ITEMS.map((item) => (
                    <div key={item.id} className="group flex flex-col border border-[#DEE2E7] rounded-lg p-3 bg-[#FFFFFF] hover:shadow-md transition">
                        <div className="h-40 w-full bg-[#F3F3F3] rounded-md relative p-4 flex items-center justify-center overflow-hidden">
                            <Image src={item.image} alt={item.name} fill className="object-contain p-2 mix-blend-multiply group-hover:scale-105 transition duration-300" />
                        </div>
                        <div className="flex flex-col pt-3 flex-1">
                            <span className="text-lg font-semibold text-[#1C1C1C] mb-1">${item.price.toFixed(2)}</span>
                            <p className="text-sm text-[#606060] font-normal leading-relaxed mb-3 line-clamp-2 min-h-10">
                                {item.name}
                            </p>
                            <Button
                                variant="outline"
                                className="w-max mt-auto border border-[#DEE2E7] text-[#0D6EFD] font-medium text-sm rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-blue-50/50 transition"
                            >
                                <span><CartIcon variant="outline" /></span> Move to cart
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}