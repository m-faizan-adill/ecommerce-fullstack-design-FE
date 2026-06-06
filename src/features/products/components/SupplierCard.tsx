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
        <div className="w-70 h-81.25 bg-[#FFFFFF] border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col justify-between box-border">

            {/* Top Header Segment */}
            <div className="flex items-center gap-3">
                {/* Avatar Placeholder Avatar */}
                <div className="w-12 h-12 bg-[#C5E3F6] text-[#4682B4] font-semibold rounded-lg flex items-center justify-center text-xl select-none shrink-0">
                    {supplierName.charAt(0)}
                </div>
                {/* Info Text wrapper */}
                <div className="flex flex-col min-w-0">
                    <span className="text-base font-normal text-[#1C1C1C] leading-none mb-1">Supplier</span>
                    <span className="text-base font-normal text-[#1C1C1C] truncate leading-tight">{supplierName}</span>
                </div>
            </div>

            {/* Thin Horizontal Divider line */}
            <div className="border-t border-gray-200/80 my-1"></div>

            {/* Meta Indicators List Row */}
            <div className="flex flex-col gap-3 text-sm text-[#8B96A5]">
                {/* Country */}
                <div className="flex items-center gap-3">
                    <span className="text-lg leading-none select-none">🇩🇪</span>
                    <span className="text-[#8B96A5] font-normal">{location}</span>
                </div>

                {/* Verification Shield status */}
                {verified && (
                    <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-base leading-none select-none">🛡️</span>
                        <span className="text-[#8B96A5] font-normal">Verified Seller</span>
                    </div>
                )}

                {/* Logistic Global Network icon */}
                {worldwideShipping && (
                    <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-base leading-none select-none">🌐</span>
                        <span className="text-[#8B96A5] font-normal">Worldwide shipping</span>
                    </div>
                )}
            </div>

            {/* Primary Operation Call to Actions Buttons */}
            <div className="flex flex-col gap-2 mt-auto">
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