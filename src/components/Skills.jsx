// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Languages: ['Python', 'C++'],
  Frameworks: ['Django', 'Flask', 'FastAPI'],
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
  Databases: ['MySQL', 'SQLite'],
  'ML/DL Libraries': ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  Tools: ['Git', 'Postman', 'VS Code', 'Jupyter Notebook'],
  OS: ['Windows', 'Linux'],
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-indigo-300 mb-4 border-b border-indigo-500 pb-2">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-4 rounded-md shadow hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{category}</h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-1">
              {items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;