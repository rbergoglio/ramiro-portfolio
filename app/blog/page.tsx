import { getAllPosts } from '@/lib/posts';
import { BlogCard } from '@/components/BlogCard';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid gap-6">
        {posts.map(post => (
          <BlogCard 
            key={post.slug}
            blog={{
              title: post.title,
              description: post.description,
              href: `/blog/${post.slug}`,
              tags: post.tags,
              date: post.date,
              img: post.img
            }}
          />
        ))}
      </div>
    </div>
  );
}