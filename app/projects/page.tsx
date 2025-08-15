import { Section } from "@/components/Section";
import { ProjectCard, type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title: "Deployment automation for XYZ",
    description: "Reduced deploy time by 40% with IaC (Ansible, PowerCLI) and CI/CD checks.",
    tech: ["React", "FastAPI", "Ansible", "PowerCLI"],
    href: "/projects/xyz-automation",
    repo: "https://github.com/youruser/xyz-automation",
  },
  {
    title: "Recipe app (members & visitors)",
    description: "Search/filters, Supabase auth, moderation workflow. Mobile-first.",
    tech: ["React Native", "Expo Router", "Supabase"],
    repo: "https://github.com/youruser/recipe-app",
  },
  {
    title: "SDP/Zero Trust tooling",
    description: "Automation scripts and dashboards for Software Defined Perimeter operations.",
    tech: ["PowerShell", "Python", "VMware"],
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
