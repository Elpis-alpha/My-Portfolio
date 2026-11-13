import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Years (one decimal) between a date string and now. */
export function calculateExperience(startDate: string): number {
  const today = new Date();
  const start = new Date(startDate);
  const diffTime = Math.abs(today.getTime() - start.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return Number(diffYears.toFixed(1));
}

/** "4+" style label: whole years completed, with a plus. */
export function experienceLabel(startDate: string): string {
  return `${Math.floor(calculateExperience(startDate))}+`;
}

/** Zero-padded figure / sheet numbers: 1 -> "01". */
export const pad = (n: number) => String(n).padStart(2, "0");
