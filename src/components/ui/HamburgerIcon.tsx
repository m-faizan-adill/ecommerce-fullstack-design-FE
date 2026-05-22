import { cn } from "@/lib/utils";

interface HamburgerIconProps {
  className?: string;
}

export function HamburgerIcon({ className }: HamburgerIconProps) {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
    >
      <path
        d="M1 1H17M1 7H17M1 13H17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}