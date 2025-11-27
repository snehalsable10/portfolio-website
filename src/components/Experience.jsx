import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

            {/* Experience Card */}
            <div className="relative bg-darker p-8 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300 md:ml-20">
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-8 w-6 h-6 bg-primary rounded-full border-4 border-dark hidden md:block"></div>

              {/* Completed Badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  <FaCheckCircle />
                  <span>Completed</span>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary/20 p-4 rounded-lg">
                  <FaBriefcase className="text-3xl text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Full Stack Developer Intern
                  </h3>
                  <h4 className="text-xl text-light mb-3">
                    ScaleFull Technologies Pvt. Ltd.
                  </h4>
                  <div className="flex flex-wrap gap-4 text-sm text-light/70 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary" />
                      <span>Jan 2025 - Feb 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      <span>Pune, Maharashtra</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-light">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <p>
                    Worked on a <strong>MERN-based Food Order Platform</strong> and gained hands-on 
                    experience in full-stack development
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <p>
                    Integrated APIs using <strong>Axios</strong> and improved data flow between 
                    frontend and backend
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">▹</span>
                  <p>
                    Designed <strong>reusable React components</strong> for a smooth and responsive UI
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Axios', 'REST APIs'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;