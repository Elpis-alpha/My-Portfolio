"use client";
import { useState } from "react";
import { Images } from "lucide-react";
import type { Project } from "@/source/projects";
import Frame from "../reusables/Frame";
import Reveal from "../reusables/Reveal";
import Lightbox from "../general/Lightbox";
import ProjectLinks from "./ProjectLinks";

/** A smaller project. The figure opens the gallery, or the live site. */
const ProjectCard = ({ project, delay = 0 }: { project: Project; delay?: number }) => {
  const [open, setOpen] = useState<number | null>(null);
  const gallery = project.gallery;
  const target = project.links.live ?? project.links.x ?? project.links.code;

  const figure = (
    <Frame
      image={project.cover}
      host={project.host ?? project.title}
      sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
      imageClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
    />
  );

  return (
    <Reveal as="article" delay={delay} className="group flex flex-col">
      {gallery ? (
        <button
          type="button"
          onClick={() => setOpen(0)}
          aria-label={`Open the ${project.title} gallery`}
          className="relative block w-full text-left"
        >
          {figure}
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-bg/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink backdrop-blur">
            <Images size={12} /> {gallery.length}
          </span>
        </button>
      ) : (
        <a href={target} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} tabIndex={-1} className="block">
          {figure}
        </a>
      )}

      <div className="mt-5 flex flex-1 flex-col">
        <p className="label mb-2">
          {project.kind}
          {project.context !== "Personal" && (
            <>
              <span className="mx-2 text-faint">/</span>
              {project.context}
            </>
          )}
        </p>
        <h3 className="display text-[2rem] leading-none">{project.title}</h3>
        <p className="prose-body mt-3 text-[15px]">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Stack">
          {project.stack.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
          <ProjectLinks project={project} />
        </div>
      </div>

      {gallery && <Lightbox images={gallery} index={open} title={project.title} onIndex={setOpen} />}
    </Reveal>
  );
};

export default ProjectCard;
