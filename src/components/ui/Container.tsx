import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  noPadding?: boolean;
}

export default function Container(prop: ContainerProps) {
  const { className, children, noPadding, ...props } = prop;
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl",
        !noPadding && "px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
