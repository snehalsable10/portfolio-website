import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaCode, FaTrophy, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaCertificate />,
      title: 'Microsoft Azure-900 Certification',
      description: 'Certified in Microsoft Azure Fundamentals',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaCode />,
      title: '50+ Problems on GeeksforGeeks',
      description: 'Solved 50+ coding problems on GeeksforGeeks platform',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FaTrophy />,
      title: 'Event Leadership',
      description: 'Led a 10+ member team to organize Fast & Furious event in college TechTonic fest',
      link: null,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <FaAward />,
      title: 'Infosys Springboard Certifications',
      description: '3+ certifications in Data Structures, DBMS, and Python',
      link: null,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-darker rounded-xl overflow-hidden border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${achievement.color} p-1`}>
                <div className="bg-darker p-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${achievement.color} p-4 rounded-lg text-white text-3xl`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-light/80 mb-4">
                        {achievement.description}
                      </p>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 font-semibold"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;