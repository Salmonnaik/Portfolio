import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-2xl md:text-3xl font-semibold mb-6 ${
              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            Hello, I'm Salmon
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className={`text-lg leading-relaxed space-y-4 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <p>
              Hello! I'm Salmon Naik Boda, a passionate full-stack developer and student at NIT Arunachal Pradesh. I love creating efficient, scalable solutions that solve real-world problems.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I specialize in building responsive web applications using the latest technologies and best practices. My expertise includes React, TypeScript, JavaScript, and modern web development frameworks.
            </p>
            <p>
              I'm an active open source contributor with 15+ repositories on GitHub, focusing on modern web development. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <p>
              Currently pursuing my studies at NIT Arunachal Pradesh, I'm always eager to learn and take on new challenges in the ever-evolving world of technology.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <div className={`px-6 py-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-blue-900/30 border border-blue-700 text-blue-300' 
                : 'bg-blue-100 border border-blue-300 text-blue-700'
            }`}>
              Full Stack Developer
            </div>
            <div className={`px-6 py-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-green-900/30 border border-green-700 text-green-300' 
                : 'bg-green-100 border border-green-300 text-green-700'
            }`}>
              Problem Solver
            </div>
            <div className={`px-6 py-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-purple-900/30 border border-purple-700 text-purple-300' 
                : 'bg-purple-100 border border-purple-300 text-purple-700'
            }`}>
              Open Source Contributor
            </div>
            <div className={`px-6 py-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-orange-900/30 border border-orange-700 text-orange-300' 
                : 'bg-orange-100 border border-orange-300 text-orange-700'
            }`}>
              NIT Arunachal Pradesh
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className={`mt-12 p-6 rounded-xl ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'
            }`}
          >
            <h4 className={`text-xl font-semibold mb-4 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              GitHub Statistics
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>15+</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Repositories</div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>3</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Stars</div>
              </div>
              <div>
                <div className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>1</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>Following</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
