"use client";

import {
  useState,
  useRef,
  useEffect,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

// ─── Shared ───────────────────────────────────────────────────────────────────
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-3.5 w-3.5 shrink-0", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={cn("h-3.5 w-3.5 shrink-0", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function IconSquare({ className }: { className?: string }) {
  return <span className={cn("inline-block h-3.5 w-3.5 rounded-sm bg-gray-400 shrink-0", className)} />;
}

// ─── Dropdown list item states ────────────────────────────────────────────────
type ItemState = "default" | "hover" | "active" | "disabled";

interface DropdownItemProps {
  label: string;
  sublabel?: string;
  state?: ItemState;
  hasArrow?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function DropdownItem({
  label,
  sublabel,
  state = "default",
  hasArrow,
  icon,
  onClick,
  className,
}: DropdownItemProps) {
  return (
    <button
      type="button"
      disabled={state === "disabled"}
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors",
        state === "default" && "text-gray-700 hover:bg-blue-50",
        state === "hover" && "bg-blue-50 text-gray-700",
        state === "active" && "text-blue-600",
        state === "disabled" && "text-gray-400 cursor-not-allowed",
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="flex-1 min-w-0">
        <span className="block truncate leading-snug">{label}</span>
        {sublabel && (
          <span className={cn(
            "block text-xs truncate",
            state === "hover" ? "text-gray-500" : "text-gray-400"
          )}>{sublabel}</span>
        )}
      </span>
      {hasArrow && <ChevronRight className="text-gray-400" />}
    </button>
  );
}

// ─── Dropdown shell ───────────────────────────────────────────────────────────
interface DropdownShellProps {
  children: ReactNode;
  className?: string;
}

export function DropdownShell({ children, className }: DropdownShellProps) {
  return (
    <div className={cn("rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden py-1", className)}>
      {children}
    </div>
  );
}

// ─── Basic dropdown ───────────────────────────────────────────────────────────
interface BasicDropdownProps {
  items: { label: string; state?: ItemState }[];
  className?: string;
}

export function BasicDropdown({ items, className }: BasicDropdownProps) {
  return (
    <DropdownShell className={className}>
      {items.map((item, i) => (
        <DropdownItem key={i} label={item.label} state={item.state} />
      ))}
    </DropdownShell>
  );
}

// ─── Checkbox dropdown ────────────────────────────────────────────────────────
interface CheckboxDropdownProps {
  items: { label: string; state?: "default" | "hover" | "active"; checked?: boolean }[];
  className?: string;
  onChange?: (index: number, checked: boolean) => void;
}
 
export function CheckboxDropdown({ items: initial, className, onChange }: CheckboxDropdownProps) {
  const [items, setItems] = useState(initial);
 
  const toggle = (i: number) => {
    const next = items.map((item, idx) =>
      idx === i ? { ...item, checked: !item.checked } : item
    );
    setItems(next);
    onChange?.(i, next[i].checked ?? false);
  };
 
  return (
    <DropdownShell className={className}>
      {items.map((item, i) => (
        <label
          key={i}
          className={cn(
            "flex items-center gap-2 px-3 py-2 cursor-pointer text-sm transition-colors",
            item.state === "hover" ? "bg-blue-50 text-gray-700" : "text-gray-700 hover:bg-blue-50",
            item.checked && "text-blue-600"
          )}
        >
          {/* Checkbox */}
          <span className="relative inline-flex items-center justify-center shrink-0">
            <input
              type="checkbox"
              checked={item.checked ?? false}
              onChange={() => toggle(i)}
              className="peer sr-only"
            />
            <span className={cn(
              "h-4 w-4 rounded-sm border-2 transition-colors",
              item.checked ? "border-blue-600 bg-blue-600" : "border-gray-300 bg-white"
            )} />
            {item.checked && (
              <svg className="absolute h-2.5 w-2.5 text-white pointer-events-none" viewBox="0 0 12 10" fill="none">
                <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <span className="truncate">{item.label}</span>
        </label>
      ))}
    </DropdownShell>
  );
}
// ─── Searchable dropdown ──────────────────────────────────────────────────────
interface SearchableDropdownProps {
  items: { label: string; state?: ItemState }[];
  withCheckboxes?: boolean;
  withCreate?: boolean;
  placeholder?: string;
  className?: string;
}

export function SearchableDropdown({
  items: initial,
  withCheckboxes = false,
  withCreate = false,
  placeholder = "Search",
  className,
}: SearchableDropdownProps) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(initial.map((it) => ({ ...it, checked: false })));

  const filtered = items.filter((it) =>
    it.label.toLowerCase().includes(query.toLowerCase())
  );

  const toggle = (label: string) => {
    setItems((prev) =>
      prev.map((it) => it.label === label ? { ...it, checked: !it.checked } : it)
    );
  };

  return (
    <DropdownShell className={cn("w-full", className)}>
      {/* Search bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
        <SearchIcon className="text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
        />
        {query && (
          <button type="button" onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Items */}
      {filtered.length > 0 ? (
        filtered.map((item, i) =>
          withCheckboxes ? (
            <label
              key={i}
              className={cn(
                "flex items-center gap-2 px-3 py-2 cursor-pointer text-sm transition-colors",
                item.state === "hover" ? "bg-blue-50" : "hover:bg-blue-50",
                item.checked ? "text-blue-600" : "text-gray-700"
              )}
            >
              <span className="relative inline-flex items-center justify-center shrink-0">
                <input type="checkbox" checked={item.checked} onChange={() => toggle(item.label)} className="peer sr-only" />
                <span className={cn("h-4 w-4 rounded-sm border-2 transition-colors", item.checked ? "border-blue-600 bg-blue-600" : "border-gray-300 bg-white")} />
                {item.checked && (
                  <svg className="absolute h-2.5 w-2.5 text-white pointer-events-none" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="truncate">{item.label}</span>
            </label>
          ) : (
            <DropdownItem key={i} label={item.label} state={item.state} />
          )
        )
      ) : (
        <p className="px-3 py-2 text-sm text-gray-400">Not found</p>
      )}

      {/* Create new */}
      {withCreate && (
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 w-full transition-colors border-t border-gray-100"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Create new
        </button>
      )}
    </DropdownShell>
  );
}

// ─── Multi-text dropdown ──────────────────────────────────────────────────────
interface MultiTextDropdownProps {
  items: { label: string; sublabel: string; state?: ItemState }[];
  className?: string;
}

export function MultiTextDropdown({ items, className }: MultiTextDropdownProps) {
  return (
    <DropdownShell className={className}>
      {items.map((item, i) => (
        <DropdownItem key={i} label={item.label} sublabel={item.sublabel} state={item.state} />
      ))}
    </DropdownShell>
  );
}

// ─── Menu dropdown (icon + label) ─────────────────────────────────────────────
interface MenuDropdownProps {
  items: { label: string; state?: ItemState }[];
  className?: string;
}

export function MenuDropdown({ items, className }: MenuDropdownProps) {
  return (
    <DropdownShell className={className}>
      {items.map((item, i) => (
        <DropdownItem
          key={i}
          label={item.label}
          state={item.state}
          icon={<IconSquare className={item.state === "active" ? "bg-blue-600" : item.state === "hover" ? "bg-gray-500" : "bg-gray-400"} />}
        />
      ))}
    </DropdownShell>
  );
}

// ─── Grouped menu (with submenu) ──────────────────────────────────────────────
interface GroupedMenuProps {
  items: { label: string; state?: ItemState; hasArrow?: boolean }[];
  submenuItems?: { label: string; state?: ItemState }[];
  activeIndex?: number;
  className?: string;
}

export function GroupedMenu({ items, submenuItems, activeIndex, className }: GroupedMenuProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative inline-flex">
      <DropdownShell className={className}>
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            onMouseEnter={() => item.hasArrow ? setHovered(i) : setHovered(null)}
            className={cn(
              "w-full flex items-center justify-between gap-2 px-3 py-2 text-left text-sm transition-colors",
              item.state === "hover" || hovered === i ? "bg-blue-50 text-gray-700" : "text-gray-700 hover:bg-blue-50",
              item.state === "active" && "text-blue-600"
            )}
          >
            <span>{item.label}</span>
            {item.hasArrow && <ChevronRight className="text-gray-400" />}
          </button>
        ))}
      </DropdownShell>

      {/* Submenu */}
      {submenuItems && hovered !== null && (
        <DropdownShell className="absolute left-full top-0 ml-0.5 w-44 z-10">
          {submenuItems.map((item, i) => (
            <DropdownItem key={i} label={item.label} state={item.state} />
          ))}
        </DropdownShell>
      )}
    </div>
  );
}