import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, 
  FaJava, FaGitAlt, FaGithub, FaDatabase 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiMysql, SiCplusplus, SiC, SiPowerbi 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      ]
    },
    {
      title: 'Languages',
      skills: [
        { name: 'C', icon: <SiC />, color: '#A8B9CC' },
        { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
        { name: 'Power BI', icon: <SiPowerbi />, color: '#F2C811' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 bg-darker rounded-lg hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-4xl mb-2" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <p className="text-sm text-light text-center">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-dark p-6 rounded-xl border border-primary/30"
        >
          <h3 className="text-xl font-bold mb-4 text-primary">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3">
            {['Machine Learning', 'Data Structures and Algorithms', 'Object Oriented Programming', 'Database Management System'].map((course) => (
              <span
                key={course}
                className="bg-primary/20 text-light px-4 py-2 rounded-full text-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;