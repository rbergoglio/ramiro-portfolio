import Image from "next/image";
import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About" subtitle="Who I am">
      <div className="grid items-start gap-8 md:grid-cols-[220px_1fr]">
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 w-full md:w-[220px]">
          <Image src="/ramiro.jpeg" alt="Ramiro Bergoglio" width={300} height={300} className="object-cover w-full h-[220px] md:h-full" />
        </div>
        <div className="space-y-4 text-zinc-700 dark:text-zinc-300 text-left">
          <p>
            I am a Software Engineer with over six years of experience designing and building scalable, secure, and reliable applications in enterprise environments. I currently work at ExxonMobil as a Full Stack Developer, where I develop internal applications that automate critical security and networking processes, with a strong focus on Python-based backends and modern frontend frameworks.
          </p>
          <p>
            I enjoy exploring software engineering topics in depth and writing about how I approach problems. The goal of this site is to use it as a space to document ideas, coding challenges, and concepts I&apos;m learning. It&apos;s a work in progress!
          </p>
          <p>
            
          </p>
        </div>
      </div>
    </Section>
  );
}