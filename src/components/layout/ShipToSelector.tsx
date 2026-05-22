"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { SHIPPING_DESTINATIONS } from "@/lib/nav-config";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/Dropdown";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import type { ShippingDestination } from "@/types/nav";
import { FlagIcon } from "../ui";

interface ShipToSelectorProps {
  defaultCountry?: string;
  onCountryChange?: (destination: ShippingDestination) => void;
}

export function ShipToSelector({
  defaultCountry = "DE",
  onCountryChange,
}: ShipToSelectorProps) {
  const [selected, setSelected] = useState<ShippingDestination>(
    () =>
      SHIPPING_DESTINATIONS.find((d) => d.countryCode === defaultCountry) ??
      SHIPPING_DESTINATIONS[0]
  );

  function handleSelect(destination: ShippingDestination) {
    setSelected(destination);
    onCountryChange?.(destination);
  }

  return (
    <Dropdown>
      <DropdownTrigger
        className={cn(
          "px-2 py-1.5 rounded-md text-sm text-gray-700 hover:text-black",
          "hover:bg-gray-50 transition-colors gap-1.5"
        )}
        aria-label={`Shipping to ${selected.label}. Click to change.`}
      >
        <span className="text-gray-600 font-normal">Ship to</span>

        {/* Flag rendered as emoji — swap for <Image> if you use SVG flags */}
        {/* <span
          className="text-base leading-none"
          role="img"
          aria-label={selected.label}
        >
          {selected.flagEmoji}
        </span> */}
        <FlagIcon
          countryCode={selected.countryCode}
          label={selected.label}
          width={20}
          height={14}
        />
        <ChevronIcon className="text-gray-500" />
      </DropdownTrigger>

      <DropdownContent align="right">
        {SHIPPING_DESTINATIONS.map((dest) => (
          <DropdownItem
            key={dest.countryCode}
            onClick={() => handleSelect(dest)}
            className={cn(
              "flex items-center gap-2",
              selected.countryCode === dest.countryCode &&
              "font-semibold text-black bg-gray-50"
            )}
          >
            {/* <span
              role="img"
              aria-label={dest.label}
              className="text-base leading-none"
            >
              {dest.flagEmoji}
            </span> */}
            <FlagIcon
              countryCode={dest.countryCode}
              label={dest.label}
              width={20}
              height={14}
            />
            {dest.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}