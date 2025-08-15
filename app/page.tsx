import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/Section";
import { ArrowRight, Github, Linkedin } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Full‑stack developer building <span className="underline decoration-zinc-300 underline-offset-4 dark:decoration-zinc-700">fast, secure</span> web apps
              </h1>
              <p className="mt-4 max-w-prose text-zinc-600 dark:text-zinc-400">
                I design, develop, and deploy end‑to‑end solutions — from React frontends to Python/Node backends and automated infra. Currently in Buenos Aires.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/projects">
                  See projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Contact me</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/youruser" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://linkedin.com/in/youruser" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="aspect-[4/3] w-full rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-4 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950">
              {/* Placeholder for a hero image or code preview */}
              <div className="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-600">
                Add your image or a code screenshot here
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured project teaser */}
      <Section title="Featured project" subtitle="Case study">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
            <h3 className="text-lg font-semibold tracking-tight">Deployment automation for XYZ</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Reduced deploy time by 40% by building IaC with Ansible & PowerCLI, adding CI/CD and health checks.
            </p>
            <div className="mt-4 flex gap-3 text-xs text-zinc-500">
              <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-900">React</span>
              <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-900">FastAPI</span>
              <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-900">Ansible</span>
            </div>
            <div className="mt-5">
              <Link href="/projects" className="text-sm font-medium underline underline-offset-4">
                Read more →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
            <h3 className="text-lg font-semibold tracking-tight">Recipe app (members & visitors)</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Mobile-first app with search/filters, Supabase auth, and content moderation workflow.
            </p>
            <div className="mt-4 flex gap-3 text-xs text-zinc-500">
              <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-900">React Native</span>
              <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-900">Supabase</span>
              <span className="rounded-full bg-zinc-100 px-2 py-1 dark:bg-zinc-900">Expo Router</span>
            </div>
            <div className="mt-5">
              <Link href="/projects" className="text-sm font-medium underline underline-offset-4">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="rounded-2xl border border-zinc-200 p-8 text-center shadow-sm dark:border-zinc-800">
          <h3 className="text-2xl font-semibold tracking-tight">Open to interesting opportunities</h3>
          <p className="mx-auto mt-2 max-w-prose text-zinc-600 dark:text-zinc-400">
            I like tough problems and measurable impact. If you have a project in mind, let’s talk.
          </p>
          <div className="mt-5 flex justify-center">
            <Button asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}