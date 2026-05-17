'use client';

import { useState } from "react";

interface PaginationProps {
  totalPages: number;
  defaultPage?: number;
}
 
export default function Pagination({ totalPages, defaultPage = 1 }: PaginationProps) {
  const [current, setCurrent] = useState(defaultPage);
 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
 
  return (
    <div className="flex items-center gap-1">
      <PageButton
        onClick={() => setCurrent((p) => Math.max(1, p - 1))}
        disabled={current === 1}
        aria-label="Previous page"
      >
        <ChevronLeft />
      </PageButton>
 
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => setCurrent(page)}
          active={page === current}
          aria-label={`Page ${page}`}
          aria-current={page === current ? "page" : undefined}
        >
          {page}
        </PageButton>
      ))}
 
      <PageButton
        onClick={() => setCurrent((p) => Math.min(totalPages, p + 1))}
        disabled={current === totalPages}
        aria-label="Next page"
      >
        <ChevronRight />
      </PageButton>
    </div>
  );
}

interface PageButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}
 
export function PageButton({ active = false, children, className, ...props }: PageButtonProps) {
  return (
    <button
      {...props}
      className={[
        "inline-flex h-8 min-w-8 items-center justify-center rounded border px-2 text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1",
        active
          ? "border-blue-600 bg-blue-600 text-white font-semibold"
          : "border-gray-300 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

interface PaginationWithSelectorProps {
  totalPages: number;
  defaultPage?: number;
  perPageOptions?: number[];
  defaultPerPage?: number;
}
 
export function PaginationWithSelector({
  totalPages,
  defaultPage = 1,
  perPageOptions = [15, 25, 50],
  defaultPerPage = 15,
}: PaginationWithSelectorProps) {
  const [current, setCurrent] = useState(defaultPage);
  const [perPage, setPerPage] = useState(defaultPerPage);
 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
 
  return (
    <div className="flex items-center gap-2">
      <PageButton
        onClick={() => setCurrent((p) => Math.max(1, p - 1))}
        disabled={current === 1}
        aria-label="Previous page"
      >
        <ChevronLeft />
      </PageButton>
 
      {pages.map((page) => (
        <PageButton
          key={page}
          onClick={() => setCurrent(page)}
          active={page === current}
          aria-label={`Page ${page}`}
          aria-current={page === current ? "page" : undefined}
        >
          {page}
        </PageButton>
      ))}
 
      <PageButton
        onClick={() => setCurrent((p) => Math.min(totalPages, p + 1))}
        disabled={current === totalPages}
        aria-label="Next page"
      >
        <ChevronRight />
      </PageButton>
 
      <select
        value={perPage}
        onChange={(e) => {
          setPerPage(Number(e.target.value));
          setCurrent(1);
        }}
        className="ml-2 h-8 rounded border border-gray-300 bg-white px-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Items per page"
      >
        {perPageOptions.map((opt) => (
          <option key={opt} value={opt}>
            Show {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
 
export function ChevronLeft() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}
 
export function ChevronRight() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}