"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";
import { cn } from "@/source/utils";
import { PROFILE, RESUMES, SOCIAL } from "@/source/config";
import Logo from "../reusables/Logo";
import { GithubIcon, LinkedinIcon, XIcon } from "../reusables/Icons";
import ThemeToggle from "./ThemeToggle";
import { openPalette } from "./CommandPalette";

export const NAV_LINKS = [
  { name: "Work", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
] as const;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open
            ? "border-line bg-bg/80 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
            aria-label={`${PROFILE.name}, home`}
          >
            <Logo className="h-8 w-8 transition-transform duration-500 group-hover:rotate-[20deg]" />
            <span className="text-[15px] font-medium tracking-tight">
              {PROFILE.name}
            </span>
            <span className="label hidden !text-faint lg:inline">
              {PROFILE.role}
            </span>
          </Link>

          {/* Desktop */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                aria-current={isActive(link.path) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  isActive(link.path)
                    ? "text-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-line-strong bg-raise"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.name}</span>
              </Link>
            ))}

            <span className="mx-2 h-5 w-px bg-line" aria-hidden />

            <button
              type="button"
              onClick={openPalette}
              aria-label="Open command menu"
              className="hidden h-9 items-center gap-2 rounded-full border border-line pl-3 pr-2 text-muted transition-colors hover:border-line-strong hover:text-ink lg:flex"
            >
              <Search size={14} />
              <kbd className="rounded bg-sunk px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-faint">
                ⌘K
              </kbd>
            </button>
            <ThemeToggle />
            <a
              href={RESUMES[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ml-1 !h-9 !px-4 !text-[13px]"
            >
              Résumé <ArrowUpRight size={14} className="nudge-xy" />
            </a>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet. A sibling of the header, not a child: the header's
          backdrop-filter would otherwise become its containing block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-bg md:hidden"
          >
            <div className="shell flex min-h-full flex-col justify-between gap-10 py-8">
              <nav aria-label="Mobile" className="flex flex-col">
                {[{ name: "Home", path: "/" }, ...NAV_LINKS].map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 * i + 0.05,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b border-line py-5"
                    >
                      <span className="display text-5xl">{link.name}</span>
                      <span className="label">0{i + 1}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-6">
                <div>
                  <p className="label mb-3">Résumé</p>
                  <div className="flex flex-wrap gap-2">
                    {RESUMES.map((r) => (
                      <a
                        key={r.label}
                        href={r.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost !h-10 !px-4 !text-sm"
                      >
                        {r.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-5 text-muted">
                  <a
                    href={SOCIAL.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={SOCIAL.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href={SOCIAL.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <XIcon size={16} />
                  </a>
                  <a
                    href={`mailto:${SOCIAL.email}`}
                    className="ml-auto text-sm text-ink underline underline-offset-4"
                  >
                    {SOCIAL.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
