"use client";
import PageTransition from "@/source/components/reusables/PageTransition";
import { calculateAge, calculateExperience } from "@/source/utils";
import { useMemo } from "react";
import {
  ChevronRight,
  Github,
  Shield,
  Palette,
  Camera,
  Globe,
  Cpu,
  Sparkles,
  Download,
  Music,
  Dumbbell,
  Workflow,
  Book,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  ABOUT_DATA,
  BIRTH_DATE,
  RESUMES,
  YEARS_OF_EXPERIENCE_START_DATE,
} from "@/source/config";
import LazyCDImage from "@/source/components/reusables/image/LazyCDImage";

export default function Home() {
  const age = useMemo(() => calculateAge(BIRTH_DATE), []);
  const exp = useMemo(() => {
    const ans = calculateExperience(YEARS_OF_EXPERIENCE_START_DATE);
    const rounded = Math.round(ans);
    return ans >= rounded ? `${rounded}+` : `~${rounded}`;
  }, []);
  const expV2 = useMemo(() => {
    const ans = calculateExperience(YEARS_OF_EXPERIENCE_START_DATE);
    const rounded = Math.round(ans);
    return ans >= rounded ? `Over ${rounded}` : `Roughly ${rounded}`;
  }, []);

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  variants={imageVariants}
                  className="rounded-4xl overflow-hidden aspect-3/4 border border-white/10 group"
                >
                  <LazyCDImage
                    initialWidth={100}
                    finalWidth={500}
                    src={ABOUT_DATA.images.imageOne}
                    alt="About 1"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  className="rounded-4xl overflow-hidden aspect-square border border-white/10 group"
                >
                  <LazyCDImage
                    initialWidth={100}
                    finalWidth={500}
                    src={ABOUT_DATA.images.imageTwo}
                    alt="About 2"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  variants={imageVariants}
                  className="rounded-4xl overflow-hidden aspect-square border border-white/10 group"
                >
                  <LazyCDImage
                    initialWidth={100}
                    finalWidth={500}
                    src={ABOUT_DATA.images.imageThree}
                    alt="About 3"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  variants={imageVariants}
                  className="rounded-4xl bg-brand-primary/10 border border-brand-primary/20 aspect-3/4 flex items-center justify-center p-8 text-center"
                >
                  <div className="space-y-2">
                    <p className="text-4xl font-bold text-brand-primary">
                      {exp}
                    </p>
                    <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
                      Years of Crafting Code
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-[10px] font-mono text-brand-primary uppercase tracking-widest mb-6">
              <Sparkles size={12} /> {age} Years Old
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 mr-auto">
              Beyond the <span className="text-brand-primary">Code</span>
            </h2>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              {ABOUT_DATA.bio(expV2)}
            </p>

            <div className="grid grid-cols-1 ssm:grid-cols-2 gap-4">
              {ABOUT_DATA.interests.map((interest, idx) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 group hover:border-brand-primary/30 transition-all"
                >
                  <div className="p-2 rounded-xl bg-white/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-bg-dark transition-all">
                    {iconMap[interest.icon] || <Sparkles size={20} />}
                  </div>
                  <span className="font-medium text-sm">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24"
        >
          <div className="md:col-span-2 bg-card-dark/80 p-10 rounded-[40px] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-brand-primary to-transparent" />
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="text-brand-primary" /> Fun Facts
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ABOUT_DATA.funFacts.map((fact, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(0,242,255,1)]" />
                  <p className="text-white/60 group-hover:text-white transition-colors text-sm">
                    {fact}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-brand-primary p-10 rounded-[40px] hidden lg:flex flex-col justify-center items-center text-center text-bg-dark relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity animate-lightning" />
            <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter italic">
              Ready to spark something new?
            </h3>
            <p className="text-bg-dark/70 mb-10 font-medium">
              {"Let's"} collaborate on your next big idea and bring it to life
              with electric precision.
            </p>
            <Link
              href="/contact"
              className="px-10 py-5 bg-bg-dark text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              Get in Touch <ChevronRight size={20} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-primary/5 blur-[120px] rounded-full" />
          <div className="relative bg-card-dark/50 backdrop-blur-xl border border-white/10 rounded-[48px] p-6 xsm:p-8 ssm:p-12 overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-4xl font-bold mb-6">
                  Professional{" "}
                  <span className="text-brand-primary italic">Blueprint</span>
                </h3>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">
                  My resume charts the full scope of my technical journey, from
                  architecting scalable systems to crafting polished,
                  user-facing interfaces. Pick the version that best fits what
                  {" you're"} looking for.
                </p>
                <div className="flex flex-wrap gap-4">
                  {RESUMES.map((resume, idx) => (
                    <motion.a
                      key={resume.label}
                      href={resume.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/50 hover:bg-brand-primary/10 transition-all flex items-center gap-3 group/btn"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/btn:bg-brand-primary group-hover/btn:text-bg-dark transition-all">
                        <Download size={14} />
                      </div>
                      <span className="font-medium">{resume.label}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative hidden lg:block"
              >
                <div className="group/res aspect-4/3 bg-white/5 rounded-3xl relative overflow-hidden transition-colors">
                  <LazyCDImage
                    initialWidth={100}
                    finalWidth={800}
                    src={ABOUT_DATA.images.fullStackCrop}
                    alt="Resume Preview"
                    className="w-full h-full object-cover object-top rounded-2xl group-hover/res:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute bottom-8 right-8 w-24 h-24 bg-brand-primary rounded-2xl flex items-center justify-center animate-pulse">
                    <Shield size={40} className="text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Cloud: <Workflow size={20} />,
  Palette: <Palette size={20} />,
  Cpu: <Cpu size={20} />,
  Camera: <Camera size={20} />,
  Globe: <Globe size={20} />,
  Music: <Music size={20} />,
  Fitness: <Dumbbell size={20} />,
  Book: <Book size={20} />,
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
