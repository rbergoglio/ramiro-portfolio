import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
  img: string;
}

// Obtener todos los posts
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        img: data.img || 'placeholder.jpg',
        content,
      };
    });

  // Ordenar por fecha (más reciente primero)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Obtener un post específico por slug
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    img: data.img || 'placeholder.jpg',
    content,
  };
}