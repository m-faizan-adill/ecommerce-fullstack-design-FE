"use client";

import { X, Home, List, Heart, Package, Globe, Headphones, Grid } from "lucide-react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const menuItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: List, label: "Categories", href: "#" },
    { icon: Heart, label: "Favorites", href: "#" },
    { icon: Package, label: "My orders", href: "#" },
  ];

  const secondaryItems = [
    { icon: Globe, label: "English | USD", href: "#" },
    { icon: Headphones, label: "Contact us", href: "#" },
    { icon: Grid, label: "About", href: "#" },
  ];

  const legalItems = ["User agreement", "Partnership", "Privacy policy"];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 overflow-y-auto scrollbar-hide bg-[#FFFFFF] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-4 bg-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" fill="currentColor">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Sign in</p>
              <p className="text-sm text-gray-500">Register</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Primary nav */}
        <nav className="px-2 py-3 border-b border-gray-100">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              <item.icon size={20} className="text-gray-400" />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Secondary nav */}
        <nav className="px-2 py-3 border-b border-gray-100">
          {secondaryItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              <item.icon size={20} className="text-gray-400" />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Legal links */}
        <div className="px-6 py-4">
          {legalItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 text-sm text-gray-500 hover:text-gray-700"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
