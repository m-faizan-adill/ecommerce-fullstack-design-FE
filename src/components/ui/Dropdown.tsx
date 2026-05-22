"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

// ─── Context ────────────────────────────────────────────────────────────────
interface DropdownCtx {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownCtx | null>(null);

function useDropdown() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("Dropdown subcomponent used outside <Dropdown>");
  return ctx;
}

// ─── Root ────────────────────────────────────────────────────────────────────
interface DropdownRootProps {
  children: ReactNode;
  className?: string;
}

export function Dropdown({ children, className }: DropdownRootProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, close]);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, close]);

  return (
    <DropdownContext.Provider value={{ open, toggle, close }}>
      <div ref={ref} className={cn("relative", className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

// ─── Trigger ─────────────────────────────────────────────────────────────────
interface TriggerProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export function DropdownTrigger({ children, className }: TriggerProps) {
  const { toggle, open } = useDropdown();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-expanded={open}
      aria-haspopup="menu"
      className={cn("flex items-center gap-1 cursor-pointer", className)}
    >
      {children}
    </button>
  );
}

// ─── Content ─────────────────────────────────────────────────────────────────
interface ContentProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "right";
}

export function DropdownContent({ children, className, align = "left" }: ContentProps) {
  const { open } = useDropdown();

  if (!open) return null;

  return (
    <div
      role="menu"
      className={cn(
        "absolute top-full z-50 mt-2 min-w-45 rounded-lg border border-gray-100 bg-white py-1 shadow-lg",
        "animate-in fade-in-0 zoom-in-95 duration-150",
        align === "right" ? "right-0" : "left-0",
        className
      )}
    >
      {children}
    </div>
  );
}

// ─── Item ─────────────────────────────────────────────────────────────────────
interface DropdownItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function DropdownItem({ children, className, onClick }: DropdownItemProps) {
  const { close } = useDropdown();

  return (
    <button
      type="button"
      role="menuitem"
      onClick={() => {
        onClick?.();
        close();
      }}
      className={cn(
        "w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}