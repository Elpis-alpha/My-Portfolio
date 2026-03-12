"use client";
import PageTransition from "@/source/components/reusables/PageTransition";
import { Code2, ExternalLink, Globe, Shield } from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa6";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import {
  TbBrandTypescript,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandMongodb,
  TbBrandGraphql,
  TbBrandOauth,
  TbBrandGit,
  TbBrandDocker,
  TbBrandVercel,
} from "react-icons/tb";
import { HiOutlineServer } from "react-icons/hi";
import {
  SiPostgresql,
  SiExpress,
  SiCloudinary,
  SiJest,
  SiSwagger,
  SiNginx,
  SiMui,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { DiRedis } from "react-icons/di";
import { motion } from "framer-motion";
import {
  CERTIFICATIONS,
  LANGUAGES,
  SKILL_CATEGORIES,
  SkillCategory,
  SPECIALIZED_SKILLS,
} from "@/source/config";

export default function Home() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Technical <span className="text-brand-primary">Arsenal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            A deep dive into the technologies I use to build robust and modern
            applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <SkillCategoryItem
              key={category.title}
              category={category}
              catIdx={catIdx}
              delay={0.4}
            />
          ))}
        </div>

        <div className="mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-bold">
              Specialized <span className="text-brand-primary">Expertise</span>
            </h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SPECIALIZED_SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all flex items-center gap-3 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover:scale-150 transition-transform" />
                <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                  {skill.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-2xl font-bold">Certifications</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.a
                  key={cert.title}
                  href={cert.certLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-6 rounded-3xl bg-card-dark border border-white/5 hover:border-brand-primary/30 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-bg-dark transition-all">
                      <Shield size={20} />
                    </div>
                    <span className="font-medium text-white/80 group-hover:text-white transition-colors">
                      {cert.title}
                    </span>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-white/20 group-hover:text-brand-primary transition-colors"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-2xl font-bold">Languages</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="space-y-4">
              {LANGUAGES.map((lang, idx) => (
                <motion.div
                  key={lang.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl bg-card-dark border border-white/5 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-white/5 text-brand-primary">
                      <Globe size={20} />
                    </div>
                    <span className="font-bold text-lg">{lang.title}</span>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono uppercase tracking-widest">
                    {lang.langLevel}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

const SkillCategoryItem = ({
  category,
  catIdx,
  delay,
}: {
  category: SkillCategory;
  catIdx: number;
  delay: number;
}) => {
  return (
    <div key={category.title} className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: catIdx * 0.2 + delay / 2 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-2"
      >
        <div className="h-px flex-1 bg-white/10" />
        <h3 className="text-xs font-mono font-bold text-brand-primary uppercase tracking-[0.3em]">
          {category.title}
        </h3>
        <div className="h-px flex-1 bg-white/10" />
      </motion.div>
      {category.items.map((skill, idx) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: catIdx * 0.2 + idx * 0.1 + delay }}
          viewport={{ once: true }}
          className="p-6 rounded-3xl bg-card-dark border border-white/5 hover:border-brand-primary/30 transition-all group"
        >
          <div className="flex items-center gap-4 mb-4">
            {skill.icon && (
              <div className="p-3 rounded-2xl bg-white/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-bg-dark transition-all">
                {iconMap[skill.icon] || <Code2 size={24} />}
              </div>
            )}
            {skill.level ? (
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-lg">{skill.title}</span>
                  <span className="text-xs font-mono text-white/30">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-linear-to-r from-brand-primary to-brand-secondary relative"
                  >
                    <div className="absolute inset-0 shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
                  </motion.div>
                </div>
              </div>
            ) : skill.certLink || skill.langLevel ? (
              <div className="flex-1 -mb-4">
                <span className="font-bold text-lg">{skill.title}</span>
                {skill.certLink && (
                  <a
                    href={skill.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-primary hover:underline ml-2"
                  >
                    [Certificate]
                  </a>
                )}
                {skill.langLevel && (
                  <span className="text-xs font-mono text-white/30 ml-2">
                    {skill.langLevel}
                  </span>
                )}
              </div>
            ) : (
              <div className="font-bold text-lg -mb-4">{skill.title}</div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const iconMap: Record<string, React.ReactNode> = {
  react: <FaReact size={24} />,
  nextjs: <RiNextjsLine size={24} />,
  tailwind: <RiTailwindCssLine size={24} />,
  typescript: <TbBrandTypescript size={24} />,
  redux: <TbBrandRedux size={24} />,
  socketio: <TbBrandSocketIo size={24} />,
  mongodb: <TbBrandMongodb size={24} />,
  graphql: <TbBrandGraphql size={24} />,
  oauth: <TbBrandOauth size={24} />,
  git: <TbBrandGit size={24} />,
  github: <FaGithub size={24} />,
  docker: <TbBrandDocker size={24} />,
  vercel: <TbBrandVercel size={24} />,
  postgresql: <SiPostgresql size={24} />,
  express: <SiExpress size={24} />,
  cloudinary: <SiCloudinary size={24} />,
  jest: <SiJest size={24} />,
  swagger: <SiSwagger size={24} />,
  nginx: <SiNginx size={24} />,
  redis: <DiRedis size={24} />,
  server: <HiOutlineServer size={24} />,
  nodejs: <FaNodeJs size={24} />,
  mui: <SiMui size={24} />,
  animation: <MdAnimation size={24} />,
};
