// src/components/Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <motion.section
      id="hero"
      className={`min-h-screen flex flex-col justify-center items-center transition-all duration-700 text-center px-6 relative overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white'
          : 'bg-gradient-to-br from-pink-100 via-white to-blue-100 text-gray-900'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6 z-20 px-4 py-2 text-sm rounded-full border border-white bg-black bg-opacity-20 hover:bg-opacity-40 text-white backdrop-blur-md shadow-lg"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>

      {/* Background blur orbs */}
      <div className="absolute w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-20 -left-20"></div>
      <div className="absolute w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse top-32 -right-20"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Hi, I'm Muhammad Afzal
      </h1>
      <h2 className="text-2xl md:text-3xl">
        I'm a <span className="text-purple-300 font-semibold">
          <Typewriter
            words={[
              'Python Backend Developer',
              'PhD Researcher in AI',
              'Django & Flask Specialist',
              'NLP + Deep Learning Enthusiast'
            ]}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h2>
      <p className="mt-6 max-w-xl text-lg">
        Passionate about developing AI-driven backend systems and solving real-world problems with research-driven solutions.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 z-10">
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 text-white py-2 px-6 rounded-full shadow-xl text-lg hover:scale-105"
        >
          Contact Me
        </a>
        <a
          href="#projects"
          className="bg-gray-900 bg-opacity-50 border border-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-300 text-purple-300 py-2 px-6 rounded-full shadow-lg text-lg hover:scale-105"
        >
          View Projects
        </a>
        <a
          href="#skills"
          className="bg-gray-900 bg-opacity-50 border border-indigo-500 hover:bg-indigo-600 hover:text-white transition-all duration-300 text-indigo-300 py-2 px-6 rounded-full shadow-lg text-lg hover:scale-105"
        >
          My Skills
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
