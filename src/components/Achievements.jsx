import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Star, Target, Zap } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Achievements = () => {
  const { theme } = useTheme();

  const achievements = [
    {
      id: 1,
      title: "GSA Certificate",
      organization: "General Services Administration",
      date: "2023",
      description: "Professional certification demonstrating expertise in government digital services and compliance.",
      icon: Award,
      color: "from-blue-400 to-blue-600",
      category: "Certification",
      background: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      organization: "NIT Arunachal Pradesh",
      date: "2023",
      description: "Comprehensive training in modern web development technologies including React, Node.js, and database management.",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      category: "Certification"
    },
    {
      id: 3,
      title: "JavaScript Advanced Concepts",
      organization: "Coding Pundit NITAP",
      date: "2023",
      description: "Advanced JavaScript programming including ES6+, async programming, and design patterns.",
      icon: Star,
      color: "from-purple-400 to-purple-600",
      category: "Certification"
    },
    {
      id: 4,
      title: "React Development",
      organization: "Online Learning Platform",
      date: "2023",
      description: "Modern React development including hooks, context API, and performance optimization.",
      icon: Target,
      color: "from-red-400 to-red-600",
      category: "Certification"
    },
    {
      id: 5,
      title: "Python Programming",
      organization: "University of Michigan",
      date: "2023",
      description: "Certification in Python fundamentals, data structures, and web programming with Python.",
      icon: Zap,
      color: "from-green-400 to-green-600",
      category: "Certification"
    },
    {
      id: 6,
      title: "Database Management",
      organization: "IBM",
      date: "2023",
      description: "Certification in relational database concepts, SQL, and database design and administration.",
      icon: Medal,
      color: "from-indigo-400 to-indigo-600",
      category: "Certification"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "100+", label: "Happy Clients", icon: Star },
    { number: "5+", label: "Years Experience", icon: Zap },
    { number: "10+", label: "Awards Won", icon: Trophy }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="achievements" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
            Achievements & <span className="text-blue-500">Certifications</span>
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Recognition for excellence and continuous learning
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-6 rounded-2xl text-center ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg'
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  className="mb-4"
                >
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 mx-auto text-blue-500`} />
                </motion.div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {stat.number}
                </div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: theme === 'dark' 
                    ? '0 20px 40px rgba(59, 130, 246, 0.3)' 
                    : '0 20px 40px rgba(0, 0, 0, 0.1)'
                }}
                className={`relative p-6 rounded-2xl overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5`} />
                
                {/* Google Logo Background for GDE */}
                {achievement.background && (
                  <div className="absolute inset-0 opacity-5 flex items-center justify-center">
                    <img 
                      src={achievement.background} 
                      alt="Google Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                
                {/* Icon */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${achievement.color} w-fit`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Category Badge */}
                <div className="mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h3>
                
                <div className={`text-sm mb-3 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {achievement.organization}
                </div>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {achievement.description}
                </p>
                
                <div className={`text-xs font-medium ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {achievement.date}
                </div>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} opacity-10`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`p-8 rounded-2xl ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700'
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Achieve Great Things Together
            </h3>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm always looking for new challenges and opportunities to make an impact.
            </p>
            <motion.a
              href="#contact"
              className={`inline-block px-8 py-3 rounded-full font-semibold transition-all ${
                theme === 'dark'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
