import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Twitter, Check, Copy } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact = () => {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  const email = 'bodasalmonnaik@gmail.com';

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/Salmonnaik', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/salmon-naik-boda', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-sky-500' },
    { icon: Mail, label: 'Email', url: `mailto:${email}`, color: 'hover:text-red-500' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg" />
      
      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
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
            Let's Connect
          </motion.span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 glass rounded-xl form-input bg-transparent text-text placeholder-transparent peer ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder="Your Name"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.1 }}
                />
                <label
                  className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                    formData.name
                      ? '-top-2.5 text-xs bg-bg-secondary px-2 text-accent'
                      : 'top-4 text-text-secondary peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-bg-secondary peer-focus:px-2 peer-focus:text-accent'
                  }`}
                >
                  Your Name
                </label>
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      className="text-red-500 text-sm mt-1 ml-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Input */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 glass rounded-xl form-input bg-transparent text-text placeholder-transparent peer ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="Your Email"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                />
                <label
                  className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                    formData.email
                      ? '-top-2.5 text-xs bg-bg-secondary px-2 text-accent'
                      : 'top-4 text-text-secondary peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-bg-secondary peer-focus:px-2 peer-focus:text-accent'
                  }`}
                >
                  Your Email
                </label>
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      className="text-red-500 text-sm mt-1 ml-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-6 py-4 glass rounded-xl form-input bg-transparent text-text placeholder-transparent peer resize-none ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder="Your Message"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                />
                <label
                  className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                    formData.message
                      ? '-top-2.5 text-xs bg-bg-secondary px-2 text-accent'
                      : 'top-4 text-text-secondary peer-focus:-top-2.5 peer-focus:text-xs peer-focus:bg-bg-secondary peer-focus:px-2 peer-focus:text-accent'
                  }`}
                >
                  Your Message
                </label>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      className="text-red-500 text-sm mt-1 ml-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-accent text-white hover:shadow-lg hover:shadow-accent/50'
                } disabled:opacity-50`}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email Card */}
            <motion.div
              className="glass rounded-2xl p-8"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">Email Me</h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Prefer email? Drop me a line
                  </p>
                </div>
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${email}`}
                  className="text-accent font-medium hover:underline flex-1"
                >
                  {email}
                </a>
                <motion.button
                  onClick={copyEmail}
                  className="p-2 glass rounded-lg hover:bg-accent/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-text-secondary" />
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="glass rounded-2xl p-8"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="font-display font-bold text-xl mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      className="flex items-center gap-3 p-4 bg-bg-tertiary rounded-xl hover:bg-accent/10 transition-colors group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className={`w-5 h-5 text-text-secondary group-hover:text-accent transition-colors ${social.color}`} />
                      <span className="font-medium text-sm">{social.label}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              className="glass rounded-2xl p-8"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <h3 className="font-display font-bold text-xl">Available for Work</h3>
              </div>
              <p className="text-text-secondary text-sm">
                Currently open to freelance projects and full-time opportunities.
                Let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
