import { cn } from "@/lib/utils";

interface ArrowIconProps {
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

export function ArrowIcon({
    className,
    direction = "left",
}: ArrowIconProps) {
    const rotate = {
        left: "",
        right: "rotate-180",
        up: "-rotate-90",
        down: "rotate-90",
    }[direction];

    return (
        <svg
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={cn(
                "size-[14.67px] shrink-0 transform transition-transform",
                rotate,
                className
            )}
        >
            <path
                d="M14.6667 6.41667H3.51083L8.635 1.2925L7.33333 0L0 7.33333L7.33333 14.6667L8.62583 13.3742L3.51083 8.25H14.6667V6.41667Z"
                fill="currentColor"
            />
        </svg>
    );
}