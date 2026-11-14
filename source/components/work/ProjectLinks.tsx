import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/source/projects";
import { cn } from "@/source/utils";

const LABELS: { key: keyof Project["links"]; label: string }[] = [
  { key: "live", label: "Live site" },
  { key: "code", label: "Code" },
  { key: "backend", label: "API code" },
  { key: "docs", label: "API docs" },
  { key: "x", label: "On X" },
];

/** External links for a project, in a fixed order. */
const ProjectLinks = ({ project, className }: { project: Project; className?: string }) => (
  <>
    {LABELS.filter(({ key }) => project.links[key]).map(({ key, label }) => (
      <a
        key={key}
        href={project.links[key]}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group/link inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent",
          className,
        )}
      >
        {label}
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      </a>
    ))}
  </>
);

export default ProjectLinks;
