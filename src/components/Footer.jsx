// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-black text-gray-400 py-6 text-center mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p className="text-sm">&copy; {new Date().getFullYear()} Muhammad Afzal. All rights reserved.</p>

    </motion.footer>
  );
};

export default Footer;