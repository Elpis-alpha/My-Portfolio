import { cn } from "@/source/utils";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  /** Section number, e.g. "02". */
  index: string;
  label: string;
  title: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
};

/** Numbered section heading with a ruled baseline, like a drawing sheet. */
const SectionHeader = ({ index, label, title, aside, className }: SectionHeaderProps) => (
  <Reveal>
    <header
      className={cn(
        "mb-12 flex flex-col gap-6 border-b border-line pb-6 md:mb-16 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div>
        <p className="label mb-4">
          <span className="text-accent">§ {index}</span>
          <span className="mx-2 text-faint">/</span>
          {label}
        </p>
        <h2 className="display text-[2.6rem] sm:text-5xl lg:text-6xl">{title}</h2>
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </header>
  </Reveal>
);

export default SectionHeader;
