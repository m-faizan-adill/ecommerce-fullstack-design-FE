"use client";

import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ─── Checkbox ─────────────────────────────────────────────────────────────────
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate = false, className, id, ...props }, ref) => {
    const inputId = id ?? (label ? `chk-${label}` : undefined);
    return (
      <label
        htmlFor={inputId}
        className="inline-flex items-center gap-2 cursor-pointer select-none group"
      >
        <span className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          {/* Box */}
          <span
            className={cn(
              "h-4 w-4 rounded-sm border-2 border-gray-300 bg-white transition-colors duration-150",
              "peer-checked:border-blue-600 peer-checked:bg-blue-600",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-1",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              indeterminate && "border-blue-600 bg-blue-600",
              className
            )}
          />
          {/* Checkmark */}
          {!indeterminate ? (
            <svg
              className="absolute h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M1 5l3.5 3.5L11 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="absolute h-2.5 w-2.5 text-white pointer-events-none"
              viewBox="0 0 12 4"
              fill="none"
            >
              <path
                d="M1 2h10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
        {label && (
          <span className="text-sm text-gray-700 peer-disabled:opacity-50">{label}</span>
        )}
      </label>
    );
  }
);
Checkbox.displayName = "Checkbox";

// ─── Checkbox Group ───────────────────────────────────────────────────────────
interface CheckboxGroupProps {
  label?: string;
  options: { value: string; label: string }[];
  defaultValues?: string[];
  onChange?: (values: string[]) => void;
  className?: string;
}

export function CheckboxGroup({
  label,
  options,
  defaultValues = [],
  onChange,
  className,
}: CheckboxGroupProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set(defaultValues));

  const toggle = (value: string) => {
    const next = new Set(selected);
    next.has(value) ? next.delete(value) : next.add(value);
    setSelected(next);
    onChange?.(Array.from(next));
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <Checkbox
            key={opt.value}
            label={opt.label}
            checked={selected.has(opt.value)}
            onChange={() => toggle(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Radio ────────────────────────────────────────────────────────────────────
interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, ...props }, ref) => {
    const inputId = id ?? (label ? `radio-${label}` : undefined);
    return (
      <label
        htmlFor={inputId}
        className="inline-flex items-center gap-2 cursor-pointer select-none"
      >
        <span className="relative inline-flex items-center justify-center">
          <input
            ref={ref}
            id={inputId}
            type="radio"
            className="peer sr-only"
            {...props}
          />
          {/* Outer ring */}
          <span
            className={cn(
              "h-4 w-4 rounded-full border-2 border-gray-300 bg-white transition-colors duration-150",
              "peer-checked:border-blue-600",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-1",
              "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed",
              className
            )}
          />
          {/* Inner dot */}
          <span className="absolute h-2 w-2 rounded-full bg-blue-600 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
        </span>
        {label && (
          <span className="text-sm text-gray-700">{label}</span>
        )}
      </label>
    );
  }
);
Radio.displayName = "Radio";

// ─── Radio Group ──────────────────────────────────────────────────────────────
interface RadioGroupProps {
  label?: string;
  name: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function RadioGroup({
  label,
  name,
  options,
  defaultValue,
  onChange,
  className,
}: RadioGroupProps) {
  const [selected, setSelected] = useState(defaultValue ?? "");

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <Radio
            key={opt.value}
            label={opt.label}
            name={name}
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => handleChange(opt.value)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Switch ───────────────────────────────────────────────────────────────────
interface SwitchProps {
  label?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  className?: string;
}

export function Switch({
  label,
  defaultChecked = false,
  checked: controlledChecked,
  onChange,
  disabled = false,
  id,
  className,
}: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  const inputId = id ?? (label ? `switch-${label}` : undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (controlledChecked === undefined) setInternalChecked(e.target.checked);
    onChange?.(e.target.checked);
  };

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "inline-flex items-center gap-2 cursor-pointer select-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span className="relative inline-flex items-center">
        <input
          id={inputId}
          type="checkbox"
          role="switch"
          aria-checked={isChecked}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only peer"
        />
        {/* Track */}
        <span
          className={cn(
            "h-6 w-11 rounded-full border-2 transition-colors duration-200",
            isChecked
              ? "bg-blue-600 border-blue-600"
              : "bg-gray-300 border-gray-300"
          )}
        />
        {/* Thumb */}
        <span
          className={cn(
            "absolute left-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform duration-200",
            isChecked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </span>
      {label && (
        <span className="text-sm text-gray-700">{label}</span>
      )}
    </label>
  );
}