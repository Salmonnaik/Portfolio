import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

// Parallax Scroll Component
export const ParallaxScroll = ({ children, speed = 0.5, className = '' }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={className}
      style={{ y: scrollY * speed }}
    >
      {children}
    </motion.div>
  );
};

// Text Reveal Animation
export const TextReveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        variants={{
          hidden: { y: '100%' },
          visible: { y: 0 }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Gradient Text Animation
export const GradientText = ({ children, className = '' }) => {
  const { theme } = useTheme();
  
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        backgroundSize: '200% 200%',
        backgroundPosition: ['0% 50%', '50% 50%', '100% 50%', '50% 50%'],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #667eea 100%)'
          : 'linear-gradient(45deg, #3b82f6 0%, #8b5cf6 25%, #ec4899 50%, #f59e0b 75%, #3b82f6 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}
    >
      {children}
    </motion.span>
  );
};

// Wave Animation Component
export const WaveAnimation = ({ className = '' }) => {
  return (
    <svg
      className={`w-full h-20 ${className}`}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,160 C320,100 420,240 740,160 C1060,80 1160,200 1440,120 L1440,320 L0,320 Z"
        fill="url(#gradient)"
        animate={{
          d: [
            "M0,160 C320,100 420,240 740,160 C1060,80 1160,200 1440,120 L1440,320 L0,320 Z",
            "M0,140 C320,180 420,100 740,140 C1060,180 1160,100 1440,140 L1440,320 L0,320 Z",
            "M0,160 C320,100 420,240 740,160 C1060,80 1160,200 1440,120 L1440,320 L0,320 Z"
          ]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Spotlight Effect
export const Spotlight = ({ children, className = '' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`,
        }}
      />
    </div>
  );
};
