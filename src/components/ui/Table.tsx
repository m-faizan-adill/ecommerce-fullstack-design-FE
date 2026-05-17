"use client";

import { Fragment, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// ─── Shared ───────────────────────────────────────────────────────────────────
function IconSquare({ className }: { className?: string }) {
  return <span className={cn("inline-block h-3.5 w-3.5 rounded-sm bg-gray-400 shrink-0", className)} />;
}

function ActionIcons() {
  return (
    <div className="flex items-center gap-1">
      <IconSquare />
      <IconSquare />
      <IconSquare />
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={cn("h-3.5 w-3.5 shrink-0", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={cn("h-3.5 w-3.5 shrink-0", className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

// ─── Simple Table ─────────────────────────────────────────────────────────────
interface SimpleRow {
  col1: string;
  col2: string;
  number: string;
}

interface SimpleTableProps {
  rows: SimpleRow[];
  className?: string;
}

export function SimpleTable({ rows, className }: SimpleTableProps) {
  return (
    <div className={cn("rounded-lg border border-gray-200 overflow-hidden", className)}>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors">
              <td className="px-4 py-2.5 text-gray-700 w-36">{row.col1}</td>
              <td className="px-4 py-2.5 text-gray-700 border-l border-gray-200 w-36">{row.col2}</td>
              <td className="px-4 py-2.5 text-gray-500 border-l border-gray-200 text-right">{row.number}</td>
              <td className="px-4 py-2.5 border-l border-gray-200 w-20">
                <ActionIcons />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Collapsible Table ────────────────────────────────────────────────────────
interface CollapsibleRow {
  col1: string;
  col2: string;
  number: string;
  total: string;
}

interface CollapsibleGroup {
  heading: string;
  total: string;
  rows: CollapsibleRow[];
  defaultOpen?: boolean;
}

interface CollapsibleTableProps {
  groups: CollapsibleGroup[];
  className?: string;
}

export function CollapsibleTable({ groups, className }: CollapsibleTableProps) {
  const [openGroups, setOpenGroups] = useState<Set<number>>(
    new Set(groups.map((g, i) => (g.defaultOpen ? i : -1)).filter((i) => i >= 0))
  );

  const toggle = (i: number) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className={cn("rounded-lg border border-gray-200 overflow-hidden", className)}>
      <table className="w-full text-sm">
        <tbody>
          {groups.map((group, gi) => {
            const isOpen = openGroups.has(gi);
            return (
              <Fragment key={`g-${gi}`}>
                {/* Group heading row */}
                <tr
                  className="border-b border-gray-200 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => toggle(gi)}
                >
                  <td colSpan={3} className="px-4 py-2.5">
                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                      {isOpen ? <ChevronDown className="text-blue-500" /> : <ChevronRight className="text-blue-500" />}
                      {group.heading}
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-right font-medium text-gray-800 tabular-nums">
                    {group.total}
                  </td>
                </tr>

                {/* Child rows */}
                {isOpen &&
                  group.rows.map((row, ri) => (
                    <tr
                      key={`g-${gi}-r-${ri}`}
                      className="border-b border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors"
                    >
                      <td className="pl-10 pr-4 py-2.5 text-gray-600 w-40">{row.col1}</td>
                      <td className="px-4 py-2.5 text-gray-600 border-l border-gray-200 w-36">{row.col2}</td>
                      <td className="px-4 py-2.5 text-gray-500 border-l border-gray-200 text-right tabular-nums">{row.number}</td>
                      <td className="px-4 py-2.5 text-right text-gray-700 tabular-nums font-medium">{row.total}</td>
                    </tr>
                  ))}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Large Table ──────────────────────────────────────────────────────────────
interface LargeRow {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  striped?: boolean;
}

interface LargeTableProps {
  columns: string[];
  rows: LargeRow[];
  className?: string;
}

export function LargeTable({ columns, rows, className }: LargeTableProps) {
  return (
    <div className={cn("rounded-lg border border-gray-200 overflow-hidden", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-white">
            {columns.map((col, i) => (
              <th
                key={i}
                className={cn(
                  "px-4 py-3 text-left text-sm font-semibold text-gray-700",
                  i > 0 && "border-l border-gray-200",
                  i === columns.length - 1 && "text-right"
                )}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors",
                row.striped && "bg-gray-50"
              )}
            >
              <td className="px-4 py-2.5">
                <div className="flex items-center gap-2 text-gray-700">
                  <IconSquare />
                  {row.col1}
                </div>
              </td>
              <td className="px-4 py-2.5 text-gray-700 border-l border-gray-200">{row.col2}</td>
              <td className="px-4 py-2.5 text-gray-700 border-l border-gray-200">{row.col3}</td>
              <td className="px-4 py-2.5 text-gray-700 border-l border-gray-200">{row.col4}</td>
              <td className="px-4 py-2.5 border-l border-gray-200">
                <div className="flex items-center justify-end gap-1">
                  <IconSquare />
                  <IconSquare />
                  <IconSquare />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Badge cell ───────────────────────────────────────────────────────────────
type BadgeVariant = "pending" | "active" | "inactive" | "success" | "error";

const badgeStyles: Record<BadgeVariant, string> = {
  pending: "bg-orange-100 text-orange-600",
  active: "bg-green-100 text-green-600",
  inactive: "bg-gray-100 text-gray-500",
  success: "bg-green-100 text-green-600",
  error: "bg-red-100 text-red-600",
};

export function TableBadge({ label, variant = "pending" }: { label: string; variant?: BadgeVariant }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", badgeStyles[variant])}>
      {label}
    </span>
  );
}

// ─── Dropdown cell ────────────────────────────────────────────────────────────
export function TableDropdownCell({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline">
      {label}
      <ChevronDown className="text-blue-500" />
    </button>
  );
}