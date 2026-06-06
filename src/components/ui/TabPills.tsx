'use client';

import { useState } from "react";

interface TabPillsProps {
  tabs: string[];
  defaultTab?: number;
  children?: React.ReactNode;
}
 
export function TabPills({ tabs, defaultTab = 0, children }: TabPillsProps) {
  const [active, setActive] = useState(defaultTab);
 
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex gap-1 p-2 bg-[#FFFFFF] border-b border-gray-200">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={[
              "px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
              i === active
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
            ].join(" ")}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 min-h-20 bg-[#FFFFFF]">
        {children}
      </div>
    </div>
  );
}