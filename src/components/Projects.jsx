// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Full-Stack Django E-commerce Backend',
    description: 'Designed a modular backend architecture for e-commerce using Django, implemented models for products, orders, carts, and user management.',
    link: 'https://github.com/MAfzalakram/webecom'
  },
  {
    title: 'Course Management API',
    description: 'Developed a RESTful API using Django REST Framework with CRUD functionality, OpenAPI docs and model validations.',
    link: 'https://github.com/MAfzalakram/CoursesDRF'
  },
  {
    title: 'React + Tailwind Developer Portfolio',
    description: 'Built a responsive portfolio with React, Tailwind CSS, and Framer Motion. Showcased profile via modular components, scroll effects, and typewriter hero. Deployed on Vercel with GitHub CI/CD integration.',
    link: 'https://github.com/MAfzalakram/portfolio'
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b border-cyan-500 pb-2">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-700 p-4 rounded-md shadow hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-200 underline"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
