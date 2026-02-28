import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Testimonials = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO at TechStart Inc.",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&auto=format&fit=crop",
      rating: 5,
      testimonial: "Salmon is an exceptional developer who delivered our e-commerce platform ahead of schedule. His attention to detail and problem-solving skills are outstanding. The platform has exceeded our expectations in terms of performance and user experience.",
      project: "E-Commerce Platform",
      date: "2024-01-10"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "Innovation Labs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop",
      rating: 5,
      testimonial: "Working with Salmon on our analytics dashboard was a fantastic experience. He brought innovative solutions to complex problems and maintained excellent communication throughout the project. The dashboard has become an essential tool for our team.",
      project: "Analytics Dashboard",
      date: "2023-12-15"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Director of Technology",
      company: "EduTech Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop",
      rating: 5,
      testimonial: "Salmon's expertise in full-stack development helped us transform our educational platform. His ability to understand our requirements and deliver scalable solutions is remarkable. We've seen a 40% increase in user engagement since the launch.",
      project: "Educational Platform",
      date: "2023-11-20"
    },
    {
      id: 4,
      name: "David Kim",
      position: "Startup Founder",
      company: "CampusBuzz",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&auto=format&fit=crop",
      rating: 5,
      testimonial: "Salmon developed our mobile app from scratch and it's been absolutely phenomenal. His technical skills combined with his creative approach resulted in an app that our users love. The app has received rave reviews and continues to grow.",
      project: "Mobile App CampusBuzz",
      date: "2023-10-05"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      position: "CTO",
      company: "DataFlow Systems",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&auto=format&fit=crop",
      rating: 5,
      testimonial: "Salmon's work on our AI chat assistant exceeded all expectations. He implemented complex machine learning features with ease and ensured the system was both powerful and user-friendly. Our customer satisfaction has improved significantly.",
      project: "AI Chat Assistant",
      date: "2023-09-12"
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Web Development Lead",
      company: "NIT Andhra Pradesh",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop",
      rating: 5,
      testimonial: "Salmon redesigned our college website and the results have been outstanding. The new site is modern, responsive, and has received excellent feedback from students and faculty. His attention to accessibility and performance was impressive.",
      project: "NIT AP College Website",
      date: "2023-08-18"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            Client <span className="text-blue-500">Testimonials</span>
          </h2>
          <p className={`text-xl ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-8 md:p-12 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl'
              }`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="flex-shrink-0"
                >
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-500"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-4"
                  >
                    <Quote className={`w-8 h-8 md:w-12 md:h-12 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                    }`} />
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg md:text-xl leading-relaxed mb-6 italic ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    "{currentTestimonial.testimonial}"
                  </motion.blockquote>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center md:justify-start gap-1 mb-4"
                  >
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </motion.div>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className={`font-bold text-lg md:text-xl ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {currentTestimonial.name}
                    </div>
                    <div className={`text-sm md:text-base ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {currentTestimonial.position} at {currentTestimonial.company}
                    </div>
                    <div className={`text-sm mt-2 ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      Project: {currentTestimonial.project}
                    </div>
                    <div className={`text-xs mt-1 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                      {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 shadow-lg'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full ${
              theme === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                : 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 shadow-lg'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index
                  ? 'bg-blue-500 w-8'
                  : theme === 'dark'
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        {/* Grid of All Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => goToTestimonial(index)}
              className={`p-6 rounded-xl cursor-pointer transition-all ${
                theme === 'dark'
                  ? 'bg-gray-800 border border-gray-700 hover:border-blue-500'
                  : 'bg-white border border-gray-200 hover:border-blue-400 shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {testimonial.name}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              
              <p className={`text-sm line-clamp-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonial.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
