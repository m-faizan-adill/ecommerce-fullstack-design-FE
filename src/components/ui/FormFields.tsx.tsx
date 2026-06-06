"use client";

import {
  forwardRef,
  useState,
  useRef,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes,
  type SelectHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

// ─── Base Input ───────────────────────────────────────────────────────────────
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-gray-300 bg-[#FFFFFF] px-3 py-2 text-sm text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition-shadow duration-150",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

// ─── Base Textarea ────────────────────────────────────────────────────────────
interface BaseTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const BaseTextarea = forwardRef<HTMLTextAreaElement, BaseTextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-gray-300 bg-[#FFFFFF] px-3 py-2 text-sm text-gray-900",
        "placeholder:text-gray-400 resize-none",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "transition-shadow duration-150",
        className
      )}
      {...props}
    />
  )
);
BaseTextarea.displayName = "BaseTextarea";

// ─── Labeled Input ────────────────────────────────────────────────────────────
interface LabeledInputProps extends InputProps {
  label: string;
  hint?: string;
  hintAbove?: boolean; // hint shown above input (between label and input)
  required?: boolean;
  icon?: ReactNode; // small dot/icon after label
}

export function LabeledInput({
  label,
  hint,
  hintAbove = false,
  required,
  icon,
  className,
  ...props
}: LabeledInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        {icon && <span className="inline-flex">{icon}</span>}
      </div>
      {hintAbove && hint && (
        <p className="text-xs text-orange-500">{hint}</p>
      )}
      <Input className={className} {...props} />
      {!hintAbove && hint && (
        <p className="text-xs text-orange-500">{hint}</p>
      )}
    </div>
  );
}

// ─── Labeled Select ───────────────────────────────────────────────────────────
interface LabeledSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  hint?: string;
}

export function LabeledSelect({
  label,
  options,
  placeholder = "Select",
  hint,
  className,
  ...props
}: LabeledSelectProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {hint && <p className="text-xs text-orange-500">{hint}</p>}
      <select
        className={cn(
          "w-full rounded-lg border border-gray-300 bg-[#FFFFFF] px-3 py-2 text-sm text-gray-900",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed appearance-none",
          "bg-[url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")] bg-no-repeat bg-position-[right_0.75rem_center] bg-size-[1rem_1rem]",
          className
        )}
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

// ─── Labeled Textarea ─────────────────────────────────────────────────────────
interface LabeledTextareaProps extends BaseTextareaProps {
  label: string;
  hint?: string;
  rows?: number;
}

export function LabeledTextarea({
  label,
  hint,
  rows = 3,
  className,
  ...props
}: LabeledTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {hint && <p className="text-xs text-orange-500">{hint}</p>}
      <BaseTextarea rows={rows} className={className} {...props} />
    </div>
  );
}

// ─── Rich Textarea (with toolbar) ─────────────────────────────────────────────
const TOOLBAR_ACTIONS = [
  { icon: "B", title: "Bold", className: "font-bold" },
  { icon: "I", title: "Italic", className: "italic" },
  { icon: "⟨/⟩", title: "Code" },
  { icon: "❝", title: "Blockquote" },
  { icon: "↗", title: "Link" },
  { icon: "⊞", title: "Image" },
  { icon: "≡", title: "Ordered list" },
  { icon: "☰", title: "Unordered list" },
];

interface RichTextareaProps {
  label?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}

export function RichTextarea({
  label,
  placeholder = "Type here",
  rows = 4,
  className,
}: RichTextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className={cn("rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent", className)}>
        {/* Toolbar */}
        <div className="flex items-center gap-0.5 border-b border-gray-200 px-2 py-1 bg-[#FFFFFF]">
          {TOOLBAR_ACTIONS.map((action) => (
            <button
              key={action.title}
              type="button"
              title={action.title}
              className={cn(
                "h-6 min-w-6 px-1 rounded text-xs text-gray-600 hover:bg-gray-100 transition-colors",
                action.className
              )}
            >
              {action.icon}
            </button>
          ))}
        </div>
        {/* Textarea */}
        <textarea
          rows={rows}
          placeholder={placeholder}
          className="w-full bg-[#FFFFFF] px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 resize-none focus:outline-none"
        />
      </div>
    </div>
  );
}

