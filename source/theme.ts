/** Theme switching: "dark" is the blueprint sheet, "light" is the paper one. */
export type Theme = "dark" | "light";

export const THEME_KEY = "theme";
export const THEME_EVENT = "themechange";

const THEME_COLORS: Record<Theme, string> = {
  dark: "#0b0d10",
  light: "#f2efe7",
};

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* private mode: the choice just won't persist */
  }
  window.dispatchEvent(new Event(THEME_EVENT));
}

/**
 * Switches theme. Where the View Transitions API exists, the new sheet is
 * revealed in a circle growing from `origin` (the toggle button).
 */
export function setTheme(theme: Theme, origin?: { x: number; y: number }) {
  const root = document.documentElement;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const start = (
    document as Document & {
      startViewTransition?: (cb: () => void) => unknown;
    }
  ).startViewTransition;

  if (!start || reduced) return apply(theme);

  root.style.setProperty("--vt-x", `${origin?.x ?? window.innerWidth / 2}px`);
  root.style.setProperty("--vt-y", `${origin?.y ?? 0}px`);
  start.call(document, () => apply(theme));
}

export function toggleTheme(origin?: { x: number; y: number }) {
  setTheme(getTheme() === "dark" ? "light" : "dark", origin);
}

/**
 * Inlined in <head> so the theme is applied before first paint: the stored
 * choice if there is one, otherwise the visitor's system preference.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t;if(t==="light"){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","${THEME_COLORS.light}")}}catch(e){}})();`;
