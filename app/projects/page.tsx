"use client";
import PageTransition from "@/source/components/reusables/PageTransition";
import { PROJECTS } from "@/source/projects";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/source/utils";
import { ExternalLink, Github } from "lucide-react";
import LazyCDImage from "@/source/components/reusables/image/LazyCDImage";

type FilterType = "All" | "Full Stack" | "Frontend" | "Backend";

export default function Home() {
  const [filter, setFilter] = useState<FilterType>("All");
  const filteredProjects = useMemo(() => {
    if (filter === "All") return PROJECTS;

    if (filter === "Backend") {
      return PROJECTS.filter((p) => p.category === "Backend");
    }

    if (filter === "Frontend") {
      return PROJECTS.filter((p) => p.category === "Frontend");
    }

    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Built to <span className="text-brand-primary">Scale</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A collection of production-ready applications, from microservices
              to complex frontend architectures.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mt-10 p-2 bg-card-dark/50 rounded-full border border-white/10 w-fit mx-auto relative backdrop-blur-xl shadow-2xl">
            {(["All", "Full Stack", "Frontend", "Backend"] as const).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={cn(
                    "relative px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 z-10 overflow-hidden cursor-pointer ",
                    filter === cat
                      ? "text-bg-dark"
                      : "text-white/40 hover:text-white hover:bg-white/5",
                  )}
                >
                  {filter === cat && (
                    <>
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute inset-0 bg-brand-primary rounded-full -z-10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                      <motion.div
                        layoutId="activeFilterGlow"
                        className="absolute inset-0 bg-brand-primary blur-md opacity-50 -z-20"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    </>
                  )}
                  {cat}
                </button>
              ),
            )}
          </div>

          <motion.p
            key={filter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-[10px] font-mono text-brand-primary/40 uppercase tracking-[0.5em]"
          >
            {filter === "All" ? "Complete Portfolio" : `${filter} Architecture`}{" "}
            • {filteredProjects.length} Projects
          </motion.p>
        </div>

        <motion.div
          key={filter} // Forcing re-animation of the entire grid on filter change
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={`${filter}-${project.id}`} // Unique key per filter to force re-animation
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 30 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.8,
                    y: 20,
                    transition: { duration: 0.3 },
                  },
                }}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group bg-card-dark rounded-4xl border border-white/5 overflow-hidden hover:border-brand-primary/30 transition-all flex flex-col h-full relative"
              >
                <div className="aspect-4/3 overflow-hidden relative">
                  <LazyCDImage
                    initialWidth={100}
                    finalWidth={800}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1.5 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-brand-primary uppercase tracking-widest shadow-xl">
                      {project.category}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-brand-primary text-bg-dark rounded-xl hover:scale-110 transition-transform shadow-xl"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.github && filter !== "Backend" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-bg-dark rounded-xl hover:scale-110 transition-transform shadow-xl"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.backendGithub && filter === "Backend" && (
                        <a
                          href={project.backendGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-bg-dark rounded-xl hover:scale-110 transition-transform shadow-xl"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.5)] transition-all">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                </div>
                {/* Electric Hover Effect */}
                <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/2 transition-colors pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageTransition>
  );
}
