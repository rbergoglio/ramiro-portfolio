// ===== app/page.tsx (Home with brand styling, improved CSS) =====
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <Reveal>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Hello there! I&apos;m{" "}
                  <span className="bg-gradient-to-r from-[hsl(var(--brand))] to-orange-600 bg-clip-text text-transparent animate-gradient">
                    Rami!
                  </span>{" "}
                  Nice to meet you.
                </h1>
              </Reveal>
              <p className="mt-4 max-w-prose text-zinc-600 dark:text-zinc-400">
                I design, develop, and deploy end-to-end solutions — from React
                frontends to Python/Node backends and automated infra. Currently
                in Buenos Aires.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand)/0.9)] text-white"
              >
                <Link href="/projects">
                  See projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="bg-[hsl(var(--brand)/0.08)] hover:bg-[hsl(var(--brand)/0.12)]"
              >
                <Link href="/contact">Contact me</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[hsl(var(--brand)/0.3)] hover:bg-[hsl(var(--brand)/0.06)]"
              >
                <a
                  href="https://github.com/rbergoglio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-[hsl(var(--brand)/0.3)] hover:bg-[hsl(var(--brand)/0.06)]"
              >
                <a
                  href="https://www.linkedin.com/in/rbergoglio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm ring-1 ring-[hsl(var(--brand)/0.14)] dark:border-zinc-800">
              <Image
                src="/ramiro.jpeg"
                alt="Ramiro Bergoglio"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Featured project teaser */}
      <Section title="Featured projects" subtitle="Case study">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={0.2}>
            <ProjectCard key={projects[0].title} project={projects[0]} />
          </Reveal>
          <Reveal delay={0.2}>
            <ProjectCard key={projects[1].title} project={projects[1]} />
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="rounded-2xl border border-zinc-200 p-8 text-center shadow-sm dark:border-zinc-800 bg-[linear-gradient(135deg,hsl(var(--brand))_0%,hsl(var(--brand)/.75)_100%)]/10">
          <h3 className="text-2xl font-semibold tracking-tight">
            Open to interesting opportunities
          </h3>
          <p className="mx-auto mt-2 max-w-prose text-zinc-600 dark:text-zinc-400">
            I like tough problems and measurable impact. If you have a project
            in mind, let&apos;s talk.
          </p>
          <div className="mt-5 flex justify-center">
            <Button
              asChild
              className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand)/0.9)] text-white"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
