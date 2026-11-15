import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES, MORE_WORK } from "@/source/projects";
import SectionHeader from "../reusables/SectionHeader";
import Reveal from "../reusables/Reveal";
import CaseRow from "../work/CaseRow";

const SelectedWork = () => (
  <section id="work" className="shell py-16 md:py-24" aria-label="Selected work">
    <SectionHeader
      index="01"
      label="Selected work"
      title={<>Things I&rsquo;ve built, <em>and how.</em></>}
      aside={
        <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
          All work
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      }
    />

    <div className="space-y-24 md:space-y-36">
      {CASE_STUDIES.map((project, i) => (
        <CaseRow key={project.slug} project={project} index={i} />
      ))}
    </div>

    <Reveal className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center md:mt-28">
      <p className="prose-body max-w-xl">
        Plus {MORE_WORK.length} more: concept sites for a hotel and a
        restaurant, a bookstore with a built-in reader, and browser games
        written without a single dependency.
      </p>
      <Link href="/projects" className="btn btn-ghost">
        Browse all work <ArrowRight size={16} className="nudge-x" />
      </Link>
    </Reveal>
  </section>
);

export default SelectedWork;
