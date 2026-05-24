import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  title?: string;
  intro?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export function Section({
  id,
  title,
  intro,
  className,
  containerClassName,
  children
}: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-14 sm:py-16", className)}>
      <div className={cn("mx-auto w-full max-w-content", containerClassName)}>
        {(title || intro) && (
          <header className="mb-8 max-w-3xl">
            {title && (
              <h2 className="text-balance text-[1.9rem] font-bold tracking-tight text-navy sm:text-[2.35rem]">
                {title}
              </h2>
            )}
            {intro && <p className="mt-3 text-base leading-relaxed text-muted sm:text-[1.05rem]">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
