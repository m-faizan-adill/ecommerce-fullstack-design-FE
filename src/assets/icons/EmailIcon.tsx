import { cn } from "@/lib/utils";

interface EmailIconProps {
  className?: string;
}

export default function EmailIcon({ className }: EmailIconProps) {
  return (
    <svg
      className={cn(className)}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1668 5.49996C20.1668 4.49163 19.3418 3.66663 18.3335 3.66663H3.66683C2.6585 3.66663 1.8335 4.49163 1.8335 5.49996V16.5C1.8335 17.5083 2.6585 18.3333 3.66683 18.3333H18.3335C19.3418 18.3333 20.1668 17.5083 20.1668 16.5V5.49996ZM18.3335 5.49996L11.0002 10.0833L3.66683 5.49996H18.3335ZM18.3335 16.5H3.66683V7.33329L11.0002 11.9166L18.3335 7.33329V16.5Z"
        fill="currentColor"
      />
    </svg>
  );
}