import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/source/projects";
import { cn, pad } from "@/source/utils";
import Frame from "../reusables/Frame";
import Reveal from "../reusables/Reveal";
import ProjectLinks from "./ProjectLinks";

type CaseRowProps = {
  project: Project;
  index: number;
  /** Heading level differs between the home page (h3) and /projects (h2). */
  as?: "h2" | "h3";
};

/** A flagship project: big figure on one side, the story on the other. */
const CaseRow = ({ project, index, as: Heading = "h3" }: CaseRowProps) => {
  const flip = index % 2 === 1;
  const href = `/projects/${project.slug}`;

  return (
    <Reveal as="article" className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <figure className={cn("lg:col-span-7", flip && "lg:order-2")}>
        <Link href={href} aria-label={`${project.title} case study`} tabIndex={-1} className="block">
          <Frame
            image={project.cover}
            host={project.host ?? project.title}
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority={index === 0}
            imageClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
          />
        </Link>
        <figcaption className="label mt-4 flex items-center justify-between">
          <span>
            <span className="text-accent">Fig. {pad(index + 1)}</span>
            <span className="mx-2 text-faint">/</span>
            {project.kind}
          </span>
          <span className="text-faint">{project.year}</span>
        </figcaption>
      </figure>

      <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
        <p className="label mb-4">
          {project.context === "Personal" ? "Personal project" : `Built at ${project.context}`}
        </p>
        <Heading className="display text-5xl md:text-6xl">
          <Link href={href} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </Heading>
        <p className="prose-body mt-5 text-[17px]">{project.summary}</p>

        {project.highlights && (
          <ul className="mt-6 space-y-3 border-t border-line pt-6">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                <span aria-hidden className="font-mono text-accent">+</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-7 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.slice(0, 7).map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href={href} className="btn btn-ghost !h-10 !px-4 !text-sm">
            Read the case study <ArrowRight size={15} className="nudge-x" />
          </Link>
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
};

export default CaseRow;
