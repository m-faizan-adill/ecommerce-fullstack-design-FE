'use client';

import { ReactNode, useState } from 'react';

import Rating from '@/components/ui/Rating';
import { Checkbox, Radio } from '@/components/ui/FormChecks';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/FormFields.tsx';
import { ChevronIcon } from '@/components/ui';
import { cn } from '@/lib/utils';

export default function ProductFilters() {
    const [priceMin, setPriceMin] = useState<string>('0');
    const [priceMax, setPriceMax] = useState<string>('999999');
    const [selectedCondition, setSelectedCondition] = useState<string>('any');

    return (
        <div className="w-60 bg-white border border-[#DEE2E7] rounded-md divide-y divide-[#DEE2E7] text-[#1C1C1C]">

            {/* --- Category Section --- */}
            <FilterSection title='Category'>
                <ul className="space-y-2 text-[#505050] text-sm">
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Mobile accessory</li>
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Electronics</li>
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Smartphones</li>
                    <li className="hover:text-[#0D6EFD] cursor-pointer">Modern tech</li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-2 -ml-3 text-xs font-medium">
                    See all
                </Button>
            </FilterSection>

            {/* --- Brands Section --- */}
            <FilterSection title='Brands'>
                <div className="flex flex-col gap-2">
                    {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
                        <Checkbox
                            key={brand}
                            label={brand}
                        />
                    ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-2 -ml-3 text-xs font-medium">
                    See all
                </Button>
            </FilterSection>

            {/* --- Features Section --- */}
            <FilterSection title='Features'>
                <div className="flex flex-col gap-2">
                    {['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'].map((feature) => (
                        <Checkbox
                            key={feature}
                            label={feature}
                        />
                    ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-2 -ml-3 text-xs font-medium">
                    See all
                </Button>
            </FilterSection>

            {/* --- Price Range Section --- */}
            <FilterSection title='Price range'>
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
            </FilterSection>

            <FilterSection title='Condition'>
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
            </FilterSection>

            {/* --- Ratings Section --- */}
            <FilterSection title='Ratings'>
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
            </FilterSection>

        </div>
    );
}

interface FilterSectionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

function FilterSection(props: FilterSectionProps) {
    const { title, children, defaultOpen= 'true' } = props;
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="p-4">
            <div onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center mb-3 cursor-pointer select-none group">
                <h3 className="font-semibold text-base text-[#1C1C1C]">{title}</h3>
                <ChevronIcon className="text-[#8B96A5] group-hover:text-gray-600 transition-colors" direction={isOpen ? "up" : "down"} />
            </div>
            <div className={cn(
                "grid transition-all duration-200 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 overflow-hidden"
            )}>
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>

        </div>
    );
}