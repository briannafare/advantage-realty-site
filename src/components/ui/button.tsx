"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center gap-2 whitespace-nowrap font-display font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A5430] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        /* PRIMARY — Lime filled pill (Rillo style) */
        default:
          "rounded-full bg-[#C9E83A] text-[#1D3B22] text-[13px] px-[22px] py-[11px] hover:bg-[#B6D82A] hover:scale-[1.02] active:scale-[0.98]",
        /* SECONDARY on light — Outlined dark */
        secondary:
          "rounded-full bg-transparent text-[#141414] border-[1.5px] border-[#141414] text-[13px] px-[22px] py-[11px] hover:bg-[#141414] hover:text-white active:scale-[0.98]",
        /* GHOST — text only for nav */
        ghost:
          "rounded-[14px] px-4 py-2 text-[#505050] text-sm font-medium hover:bg-[#F2F0EA] active:scale-[0.98]",
        /* DARK fill — Nav "Get Started" ONLY */
        dark:
          "rounded-full bg-[#141414] text-white text-[13px] px-[22px] py-[11px] hover:bg-[#2a2a2a] hover:scale-[1.01] active:scale-[0.98]",
        /* OUTLINE WHITE — dark CTA block near footer */
        outlineWhite:
          "rounded-full bg-transparent text-white border-[1.5px] border-white/50 text-[13px] px-[22px] py-[11px] hover:border-white hover:bg-white/10 active:scale-[0.98]",
      },
      size: {
        default: "",
        sm: "px-[18px] py-[8px] text-xs",
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
