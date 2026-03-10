"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-primary font-semibold rounded-lg px-8 py-4 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98]",
        secondary:
          "border-2 border-accent text-accent bg-transparent rounded-lg px-8 py-4 hover:bg-accent hover:text-primary active:scale-[0.98]",
        ghost:
          "text-foreground rounded-lg px-4 py-2 hover:bg-surface active:scale-[0.98]",
        onDark:
          "bg-accent text-primary font-semibold rounded-lg px-8 py-4 hover:bg-surface hover:text-primary active:scale-[0.98]",
      },
      size: {
        default: "",
        sm: "px-5 py-2.5 text-xs",
        lg: "px-10 py-5 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
