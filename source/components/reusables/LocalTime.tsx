"use client";
import { useSyncExternalStore } from "react";
import { PROFILE } from "@/source/config";
import { useTimer } from "../providers/TimerProvider";

const subscribe = () => () => {};

/** Festus's current local time, ticking with the shared timer. */
const LocalTime = ({ withSeconds = false }: { withSeconds?: boolean }) => {
  const now = useTimer();
  // Avoid a server/client mismatch: the clock only renders after hydration.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  if (!mounted) return <span className="tabular-nums">--:--</span>;

  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: PROFILE.timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: withSeconds ? "2-digit" : undefined,
    hour12: false,
  }).format(now);

  return <time className="tabular-nums">{time}</time>;
};

export default LocalTime;
