// app/experience/page.tsx
import { Section } from "@/components/Section";
import { TimelineItem } from "@/components/TimelineItem";
import { Reveal } from "@/components/Reveal";


type ExperienceItem = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Full-stack Developer",
    company: "ExxonMobil",
    dates: "2023 — Present",
    bullets: [
      "Software development for 3 applications that automate the creation of advanced firewall rules called Entitlements.",
      "Technologies used: React, FastAPI, Flask, PowerShell, SQL.",
      "CI/CD with Azure Pipelines and GitHub Actions.",
      "Citizen developer in ServiceNow.",
      "Datadog for observability.",
    ],
  },
  {
    role: "Internet Hosting Analyst",
    company: "ExxonMobil",
    dates: "2020 — 2023",
    bullets: [
      "Design, maintenance, and upgrades for SDP virtual machines (Software Defined Perimeter).",
      "SDP is a security platform which replaces traditional VPNs and applies Zero Trust, providing increased cyber security.",
      "Used automation tools like Ansible, PowerShell, and Python to increase productivity.",
      "Automated deployment of appliances and backups using Ansible.",
    ],
  },
  {
    role: "Administrative",
    company: "Vivatia",
    dates: "2016 — 2019",
    bullets: [
      "Worked for client GalenoART, handling all tasks related to transforming physical documents into digital documents.",
      "Responsibilities included scanning, editing, and publishing documents to an internal database.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <Section title="Experience" subtitle="Roles & impact">
      <div className="relative space-y-6 border-l border-zinc-200 pl-4 dark:border-zinc-800">
        {experience.map((item, i) => (
          <Reveal key={`${item.company}-${item.role}-${item.dates}`} delay={i * 0.2}>
            <TimelineItem
              role={item.role}
              company={item.company}
              dates={item.dates}
              bullets={item.bullets}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
