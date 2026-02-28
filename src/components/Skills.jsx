import { motion } from 'framer-motion';
import { Code, Palette, Database, Zap, Globe, Smartphone, Target, BookOpen } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../hooks/useTheme';
import { RevealAnimation, FloatingElement } from './EnhancedAnimations';

const Skills = () => {
  const [ref, isInView] = useInView();
  const { theme } = useTheme();

  const skills = [
    {
      category: 'Frontend Fundamentals',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'HTML5', level: 95, description: 'Semantic markup, accessibility, and modern HTML5 features for building solid foundation of web applications' },
        { name: 'CSS3', level: 92, description: 'Responsive design, animations, Flexbox, Grid, and modern CSS techniques for creating beautiful interfaces' },
        { name: 'JavaScript', level: 90, description: 'ES6+, DOM manipulation, async programming, and modern JavaScript features for dynamic web applications' },
      ],
    },
    {
      category: 'Frontend Frameworks',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'React.js', level: 95, description: 'Component-based architecture, hooks, state management, and building scalable frontend applications' },
        { name: 'Bootstrap & Tailwind', level: 88, description: 'Rapid UI development, responsive frameworks, utility-first CSS, and modern component libraries' },
        { name: 'Figma UI/UX', level: 85, description: 'User interface design, prototyping, wireframing, and creating stunning user experiences with modern design principles' },
      ],
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Node.js', level: 88, description: 'Server-side JavaScript, REST APIs, Express.js, and building robust backend services and microservices' },
        { name: 'Python', level: 85, description: 'Backend development, data analysis, automation scripts, and working with frameworks like Django/Flask' },
        { name: 'Express.js & API', level: 85, description: 'RESTful API development, middleware implementation, authentication, and building scalable server applications' },
      ],
    },
    {
      category: 'Database & Storage',
      icon: Globe,
      color: 'from-yellow-500 to-orange-500',
      items: [
        { name: 'MongoDB', level: 82, description: 'NoSQL database design, aggregation pipelines, indexing, and building scalable data solutions' },
        { name: 'Data Structures & Algorithms', level: 85, description: 'Problem-solving, algorithmic thinking, optimization techniques, and competitive programming skills' },
        { name: 'Git & GitHub', level: 92, description: 'Version control, collaborative development, branching strategies, and open-source contribution workflows' },
      ],
    },
    {
      category: 'Programming & CS',
      icon: Smartphone,
      color: 'from-red-500 to-rose-500',
      items: [
        { name: 'C Programming', level: 80, description: 'System programming, memory management, data structures, and algorithm implementation fundamentals' },
        { name: 'Cloud Solutions', level: 80, description: 'Cloud architecture, deployment, and optimization using AWS, Google Cloud, and Azure platforms' },
        { name: 'Mobile Development', level: 75, description: 'Cross-platform mobile applications using React Native and Flutter for iOS and Android platforms' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-secondary to-bg opacity-50" />
      
      <div className="relative z-10 container mx-auto px-6">
        <RevealAnimation>
          <div className="text-center mb-20">
            <motion.span
              className="text-accent font-semibold text-lg mb-3 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              My Journey
            </motion.span>
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
              Skills <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A visual journey through my technical expertise and creative capabilities
            </p>
          </div>
        </RevealAnimation>

        {/* Skills Overview Stats */}
        <RevealAnimation delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: '15+', label: 'Technologies', icon: Target },
              { number: '5', label: 'Categories', icon: BookOpen },
              { number: '90%', label: 'Avg. Proficiency', icon: Zap },
              { number: '3+', label: 'Years Experience', icon: Globe },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <FloatingElement key={index} delay={index * 0.1} duration={3} y={5}>
                  <motion.div
                    className={`p-6 rounded-2xl text-center ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                        : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg'
                    }`}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                    <div className={`text-2xl font-bold mb-1 ${
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
                </FloatingElement>
              );
            })}
          </div>
        </RevealAnimation>

        {/* Timeline */}
        <motion.div
          ref={ref}
          className="relative max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-light to-accent opacity-30 transform md:-translate-x-1/2" />

          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={skill.category}
                className={`relative flex items-center mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
                variants={itemVariants}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 timeline-node">
                  <motion.div
                    className="w-16 h-16 rounded-full glass flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <RevealAnimation delay={index * 0.1}>
                  <motion.div
                    className={`glass rounded-2xl p-6 md:p-8 w-full md:w-5/12 ml-24 md:ml-0 ${
                      isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <h3 className="font-display font-bold text-2xl mb-6 text-text">
                      {skill.category}
                    </h3>

                    <div className="space-y-4">
                      {skill.items.map((item, idx) => (
                        <div key={item.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-text">{item.name}</span>
                            <span className="text-accent font-semibold">{item.level}%</span>
                          </div>
                          <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.level}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1, duration: 1, ease: 'easeOut' }}
                            />
                          </div>
                          <p className="text-sm text-text-secondary mt-2">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </RevealAnimation>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
