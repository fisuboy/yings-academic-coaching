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
    <section id={id} className={cn("px-4 py-16 sm:py-20", className)}>
      <div className={cn("mx-auto w-full max-w-content", containerClassName)}>
        {(title || intro) && (
          <header className="mb-10 max-w-3xl">
            {title && (
              <h2 className="text-balance text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
