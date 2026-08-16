import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import HeroScene from "./HeroScene";
import MagneticButton from "./MagneticButton";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden"
    >
      {/* Interactive 3D scene */}
      <HeroScene />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative text-center max-w-4xl mx-auto space-y-6"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm sm:text-base text-mint tracking-wide"
        >
          {"// Software Developer, cse student"}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-r from-white via-mist to-mint bg-clip-text text-transparent leading-[1.05]"
        >
          Abrar Mayaz
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl md:text-2xl text-muted max-w-2xl mx-auto"
        >
          Currently learning FastApi, to create Api
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <MagneticButton
            onClick={() => scrollToSection("projects")}
            className="bg-mint text-ink px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-mint/40 transition-shadow cursor-none-target"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white/20 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:border-mint hover:text-mint transition-colors"
          >
            Say Hello
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-mint transition-colors cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
};

export default Hero;
