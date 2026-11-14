import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "@/source/components/reusables/PageTransition";
import SectionHeader from "@/source/components/reusables/SectionHeader";
import Reveal from "@/source/components/reusables/Reveal";
import Shot from "@/source/components/reusables/Shot";
import Years from "@/source/components/reusables/Years";
import ExperienceList from "@/source/components/home/ExperienceList";
import Toolkit from "@/source/components/home/Toolkit";
import Principles from "@/source/components/home/Principles";
import { ABOUT_DATA, EDUCATION, LANGUAGES, PROFILE, RESUMES } from "@/source/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Festus Gbolade is a full-stack engineer in Lagos, trained as a mechanical engineer, who has shipped real-time and commerce products remotely since 2022.",
  alternates: { canonical: "/about" },
};

const i = (n: number) => ({ "--i": n }) as React.CSSProperties;

export default function About() {
  return (
    <PageTransition>
      <section className="shell pb-16 pt-32 md:pb-24 md:pt-40">
        <p className="rise label mb-6">
          <span className="text-accent">Sheet 03</span>
          <span className="mx-2 text-faint">/</span>
          About
        </p>
        <h1 className="rise display max-w-5xl text-[clamp(3rem,9vw,7rem)]" style={i(1)}>
          Engineer by training, <em className="text-accent">builder by habit.</em>
        </h1>

        <div className="mt-14 grid items-start gap-10 md:mt-20 lg:grid-cols-12 lg:gap-14">
          <figure className="rise lg:sticky lg:top-28 lg:col-span-5" style={i(2)}>
            <div className="relative">
              <span className="regmark -left-[7px] -top-[7px]" />
              <span className="regmark -right-[7px] -top-[7px]" />
              <span className="regmark -bottom-[7px] -left-[7px]" />
              <span className="regmark -bottom-[7px] -right-[7px]" />
              <div className="aspect-[4/5] overflow-hidden border border-line-strong bg-sunk">
                <Shot
                  image={{ src: ABOUT_DATA.images.corporate, alt: `Portrait of ${PROFILE.name}` }}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  className="object-[50%_18%]"
                />
              </div>
            </div>
            <figcaption className="label mt-4 flex justify-between">
              <span>
                <span className="text-accent">Fig. 01</span>
                <span className="mx-2 text-faint">/</span>
                {PROFILE.name}
              </span>
              <span className="text-faint">{PROFILE.location}</span>
            </figcaption>
          </figure>

          <div className="rise lg:col-span-7" style={i(3)}>
            <p className="display text-3xl !leading-[1.15] md:text-[2.6rem]">{ABOUT_DATA.story[0]}</p>
            {ABOUT_DATA.story.slice(1).map((p) => (
              <p key={p} className="prose-body mt-7 max-w-2xl text-lg">{p}</p>
            ))}

            <dl className="mt-12 grid gap-x-10 border-t border-line sm:grid-cols-2">
              {[
                { k: "Now", v: `${PROFILE.currentRole}, ${PROFILE.currentCompany}` },
                { k: "Experience", v: <><Years /> years, fully remote</> },
                { k: "Based in", v: `${PROFILE.location} (${PROFILE.utcOffset})` },
                { k: "Languages", v: LANGUAGES.map((l) => `${l.title}, ${l.level.toLowerCase()}`).join(" · ") },
              ].map((row) => (
                <div key={row.k} className="border-b border-line py-4">
                  <dt className="label">{row.k}</dt>
                  <dd className="mt-1.5 text-[15px] text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24" aria-label="Experience">
        <SectionHeader index="01" label="Experience" title={<>Where I&rsquo;ve <em>shipped.</em></>} />
        <ExperienceList />

        <Reveal className="grid gap-x-10 gap-y-4 border-b border-line py-8 md:grid-cols-12 md:py-10">
          <div className="md:col-span-3">
            <p className="label">{EDUCATION.years}</p>
            <p className="label mt-2 !text-faint">Education</p>
          </div>
          <div className="md:col-span-9">
            <h3 className="display text-[2rem] leading-tight md:text-[2.5rem]">
              {EDUCATION.degree}
              <span className="text-muted"> at </span>
              <em>{EDUCATION.school}</em>
            </h3>
            <p className="prose-body mt-3 text-[17px]">{EDUCATION.detail}</p>
          </div>
        </Reveal>
      </section>

      <section id="toolkit" className="shell scroll-mt-24 py-16 md:py-24" aria-label="Toolkit">
        <SectionHeader index="02" label="Toolkit" title={<>What I <em>reach for.</em></>} />
        <Toolkit />
      </section>

      <section className="shell py-16 md:py-24" aria-label="How I work">
        <SectionHeader index="03" label="How I work" title={<>Four habits, <em>with receipts.</em></>} />
        <Principles />
      </section>

      <section className="shell py-16 md:py-24" aria-label="Off the clock">
        <SectionHeader index="04" label="Off the clock" title={<>Away from <em>the keyboard.</em></>} />
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="grid grid-cols-2 gap-5 lg:col-span-7">
            {[
              { src: ABOUT_DATA.images.native, alt: `${PROFILE.name} in traditional Nigerian attire`, fig: "02", pos: "object-[50%_12%]" },
              { src: ABOUT_DATA.images.stylish, alt: `${PROFILE.name} in a patterned shirt and cap`, fig: "03", pos: "object-[50%_20%]" },
            ].map((img, n) => (
              <Reveal key={img.src} delay={n * 100} className={n === 1 ? "mt-10 md:mt-16" : ""}>
                <figure>
                  <div className="aspect-[3/4] overflow-hidden border border-line-strong bg-sunk">
                    <Shot image={img} sizes="(min-width: 1024px) 28vw, 50vw" className={`${img.pos} transition-transform duration-[1200ms] hover:scale-[1.03]`} />
                  </div>
                  <figcaption className="label mt-3 !text-accent">Fig. {img.fig}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="lg:col-span-5">
            <p className="prose-body text-lg">
              A few true things that have nothing to do with code.
            </p>
            <ul className="mt-6 border-t border-line">
              {ABOUT_DATA.offClock.map((fact, n) => (
                <li key={fact} className="flex items-baseline gap-5 border-b border-line py-3.5 text-[15px] text-ink">
                  <span className="label !text-faint">{String(n + 1).padStart(2, "0")}</span>
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="shell py-16 md:py-24" aria-label="Résumé">
        <SectionHeader index="05" label="Résumé" title={<>The same story, <em>on one page.</em></>} />
        <Reveal className="grid border-l border-t border-line sm:grid-cols-3">
          {RESUMES.map((resume) => (
            <a
              key={resume.label}
              href={resume.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-end justify-between gap-6 border-b border-r border-line p-7 transition-colors hover:bg-raise"
            >
              <span>
                <span className="label">Résumé</span>
                <span className="display mt-3 block text-4xl transition-colors group-hover:text-accent">{resume.label}</span>
              </span>
              <ArrowUpRight className="h-7 w-7 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" strokeWidth={1.25} />
            </a>
          ))}
        </Reveal>
      </section>
    </PageTransition>
  );
}
