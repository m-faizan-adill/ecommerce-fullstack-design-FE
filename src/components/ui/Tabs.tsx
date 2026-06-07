'use client';

import { ReactNode, useState } from "react";

interface TabsProps {
  tabs: string[];
  defaultTab?: number;
  contents: ReactNode[];
}

export function Tabs(props: TabsProps) {
  const { tabs, defaultTab = 0, contents } = props;
  const [active, setActive] = useState(defaultTab);

  return (
    <div className="rounded-lg border border-[#DEE2E7] overflow-hidden">
      <div className="flex border-b border-[#DEE2E7] bg-[#FFFFFF]">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={[
              "px-4 py-2.5 text-sm font-medium transition-colors duration-150 border-b-2 -mb-px",
              i === active
                ? "border-[#0D6EFD] text-[#0D6EFD]"
                : "border-transparent text-[#8B96A5] hover:text-gray-700 hover:border-gray-300",
            ].join(" ")}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-4 min-h-20 bg-[#FFFFFF]">
        {contents[active]}
      </div>
    </div>
  );
}