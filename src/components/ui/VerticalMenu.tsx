'use client';

import { useState } from "react";

interface VerticalMenuProps {
  items: string[];
  activeIndex?: number;
}
 
export function VerticalMenu({ items, activeIndex = 0 }: VerticalMenuProps) {
  const [active, setActive] = useState(activeIndex);
 
  return (
    <nav className="w-full rounded-lg border border-gray-200 overflow-hidden">
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={[
            "w-full text-left px-4 py-2.5 text-sm transition-colors duration-150",
            "border-b border-gray-200 last:border-b-0",
            i === active
              ? "bg-blue-50 text-blue-700 font-medium"
              : "bg-white text-gray-700 hover:bg-gray-50",
          ].join(" ")}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}