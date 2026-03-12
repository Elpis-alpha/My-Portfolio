"use client";
import PageTransition from "@/source/components/reusables/PageTransition";
import { calculateExperience } from "@/source/utils";
import { useMemo } from "react";
import {
  Terminal,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { SOCIAL, YEARS_OF_EXPERIENCE_START_DATE } from "@/source/config";
import { motion } from "framer-motion";
import CountUp from "@/source/components/reusables/CountUp";
import GradientText from "@/source/components/reusables/GradientText";

export default function Home() {
  const exp = useMemo(
    () => calculateExperience(YEARS_OF_EXPERIENCE_START_DATE),
    [],
  );

  return (
    <PageTransition>
      <section className="full-screen-minus-footer flex flex-col justify-center items-center px-6 relative pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10 my-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-primary mb-8">
            <Terminal size={14} className="max-sm:hidden" />
            <span>
              MERN Stack Developer •{" "}
              <CountUp to={exp} direction="up" from={0.1} /> Years Exp
            </span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-tight drop-shadow-[0_0_30px_rgba(0,242,255,0.2)]"
          >
            <GradientText className="mx-auto">
              <span className="text-white">Festus</span> Gbolade
            </GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/60 max-w-192.5 mx-auto mb-12 leading-relaxed"
          >
            Full-stack engineer specializing in high-performance MERN applications,
            building functional websites that solve real-world problems.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                href="/projects"
                className="px-10 py-5 bg-brand-primary text-bg-dark rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
              >
                Explore My Work <ChevronRight size={20} />
              </Link>
            </motion.div>
            <div className="flex items-center gap-4 px-4">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                href={SOCIAL.github}
                target="_blank"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/50 transition-all"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                href={SOCIAL.linkedin}
                target="_blank"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/50 transition-all"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                href={SOCIAL.twitter}
                target="_blank"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-primary/50 transition-all"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
