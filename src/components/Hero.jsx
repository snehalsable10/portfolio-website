import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-darker to-dark pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Snehal Sable</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-secondary mb-6 font-semibold">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-light mb-8 max-w-3xl mx-auto leading-relaxed">
              MERN Stack Developer passionate about building scalable web applications.
              Currently interning at ScaleFull Technologies, specializing in React.js, Node.js, and MongoDB.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#projects"
              className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
            <a
              href="https://nyc3.digitaloceanspaces.com/bhindi-drive/files/b8299cac-08aa-49c3-93ce-a68f04a68359/2025-11-27T16-50-21-991Z-bc9ea3c3-Snehal_Latex_resume.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary hover:bg-primary text-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-6 justify-center text-3xl"
          >
            <a
              href="https://github.com/snehalsable10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/snehal-sable"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:snehalsable105@gmail.com"
              className="text-light hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="tel:+917448126315"
              className="text-light hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <FaPhone />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;