import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ABOUT_DATA, EDUCATION, PROFILE } from "@/source/config";
import Reveal from "../reusables/Reveal";
import SectionHeader from "../reusables/SectionHeader";
import Shot from "../reusables/Shot";

const AboutTeaser = () => (
  <section className="shell py-16 md:py-24" aria-label="About">
    <SectionHeader
      index="04"
      label="About"
      title={<>Engineer by training, <em>builder by habit.</em></>}
    />

    <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className="lg:col-span-4">
        <figure>
          <div className="relative">
            <span className="regmark -left-[7px] -top-[7px]" />
            <span className="regmark -bottom-[7px] -right-[7px]" />
            <div className="aspect-[4/5] overflow-hidden border border-line-strong bg-sunk">
              <Shot
                image={{ src: ABOUT_DATA.images.corporate, alt: `Portrait of ${PROFILE.name}` }}
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-[50%_18%] grayscale-[0.15] transition-[filter,transform] duration-700 hover:scale-[1.02] hover:grayscale-0"
              />
            </div>
          </div>
          <figcaption className="label mt-4">
            <span className="text-accent">Fig. 06</span>
            <span className="mx-2 text-faint">/</span>
            {PROFILE.name}, {PROFILE.location}
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={100} className="lg:col-span-7 lg:col-start-6">
        <p className="display text-3xl !leading-[1.15] md:text-[2.6rem]">
          {ABOUT_DATA.story[0]}
        </p>
        <p className="prose-body mt-8 max-w-2xl text-lg">{ABOUT_DATA.story[1]}</p>

        <dl className="mt-10 grid gap-x-10 border-t border-line sm:grid-cols-2">
          {[
            { k: "Now", v: `${PROFILE.currentRole}, ${PROFILE.currentCompany}` },
            { k: "Based in", v: `${PROFILE.location} (${PROFILE.utcOffset})` },
            { k: "Education", v: `${EDUCATION.degree}, ${EDUCATION.school}` },
            { k: "Works", v: "Remotely, since 2022" },
          ].map((row) => (
            <div key={row.k} className="border-b border-line py-4">
              <dt className="label">{row.k}</dt>
              <dd className="mt-1.5 text-[15px] text-ink">{row.v}</dd>
            </div>
          ))}
        </dl>

        <Link href="/about" className="btn btn-ghost mt-10">
          More about me <ArrowRight size={16} className="nudge-x" />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default AboutTeaser;
