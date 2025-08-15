import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  subtitle,
  className,
  children,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-4 py-16", className)}>
      {(title || subtitle) && (
        <header className="mb-8">
          {subtitle && (
            <p className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}