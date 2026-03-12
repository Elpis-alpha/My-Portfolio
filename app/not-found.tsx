"use client";
import PageTransition from "@/source/components/reusables/PageTransition";
import { motion } from "framer-motion";
import GradientText from "@/source/components/reusables/GradientText";

export default function Home() {
  return (
    <PageTransition>
      <section className="full-screen-minus-footer flex flex-col justify-center items-center px-6 relative pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10 my-10"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-8 leading-tight drop-shadow-[0_0_30px_rgba(0,242,255,0.2)]">
            <GradientText className="">Missing</GradientText>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            {
              "Oops! The page you're looking for doesn't exist. It might have been "
            }
            moved or deleted. Please check the URL or return to the homepage.
          </p>
        </motion.div>
      </section>
    </PageTransition>
  );
}
