import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const Services = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies, responsive design, and optimal performance.',
      features: ['React.js', 'Vue.js', 'Next.js', 'Responsive Design']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native and Flutter for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Scalable server-side solutions with APIs, databases, and cloud integration for robust applications.',
      features: ['Node.js', 'Python', 'REST APIs', 'GraphQL']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design with modern interfaces, wireframing, and prototyping for excellent user experience.',
      features: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Cloud architecture, deployment, and optimization using AWS, Google Cloud, and Azure platforms.',
      features: ['AWS', 'Google Cloud', 'Azure', 'DevOps']
    },
    {
      icon: '🤝',
      title: 'Consulting',
      description: 'Technical consulting, code review, and architecture planning for your development projects.',
      features: ['Code Review', 'Architecture', 'Best Practices', 'Mentoring']
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Services
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            What I can do for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700 hover:border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-400 shadow-lg'
              }`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {service.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`flex items-center text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className={`text-lg mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Interested in working together? Let's discuss your project!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
