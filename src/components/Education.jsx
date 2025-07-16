import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'PhD Computer Science',
    institute: 'University of Central Punjab',
    year: '2023–2026 (Continue)',
    cgpa: '3.67 / 4.0',
  },
  {
    degree: 'MS Computer Science',
    institute: 'University of Lahore',
    year: '2018–2021',
    cgpa: '3.30 / 4.0',
  },
  {
    degree: 'BS Computer Science',
    institute: 'PUCIT, Lahore',
    year: '2012–2016',
    cgpa: '2.81 / 4.0',
  },
];

const Education = () => {
  return (
    <motion.section
      id="education"
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-yellow-300 mb-4 border-b border-yellow-500 pb-2">Education</h2>
      <div className="space-y-4">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-4 rounded-md shadow hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-gray-300">{edu.institute}</p>
            <p className="text-gray-400 text-sm">{edu.year} | CGPA: {edu.cgpa}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
