import Image from "next/image";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About" subtitle="Who I am">
      <div className="grid items-start gap-8 md:grid-cols-[220px,1fr]">
        <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <Image src="/avatar.jpg" alt="Ramiro Bergoglio" width={600} height={600} className="h-auto w-full" />
        </div>
        <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
          <p>
            I’m Ramiro, a full‑stack developer based in Buenos Aires. I build pragmatic
            solutions end‑to‑end: React frontends, Python/Node backends, and automated
            infrastructure on VMware and cloud.
          </p>
          <p>
            Recently, I’ve focused on Software Defined Perimeter (SDP), scripting with
            Ansible, PowerShell and Python to boost productivity and reliability.
          </p>
          <p className="text-sm">
            Tools I use a lot: React, TypeScript, Tailwind, FastAPI/Flask, Node, SQL,
            Ansible, PowerShell, VMware/PowerCLI, GitHub Actions.
          </p>
        </div>
      </div>
    </Section>
  );
}