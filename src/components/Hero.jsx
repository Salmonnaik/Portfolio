import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { 
  FloatingElement, 
  RotatingElement, 
  PulsingElement, 
  useTypingAnimation,
  RevealAnimation,
  MorphingShape,
  GlitchEffect,
  MagneticButton
} from './EnhancedAnimations';
import { 
  ParallaxScroll,
  TextReveal,
  GradientText,
  Spotlight,
  WaveAnimation
} from './SimpleAnimations';

const Hero = () => {
  const words = ['Full Stack Developer', 'Problem Solver', 'UI/UX Designer', 'Open Source Contributor'];
  const text = useTypingAnimation(words, 150);

  // Particle generation
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 20,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-bg-secondary">
        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveAnimation />
        </div>
        
        {/* Morphing Background Shapes */}
        <FloatingElement delay={0} duration={4} y={15}>
          <MorphingShape className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 blur-xl" />
        </FloatingElement>
        <FloatingElement delay={1} duration={5} y={20}>
          <MorphingShape className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 blur-xl" />
        </FloatingElement>
        <RotatingElement duration={20}>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 blur-2xl" />
        </RotatingElement>
        <PulsingElement duration={3} scale={1.2}>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-10 blur-2xl" />
        </PulsingElement>
        
        {/* Enhanced Particles */}
        {particles.map((particle) => (
          <FloatingElement key={particle.id} delay={particle.delay} duration={10 + particle.delay} y={5}>
            <motion.div
              className="particle absolute rounded-full bg-accent"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </FloatingElement>
        ))}

        {/* Enhanced Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content */}
      <ParallaxScroll speed={0.3}>
        <div className="relative z-10 container mx-auto px-6 text-center">
        <RevealAnimation delay={0.2}>
          <motion.p
            className="text-accent font-semibold mb-4 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
        </RevealAnimation>

        <RevealAnimation delay={0.3}>
          <Spotlight>
            <GlitchEffect intensity={0.05}>
              <motion.h1
                className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GradientText>Salmon Naik Boda</GradientText>
              </motion.h1>
            </GlitchEffect>
          </Spotlight>
        </RevealAnimation>

        <RevealAnimation delay={0.4}>
          <div className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold mb-8 h-20 flex items-center justify-center">
            <span className="text-text-secondary">I'm a </span>
            <span className="gradient-text ml-3">
              {text}
              <span className="typing-cursor">|</span>
            </span>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.5}>
          <motion.p
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A passionate full-stack developer with expertise in modern web technologies.
            I love creating efficient, scalable solutions that solve real-world problems.
          </motion.p>
        </RevealAnimation>

        {/* CTA Buttons */}
        <RevealAnimation delay={0.6}>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <MagneticButton
              href="#projects"
              className="px-8 py-4 bg-accent text-white font-semibold rounded-full ripple-effect hover:shadow-lg hover:shadow-accent/50 transition-all"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="px-8 py-4 glass text-text font-semibold rounded-full hover:bg-accent/10 transition-all"
            >
              Get In Touch
            </MagneticButton>
          </div>
        </RevealAnimation>

          {/* Social Links */}
        <RevealAnimation delay={0.7}>
          <motion.div
            className="flex gap-6 justify-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { Icon: Github, href: 'https://github.com/Salmonnaik', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/salmon-naik-boda', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:bodasalmonnaik@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 glass rounded-full hover:bg-accent/10 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Icon className="w-6 h-6 text-text-secondary group-hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </RevealAnimation>

        {/* Scroll Indicator */}
        <RevealAnimation delay={0.8}>
          <motion.div
            className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.a
              href="#skills"
              className="flex flex-col items-center gap-2 text-text-secondary hover:text-accent transition-colors"
              whileHover={{ y: 5 }}
            >
              <span className="text-sm font-medium">Scroll Down</span>
              <ChevronDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </RevealAnimation>
      </div>
      </ParallaxScroll>
    </section>
  );
};

export default Hero;
