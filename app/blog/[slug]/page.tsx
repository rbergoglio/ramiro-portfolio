import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-8 border-b pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <time>{post.date}</time>
          
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag} 
                className="bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-4xl prose-h1:mb-4
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:leading-7 prose-p:mb-4
        prose-a:text-blue-600 dark:prose-a:text-blue-400 
        prose-code:before:content-[''] prose-code:after:content-['']
        prose-pre:overflow-x-auto prose-pre:rounded-lg prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800
      ">
        <MDXRemote 
        source={post.content}
        options={{
            mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
            },
        }}
        />
      </div>
    </article>
  );
}