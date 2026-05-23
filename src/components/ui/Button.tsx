import { cn } from "@/lib/utils";
import { Children, cloneElement, forwardRef, isValidElement, ReactElement, type ButtonHTMLAttributes, type ReactNode } from "react";


type Variant = "filled" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";
type Shape = "default" | "icon";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  shape?: Shape;
  block?: boolean;
  trailingIcon?: ReactNode;
  leadingIcon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none";

const variantStyles: Record<Variant, string> = {
  filled: "text-white bg-gradient-to-r from-[#127FFF] to-[#0067FF] hover:brightness-110 active:brightness-95 border-0",
  outline: "text-[#0067FF] bg-white border border-[#0067FF]/40 hover:bg-blue-50 active:bg-blue-100",
  ghost: "text-[#0067FF] bg-transparent border-0 hover:bg-blue-50 active:bg-blue-100",
};


const sizes: Record<Size, Record<Shape, string>> = {
  sm: {
    default: "h-7 px-3 text-xs rounded-md",
    icon: "h-7 w-7 rounded-md",
  },
  md: {
    default: "h-9 px-4 text-sm rounded-lg",
    icon: "h-9 w-9 rounded-lg",
  },
  lg: {
    default: "h-11 px-6 text-base rounded-xl",
    icon: "h-11 w-11 rounded-xl",
  },
};

export const BtnIcon = ({ variant = "filled" }: { variant?: Variant; }) => (
  <span
    className={cn(
      "inline-flex items-center justify-center rounded-[3px] shrink-0",
      "h-3.5 w-3.5",
      variant === "filled" ? "bg-white/80" : "bg-[#0067FF]"
    )}
  />
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "filled",
      size = "md",
      shape = "default",
      leadingIcon,
      trailingIcon,
      children,
      block = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          base,
          variantStyles[variant],
          sizes[size][shape],
          block && "w-full",
          className
        )}
        {...props}
      >
        {leadingIcon}
        {shape === "default" && children}
        {trailingIcon}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup = ({ children, className }: ButtonGroupProps) => {
  const items = Children.toArray(children);
  return (
    <div className={cn("inline-flex", className)}>
      {items.map((child, i) => {
        if (!isValidElement(child)) return child;
        const isFirst = i === 0;
        const isLast = i === items.length - 1;
        return cloneElement(
          child as ReactElement<{ className?: string }>,
          {
            className: cn(
              (child as ReactElement<{ className?: string }>).props
                .className,
              "rounded-none border-r-0",
              isFirst && "rounded-l-lg",
              isLast && "rounded-r-lg border-r"
            ),
          }
        );
      })}
    </div>
  );
};

export interface ButtonDropdownProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const ButtonDropdown = ({
  label = "Button",
  variant = "filled",
  size = "md",
  className,
  onClick,
}: ButtonDropdownProps & { onClick?: () => void }) => {
  return (
    <Button
      variant={variant}
      size={size}
      onClick={onClick}
      trailingIcon={
        <svg
          className={cn(
            "h-4 w-4 shrink-0",
            variant === "filled" ? "text-white" : "text-[#0067FF]"
          )}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      className={className}
    >
      {label}
    </Button>
  );
};

export default Button;