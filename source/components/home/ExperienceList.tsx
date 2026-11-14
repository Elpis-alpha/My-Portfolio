import { EXPERIENCE } from "@/source/config";
import { cn } from "@/source/utils";
import Reveal from "../reusables/Reveal";

/** Roles, newest first. Shared by the home and about pages. */
const ExperienceList = ({ detailed = true }: { detailed?: boolean }) => (
  <ol className="border-t border-line">
    {EXPERIENCE.map((job, i) => (
      <Reveal as="li" key={job.company} delay={i * 60} className="grid gap-x-10 gap-y-4 border-b border-line py-8 md:grid-cols-12 md:py-10">
        <div className="md:col-span-3">
          <p className="label flex items-center gap-2.5">
            {job.current && <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-ok" />}
            <span className={cn(job.current && "text-ink")}>
              {job.start} – {job.end}
            </span>
          </p>
          <p className="label mt-2 !text-faint">
            {job.type} · {job.location}
          </p>
        </div>

        <div className="md:col-span-9">
          <h3 className="display text-[2rem] leading-tight md:text-[2.5rem]">
            {job.role}
            <span className="text-muted"> at </span>
            <em>{job.company}</em>
          </h3>
          <p className="prose-body mt-3 max-w-3xl text-[17px]">{job.summary}</p>
          {detailed && job.points && (
            <ul className="mt-5 max-w-3xl space-y-2.5">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span aria-hidden className="font-mono text-accent">+</span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Reveal>
    ))}
  </ol>
);

export default ExperienceList;
