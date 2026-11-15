import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "@/source/components/reusables/PageTransition";
import SectionHeader from "@/source/components/reusables/SectionHeader";
import Reveal from "@/source/components/reusables/Reveal";
import CaseRow from "@/source/components/work/CaseRow";
import ProjectCard from "@/source/components/work/ProjectCard";
import { GithubIcon } from "@/source/components/reusables/Icons";
import { CASE_STUDIES, MORE_WORK, PROJECTS } from "@/source/projects";
import { SOCIAL } from "@/source/config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and projects by Festus Gbolade: a CRDT whiteboard, an adaptable commerce platform, real-time multiplayer sync, an on-chain game and more.",
  alternates: { canonical: "/projects" },
};

export default function Work() {
  return (
    <PageTransition>
      <section className="shell pb-10 pt-32 md:pt-40">
        <p className="rise label mb-6">
          <span className="text-accent">Sheet 02</span>
          <span className="mx-2 text-faint">/</span>
          Work
          <span className="mx-2 text-faint">/</span>
          {PROJECTS.length} projects
        </p>
        <h1 className="rise display max-w-5xl text-[clamp(3rem,9vw,7rem)]" style={{ "--i": 1 } as React.CSSProperties}>
          Built to be used, <em className="text-accent">written to be read.</em>
        </h1>
        <p className="rise prose-body mt-8 max-w-2xl text-lg md:text-xl" style={{ "--i": 2 } as React.CSSProperties}>
          Six projects with the full story of what was hard and how it was
          solved, followed by smaller pieces. Most are live, and most of the
          code is public.
        </p>
      </section>

      <section className="shell py-16 md:py-24" aria-label="Case studies">
        <SectionHeader index="01" label="Case studies" title={<>The deep <em>dives.</em></>} />
        <div className="space-y-24 md:space-y-36">
          {CASE_STUDIES.map((project, i) => (
            <CaseRow key={project.slug} project={project} index={i} as="h2" />
          ))}
        </div>
      </section>

      <section className="shell py-16 md:py-24" aria-label="More work">
        <SectionHeader index="02" label="More work" title={<>Smaller, <em>still shipped.</em></>} />
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_WORK.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={(i % 3) * 80} />
          ))}

          <Reveal delay={160} className="flex lg:col-span-2">
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full flex-col justify-between rounded-[10px] border border-dashed border-line-strong p-7 transition-colors hover:border-accent"
            >
              <GithubIcon size={28} className="text-muted transition-colors group-hover:text-accent" />
              <div className="mt-16">
                <p className="display text-[2rem] leading-none">The rest is on GitHub</p>
                <p className="prose-body mt-3 text-[15px]">
                  Experiments, tooling and the source for most of what is on this page.
                </p>
                <p className="mt-5 inline-flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-accent">
                  github.com/Elpis-alpha <ArrowUpRight size={14} />
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
