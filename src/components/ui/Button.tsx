import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-[#b95e3e] focus-visible:ring-terracotta/40",
  secondary:
    "bg-white text-navy ring-1 ring-navy/20 hover:bg-navy hover:text-white focus-visible:ring-navy/30",
  ghost:
    "bg-transparent text-navy ring-1 ring-navy/10 hover:bg-navy/5 focus-visible:ring-navy/30"
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
