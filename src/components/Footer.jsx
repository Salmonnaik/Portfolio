import { motion } from 'framer-motion';
import { Heart, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-text-tertiary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-text-secondary text-sm flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {currentYear} Salmon Naik Boda. Made with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Heart className="w-4 h-4 text-accent fill-accent" />
              </motion.span>
              and coffee
            </motion.p>
            
            <div className="flex items-center gap-4 text-text-secondary text-sm">
              <motion.a
                href="mailto:bodasalmonnaik@gmail.com"
                className="flex items-center gap-1 hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
              >
                <Mail className="w-4 h-4" />
                bodasalmonnaik@gmail.com
              </motion.a>
              
              <motion.a
                href="tel:+916302166071"
                className="flex items-center gap-1 hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
              >
                <Phone className="w-4 h-4" />
                +91 63021 66071
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="https://github.com/Salmonnaik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/salmon-naik-boda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            
            {['Privacy', 'Terms', 'Credits'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="text-text-secondary text-sm hover:text-accent transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
