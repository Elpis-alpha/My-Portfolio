import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AVAILABILITY, LANGUAGES, PROFILE } from "@/source/config";
import Reveal from "../reusables/Reveal";
import CopyEmail from "../reusables/CopyEmail";
import LocalTime from "../reusables/LocalTime";

/** The closing call to action. Rendered above the footer on every page but /contact. */
const ContactCTA = () => (
  <section className="shell py-20 md:py-28" aria-labelledby="cta-title">
    <Reveal>
      <div className="relative border border-line-strong bg-raise/60 px-6 py-12 backdrop-blur-sm sm:px-10 md:px-16 md:py-20">
        <span className="regmark -left-[7px] -top-[7px]" />
        <span className="regmark -right-[7px] -top-[7px]" />
        <span className="regmark -bottom-[7px] -left-[7px]" />
        <span className="regmark -bottom-[7px] -right-[7px]" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="label mb-6">
              <span className="text-accent">§</span>
              <span className="mx-2 text-faint">/</span>
              Contact
            </p>
            <h2 id="cta-title" className="display text-5xl sm:text-6xl lg:text-7xl">
              Have a hard problem?{" "}
              <em className="text-accent">Let&rsquo;s talk.</em>
            </h2>
            <p className="prose-body mt-7 max-w-xl text-lg">{AVAILABILITY.note}</p>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn btn-primary self-start">
                Start a conversation <ArrowRight size={16} className="nudge-x" />
              </Link>
              <CopyEmail className="text-[15px] text-muted" />
            </div>
          </div>

          <dl className="self-end border-t border-line lg:col-span-4 lg:col-start-9">
            {[
              { k: "Based in", v: `${PROFILE.location} · ${PROFILE.utcOffset}` },
              { k: "Local time", v: <LocalTime /> },
              ...AVAILABILITY.overlap.map((o) => ({ k: `Overlap, ${o.region}`, v: o.window })),
              { k: "Languages", v: LANGUAGES.map((l) => `${l.title} (${l.level.toLowerCase()})`).join(", ") },
            ].map((row) => (
              <div key={row.k} className="flex items-baseline justify-between gap-6 border-b border-line py-3.5">
                <dt className="label">{row.k}</dt>
                <dd className="text-right text-sm text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Reveal>
  </section>
);

export default ContactCTA;
