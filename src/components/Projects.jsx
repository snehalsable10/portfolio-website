import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Feastify',
      subtitle: 'Food Order Platform',
      description: 'Developed a food delivery web application using MongoDB, Express.js, React.js, and Node.js, featuring real-time order management and user authentication. Designed reusable UI components with React.js and implemented RESTful APIs for seamless data communication.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API', 'JWT'],
      demo: '#',
      github: '#',
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      title: 'Movie Recommender System',
      subtitle: 'ML-Based Recommendation Engine',
      description: 'Developed a recommender system using Bag of Words & cosine similarity on a dataset of 5K+ movies. Achieved 85%+ accuracy and integrated Flask API with React for real-time recommendations.',
      tech: ['Python', 'Flask', 'React.js', 'Machine Learning', 'Cosine Similarity', 'Pandas'],
      demo: '#',
      github: '#',
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      title: 'BreezyHomes',
      subtitle: 'Property Rental Website',
      description: 'Developed a responsive real estate platform with MERN stack, supporting 50+ dynamic property listings. Optimized browsing & search functionality, reducing property discovery time significantly.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'REST API'],
      demo: '#',
      github: '#',
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-dark rounded-xl overflow-hidden border border-primary/30 hover:border-primary transition-all duration-300 flex flex-col"
            >
              {/* Project Header with Gradient */}
              <div className={`bg-gradient-to-br ${project.gradient} p-6 border-b border-primary/30`}>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-primary text-sm font-semibold">{project.subtitle}</p>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-light/80 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-primary hover:bg-primary text-primary hover:text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/snehalsable10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="text-xl" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;