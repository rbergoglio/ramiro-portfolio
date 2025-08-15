import { Section } from "@/components/Section";
import { TimelineItem } from "@/components/TimelineItem";

export default function ExperiencePage() {
  return (
    <Section title="Experience" subtitle="Roles & impact">
      <div className="relative space-y-6 border-l border-zinc-200 pl-4 dark:border-zinc-800">
        <TimelineItem
          role="Full‑stack Developer"
          company="ExxonMobil"
          dates="2023 — Present"
          bullets={[
            "Designed and maintained SDPs; automated VM lifecycle with Ansible/PowerCLI.",
            "Built internal tools with React, FastAPI, and Python to reduce manual ops.",
            "Improved platform reliability and team productivity through CI and scripting.",
          ]}
        />
        <TimelineItem
          role="Developer & Research Assistant"
          company="UADE"
          dates="2021 — 2023"
          bullets={[
            "Participated in a biotechnology research project; supported data pipelines.",
            "Co‑organized Global Game Jam events and shipped small Unity prototypes.",
          ]}
        />
      </div>
    </Section>
  );
}