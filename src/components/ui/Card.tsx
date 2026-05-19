import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  title: string;
  description: string;
  details?: string[];
  icon?: ReactNode;
  className?: string;
};

export function Card({ title, description, details, icon, className }: CardProps) {
  return (
    <article
      className={cn(
        "h-full rounded-2xl border border-navy/10 bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
    >
      {icon && (
        <div className="mb-4 inline-flex rounded-xl bg-navy/5 p-3 text-navy" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
      {details && details.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-body">
          {details.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
