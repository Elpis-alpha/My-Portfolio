"use client";
import NextTopLoader from "nextjs-toploader";
import { Tooltip } from "react-tooltip";
import { Toaster } from "react-hot-toast";
import TimerProvider from "./TimerProvider";
import Navbar from "../general/NavBar";
import Footer from "../general/Footer";
import SiteBackground from "../general/SiteBackground";

const AppProvider = (props: { children: React.ReactNode }) => {
  return (
    <TimerProvider>
      <NextTopLoader color="#00f2ff" />
      <SiteBackground />

      <Navbar />
      <main className="relative z-10">
        {props.children}
      </main>
      <Footer />

      <Tooltip id="my-tooltip" className="z-50" />
      <Toaster position="top-center" reverseOrder={false} />
    </TimerProvider>
  );
};
export default AppProvider;
