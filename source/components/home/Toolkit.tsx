import { TOOLKIT } from "@/source/config";
import Reveal from "../reusables/Reveal";

/** The stack, grouped. No percentage bars: the work is the evidence. */
const Toolkit = () => (
  <dl className="border-t border-line">
    {TOOLKIT.map((group, i) => (
      <Reveal key={group.title} delay={i * 40} className="grid gap-x-10 gap-y-3 border-b border-line py-5 md:grid-cols-12">
        <dt className="label pt-1.5 md:col-span-3">{group.title}</dt>
        <dd className="flex flex-wrap gap-1.5 md:col-span-9">
          {group.items.map((item) => (
            <span key={item} className="chip !text-xs !text-ink">{item}</span>
          ))}
        </dd>
      </Reveal>
    ))}
  </dl>
);

export default Toolkit;
