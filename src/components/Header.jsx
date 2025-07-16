import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black shadow-md p-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-purple-400 animate-pulse">Muhammad Afzal</h1>
          <p className="text-sm text-gray-300">📧 afzalakram10@gmail.com | 📱 +92-323-4600452</p>
        </div>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="https://github.com/Mafzalakram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/afzalakram10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;