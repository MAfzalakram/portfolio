import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-purple-300 mb-4 border-b border-purple-500 pb-2 animate-bounce">About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        I am a <strong className="text-white">Python Backend Developer</strong> with a strong academic foundation as a <strong className="text-white">PhD Researcher in Computer Science</strong>, specialising in Machine Learning, NLP, and Deep Learning. My experience includes developing scalable, production-ready backend systems using Python frameworks like Django and Flask. I’m well-versed in building RESTful APIs, integrating relational databases, and deploying intelligent, AI-powered web applications.
      </p>
      <p className="text-gray-300 leading-relaxed mt-4">
        I value clean code, performance optimisation, and agile team collaboration. With a passion for research-driven problem-solving, I aim to bridge the gap between cutting-edge academic knowledge and real-world backend engineering challenges.
      </p>
    </motion.section>
  );
};

export default About;