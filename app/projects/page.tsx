import { Section } from "@/components/Section";
import { ProjectCard, type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "This portfolio!",
    description: "A modern, responsive portfolio built with Next.js 14, Tailwind CSS, and Lucide icons.",
    tech: ["React", "Next.js", "Tailwind CSS", "Lucide", "Resend", "Vercel", "TypeScript", "shadcn/ui"],
    repo: "https://github.com/rbergoglio/ramiro-portfolio",
  },
  {
    title: "Recipe app ",
    description: "Search/filters, Supabase auth, moderation workflow. Mobile-first.",
    tech: ["React Native", "Expo Router", "Supabase"],
    repo: "https://github.com/rbergoglio/recetas-da1",
  },
];

export default function ProjectsPage() {
  return (
    <Section title="Projects" subtitle="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  );
}
