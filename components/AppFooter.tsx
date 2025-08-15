import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Ramiro Bergoglio. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <Link className="hover:underline" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:underline" href="/uses">
            Uses
          </Link>
          <a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}