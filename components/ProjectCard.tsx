import Link from "next/link";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-zinc-200 p-6 shadow-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full bg-[hsl(var(--brand)/0.12)] px-2 py-1">{t}</span>
        ))}
      </div>
      {(project.href || project.repo) && (
        <div className="mt-5 flex gap-4 text-sm">
          {project.href && (
            <Link href={project.href} className="underline underline-offset-4 decoration-[hsl(var(--brand)/0.6)]">Demo →</Link>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-[hsl(var(--brand)/0.6)]">Code ↗</a>
          )}
        </div>
      )}
    </article>
  );
}