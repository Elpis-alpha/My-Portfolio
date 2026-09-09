"use client";
import PageTransition from "@/source/components/reusables/PageTransition";
import { featuredProjects, PROJECTS } from "@/source/projects";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/source/utils";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Maximize2,
  Server,
  Sparkles,
} from "lucide-react";
import LazyCDImage from "@/source/components/reusables/image/LazyCDImage";
import { BsTwitterX } from "react-icons/bs";
import ProjectLightbox from "@/source/components/general/ProjectLightbox";

type FilterType = "All" | "Full Stack" | "Frontend" | "Backend";

export default function Home() {
  const [filter, setFilter] = useState<FilterType>("All");
  const filteredProjects = useMemo(() => {
    if (filter === "All") return PROJECTS;

    if (filter === "Backend") {
      return PROJECTS.filter(
        (p) => p.category === "Backend" || p.category === "Full Stack",
      ).sort((a, b) => {
        // Prioritize projects that are strictly Backend over Full Stack when the filter is "Backend"
        if (a.category === "Backend" && b.category === "Full Stack") return -1;
        if (a.category === "Full Stack" && b.category === "Backend") return 1;
        return 0; // Keep the original order for projects of the same category
      });
    }

    if (filter === "Frontend") {
      return PROJECTS.filter(
        (p) => p.category === "Frontend" || p.category === "Full Stack",
      ).sort((a, b) => {
        // Prioritize projects that are strictly Frontend over Full Stack when the filter is "Frontend"
        if (a.category === "Frontend" && b.category === "Full Stack") return -1;
        if (a.category === "Full Stack" && b.category === "Frontend") return 1;
        return 0; // Keep the original order for projects of the same category
      });
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
        </div>

        {/* Featured Projects Carousel Section */}
        <FeaturedProjectsSection />

        {/* Main Projects Filter & Grid */}
        <div className="text-center mb-12 pt-12 border-t border-white/10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            All <span className="text-brand-primary">Projects</span>
          </h3>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            Filter by category to explore targeted solutions and technical
            implementations.
          </p>

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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                    finalWidth={1200}
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

                  <div className="absolute inset-0 bg-linear-to-t from-bg-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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

                  {(project.link ||
                    project.github ||
                    project.backendGithub ||
                    project.twitter) && (
                    <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-white/10">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-primary text-bg-dark text-xs font-mono font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-primary/20"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono font-bold hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                      {project.backendGithub && (
                        <a
                          href={project.backendGithub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono font-bold hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
                        >
                          <Server size={14} />
                          Backend
                        </a>
                      )}
                      {project.twitter && (
                        <a
                          href={project.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono font-bold hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
                        >
                          <BsTwitterX size={12} />
                          See on X
                        </a>
                      )}
                    </div>
                  )}
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

const FeaturedProjectsSection = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleSelectProject = (idx: number) => {
    setActiveProjectIdx(idx);
    setActiveImageIdx(0);
  };

  const handleNextProject = () =>
    handleSelectProject((activeProjectIdx + 1) % featuredProjects.length);

  const handlePrevProject = () =>
    handleSelectProject(
      (activeProjectIdx - 1 + featuredProjects.length) % featuredProjects.length,
    );

  if (featuredProjects.length === 0) return null;

  const currentProject = featuredProjects[activeProjectIdx];
  const images = currentProject.featured?.images || [currentProject.image];

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="mb-24">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-10 gap-6 max-lg:text-center max-lg:-mt-8">
        <div className="max-lg:hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} className="animate-pulse" />
            <span>Featured Showcase</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold">
            Flagship <span className="text-brand-primary">Projects</span>
          </h3>
        </div>

        {/* Navigation Controls for Featured Projects */}
        <div className="flex flex-col items-center lg:items-end gap-2 max-lg:w-full">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45">
            Browse all {featuredProjects.length} flagship projects
          </span>
          <div className="flex items-center gap-2 max-lg:w-full max-lg:justify-center">
            <button
              type="button"
              onClick={handlePrevProject}
              aria-label="Previous featured project"
              className="shrink-0 p-2.5 rounded-full bg-card-dark/60 border border-white/10 text-white/60 hover:text-brand-primary hover:border-brand-primary/40 transition-all backdrop-blur-md"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2 bg-card-dark/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md overflow-x-auto scrollbar-none max-w-[55vw] lg:max-w-none">
              {featuredProjects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => handleSelectProject(idx)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 whitespace-nowrap",
                    activeProjectIdx === idx
                      ? "bg-brand-primary text-bg-dark shadow-md shadow-brand-primary/30 scale-105"
                      : "text-white/50 hover:text-white hover:bg-white/5",
                  )}
                >
                  {proj.title}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextProject}
              aria-label="Next featured project"
              className="shrink-0 p-2.5 rounded-full bg-card-dark/60 border border-white/10 text-white/60 hover:text-brand-primary hover:border-brand-primary/40 transition-all backdrop-blur-md"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Big Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="bg-card-dark rounded-[36px] border border-white/10 p-6 md:p-10 relative overflow-hidden backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.6)]"
        >
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Image Carousel Viewport */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative aspect-16/10 rounded-2xl border border-white/10 overflow-hidden bg-bg-dark/80 group shadow-2xl">
                {/* Main Active Image */}
                <AnimatePresence mode="wait">
                  <LazyCDImage
                    initialWidth={50}
                    finalWidth={1200}
                    key={images[activeImageIdx]}
                    src={images[activeImageIdx]}
                    alt={`${currentProject.title} screenshot ${activeImageIdx + 1}`}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-top"
                    // onClick={() => setIsFullscreen(true)}
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Overlaid Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-brand-primary uppercase tracking-widest shadow-xl">
                    {currentProject.category}
                  </span>
                  <span className="max-ssm:hidden px-3 py-1.5 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/15 text-[10px] font-mono font-medium text-white/70 shadow-xl">
                    Image {activeImageIdx + 1} of {images.length}
                  </span>
                </div>

                {/* Fullscreen Expand Button */}
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-bg-dark/80 backdrop-blur-md border border-white/15 text-white/70 hover:text-brand-primary hover:border-brand-primary/40 transition-all shadow-xl"
                  title="View Fullscreen Lightbox"
                >
                  <Maximize2 size={16} />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-bg-dark/70 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-brand-primary transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                  aria-label="Previous Screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-bg-dark/70 backdrop-blur-md border border-white/15 text-white/80 hover:bg-brand-primary hover:text-bg-dark transition-all opacity-0 group-hover:opacity-100 shadow-xl"
                  aria-label="Next Screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Thumbnails Strip */}
              <div className="flex items-center gap-3 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-white/10 pl-1">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "relative aspect-16/10 w-20 md:w-24 rounded-lg overflow-hidden border transition-all duration-300 shrink-0",
                      activeImageIdx === idx
                        ? "border-brand-primary ring-2 ring-brand-primary/40 scale-105 opacity-100"
                        : "border-white/10 opacity-50 hover:opacity-100",
                    )}
                  >
                    <LazyCDImage
                      src={imgUrl}
                      initialWidth={50}
                      finalWidth={150}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Project Info & Meta */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-brand-primary tracking-widest uppercase font-bold">
                    Featured Project
                  </span>
                  <span className="w-8 h-px bg-brand-primary/30" />
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  {currentProject.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-3">
                    Key Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:border-brand-primary/30 hover:text-brand-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links & Counter */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-brand-primary text-bg-dark font-bold text-sm hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-brand-primary/25"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/15 hover:border-white/30 transition-all flex items-center gap-2 shadow-lg"
                    >
                      <span>Repository</span>
                      <Github size={16} />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleNextProject}
                  className="group/next flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-brand-primary transition-colors"
                >
                  <span>
                    Next:{" "}
                    {
                      featuredProjects[
                        (activeProjectIdx + 1) % featuredProjects.length
                      ].title
                    }
                  </span>
                  <ChevronRight
                    size={14}
                    className="group-hover/next:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Featured Project Pager */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handlePrevProject}
            aria-label="Previous featured project"
            className="p-3 rounded-full bg-card-dark/60 border border-white/10 text-white/70 hover:text-brand-primary hover:border-brand-primary/40 transition-all backdrop-blur-md"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-2">
            {featuredProjects.map((proj, idx) => (
              <button
                key={proj.id}
                type="button"
                onClick={() => handleSelectProject(idx)}
                aria-label={`Show ${proj.title}`}
                aria-current={activeProjectIdx === idx}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  activeProjectIdx === idx
                    ? "w-8 bg-brand-primary"
                    : "w-2 bg-white/20 hover:bg-white/40",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNextProject}
            aria-label="Next featured project"
            className="p-3 rounded-full bg-card-dark/60 border border-white/10 text-white/70 hover:text-brand-primary hover:border-brand-primary/40 transition-all backdrop-blur-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <p className="text-xs font-mono text-white/40 tracking-wide">
          Featured project {activeProjectIdx + 1} of {featuredProjects.length}
        </p>
      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        open={isFullscreen}
        image={images[activeImageIdx]}
        title={currentProject.title}
        currentIndex={activeImageIdx}
        totalImages={images.length}
        onClose={() => setIsFullscreen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
};
