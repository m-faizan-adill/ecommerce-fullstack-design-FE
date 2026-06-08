"use client";

import { useState } from "react";
import { Search, Menu, ShoppingBag } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import { SecondaryHeader } from "./SecondaryHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowIcon, CartIcon, ChatIcon, ProfileIcon, HeartIcon } from "../../assets";
import { Button, Select } from "../ui";

const CATEGORY_OPTIONS = [
  { value: "all", label: "All category" },
  { value: "cameras", label: "Cameras" },
  { value: "laptops", label: "Laptops" },
  { value: "clothes", label: "Clothes" },
];

interface HeaderProps {
  showBackButton?: boolean;
  title?: string;
  hideRightIcons?: boolean;
}

export default function Header(props: HeaderProps) {
  const { showBackButton = false, title, hideRightIcons = false } = props;
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState("all");
  return (
    <>
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Top bar */}
      <div className="w-full border-b border-gray-200 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto hidden lg:flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
              className="flex-1 border border-[#0D6EFD] rounded-l px-3 py-1.5 text-sm outline-none"
            />
            <Select
              options={CATEGORY_OPTIONS}
              value={searchCategory}
              onChange={(val) => setSearchCategory(val)}
              className="w-35 h-9 border-t border-b border-[#0D6EFD] rounded-none [&>select]:border-none [&>select]:h-full [&>select]:rounded-none [&>select]:bg-gray-50"
            />
            <Button
              variant="filled"
              size="md"
              className="rounded-l-none rounded-r-lg h-9"
            >
              Search
            </Button>
          </div>

          <div className="flex items-center gap-5">

            {/* Profile Link */}
            <Link href="/profile" className="flex flex-col items-center text-[#8B96A5] hover:text-[#0D6EFD] transition-colors group">
              <ProfileIcon className="text-inherit" />
              <span className="text-xs mt-1">Profile</span>
            </Link>

            {/* Message Link */}
            <Link href="/messages" className="flex flex-col items-center text-[#8B96A5] hover:text-[#0D6EFD] transition-colors group">
              <ChatIcon className="text-inherit" />
              <span className="text-xs mt-1">Message</span>
            </Link>

            {/* Orders Link */}
            <Link href="/orders" className="flex flex-col items-center text-[#8B96A5] hover:text-[#0D6EFD] transition-colors group">
              <HeartIcon className="text-inherit" />
              <span className="text-xs mt-1">Orders</span>
            </Link>

            {/* Cart Link */}
            <Link href="/cart" className="flex flex-col items-center text-[#8B96A5] hover:text-[#0D6EFD] transition-colors group">
              <CartIcon className="text-inherit" />
              <span className="text-xs mt-1">My cart</span>
            </Link>

          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="flex lg:hidden items-center justify-between px-4 py-3 bg-[#FFFFFF] border-b border-gray-200">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {showBackButton ? (
            <Button
              variant="ghost"
              shape="icon"
              size="sm"
              onClick={() => router.back()}
              aria-label="Go back"
              className="text-[#1C1C1C] hover:bg-gray-100"
            >
              <ArrowIcon />
            </Button>
          ) : (
            <Button
              variant="ghost"
              shape="icon"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
              className="text-gray-700 hover:bg-gray-100"
            >
              <Menu size={22} />
            </Button>
          )}

          {/* Title */}
          {title ? (
            <span className="text-base font-semibold text-[#1C1C1C] whitespace-nowrap">
              {title}
            </span>
          ) : (
            <Link href="/" className="flex items-center gap-2">
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
            <Link href="/cart" aria-label="View cart">
              <CartIcon size={22} className="text-[#8B96A5] hover:text-[#0D6EFD] transition-colors" />
            </Link>
            <Link href="/profile" aria-label="View profile">
              <ProfileIcon size={22} className="text-[#8B96A5] hover:text-[#0D6EFD] transition-colors" />
            </Link>
          </div>
        ) : (
          <div className="w-10" />
        )}
      </div>

      {/* Mobile search */}
      <div className="flex lg:hidden px-4 py-2 bg-[#FFFFFF] border-b border-gray-100">
        <div className="flex w-full border border-[#0D6EFD] rounded overflow-hidden">
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
          <Button
            key={cat}
            variant="outline"
            size="sm"
            className="whitespace-nowrap rounded-full border border-blue-200 text-[#0D6EFD] bg-white hover:bg-blue-50 h-auto py-1 px-3"
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Desktop nav bar */}
      <div className="hidden lg:flex items-center justify-between text-sm">
        <SecondaryHeader />
      </div>
    </>
  );
}