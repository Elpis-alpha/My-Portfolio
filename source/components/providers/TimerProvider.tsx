"use client";
import { createContext, useContext, useEffect, useState } from "react";

const TimerContext = createContext(Date.now());

const TimerProvider = (props: { children: React.ReactNode }) => {
  // eslint-disable-next-line react-hooks/purity
  const [tick, setTick] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(Date.now());
    }, 1000); // update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <TimerContext.Provider value={tick}>{props.children}</TimerContext.Provider>
  );
};

export default TimerProvider;

export const useTimer = () => {
  return useContext(TimerContext);
};
