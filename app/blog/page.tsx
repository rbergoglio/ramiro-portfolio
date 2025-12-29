import { Section } from "@/components/Section";
import { BlogCard, BlogCardProps } from "@/components/BlogCard";

const blogEntries: BlogCardProps[] = [
  {
    title: "The squared-sum problem",
    description: "Solving the squared-sum problem using Python.",
    tech: ["Python"],
    date: "2026-01-01",
    href: "/blog/first-post",
    img: "/images/blog1.png",
  }
];

export default function Blog() {
  return (
    <Section title="Blog" subtitle="Who I am">
      <div className="mt-8 mx-40">
        <BlogCard blog={blogEntries[0]}></BlogCard>
        <BlogCard blog={blogEntries[0]}></BlogCard>
        <BlogCard blog={blogEntries[0]}></BlogCard>
      </div>
    </Section>
  );
}