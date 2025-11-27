import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-2xl backdrop-blur-sm border border-primary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary">Full Stack Developer</h3>
              <p className="text-light leading-relaxed mb-4">
                I'm a passionate Full Stack Developer currently pursuing my Bachelor's in Computer Engineering 
                at Sinhgad Institute of Technology and Science, Pune with a CGPA of 8.89/10.0.
              </p>
              <p className="text-light leading-relaxed mb-4">
                I recently completed my Full Stack Developer Internship at ScaleFull Technologies, where I 
                gained hands-on experience in building MERN-based applications, integrating APIs, and 
                designing responsive user interfaces.
              </p>
              <p className="text-light leading-relaxed">
                I specialize in the MERN stack and have successfully delivered multiple projects including 
                food delivery platforms, movie recommendation systems, and property rental websites.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-darker p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaGraduationCap className="text-3xl text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Education</h4>
                  <p className="text-light mb-1">
                    <strong>B.E. Computer Engineering</strong>
                  </p>
                  <p className="text-sm text-light/70">
                    Sinhgad Institute of Technology and Science, Pune
                  </p>
                  <p className="text-sm text-primary">CGPA: 8.89/10.0 (2023-2026)</p>
                  <p className="text-light mt-3 mb-1">
                    <strong>Diploma in Information Technology</strong>
                  </p>
                  <p className="text-sm text-light/70">Govt. Polytechnic, Nashik</p>
                  <p className="text-sm text-primary">Percentage: 85.94% (2020-2023)</p>
                </div>
              </div>
            </div>

            <div className="bg-darker p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaBriefcase className="text-3xl text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Recent Experience</h4>
                  <p className="text-light mb-1">
                    <strong>Full Stack Developer Intern</strong>
                  </p>
                  <p className="text-sm text-light/70">ScaleFull Technologies Pvt. Ltd., Pune</p>
                  <p className="text-sm text-primary mb-2">Jan 2025 - Feb 2025 (Completed)</p>
                  <ul className="text-sm text-light/80 space-y-1 list-disc list-inside">
                    <li>Worked on MERN-based Food Order Platform</li>
                    <li>Integrated APIs using Axios</li>
                    <li>Designed reusable React components</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;