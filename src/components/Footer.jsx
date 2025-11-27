import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-darker py-8 border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-light flex items-center gap-2 justify-center md:justify-start">
              Made with <FaHeart className="text-red-500" /> by{' '}
              <span className="text-primary font-semibold">Snehal Sable</span>
            </p>
            <p className="text-light/60 text-sm mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-2xl flex-wrap justify-center">
            <a
              href="https://github.com/snehalsable10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors duration-300"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/snehal-sable-bb215b268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors duration-300"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/snehalsable"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors duration-300"
              title="LeetCode"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/snehalsable10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors duration-300"
              title="GeeksforGeeks"
            >
              <SiGeeksforgeeks />
            </a>
            <a
              href="mailto:snehalsable105@gmail.com"
              className="text-light hover:text-primary transition-colors duration-300"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;