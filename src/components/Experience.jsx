import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-green-300 mb-4 border-b border-green-500 pb-2">Professional Experience</h2>
      <motion.div
        className="bg-gray-700 p-4 rounded-md shadow hover:shadow-xl transition duration-300"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="text-xl font-semibold text-white">Python (Django) Intern</h3>
        <p className="text-gray-300">IIFA Tech, Lahore — May 2025–Present</p>
        <ul className="list-disc ml-6 mt-2 text-gray-400 space-y-1">
          <li>Developed and debugged RESTful APIs using Django and Django REST Framework</li>
          <li>Participated in Agile sprints to implement and test backend features</li>
          <li>Utilised Git, Postman, and VS Code for version control and development</li>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
