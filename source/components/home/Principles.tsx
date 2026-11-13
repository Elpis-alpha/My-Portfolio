import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRINCIPLES } from "@/source/config";
import { pad } from "@/source/utils";
import Reveal from "../reusables/Reveal";

/** How I work, each point backed by a project where it happened. */
const Principles = () => (
  <ol className="grid border-l border-t border-line md:grid-cols-2">
    {PRINCIPLES.map((p, i) => (
      <Reveal as="li" key={p.title} delay={(i % 2) * 80} className="flex flex-col border-b border-r border-line p-6 md:p-9">
        <p className="label !text-accent">{pad(i + 1)}</p>
        <h3 className="display mt-5 text-[2rem] leading-tight md:text-4xl">{p.title}</h3>
        <p className="prose-body mt-4 text-[15.5px]">{p.body}</p>
        <Link
          href={`/projects/${p.slug}`}
          className="group mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm text-muted transition-colors hover:text-accent"
        >
          Seen in {p.proof}
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Reveal>
    ))}
  </ol>
);

export default Principles;
