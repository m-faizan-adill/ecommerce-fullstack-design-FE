import { cn } from "@/lib/utils";
import { JSX } from "react";

/**
 * Renders a small rectangular SVG flag (20×14 px by default).
 * Flags are inlined — zero network requests, no <Image> setup needed.
 * Add more country codes as needed following the same pattern.
 */

interface FlagIconProps {
  countryCode: string; // ISO 3166-1 alpha-2, e.g. "DE"
  className?: string;
  width?: number;
  height?: number;
  label?: string;     
}

// ─── Inline SVG flag definitions ─────────────────────────────────────────────

function FlagDE() {
  return (
    <>
      <rect width="20" height="5" y="0" fill="#000000" />
      <rect width="20" height="5" y="5" fill="#DD0000" />
      <rect width="20" height="4" y="10" fill="#FFCE00" />
    </>
  );
}

function FlagUS() {
  return (
    <>
      {/* 13 stripes */}
      {Array.from({ length: 13 }).map((_, i) => (
        <rect
          key={i}
          width="20"
          height="1.077"
          y={i * 1.077}
          fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
        />
      ))}
      {/* Canton (union) */}
      <rect width="8" height="7" fill="#3C3B6E" />
      {/* Stars — simplified dots */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, ...(row % 2 === 0 ? [5] : [])].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={0.7 + col * (row % 2 === 0 ? 1.2 : 1.2) + (row % 2 !== 0 ? 0.6 : 0)}
            cy={0.7 + row * 1.3}
            r="0.28"
            fill="#FFFFFF"
          />
        ))
      )}
    </>
  );
}

function FlagGB() {
  return (
    <>
      <rect width="20" height="14" fill="#012169" />
      {/* White diagonals */}
      <line x1="0" y1="0" x2="20" y2="14" stroke="#FFFFFF" strokeWidth="2.8" />
      <line x1="20" y1="0" x2="0" y2="14" stroke="#FFFFFF" strokeWidth="2.8" />
      {/* Red diagonals */}
      <line x1="0" y1="0" x2="20" y2="14" stroke="#C8102E" strokeWidth="1.5" />
      <line x1="20" y1="0" x2="0" y2="14" stroke="#C8102E" strokeWidth="1.5" />
      {/* White cross */}
      <rect x="8.5" y="0" width="3" height="14" fill="#FFFFFF" />
      <rect x="0" y="5.5" width="20" height="3" fill="#FFFFFF" />
      {/* Red cross */}
      <rect x="9" y="0" width="2" height="14" fill="#C8102E" />
      <rect x="0" y="6" width="20" height="2" fill="#C8102E" />
    </>
  );
}

function FlagFR() {
  return (
    <>
      <rect width="7"  height="14" x="0"  fill="#002395" />
      <rect width="6"  height="14" x="7"  fill="#FFFFFF" />
      <rect width="7"  height="14" x="13" fill="#ED2939" />
    </>
  );
}

function FlagNL() {
  return (
    <>
      <rect width="20" height="5" y="0"  fill="#AE1C28" />
      <rect width="20" height="4" y="5"  fill="#FFFFFF" />
      <rect width="20" height="5" y="9"  fill="#21468B" />
    </>
  );
}

// Fallback: plain grey rectangle with 2-letter code
function FlagFallback({ code }: { code: string }) {
  return (
    <>
      <rect width="20" height="14" fill="#E5E7EB" rx="1" />
      <text
        x="10"
        y="10"
        textAnchor="middle"
        fontSize="6"
        fontFamily="sans-serif"
        fill="#6B7280"
      >
        {code.toUpperCase()}
      </text>
    </>
  );
}

const FLAG_MAP: Record<string, () => JSX.Element> = {
  DE: FlagDE,
  US: FlagUS,
  GB: FlagGB,
  FR: FlagFR,
  NL: FlagNL,
};

// ─── Public component ─────────────────────────────────────────────────────────

export function FlagIcon({
  countryCode,
  className,
  width = 20,
  height = 14,
  label,
}: FlagIconProps) {
  const code = countryCode.toUpperCase();
  const FlagBody = FLAG_MAP[code] ?? (() => <FlagFallback code={code} />);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      width={width}
      height={height}
      role="img"
      aria-label={label ?? code}
      className={cn("inline-block rounded-[1px] shrink-0", className)}
      style={{ boxShadow: "0 0 0 0.5px rgba(0,0,0,0.15)" }}
    >
      <FlagBody />
    </svg>
  );
}