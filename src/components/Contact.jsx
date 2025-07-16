// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-pink-300 mb-4 border-b border-pink-500 pb-2">Contact Me</h2>
      <p className="text-gray-300 mb-4">
        Interested in working together or want to reach out? Drop me a message below or connect via email or phone.
      </p>
      <ul className="text-gray-300 space-y-2">
        <li>
          <strong>Email:</strong> <a href="mailto:afzalakram10@gmail.com" className="text-pink-400 hover:underline">afzalakram10@gmail.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <span className="text-pink-400">+92-323-4600452</span>
        </li>
        <li>
          <strong>GitHub:</strong> <a href="https://github.com/MuhammadAfzal10" className="text-pink-400 hover:underline" target="_blank" rel="noopener noreferrer">MuhammadAfzal10</a>
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/muhammad-afzal" className="text-pink-400 hover:underline" target="_blank" rel="noopener noreferrer">Muhammad Afzal</a>
        </li>
      </ul>
    </motion.section>
  );
};

export default Contact;