// ─── Search Input ─────────────────────────────────────────────────────────────
interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  iconRight?: boolean; // magnifier on the right side
}

export function SearchInput({
  onClear,
  iconRight = false,
  defaultValue = "",
  onChange,
  className,
  ...props
}: SearchInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };
 
  const handleClear = () => {
    setInternalValue("");
    onClear?.();
    inputRef.current?.focus();
  };
 
  const currentValue = internalValue;
 
  const SearchIcon = () => (
    <svg className="h-4 w-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
 
  const ClearIcon = () => (
    <button
      type="button"
      onClick={handleClear}
      className="text-gray-400 hover:text-gray-600 transition-colors"
      aria-label="Clear search"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
 
  return (
    <div className={cn("relative flex items-center", className)}>
      {!iconRight && (
        <span className="absolute left-3 pointer-events-none">
          <SearchIcon />
        </span>
      )}
      <input
        ref={inputRef}
        value={currentValue}
        onChange={handleChange}
        className={cn(
          "w-full rounded-lg border border-gray-300 bg-[#FFFFFF] py-2 text-sm text-gray-900",
          "placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "transition-shadow duration-150",
          !iconRight ? "pl-9 pr-9" : "pl-3 pr-9"
        )}
        {...props}
      />
      <span className="absolute right-3 flex items-center gap-1">
        {currentValue && !iconRight ? <ClearIcon /> : null}
        {iconRight && <SearchIcon />}
      </span>
    </div>
  );
}

// ─── Number Input ─────────────────────────────────────────────────────────────
interface NumberInputProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  className?: string;
}

export function NumberInput({
  min = 0,
  max = Infinity,
  defaultValue = 0,
  onChange,
  className,
}: NumberInputProps) {
  const [value, setValue] = useState(defaultValue);

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setValue(clamped);
    onChange?.(clamped);
  };

  return (
    <div className={cn("inline-flex items-center gap-0 rounded-lg border border-gray-300 overflow-hidden", className)}>
      <button
        type="button"
        onClick={() => update(value - 1)}
        disabled={value <= min}
        className="h-9 w-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors border-r border-gray-300"
        aria-label="Decrease"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
        </svg>
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => update(Number(e.target.value))}
        className="w-12 h-9 text-center text-sm font-medium text-gray-900 bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        aria-label="Number value"
      />
      <button
        type="button"
        onClick={() => update(value + 1)}
        disabled={value >= max}
        className="h-9 w-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors border-l border-gray-300"
        aria-label="Increase"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  );
}

// ─── Input Group (input + addon/button/select on side) ────────────────────────
interface InputGroupProps {
  children: ReactNode; // expects 2 children: input + addon
  className?: string;
}

export function InputGroup({ children, className }: InputGroupProps) {
  return (
    <div className={cn("flex items-stretch", className)}>
      {children}
    </div>
  );
}

/** Addon that sits inside an InputGroup — for icon boxes, text labels, selects */
interface InputAddonProps {
  children: ReactNode;
  side: "left" | "right";
  className?: string;
  asButton?: boolean;
  onClick?: () => void;
}

export function InputAddon({ children, side, className, asButton, onClick }: InputAddonProps) {
  const Tag = asButton ? "button" : "div";
  return (
    <Tag
      type={asButton ? "button" : undefined}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center bg-gray-100 border border-gray-300 px-3 text-sm text-gray-600 shrink-0",
        side === "left" ? "rounded-l-lg border-r-0" : "rounded-r-lg border-l-0",
        asButton && "hover:bg-gray-200 transition-colors cursor-pointer",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/** Borderless input for use inside InputGroup */
export const GroupInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex-1 min-w-0 border border-gray-300 bg-[#FFFFFF] px-3 py-2 text-sm text-gray-900",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  )
);
GroupInput.displayName = "GroupInput";