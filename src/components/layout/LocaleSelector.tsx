"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { LOCALE_OPTIONS } from "@/lib/nav-config";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/Dropdown";
import { ChevronIcon } from "@/components/ui/ChevronIcon";
import type { LocaleOption } from "@/types/nav";

interface LocaleSelectorProps {
  defaultLocale?: string;
  onLocaleChange?: (locale: LocaleOption) => void;
}

export function LocaleSelector({
  defaultLocale = "en-US",
  onLocaleChange,
}: LocaleSelectorProps) {
  const [selected, setSelected] = useState<LocaleOption>(
    () =>
      LOCALE_OPTIONS.find((l) => l.value === defaultLocale) ?? LOCALE_OPTIONS[0]
  );

  function handleSelect(option: LocaleOption) {
    setSelected(option);
    onLocaleChange?.(option);
  }

  return (
    <Dropdown>
      <DropdownTrigger
        className={cn(
          "px-2 py-1.5 rounded-md text-sm text-gray-700 hover:text-black",
          "hover:bg-gray-50 transition-colors gap-1.5"
        )}
        aria-label={`Current locale: ${selected.label}. Click to change.`}
      >
        <span>{selected.label}</span>
        <ChevronIcon className="text-gray-500" />
      </DropdownTrigger>

      <DropdownContent align="right">
        {LOCALE_OPTIONS.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleSelect(option)}
            className={cn(
              selected.value === option.value && "font-semibold text-black bg-gray-50"
            )}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Dropdown>
  );
}