import { cn } from "@/lib/utils";

interface ChevronIconProps {
  className?: string;
  direction?: "down" | "up" | "left" | "right";
}

export function ChevronIcon({ className, direction = "down" }: ChevronIconProps) {
  const rotate = {
    down: "rotate-0",
    up: "rotate-180",
    left: "-rotate-90",
    right: "rotate-90",
  }[direction];

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("transition-transform duration-200", rotate, className)}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}