"use client";

import Button from "@/components/ui/Button";

export default function OrderSummary() {
  return (
    <div className="flex flex-col gap-4 lg:col-span-1">
      {/* Promo Coupon Card */}
      <div className="bg-white border border-[#DEE2E7] rounded-xl p-4 shadow-sm">
        <label className="text-sm font-normal text-[#505050] mb-2 block">Have a coupon?</label>
        <div className="flex border border-[#DEE2E7] rounded-lg overflow-hidden focus-within:border-blue-500 shadow-xs">
          <input type="text" placeholder="Add coupon" className="px-3 py-2 w-full text-sm outline-none text-gray-700 placeholder-gray-400 bg-white" />
          <button className="bg-white border-l border-[#DEE2E7] text-[#0D6EFD] hover:bg-gray-50 font-medium px-4 py-2 text-sm transition">
            Apply
          </button>
        </div>
      </div>

      {/* Calculations Breakdown Card */}
      <div className="bg-white border border-[#DEE2E7] rounded-xl p-5 shadow-sm text-sm text-[#505050]">
        <div className="space-y-3 pb-4 border-b border-[#DEE2E7]">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="text-[#1C1C1C] font-normal">$1403.97</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span className="text-[#FA3434] font-normal">- $60.00</span>
          </div>
          <div className="flex justify-between">
            <span>Tax:</span>
            <span className="text-[#00B517] font-normal">+ $14.00</span>
          </div>
        </div>

        <div className="pt-4 flex flex-col gap-4">
          <div className="flex justify-between items-baseline text-base font-semibold text-[#1C1C1C]">
            <span>Total:</span>
            <span className="text-xl">$1357.97</span>
          </div>

          {/* Your Responsive Checked out Module trigger */}
          <Button className="w-full lg:w-62 h-13.5 rounded-lg px-5 gap-2.5 bg-[#00B517] hover:bg-green-600 text-[#FFFFFF] py-3 font-medium text-base transition shadow-sm border-none mx-auto lg:mx-0">
            Checkout
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-4 pt-1 opacity-80">
          {["amex", "mastercard", "paypal", "visa", "apple"].map((gate, i) => (
            <div key={i} className="h-5 w-8 bg-gray-50 border border-[#DEE2E7] rounded flex items-center justify-center text-[8px] font-mono font-bold text-gray-400 uppercase">
              {gate}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}