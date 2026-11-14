"use client";
import { YEARS_OF_EXPERIENCE_START_DATE } from "@/source/config";
import { experienceLabel } from "@/source/utils";

/** "4+" — computed at render so it never goes stale between deploys. */
const Years = () => (
  <span suppressHydrationWarning>
    {experienceLabel(YEARS_OF_EXPERIENCE_START_DATE)}
  </span>
);

export default Years;
