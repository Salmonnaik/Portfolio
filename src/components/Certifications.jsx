import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "NIT Arunachal Pradesh",
      date: "2023",
      description: "Comprehensive training in modern web development technologies including React, Node.js, and database management.",
      credentialId: "NITAP-FS-2023",
      credentialUrl: "https://www.linkedin.com/in/salmon-naik-boda"
    },
    {
      id: 2,
      title: "JavaScript Advanced Concepts",
      issuer: "Coding Pundit NITAP",
      date: "2023",
      description: "Advanced JavaScript programming including ES6+, async programming, and design patterns.",
      credentialId: "CP-JS-2023",
      credentialUrl: "https://www.linkedin.com/in/salmon-naik-boda"
    },
    {
      id: 3,
      title: "React Development",
      issuer: "Online Learning Platform",
      date: "2023",
      description: "Modern React development including hooks, context API, and performance optimization.",
      credentialId: "REACT-2023",
      credentialUrl: "https://www.linkedin.com/in/salmon-naik-boda"
    },
    {
      id: 4,
      title: "TypeScript Fundamentals",
      issuer: "Technical Training Institute",
      date: "2023",
      description: "TypeScript programming for type-safe JavaScript development and large-scale applications.",
      credentialId: "TS-2023",
      credentialUrl: "https://www.linkedin.com/in/salmon-naik-boda"
    }
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-xl hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                    <span className="font-medium">{cert.issuer}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-secondary/60">
                      Credential ID: {cert.credentialId}
                    </span>
                    
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm font-medium"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.linkedin.com/in/salmon-naik-boda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent-light transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Certifications on LinkedIn
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
