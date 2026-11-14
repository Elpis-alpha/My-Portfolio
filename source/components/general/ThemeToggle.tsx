"use client";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { getTheme, THEME_EVENT, toggleTheme, type Theme } from "@/source/theme";
import { cn } from "@/source/utils";

const subscribe = (cb: () => void) => {
  window.addEventListener(THEME_EVENT, cb);
  return () => window.removeEventListener(THEME_EVENT, cb);
};

export const useTheme = (): Theme =>
  useSyncExternalStore(subscribe, getTheme, () => "dark");

const ThemeToggle = ({ className }: { className?: string }) => {
  const theme = useTheme();
  const next = theme === "dark" ? "paper" : "blueprint";

  return (
    <button
      type="button"
      aria-label={`Switch to the ${next} theme`}
      title={`Switch to the ${next} theme`}
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        toggleTheme({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
      }}
      className={cn(
        "grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink",
        className,
      )}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
};

export default ThemeToggle;
