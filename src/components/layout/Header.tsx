"use client";

import { useState } from "react";
import { Search, ShoppingCart, User, MessageSquare, Heart, Menu, ChevronDown, ShoppingBag } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import { SecondaryHeader } from "./SecondaryHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowIcon } from "../ui/ArrowIcon";

interface HeaderProps {
  showBackButton?: boolean;
  title?: string;
  hideRightIcons?: boolean;
}

export default function Header(props: HeaderProps) {
  const { showBackButton = false, title, hideRightIcons = false } = props;
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top bar */}
      <div className="w-full border-b border-gray-200 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto hidden lg:flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
              <ShoppingBag size={18} className="text-white" />
            </div>

            <span className="text-2xl font-semibold text-blue-400">
              Brand
            </span>
          </Link>
          {/* Search */}
          <div className="flex flex-1 max-w-xl mx-8">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border border-blue-600 rounded-l px-3 py-1.5 text-sm outline-none"
            />
            <select className="border border-l-0 border-blue-600 px-2 py-1.5 text-sm outline-none bg-gray-50">
              <option>All category</option>
              <option>Cameras</option>
              <option>Laptops</option>
              <option>Clothes</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-r text-sm hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
              <User size={20} />
              <span className="text-xs mt-0.5">Profile</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
              <MessageSquare size={20} />
              <span className="text-xs mt-0.5">Message</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
              <Heart size={20} />
              <span className="text-xs mt-0.5">Orders</span>
            </a>
            <a href="#" className="flex flex-col items-center text-gray-500 hover:text-blue-600">
              <ShoppingCart size={20} />
              <span className="text-xs mt-0.5">My cart</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 bg-[#FFFFFF] border-b border-gray-200">
        {/* Left Section: Back Button/Menu and Dynamic Title or Brand Logo grouped together */}
        <div className="flex items-center gap-4">
          {showBackButton ? (
            <button
              onClick={() => router.back()}
              className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
              aria-label="Go back"
            >
              <ArrowIcon className="text-[#1C1C1C]" />
            </button>
          ) : (
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-1 -ml-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} className="text-gray-700" />
            </button>
          )}

          {/* Title / Logo yahan parent ke andar hona chahiye strict alignment ke liye */}
          {title ? (
            <span className="text-base font-semibold text-[#1C1C1C] whitespace-nowrap">
              {title}
            </span>
          ) : (
            <Link href="#" className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                <ShoppingBag size={14} className="text-white" />
              </div>
              <span className="text-lg font-semibold text-blue-400">
                Brand
              </span>
            </Link>
          )}
        </div>

        {/* Right Section Icons */}
        {!hideRightIcons ? (
          <div className="flex items-center gap-3">
            <ShoppingCart size={22} className="text-gray-700" />
            <User size={22} className="text-gray-700" />
          </div>
        ) : (
          /* Empty block space holder to preserve layout balance if needed */
          <div className="w-10" />
        )}
      </div>

      {/* Mobile search */}
      <div className="flex lg:hidden px-4 py-2 bg-[#FFFFFF] border-b border-gray-100">
        <div className="flex w-full border border-blue-600 rounded overflow-hidden">
          <Search size={16} className="text-gray-400 m-auto ml-3" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-2 py-2 text-sm outline-none"
          />
        </div>
      </div>

      {/* Mobile category tabs */}
      <div className="flex lg:hidden gap-2 px-4 py-2 overflow-x-auto scrollbar-hide bg-[#FFFFFF] border-b border-gray-100">
        {["All category", "Gadgets", "Clothes", "Accessories", "Electronics"].map((cat) => (
          <button
            key={cat}
            className="whitespace-nowrap text-sm text-blue-600 border border-blue-200 rounded-full px-3 py-1 hover:bg-blue-50"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Desktop nav bar */}
      <div className="hidden lg:flex items-center justify-between text-sm">
        <SecondaryHeader />
      </div>

    </>
  );
}
