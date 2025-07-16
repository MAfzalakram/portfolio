import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", type: "spring" }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Glowing animated background circle */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute w-96 h-96 md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 blur-3xl opacity-20"
      />

      <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-pink-400 to-yellow-400 animate-textGlow">
        Muhammad Afzal
      </h1>

      <div className="text-xl md:text-2xl mt-6 text-cyan-300 font-semibold h-14 drop-shadow-md">
        <Typewriter
          options={{
            strings: [
              "Backend Developer 💻",
              "ML Enthusiast 🤖",
              "React Explorer ⚛️",
              "Computer Science Researcher 📚",
            ],
            autoStart: true,
            loop: true,
            delay: 55,
            deleteSpeed: 30,
            pauseFor: 1200,
          }}
        />
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="#contact"
          title="Go to Contact Section"
          className="cursor-pointer px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-cyan-500 transition-all shadow-md"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          title="See My Projects"
          className="cursor-pointer px-6 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all shadow-sm"
        >
          View Projects
        </a>
        <a
          href="#skills"
          title="Explore My Skills"
          className="cursor-pointer px-6 py-2 rounded-full border border-pink-400 text-pink-300 hover:bg-pink-500 hover:text-white transition-all shadow-sm"
        >
          View Skills
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
