"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SOCIAL } from "@/source/config";
import { cn } from "@/source/utils";

/** The email address as a button that copies itself. */
const CopyEmail = ({ className }: { className?: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SOCIAL.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${SOCIAL.email}`}
      className={cn(
        "group inline-flex items-center gap-3 text-left transition-colors hover:text-accent",
        className,
      )}
    >
      <span>{SOCIAL.email}</span>
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong text-muted transition-colors group-hover:border-accent group-hover:text-accent">
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </span>
      <span className="label !text-accent w-12" aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
};

export default CopyEmail;
