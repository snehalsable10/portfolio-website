import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (EmailJS, etc.)
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'snehalsable105@gmail.com',
      link: 'mailto:snehalsable105@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91-74481-26315',
      link: 'tel:+917448126315'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Pune, Maharashtra, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
            <p className="text-light mb-8">
              Feel free to reach out to me for any opportunities, collaborations, or just to say hi!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-light/80 hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-light/80">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/snehalsable10"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-4 rounded-lg transition-all duration-300 text-2xl"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/snehal-sable"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-4 rounded-lg transition-all duration-300 text-2xl"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/snehalsable10"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-4 rounded-lg transition-all duration-300 text-2xl"
                title="LeetCode"
              >
                <SiLeetcode />
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/snehalsable10"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-4 rounded-lg transition-all duration-300 text-2xl"
                title="GeeksforGeeks"
              >
                <SiGeeksforgeeks />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-light mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg focus:outline-none focus:border-primary text-white transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-light mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg focus:outline-none focus:border-primary text-white transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-light mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark border border-primary/30 rounded-lg focus:outline-none focus:border-primary text-white transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;