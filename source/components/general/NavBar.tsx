"use client";
import { motion, AnimatePresence } from "motion/react";
import { Server, Layers, Menu, X, Monitor, Download } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/source/utils";
import Link from "next/link";
import Logo from "../reusables/Logo";
import { RESUMES } from "@/source/config";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentPath = useMemo(() => {
    if (pathname.startsWith("/projects")) return "projects" as const;
    if (pathname.startsWith("/skills")) return "skills" as const;
    if (pathname.startsWith("/about")) return "about" as const;
    if (pathname.startsWith("/contact")) return "contact" as const;
    return "home" as const;
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6",
        isScrolled ? "py-3" : "py-6",
      )}
    >
      <div
        className={cn(
          "max-w-5xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500",
          isScrolled
            ? "bg-bg-dark/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
            : "bg-transparent border-transparent",
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="font-mono font-bold tracking-tighter text-lg">
            ELPIS
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-[13px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "transition-all duration-300 relative px-2 py-1",
                currentPath === link.key
                  ? "text-brand-primary"
                  : "text-white/50 hover:text-white",
              )}
            >
              {link.name}
              {currentPath === link.key && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-brand-primary"
                />
              )}
            </Link>
          ))}

          <div className="relative group">
            <button className="px-4 py-2 bg-white text-bg-dark rounded-full text-[11px] font-bold hover:bg-brand-primary transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-brand-primary/20">
              <Download size={12} className="group-hover:animate-bounce" />{" "}
              Resume
            </button>
            <div className="absolute top-full right-0 mt-3 w-56 bg-card-dark/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 shadow-2xl">
              <div className="p-2">
                {RESUMES.map((resume) => (
                  <a
                    key={resume.label}
                    href={resume.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover/item:text-brand-primary group-hover/item:bg-brand-primary/10 transition-all">
                      {resume.label.includes("Full Stack") ? (
                        <Layers size={14} />
                      ) : resume.label.includes("Frontend") ? (
                        <Monitor size={14} />
                      ) : (
                        <Server size={14} />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold text-white/80 group-hover/item:text-white transition-colors">
                        {resume.label}
                      </span>
                      <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                        Download PDF
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ham */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-2 bg-card-dark/95 backdrop-blur-2xl border border-white/10 rounded-4xl md:hidden shadow-2xl overflow-hidden"
          >
            <div
              className="flex flex-col gap-6 p-8"
              style={{
                maxHeight: "calc(100vh - 150px)",
                overflow: "auto",
              }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-bold tracking-tight",
                    currentPath === link.key
                      ? "text-brand-primary"
                      : "text-white/40",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-mono text-white/20 mb-4 uppercase tracking-[0.2em]">
                  Resumes
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {RESUMES.map((resume) => (
                    <a
                      key={resume.label}
                      href={resume.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 active:scale-95 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary">
                          {resume.label.includes("Full Stack") ? (
                            <Layers size={18} />
                          ) : resume.label.includes("Frontend") ? (
                            <Monitor size={18} />
                          ) : (
                            <Server size={18} />
                          )}
                        </div>
                        <span className="font-bold text-lg">
                          {resume.label}
                        </span>
                      </div>
                      <Download size={18} className="text-white/20" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const navLinks = [
  { name: "Home", path: "/", key: "home" },
  { name: "About", path: "/about", key: "about" },
  { name: "Projects", path: "/projects", key: "projects" },
  { name: "Skills", path: "/skills", key: "skills" },
  { name: "Contact", path: "/contact", key: "contact" },
] as const;

export default Navbar;
