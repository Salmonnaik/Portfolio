import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const [ref, isInView] = useInView();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'addovedi',
      description: 'A comprehensive web application built with TypeScript, forked from coding-pundit-nitap. Features modern architecture and scalable design patterns.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      tags: ['TypeScript', 'React', 'Node.js'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Salmonnaik/addovedi',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'nxt-trendz-product-details',
      description: 'E-commerce product details page implementation with JavaScript. Focuses on dynamic product display and user interaction patterns.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop',
      tags: ['JavaScript', 'React', 'E-commerce'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Salmonnaik/nxt-trendz-product-details',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'registration-form',
      description: 'Interactive registration form built with JavaScript, featuring form validation, error handling, and responsive design.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
      tags: ['JavaScript', 'Forms', 'Validation'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Salmonnaik/registration-form',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'TNP-MAIN-PRODUCTION',
      description: 'Production-ready application built with TypeScript. Implements robust architecture and enterprise-level features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
      tags: ['TypeScript', 'Production', 'Enterprise'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Salmonnaik/TNP-MAIN-PRODUCTION',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'nxtwatch-app',
      description: 'Video streaming application inspired by popular platforms. Built with JavaScript focusing on modern UI/UX patterns.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop',
      tags: ['JavaScript', 'Video', 'Streaming'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Salmonnaik/nxtwatch-app',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with data visualization, real-time metrics, and customizable reports for business intelligence.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: 'https://github.com/Salmonnaik',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(selectedFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg to-bg-secondary opacity-50" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-accent font-semibold text-lg mb-3 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setSelectedFilter(tag)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === tag
                  ? 'bg-accent text-white shadow-lg shadow-accent/50'
                  : 'glass text-text-secondary hover:text-text'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const calculateRotation = () => {
    if (!isHovered) return { rotateX: 0, rotateY: 0 };
    
    const rect = document.getElementById(`project-${index}`)?.getBoundingClientRect();
    if (!rect) return { rotateX: 0, rotateY: 0 };

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((mousePosition.y - centerY) / centerY) * -10;
    const rotateY = ((mousePosition.x - centerX) / centerX) * 10;
    
    return { rotateX, rotateY };
  };

  const { rotateX, rotateY } = calculateRotation();

  return (
    <motion.div
      id={`project-${index}`}
      className="project-card glass rounded-2xl overflow-hidden group cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
        
        {/* Overlay Buttons */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 20 }}
          animate={{ y: isHovered ? 0 : 20 }}
        >
          <motion.a
            href={project.demoUrl}
            className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5 text-gray-900" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-gray-900" />
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl mb-3 text-text">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-bg-tertiary text-text-secondary text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
