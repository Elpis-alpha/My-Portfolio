"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import toast from "react-hot-toast";
import {
  ArrowUpRight,
  Copy,
  CornerDownLeft,
  FileText,
  Home,
  Layers,
  Mail,
  Search,
  SunMoon,
  User,
} from "lucide-react";
import { RESUMES, SOCIAL } from "@/source/config";
import { CASE_STUDIES } from "@/source/projects";
import { toggleTheme } from "@/source/theme";
import { cn } from "@/source/utils";
import { GithubIcon, LinkedinIcon, XIcon } from "../reusables/Icons";

const OPEN_EVENT = "palette:open";

/** Opens the palette from anywhere (the nav button uses this). */
export const openPalette = () => window.dispatchEvent(new Event(OPEN_EVENT));

type Command = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: React.ReactNode;
  keywords?: string;
  run: () => void;
};

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const commands = useMemo<Command[]>(() => {
    const go = (path: string) => () => router.push(path);
    const ext = (url: string) => () => window.open(url, "_blank", "noopener,noreferrer");
    return [
      { id: "home", group: "Go to", label: "Home", icon: <Home size={15} />, run: go("/") },
      { id: "work", group: "Go to", label: "Work", icon: <Layers size={15} />, keywords: "projects portfolio", run: go("/projects") },
      { id: "about", group: "Go to", label: "About", icon: <User size={15} />, keywords: "experience toolkit skills", run: go("/about") },
      { id: "contact", group: "Go to", label: "Contact", icon: <Mail size={15} />, keywords: "hire email message", run: go("/contact") },
      ...CASE_STUDIES.map((p) => ({
        id: p.slug,
        group: "Case studies",
        label: p.title,
        hint: p.kind,
        icon: <FileText size={15} />,
        keywords: p.stack.join(" "),
        run: go(`/projects/${p.slug}`),
      })),
      {
        id: "copy-email",
        group: "Actions",
        label: "Copy email address",
        hint: SOCIAL.email,
        icon: <Copy size={15} />,
        run: () => {
          navigator.clipboard
            .writeText(SOCIAL.email)
            .then(() => toast.success("Email copied"))
            .catch(() => (window.location.href = `mailto:${SOCIAL.email}`));
        },
      },
      { id: "resume", group: "Actions", label: "Open résumé", icon: <ArrowUpRight size={15} />, keywords: "cv resume", run: ext(RESUMES[0].link) },
      { id: "theme", group: "Actions", label: "Switch theme", hint: "Blueprint / Paper", icon: <SunMoon size={15} />, keywords: "dark light mode", run: () => toggleTheme() },
      { id: "github", group: "Elsewhere", label: "GitHub", icon: <GithubIcon size={15} />, run: ext(SOCIAL.github) },
      { id: "linkedin", group: "Elsewhere", label: "LinkedIn", icon: <LinkedinIcon size={15} />, run: ext(SOCIAL.linkedin) },
      { id: "x", group: "Elsewhere", label: "X (Twitter)", icon: <XIcon size={14} />, run: ext(SOCIAL.twitter) },
      { id: "source", group: "Elsewhere", label: "Source code of this site", icon: <GithubIcon size={15} />, keywords: "repo code", run: ext(SOCIAL.repo) },
    ];
  }, [router]);

  const results = useMemo(() => {
    const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) return commands;
    // Label matches rank above keyword-only matches.
    const score = (c: Command) => {
      const label = c.label.toLowerCase();
      if (label.startsWith(tokens[0])) return 0;
      if (tokens.every((t) => label.includes(t))) return 1;
      return 2;
    };
    return commands
      .filter((c) => {
        const hay = `${c.label} ${c.group} ${c.hint ?? ""} ${c.keywords ?? ""}`.toLowerCase();
        return tokens.every((t) => hay.includes(t));
      })
      .sort((x, y) => score(x) - score(y));
  }, [commands, query]);

  // Global shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => {
      clearTimeout(t);
      prev?.focus?.();
    };
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const run = (cmd?: Command) => {
    if (!cmd) return;
    close();
    cmd.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + results.length) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(results[active]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[14vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <div className="absolute inset-0 bg-sunk/70 backdrop-blur-sm" onClick={close} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onKeyDown={onKeyDown}
            className="relative w-full max-w-[36rem] overflow-hidden rounded-xl border border-line-strong bg-raise shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-center gap-3 border-b border-line px-4">
              <Search size={16} className="shrink-0 text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                placeholder="Jump to a page, a project, an action…"
                className="h-14 w-full bg-transparent text-[15px] text-ink outline-none placeholder:text-faint"
                aria-label="Search commands"
                autoComplete="off"
                spellCheck={false}
              />
              <kbd className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-faint">
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[52vh] overflow-y-auto p-2" role="listbox">
              {results.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-muted">
                  Nothing matches “{query}”.
                </p>
              )}
              {results.map((cmd, i) => {
                const header = i === 0 || results[i - 1].group !== cmd.group;
                return (
                  <div key={cmd.id}>
                    {header && <p className="label px-3 pb-1.5 pt-3 !text-[10px] !text-faint">{cmd.group}</p>}
                    <button
                      type="button"
                      role="option"
                      aria-selected={i === active}
                      data-index={i}
                      onMouseMove={() => setActive(i)}
                      onClick={() => run(cmd)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        i === active ? "bg-ink/[0.07] text-ink" : "text-muted",
                      )}
                    >
                      <span className={cn("grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line", i === active && "border-line-strong text-accent")}>
                        {cmd.icon}
                      </span>
                      <span className="truncate text-ink">{cmd.label}</span>
                      {cmd.hint && <span className="ml-auto hidden truncate pl-4 font-mono text-[11px] text-faint sm:block">{cmd.hint}</span>}
                      {i === active && <CornerDownLeft size={13} className={cn("shrink-0 text-faint", !cmd.hint && "ml-auto")} />}
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-faint">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span className="ml-auto">⌘K Toggle</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
