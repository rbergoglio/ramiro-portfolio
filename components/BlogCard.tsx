import Link from "next/link";

export type BlogCardProps = {
  title: string;
  description: string;
  tech?: string[];
  date: string;
  href: string;
  img: string;
};

export function BlogCard({ blog }: { blog: BlogCardProps }) {
  return (
    <Link href={blog.href}>
        <article className="border-b border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700">
            <div className="grid grid-cols-4">
                <div className="col-span-4 md:col-span-3">
                    <h3 className="text-lg font-semibold tracking-tight">{blog.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{blog.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
                        {blog.tech?.map((t) => (
                        <span key={t} className="rounded-full bg-[hsl(var(--brand)/0.12)] px-2 py-1">{t}</span>
                        ))}
                    </div>
                    <p className="mt-5 text-sm text-zinc-500">
                        {blog.date}
                    </p>
                </div>
                <div>
                    <img src={blog.img} alt={blog.title} className="rounded-lg mt-4 md:mt-0"/>
                </div>
            </div>
        </article>
    </Link>
  );
}