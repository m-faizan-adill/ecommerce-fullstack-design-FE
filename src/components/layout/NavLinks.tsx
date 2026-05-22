"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/nav-config";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/Dropdown";
import { ChevronIcon } from "@/components/ui/ChevronIcon";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-1" role="list">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

          if (item.hasDropdown && item.children?.length) {
            return (
              <li key={item.href}>
                <Dropdown>
                  <DropdownTrigger
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      "text-gray-700 hover:text-black hover:bg-gray-50",
                      isActive && "text-black font-semibold"
                    )}
                  >
                    {item.label}
                    <ChevronIcon className="text-gray-500" />
                  </DropdownTrigger>

                  <DropdownContent>
                    {item.children.map((child) => (
                      <DropdownItem key={child.href}>
                        <Link
                          href={child.href}
                          className="block w-full text-left"
                        >
                          <span className="block text-sm font-medium text-gray-800">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="block text-xs text-gray-500 mt-0.5">
                              {child.description}
                            </span>
                          )}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownContent>
                </Dropdown>
              </li>
            );
          }

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  "text-gray-700 hover:text-black hover:bg-gray-50",
                  isActive && "text-black font-semibold"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}