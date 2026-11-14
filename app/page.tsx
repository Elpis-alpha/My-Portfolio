import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/source/components/reusables/PageTransition";
import SectionHeader from "@/source/components/reusables/SectionHeader";
import Reveal from "@/source/components/reusables/Reveal";
import Hero from "@/source/components/home/Hero";
import SelectedWork from "@/source/components/home/SelectedWork";
import ExperienceList from "@/source/components/home/ExperienceList";
import Principles from "@/source/components/home/Principles";
import Toolkit from "@/source/components/home/Toolkit";
import AboutTeaser from "@/source/components/home/AboutTeaser";
import { RESUMES } from "@/source/config";

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      <SelectedWork />

      <section className="shell py-16 md:py-24" aria-label="Experience">
        <SectionHeader
          index="02"
          label="Experience"
          title={<>Where I&rsquo;ve <em>shipped.</em></>}
          aside={
            <a
              href={RESUMES[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              Full résumé
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          }
        />
        <ExperienceList />
      </section>

      <section className="shell py-16 md:py-24" aria-label="How I work">
        <SectionHeader
          index="03"
          label="How I work"
          title={<>Four habits, <em>with receipts.</em></>}
        />
        <Principles />

        <Reveal className="mt-20 flex items-end justify-between gap-6 md:mt-24">
          <h3 className="display text-4xl md:text-5xl">The toolkit</h3>
          <Link href="/about#toolkit" className="label hidden transition-colors hover:text-ink sm:block">
            Tools I reach for most
          </Link>
        </Reveal>
        <div className="mt-8">
          <Toolkit />
        </div>
      </section>

      <AboutTeaser />
    </PageTransition>
  );
}
