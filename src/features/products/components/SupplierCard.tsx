import { ChevronIcon } from "@/assets";
import { Button } from "@/components/ui";

interface SupplierCardProps {
    supplierName?: string;
    location?: string;
    verified?: boolean;
    worldwideShipping?: boolean;
}

export default function SupplierCard({
    supplierName = "Guanjoi Trading LLC",
    location = "Germany, Berlin",
    verified = true,
    worldwideShipping = true,
}: SupplierCardProps) {

    return (
        <div className="w-full lg:w-70 h-auto lg:h-81.25 bg-[#FFFFFF] border border-gray-200 lg:border-gray-200 rounded-lg p-4 shadow-xs lg:shadow-sm flex flex-col justify-between box-border">

            {/* Top Header Segment Wrapper - Clickable row on mobile */}
            <div className="flex items-center justify-between w-full cursor-pointer lg:cursor-default">
                <div className="flex items-center gap-3 min-w-0">
                    {/* Avatar Placeholder Avatar */}
                    <div className="w-12 h-12 bg-[#C5E3F6] text-[#4682B4] font-semibold rounded-lg flex items-center justify-center text-xl select-none shrink-0">
                        {supplierName.charAt(0)}
                    </div>
                    {/* Info Text wrapper */}
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm lg:text-base font-normal text-[#1C1C1C] leading-none mb-1">Supplier</span>
                        <span className="text-base font-normal text-[#1C1C1C] truncate leading-tight">{supplierName}</span>
                    </div>
                </div>

                <ChevronIcon direction="left" className="text-[#8B96A5]"/>
            </div>

            {/* Thin Horizontal Divider line */}
            <div className="border-t border-gray-200/80 my-3 lg:my-1"></div>

            {/* Meta Indicators Segment: Mobile changes to flex-row wrap */}
            <div className="flex flex-row flex-wrap lg:flex-col items-center lg:items-start gap-y-2 gap-x-4 lg:gap-3 text-sm text-[#505050] lg:text-[#8B96A5]">
                {/* Country */}
                <div className="flex items-center gap-2 lg:gap-3">
                    <span className="text-lg leading-none select-none">🇩🇪</span>
                    <span className="font-normal">{location.split(',')[0]}</span>
                </div>

                {/* Verification Shield status */}
                {verified && (
                    <div className="flex items-center gap-1.5 lg:gap-3">
                        <span className="text-gray-400 text-base leading-none select-none lg:inline hidden">🛡️</span>
                        {/* Custom vector match shield pattern for mobile view screen */}
                        <svg className="w-4 h-4 text-slate-400 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="font-normal">Verified</span>
                    </div>
                )}

                {/* Logistic Global Network icon */}
                {worldwideShipping && (
                    <div className="flex items-center gap-1.5 lg:gap-3">
                        <span className="text-gray-400 text-base leading-none select-none lg:inline hidden">🌐</span>
                        {/* Custom wire globe match outline pattern for mobile view screen */}
                        <svg className="w-4 h-4 text-slate-400 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                        </svg>
                        <span className="font-normal">Shipping</span>
                    </div>
                )}
            </div>

            {/* Primary Operation Call to Actions Buttons: Hidden completely on Mobile */}
            <div className="hidden lg:flex flex-col gap-2 mt-auto">
                <Button
                    variant="filled"
                    className="w-full bg-[#0067FF] hover:bg-blue-600 text-white rounded-lg py-2.5 font-medium text-sm transition shadow-none"
                >
                    Send inquiry
                </Button>
                <Button
                    variant="outline"
                    className="w-full border-gray-200 text-[#0067FF] bg-[#FFFFFF] hover:bg-gray-50 rounded-lg py-2.5 font-medium text-sm transition"
                >
                    Seller&apos;s profile
                </Button>
            </div>

        </div>
    );
}