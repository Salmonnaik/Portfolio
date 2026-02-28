import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code, 
  Palette, 
  Zap, 
  Globe, 
  Database, 
  Smartphone, 
  Target, 
  BookOpen,
  Rocket,
  Award,
  TrendingUp,
  Users,
  Lightbulb,
  Cpu,
  Shield,
  BarChart
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { RevealAnimation, MagneticButton, GradientText } from './EnhancedAnimations';
import { TextReveal, Spotlight } from './SimpleAnimations';

const ShowcaseExamples = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'web', name: 'Web Apps', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'ai', name: 'AI/ML', icon: Cpu },
  ];

  const examples = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
      tags: ['React', 'Node.js', 'MongoDB'],
      icon: Globe,
      stats: { users: '10K+', revenue: '$500K+', rating: '4.8' },
      featured: true
    },
    {
      id: 2,
      title: 'AI Chat Assistant',
      category: 'ai',
      description: 'Intelligent chatbot with natural language processing capabilities',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
      tags: ['Python', 'TensorFlow', 'NLP'],
      icon: Cpu,
      stats: { accuracy: '95%', responses: '1M+', languages: '25' },
      featured: true
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication',
      image: 'https://images.unsplash.com/photo-1512941937309-5fbc088b2bd4?w=400',
      tags: ['React Native', 'Firebase', 'Security'],
      icon: Smartphone,
      stats: { downloads: '100K+', security: 'A+', rating: '4.9' },
      featured: true
    },
    {
      id: 4,
      title: 'Design System',
      category: 'design',
      description: 'Comprehensive design system with reusable components and guidelines',
      image: 'https://images.unsplash.com/photo-1559028006-24548a603337?w=400',
      tags: ['Figma', 'React', 'Storybook'],
      icon: Palette,
      stats: { components: '200+', usage: '50+', efficiency: '+40%' },
      featured: false
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'web',
      description: 'Real-time analytics dashboard with advanced data visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
      tags: ['D3.js', 'React', 'WebSocket'],
      icon: BarChart,
      stats: { metrics: '100+', realTime: 'yes', users: '5K+' },
      featured: false
    },
    {
      id: 6,
      title: 'Healthcare Portal',
      category: 'web',
      description: 'Patient management system with telemedicine capabilities',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
      tags: ['Vue.js', 'HIPAA', 'Video Call'],
      icon: Shield,
      stats: { patients: '50K+', doctors: '500+', appointments: '200K+' },
      featured: false
    }
  ];

  const filteredExamples = activeCategory === 'all' 
    ? examples 
    : examples.filter(example => example.category === activeCategory);

  const StatCard = ({ icon: Icon, value, label }) => (
    <motion.div
      className={`p-3 rounded-lg text-center ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-4 h-4 mx-auto mb-1 text-accent" />
      <div className={`text-sm font-bold ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {value}
      </div>
      <div className={`text-xs ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {label}
      </div>
    </motion.div>
  );

  return (
    <section id="showcase" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RevealAnimation>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <GradientText>Portfolio Showcase</GradientText>
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore my latest projects and achievements
            </p>
          </div>
        </RevealAnimation>

        {/* Category Filter */}
        <RevealAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-accent text-white shadow-lg shadow-accent/50'
                      : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </RevealAnimation>

        {/* Featured Projects */}
        <RevealAnimation delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredExamples.map((example, index) => {
              const Icon = example.icon;
              return (
                <Spotlight key={example.id} className="h-full">
                  <motion.div
                    className={`rounded-2xl overflow-hidden border-2 ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-gray-700'
                        : 'bg-white border-gray-200 shadow-lg'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={example.image}
                        alt={example.title}
                        className="w-full h-full object-cover"
                      />
                      {example.featured && (
                        <motion.div
                          className="absolute top-4 right-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Award className="w-3 h-3 inline mr-1" />
                          Featured
                        </motion.div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-6 h-6 text-accent" />
                        <h3 className={`text-xl font-bold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {example.title}
                        </h3>
                      </div>

                      <p className={`mb-4 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {example.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {example.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              theme === 'dark'
                                ? 'bg-gray-800 text-gray-300'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(example.stats).map(([key, value]) => {
                          const statIcons = {
                            users: Users,
                            revenue: TrendingUp,
                            rating: Award,
                            accuracy: Target,
                            responses: Zap,
                            languages: Globe,
                            downloads: Smartphone,
                            security: Shield,
                            components: Code,
                            usage: Users,
                            efficiency: TrendingUp,
                            metrics: BarChart,
                            realTime: Lightbulb,
                            patients: Users,
                            doctors: Users,
                            appointments: BookOpen
                          };
                          const StatIcon = statIcons[key] || Target;
                          return (
                            <StatCard
                              key={key}
                              icon={StatIcon}
                              value={value}
                              label={key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                          );
                        })}
                      </div>

                      {/* Action Button */}
                      <MagneticButton className="w-full mt-4 px-4 py-2 bg-accent text-white rounded-lg font-medium">
                        View Project
                      </MagneticButton>
                    </div>
                  </motion.div>
                </Spotlight>
              );
            })}
          </div>
        </RevealAnimation>

        {/* Call to Action */}
        <RevealAnimation delay={0.4}>
          <motion.div
            className={`text-center p-12 rounded-2xl border-2 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <Rocket className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Want to see more?
            </h3>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Check out my complete portfolio with 50+ projects and case studies
            </p>
            <MagneticButton className="px-8 py-3 bg-accent text-white rounded-lg font-medium">
              View Full Portfolio
            </MagneticButton>
          </motion.div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ShowcaseExamples;
