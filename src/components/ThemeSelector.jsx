import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Sun, Moon, Zap, Heart, Star, Sparkles } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      name: 'dark',
      label: 'Dark Mode',
      icon: Moon,
      description: 'Professional dark theme',
      colors: {
        primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#0f3460',
        text: '#ffffff',
        textSecondary: '#a0a0a0'
      }
    },
    {
      name: 'light',
      label: 'Light Mode',
      icon: Sun,
      description: 'Clean light theme',
      colors: {
        primary: '#ffffff',
        secondary: '#f8f9fa',
        accent: '#e9ecef',
        text: '#212529',
        textSecondary: '#6c757d'
      }
    },
    {
      name: 'ocean',
      label: 'Ocean',
      icon: Sparkles,
      description: 'Deep ocean blues',
      colors: {
        primary: '#0a192f',
        secondary: '#112240',
        accent: '#1e3a8a',
        text: '#e2e8f0',
        textSecondary: '#94a3b8'
      }
    },
    {
      name: 'sunset',
      label: 'Sunset',
      icon: Heart,
      description: 'Warm sunset colors',
      colors: {
        primary: '#2d1b69',
        secondary: '#5e3a8e',
        accent: '#ff6b6b',
        text: '#ffeaa7',
        textSecondary: '#fab1a0'
      }
    },
    {
      name: 'forest',
      label: 'Forest',
      icon: Star,
      description: 'Natural forest greens',
      colors: {
        primary: '#1b4332',
        secondary: '#2d6a4f',
        accent: '#52b788',
        text: '#d8f3dc',
        textSecondary: '#b7e4c7'
      }
    },
    {
      name: 'neon',
      label: 'Neon',
      icon: Zap,
      description: 'Vibrant neon theme',
      colors: {
        primary: '#0a0a0a',
        secondary: '#1a1a1a',
        accent: '#00ff88',
        text: '#ffffff',
        textSecondary: '#00ff88'
      }
    }
  ];

  const currentTheme = themes.find(t => t.name === theme) || themes[0];
  const CurrentIcon = currentTheme.icon;

  return (
    <div className="fixed top-24 right-6 z-50">
      <motion.div
        className="relative"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {/* Theme Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-accent text-white shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <CurrentIcon className="w-5 h-5" />
        </motion.button>

        {/* Theme Options */}
        <motion.div
          className="absolute top-16 right-0 w-64 glass rounded-2xl shadow-2xl border border-accent/20 overflow-hidden"
          variants={{
            open: {
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.5
              }
            },
            closed: {
              opacity: 0,
              scale: 0.8,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <div className="p-4">
            <h3 className="text-lg font-bold mb-4 text-text">Choose Theme</h3>
            
            <div className="space-y-2">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isActive = theme === themeOption.name;
                
                return (
                  <motion.button
                    key={themeOption.name}
                    onClick={() => {
                      setTheme(themeOption.name);
                      setIsOpen(false);
                    }}
                    className={`w-full p-3 rounded-lg flex items-center gap-3 transition-all ${
                      isActive
                        ? 'bg-accent/20 border-2 border-accent'
                        : 'hover:bg-accent/10 border-2 border-transparent'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Theme Preview */}
                    <div className="flex gap-1">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: themeOption.colors.primary }}
                      />
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: themeOption.colors.accent }}
                      />
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: themeOption.colors.text }}
                      />
                    </div>
                    
                    {/* Theme Info */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-accent" />
                        <span className="font-medium text-text">{themeOption.label}</span>
                      </div>
                      <span className="text-xs text-text-secondary">
                        {themeOption.description}
                      </span>
                    </div>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-accent"
                        layoutId="activeTheme"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThemeSelector;
