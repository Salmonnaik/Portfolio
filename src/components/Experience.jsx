import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      title: "Full Stack Developer Trainee",
      company: "Nxtwave Disruptive Technologies",
      description: "Completed comprehensive full stack development training program, gaining expertise in modern web technologies, frameworks, and industry best practices. Worked on real-world projects and collaborative development.",
      period: "2023",
      type: "mid"
    },
    {
      title: "Senior Full Stack Developer",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      period: "Current",
      type: "senior"
    },
    {
      title: "Full Stack Developer", 
      description: "Developed and maintained multiple client projects, focusing on responsive design and optimal user experience. Worked with diverse technology stacks.",
      period: "Previous",
      type: "mid"
    },
    {
      title: "Frontend Developer",
      description: "Built responsive web interfaces and collaborated with UX/UI designers to create engaging user experiences. Specialized in React and modern CSS frameworks.",
      period: "Previous", 
      type: "junior"
    }
  ];

  const getTypeStyles = (type) => {
    switch(type) {
      case 'senior':
        return theme === 'dark' 
          ? 'border-blue-500 bg-blue-500/10' 
          : 'border-blue-600 bg-blue-50';
      case 'mid':
        return theme === 'dark' 
          ? 'border-green-500 bg-green-500/10' 
          : 'border-green-600 bg-green-50';
      case 'junior':
        return theme === 'dark' 
          ? 'border-purple-500 bg-purple-500/10' 
          : 'border-purple-600 bg-purple-50';
      default:
        return theme === 'dark' 
          ? 'border-gray-500 bg-gray-500/10' 
          : 'border-gray-600 bg-gray-50';
    }
  };

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl border-2 ${getTypeStyles(exp.type)}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className={`text-lg font-medium ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {exp.company}
                    </p>
                  )}
                </div>
                <span className={`mt-2 md:mt-0 px-4 py-2 rounded-full text-sm font-medium ${
                  theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
                }`}>
                  {exp.period}
                </span>
              </div>
              
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {exp.description}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'].slice(0, 3 + index).map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-800 text-gray-400 border border-gray-700' 
                        : 'bg-gray-100 text-gray-600 border border-gray-300'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
