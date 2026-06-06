"use client";

import {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
} from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";

// ─── Shared chevron ───────────────────────────────────────────────────────────
function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={cn("h-4 w-4 shrink-0 text-gray-400", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─── Base Select (single) ─────────────────────────────────────────────────────
interface SelectOption { value: string; label: string }

interface SelectProps {
  options: SelectOption[];
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
  active?: boolean; // blue ring state
  className?: string;
}

export function Select({
  options,
  placeholder = "Select",
  defaultValue,
  value: controlled,
  onChange,
  active = false,
  className,
}: SelectProps) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const current = controlled !== undefined ? controlled : internal;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (controlled === undefined) setInternal(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={cn("relative inline-flex w-full items-center", className)}>
      <select
        value={current}
        onChange={handleChange}
        className={cn(
          "w-full appearance-none rounded-lg border bg-[#FFFFFF] py-2 pl-3 pr-8 text-sm transition-shadow duration-150",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          current ? "text-gray-900 border-gray-300" : "text-gray-400 border-gray-300",
          active && "ring-2 ring-blue-500 border-blue-500"
        )}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 pointer-events-none" />
    </div>
  );
}

// ─── Multi-select (comma-joined display) ──────────────────────────────────────
interface MultiSelectProps {
  options: SelectOption[];
  placeholder?: string;
  defaultValues?: string[];
  onChange?: (values: string[]) => void;
  className?: string;
}

export function MultiSelect({
  options,
  placeholder = "Select",
  defaultValues = [],
  onChange,
  className,
}: MultiSelectProps) {
  const [selected, setSelected] = useState<string[]>(defaultValues);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (value: string) => {
    const next = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];
    setSelected(next);
    onChange?.(next);
  };

  const displayLabel = selected.length
    ? selected.map((v) => options.find((o) => o.value === v)?.label ?? v).join(", ")
    : placeholder;

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      {/* <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "w-full flex items-center justify-between rounded-lg border border-gray-300 bg-[#FFFFFF] py-2 pl-3 pr-3 text-sm transition-shadow",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          selected.length ? "text-gray-900" : "text-gray-400"
        )}
      >
        <span className="truncate">{displayLabel}</span>
        <ChevronDown />
      </button> */}
      <Button
        type="button"
        variant="outline"
        size="md"
        block
        onClick={() => setOpen((o) => !o)}
        trailingIcon={<ChevronDown className="h-4 w-4 text-[#0067FF]" />}
        className={!selected.length ? "text-gray-400" : ""}
      >
        <span className="truncate">{displayLabel}</span>
      </Button>
      {open && (
        <ul className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-[#FFFFFF] shadow-lg py-1 max-h-48 overflow-auto">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => toggle(opt.value)}
                className={cn(
                  "w-full text-left px-3 py-1.5 text-sm transition-colors",
                  selected.includes(opt.value)
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Tag Select ───────────────────────────────────────────────────────────────
interface TagSelectProps {
  options: SelectOption[];
  defaultValues?: string[];
  placeholder?: string;
  onChange?: (values: string[]) => void;
  className?: string;
}

export function TagSelect({
  options,
  defaultValues = [],
  placeholder = "Select",
  onChange,
  className,
}: TagSelectProps) {
  const [selected, setSelected] = useState<string[]>(defaultValues);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const remove = (value: string) => {
    const next = selected.filter((v) => v !== value);
    setSelected(next);
    onChange?.(next);
  };

  const add = (value: string) => {
    if (selected.includes(value)) return;
    const next = [...selected, value];
    setSelected(next);
    onChange?.(next);
  };

  const available = options.filter((o) => !selected.includes(o.value));

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <div
        className={cn(
          "flex flex-wrap items-center gap-1.5 rounded-lg border border-gray-300 bg-[#FFFFFF] px-2 py-1.5 min-h-9.5 cursor-pointer",
          "focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-shadow"
        )}
        onClick={() => setOpen((o) => !o)}
      >
        {selected.map((v) => {
          const label = options.find((o) => o.value === v)?.label ?? v;
          return (
            <span
              key={v}
              className="inline-flex items-center gap-1 rounded border border-gray-300 bg-[#FFFFFF] px-2 py-0.5 text-xs text-gray-700"
            >
              {label}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); remove(v); }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={`Remove ${label}`}
              >
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          );
        })}
        <ChevronDown className="ml-auto" />
      </div>

      {open && available.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full rounded-lg border border-gray-200 bg-[#FFFFFF] shadow-lg py-1 max-h-48 overflow-auto">
          {available.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => { add(opt.value); setOpen(false); }}
                className="w-full text-left px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Datepicker ───────────────────────────────────────────────────────────────
const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

interface DatepickerProps {
  defaultValue?: Date;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  className?: string;
}

export function Datepicker({
  defaultValue,
  value: controlled,
  onChange,
  placeholder = "Choose date",
  className,
}: DatepickerProps) {
  const [internal, setInternal] = useState<Date | null>(defaultValue ?? null);
  const selected = controlled !== undefined ? controlled : internal;

  const today = new Date();
  const [viewYear, setViewYear] = useState((selected ?? today).getFullYear());
  const [viewMonth, setViewMonth] = useState((selected ?? today).getMonth());
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const pick = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    if (controlled === undefined) setInternal(date);
    onChange?.(date);
    setOpen(false);
  };

  const clear = () => {
    if (controlled === undefined) setInternal(null);
    onChange?.(null);
  };

  const goToday = () => {
    const t = new Date();
    setViewYear(t.getFullYear());
    setViewMonth(t.getMonth());
    if (controlled === undefined) setInternal(t);
    onChange?.(t);
    setOpen(false);
  };

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
    else setViewMonth((m) => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
    else setViewMonth((m) => m + 1);
  };

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth);
  const daysInPrev = getDaysInMonth(viewYear, viewMonth === 0 ? 11 : viewMonth - 1);

  // Build 6×7 grid
  const cells: { day: number; type: "prev" | "current" | "next" }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, type: "prev" });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, type: "current" });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, type: "next" });
  }

  const formatDisplay = (d: Date) =>
    `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;

  const isToday = (day: number) =>
    today.getDate() === day &&
    today.getMonth() === viewMonth &&
    today.getFullYear() === viewYear;

  const isSelected = (day: number) =>
    selected &&
    selected.getDate() === day &&
    selected.getMonth() === viewMonth &&
    selected.getFullYear() === viewYear;

  return (
    <div ref={ref} className={cn("relative inline-block", className)}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-[#FFFFFF] px-3 py-2 text-sm transition-shadow",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          selected ? "text-gray-900" : "text-gray-400",
          open && "ring-2 ring-blue-500 border-blue-500"
        )}
      >
        {/* Calendar icon */}
        <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>{selected ? formatDisplay(selected) : placeholder}</span>
      </button>

      {/* Calendar dropdown */}
      {open && (
        <div className="absolute z-30 mt-1 w-56 rounded-xl border border-gray-200 bg-[#FFFFFF] shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
            <button type="button" onClick={prevMonth} className="p-1 rounded hover:bg-gray-100 transition-colors" aria-label="Previous month">
              <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-sm font-semibold text-gray-800">
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button type="button" onClick={nextMonth} className="p-1 rounded hover:bg-gray-100 transition-colors" aria-label="Next month">
              <svg className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 px-2 pt-2">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-xs font-medium text-gray-500 pb-1">{d}</div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 px-2 pb-2 gap-y-0.5">
            {cells.map((cell, i) => {
              const isCurrent = cell.type === "current";
              const sel = isCurrent && isSelected(cell.day);
              const tod = isCurrent && isToday(cell.day);
              return (
                <button
                  key={i}
                  type="button"
                  disabled={!isCurrent}
                  onClick={() => isCurrent && pick(cell.day)}
                  className={cn(
                    "h-7 w-7 mx-auto flex items-center justify-center rounded-full text-xs transition-colors",
                    !isCurrent && "text-gray-300 cursor-default",
                    isCurrent && !sel && !tod && "text-gray-700 hover:bg-blue-50",
                    tod && !sel && "text-blue-600 font-semibold",
                    sel && "bg-blue-600 text-white font-semibold"
                  )}
                >
                  {cell.day}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100">
            <button type="button" onClick={clear} className="text-xs text-blue-600 hover:underline">Clear</button>
            <button type="button" onClick={goToday} className="text-xs text-blue-600 hover:underline font-medium">Today</button>
          </div>
        </div>
      )}
    </div>
  );
}