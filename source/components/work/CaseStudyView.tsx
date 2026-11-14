import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CASE_STUDIES, type Project } from "@/source/projects";
import { pad } from "@/source/utils";
import Frame from "../reusables/Frame";
import Reveal from "../reusables/Reveal";
import Gallery from "./Gallery";
import ProjectLinks from "./ProjectLinks";

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

/** Two-column block: a sticky annotation on the left, content on the right. */
const Block = ({ label, index, children }: { label: string; index: string; children: React.ReactNode }) => (
  <section className="grid gap-x-10 gap-y-6 border-t border-line py-14 md:grid-cols-12 md:py-20" aria-label={label}>
    <Reveal className="md:col-span-3">
      <h2 className="label md:sticky md:top-28">
        <span className="text-accent">{index}</span>
        <span className="mx-2 text-faint">/</span>
        {label}
      </h2>
    </Reveal>
    <div className="md:col-span-9">{children}</div>
  </section>
);

const CaseStudyView = ({ project }: { project: Project }) => {
  const study = project.caseStudy!;
  const position = CASE_STUDIES.findIndex((p) => p.slug === project.slug);
  const next = CASE_STUDIES[(position + 1) % CASE_STUDIES.length];
  const gallery = project.gallery?.slice(1) ?? [];

  return (
    <article>
      <header className="shell pt-28 md:pt-36">
        <div className="rise label flex items-center justify-between border-b border-line pb-4">
          <Link href="/projects" className="group inline-flex items-center gap-2 transition-colors hover:text-ink">
            <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
            All work
          </Link>
          <span>
            <span className="text-accent">Case study {pad(position + 1)}</span>
            <span className="mx-2 text-faint">/</span>
            {pad(CASE_STUDIES.length)}
          </span>
        </div>

        <p className="rise label mt-12" style={i(1)}>{project.kind}</p>
        <h1 className="rise display mt-4 text-[clamp(3.5rem,13vw,9.5rem)] !leading-[0.9]" style={i(2)}>
          {project.title}
        </h1>
        <p className="rise mt-8 max-w-3xl text-xl leading-relaxed text-muted md:text-2xl md:leading-relaxed" style={i(3)}>
          {project.summary}
        </p>

        <dl className="rise mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4" style={i(4)}>
          {[
            { k: "Role", v: study.role },
            { k: "Timeline", v: study.timeline },
            { k: "Context", v: project.context === "Personal" ? "Personal project" : `Professional, at ${project.context}` },
          ].map((row) => (
            <div key={row.k} className="border-b border-r border-line px-5 py-4">
              <dt className="label">{row.k}</dt>
              <dd className="mt-2 text-[15px] text-ink">{row.v}</dd>
            </div>
          ))}
          <div className="border-b border-r border-line px-5 py-4">
            <dt className="label">Links</dt>
            <dd className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              <ProjectLinks project={project} className="!text-[15px] !text-ink hover:!text-accent" />
            </dd>
          </div>
        </dl>
      </header>

      <div className="shell mt-12 md:mt-16">
        <div className="rise relative" style={i(5)}>
          <span className="regmark -left-[7px] -top-[7px]" />
          <span className="regmark -right-[7px] -top-[7px]" />
          <span className="regmark -bottom-[7px] -left-[7px]" />
          <span className="regmark -bottom-[7px] -right-[7px]" />
          <Frame image={project.cover} host={project.host ?? project.title} sizes="(min-width: 1280px) 1168px, 100vw" priority />
        </div>
        <p className="label mt-4">
          <span className="text-accent">Fig. 01</span>
          <span className="mx-2 text-faint">/</span>
          <span className="normal-case tracking-normal">{project.cover.alt}</span>
        </p>

        <Reveal className="mt-14">
          <ul className="grid border-l border-t border-line sm:grid-cols-3">
            {study.facts.map((fact) => (
              <li key={fact.label} className="border-b border-r border-line px-6 py-7">
                <p className="display text-5xl md:text-6xl">{fact.value}</p>
                <p className="mt-3 text-sm leading-snug text-muted">{fact.label}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="shell mt-16 md:mt-24">
        <Block index="01" label="The problem">
          <Reveal>
            <p className="display max-w-4xl text-3xl !leading-[1.18] md:text-[2.75rem]">{study.problem}</p>
          </Reveal>
        </Block>

        <Block index="02" label="What I built">
          <ol className="max-w-3xl">
            {study.built.map((item, n) => (
              <Reveal as="li" key={item} delay={n * 40} className="flex gap-5 border-b border-line py-5 first:pt-0 last:border-0">
                <span className="label pt-1.5 !text-faint">{pad(n + 1)}</span>
                <p className="text-[17px] leading-relaxed text-ink/90">{item}</p>
              </Reveal>
            ))}
          </ol>
        </Block>

        <Block index="03" label="Engineering notes">
          <div className="grid border-l border-t border-line md:grid-cols-3">
            {study.notes.map((note, n) => (
              <Reveal key={note.title} delay={n * 80} className="border-b border-r border-line p-6 md:p-7">
                <h3 className="display text-[1.7rem] leading-tight">{note.title}</h3>
                <p className="prose-body mt-4 text-[15px]">{note.body}</p>
              </Reveal>
            ))}
          </div>
        </Block>

        <Block index="04" label="Stack">
          <Reveal>
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li key={t} className="chip !px-3 !py-1.5 !text-xs !text-ink">{t}</li>
              ))}
            </ul>
          </Reveal>
        </Block>

        {gallery.length > 0 && (
          <Block index="05" label="Gallery">
            <Gallery images={gallery} title={project.title} />
          </Block>
        )}
      </div>

      <div className="shell">
        <Link href={`/projects/${next.slug}`} className="group block border-y border-line py-12 md:py-16">
          <p className="label mb-4">Next case study</p>
          <div className="flex items-end justify-between gap-6">
            <p className="display text-6xl transition-colors group-hover:text-accent md:text-8xl">{next.title}</p>
            <ArrowRight className="mb-3 h-8 w-8 shrink-0 text-muted transition-all duration-500 group-hover:translate-x-2 group-hover:text-accent md:h-12 md:w-12" strokeWidth={1.25} />
          </div>
          <p className="prose-body mt-4 max-w-xl">{next.kind}</p>
        </Link>
      </div>
    </article>
  );
};

export default CaseStudyView;
