"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROFILE, SITE_REVISION, SOCIAL } from "@/source/config";
import Logo from "../reusables/Logo";
import LocalTime from "../reusables/LocalTime";
import { GithubIcon, LinkedinIcon, XIcon } from "../reusables/Icons";
import ContactCTA from "./ContactCTA";
import { openPalette } from "./CommandPalette";

const SHEETS = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Work" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
];

const Footer = () => {
  const pathname = usePathname();
  const sheetIndex = Math.max(
    0,
    SHEETS.findLastIndex((s) => (s.path === "/" ? pathname === "/" : pathname.startsWith(s.path))),
  );
  const sheet = SHEETS[sheetIndex];

  const cells = [
    { k: "Drawn by", v: PROFILE.name },
    { k: "Location", v: `${PROFILE.locationShort} · ${PROFILE.utcOffset}` },
    { k: "Local time", v: <LocalTime withSeconds /> },
    { k: "Sheet", v: `0${sheetIndex + 1} / 0${SHEETS.length} · ${sheet.name}` },
    { k: "Rev", v: SITE_REVISION },
  ];

  return (
    <>
      {!pathname.startsWith("/contact") && <ContactCTA />}

      <footer className="border-t border-line">
        <div className="shell py-10">
          {/* Title block, as on an engineering drawing */}
          <dl className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-5">
            {cells.map((c) => (
              <div key={c.k} className="border-b border-r border-line px-4 py-3.5 last:col-span-2 sm:last:col-span-1">
                <dt className="label !text-[10px] !text-faint">{c.k}</dt>
                <dd className="mt-1.5 font-mono text-xs text-ink">{c.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-7 w-7" />
              <span className="text-sm font-medium">{PROFILE.name}</span>
            </Link>

            <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted">
              {SHEETS.map((s) => (
                <Link key={s.path} href={s.path} className="transition-colors hover:text-ink">
                  {s.name}
                </Link>
              ))}
              <button type="button" onClick={openPalette} className="hidden transition-colors hover:text-ink md:inline">
                Command menu <kbd className="ml-1 font-mono text-[10px] text-faint">⌘K</kbd>
              </button>
            </nav>

            <div className="flex items-center gap-5 text-muted">
              <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-colors hover:text-ink"><GithubIcon size={17} /></a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-ink"><LinkedinIcon size={17} /></a>
              <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="X" className="transition-colors hover:text-ink"><XIcon size={15} /></a>
            </div>
          </div>

          <p className="mt-8 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] text-faint">
            <span suppressHydrationWarning>&copy; {new Date().getFullYear()} {PROFILE.name}.</span>
            <span>
              Built with Next.js, TypeScript and Tailwind.{" "}
              <a href={SOCIAL.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-ink">
                View source
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
