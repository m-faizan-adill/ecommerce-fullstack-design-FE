'use client';

import { useState } from "react";

interface TabsProps {
  tabs: string[];
  defaultTab?: number;
  children?: React.ReactNode;
}
 
export function Tabs({ tabs, defaultTab = 0, children }: TabsProps) {
  const [active, setActive] = useState(defaultTab);
 
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex border-b border-gray-200 bg-[#FFFFFF]">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={[
              "px-4 py-2.5 text-sm font-medium transition-colors duration-150 border-b-2 -mb-px",
              i === active
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
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