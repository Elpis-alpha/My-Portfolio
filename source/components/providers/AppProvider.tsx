"use client";
import { useEffect } from "react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { SOCIAL } from "@/source/config";
import TimerProvider from "./TimerProvider";
import Navbar from "../general/NavBar";
import Footer from "../general/Footer";
import SiteBackground from "../general/SiteBackground";
import CommandPalette from "../general/CommandPalette";

const AppProvider = (props: { children: React.ReactNode }) => {
  // A note for whoever opens the console.
  useEffect(() => {
    console.log(
      "%cHello, fellow engineer.%c\nThis site is built with Next.js, TypeScript and Tailwind.\nSource: " +
        SOCIAL.repo +
        "\nSay hello: " +
        SOCIAL.email +
        "\nTip: press ⌘K / Ctrl+K.",
      "font: 600 16px Georgia, serif; color: #ff6a3d;",
      "font: 12px ui-monospace, monospace; line-height: 1.6;",
    );
  }, []);

  return (
    <TimerProvider>
      <NextTopLoader color="var(--accent)" height={2} showSpinner={false} shadow={false} />
      <SiteBackground />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="relative z-10">
        {props.children}
      </main>
      <Footer />

      <CommandPalette />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--raise)",
            color: "var(--ink)",
            border: "1px solid var(--line-strong)",
            borderRadius: "999px",
            fontSize: "14px",
          },
        }}
      />
    </TimerProvider>
  );
};
export default AppProvider;
