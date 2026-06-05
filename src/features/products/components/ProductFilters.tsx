'use client';

import { useState } from 'react';
import { Checkbox, Radio } from '@/components/ui/FormChecks';
import { Button } from '@/components/ui/Button'; // Apne sahi path se import karein
import Rating from '@/components/ui/Rating';
import { Input } from '@/components/ui/FormFields.tsx';

export default function ProductFilters() {
    const [priceMin, setPriceMin] = useState<string>('0');
    const [priceMax, setPriceMax] = useState<string>('999999');
    const [selectedCondition, setSelectedCondition] = useState<string>('any');

    return (
        <div className="w-60 bg-white border border-[#DEE2E7] rounded-md divide-y divide-[#DEE2E7] text-[#1C1C1C]">

            {/* --- Category Section --- */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-3 cursor-pointer">
                    <h3 className="font-semibold text-base text-[#1C1C1C]">Category</h3>
                    <span className="text-gray-400 text-xs">▲</span>
                </div>
                <ul className="space-y-2 text-[#505050] text-sm">
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Mobile accessory</li>
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Electronics</li>
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Smartphones</li>
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Modern tech</li>
                </ul>
                {/* Custom Ghost Button used here */}
                <Button variant="ghost" size="sm" className="mt-2 -ml-3 text-xs font-medium">
                    See all
                </Button>
            </div>

            {/* --- Brands Section --- */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-3 cursor-pointer">
                    <h3 className="font-semibold text-base text-[#1C1C1C]">Brands</h3>
                    <span className="text-gray-400 text-xs">▲</span>
                </div>
                <div className="flex flex-col gap-2">
                    {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
                        <Checkbox
                            key={brand}
                            label={brand}
                        />
                    ))}
                </div>
                {/* Custom Ghost Button used here */}
                <Button variant="ghost" size="sm" className="mt-2 -ml-3 text-xs font-medium">
                    See all
                </Button>
            </div>

            {/* --- Features Section --- */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-3 cursor-pointer">
                    <h3 className="font-semibold text-base">Features</h3>
                    <span className="text-gray-400 text-xs">▲</span>
                </div>
                <div className="flex flex-col gap-2">
                    {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((feature) => (
                        <Checkbox
                            key={feature}
                            label={feature}
                        />
                    ))}
                </div>
                {/* Custom Ghost Button used here */}
                <Button variant="ghost" size="sm" className="mt-2 -ml-3 text-xs font-medium">
                    See all
                </Button>
            </div>

            {/* --- Price Range Section --- */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-3 cursor-pointer">
                    <h3 className="font-semibold text-base">Price range</h3>
                    <span className="text-gray-400 text-xs">▲</span>
                </div>

                {/* Custom Track/Slider Representation */}
                <div className="relative pt-2 pb-4">
                    <div className="h-1 bg-blue-100 rounded-full"></div>
                    <div className="absolute top-1.5 left-[20%] right-[30%] h-1 bg-[#0D6EFD] rounded-full"></div>
                    <div className="absolute top-0 left-[20%] w-5 h-5 bg-white border border-[#0D6EFD] rounded-full shadow cursor-pointer -mt-0.5"></div>
                    <div className="absolute top-0 right-[30%] w-5 h-5 bg-white border border-[#0D6EFD] rounded-full shadow cursor-pointer -mt-0.5"></div>
                </div>

                <div className="flex gap-2 mb-3">
                    <div className="flex-1">
                        <span className="text-xs text-[#505050] block mb-1">Min</span>
                        <Input
                            type="number"
                            value={priceMin}
                            onChange={(e) => setPriceMin(e.target.value)}
                            placeholder="0"
                            className="px-2 py-1.5 h-9 bg-white"
                        />
                    </div>
                    <div className="flex-1">
                        <span className="text-xs text-[#505050] block mb-1">Max</span>
                        <Input
                            type="number"
                            value={priceMax}
                            onChange={(e) => setPriceMax(e.target.value)}
                            placeholder="999999"
                            className="px-2 py-1.5 h-9 bg-white"
                        />
                    </div>
                </div>
                <Button variant="outline" size="md" block className="bg-white border-[#DEE2E7] hover:border-blue-400 shadow-sm text-blue-600">
                    Apply
                </Button>
            </div>

            {/* --- Condition Section --- */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-3 cursor-pointer">
                    <h3 className="font-semibold text-base">Condition</h3>
                    <span className="text-gray-400 text-xs">▲</span>
                </div>
                <div className="flex flex-col gap-2">
                    {[
                        { label: 'Any', value: 'any' },
                        { label: 'Refurbished', value: 'refurbished' },
                        { label: 'Brand new', value: 'new' },
                        { label: 'Old items', value: 'old' }
                    ].map((cond) => (
                        <Radio
                            key={cond.value}
                            label={cond.label}
                            name="condition"
                            value={cond.value}
                            checked={selectedCondition === cond.value}
                            onChange={() => setSelectedCondition(cond.value)}
                        />
                    ))}
                </div>
            </div>

            {/* --- Ratings Section --- */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-3 cursor-pointer">
                    <h3 className="font-semibold text-base">Ratings</h3>
                    <span className="text-gray-400 text-xs">▲</span>
                </div>
                <div className="flex flex-col gap-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-1">
                            <Checkbox />
                            <Rating
                                rating={stars}
                                showValue={false}
                                className="ml-1"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}