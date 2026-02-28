import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Play, Copy, Check, ExternalLink } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { RevealAnimation, MagneticButton } from './EnhancedAnimations';

const CodeShowcase = () => {
  const { theme } = useTheme();
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = [
    {
      title: "React Component",
      language: "jsx",
      code: `const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Hello World!</h1>
    </motion.div>
  );
};`,
      description: "Modern React component with hooks and Framer Motion animations"
    },
    {
      title: "Node.js API",
      language: "javascript",
      code: `const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
      description: "RESTful API with Express.js and MongoDB integration"
    },
    {
      title: "CSS Animation",
      language: "css",
      code: `.hero-title {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.floating-card {
  animation: float 6s ease-in-out infinite;
  transform-style: preserve-3d;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotateX(0deg); }
  50% { transform: translateY(-20px) rotateX(5deg); }
}`,
      description: "Advanced CSS animations with gradients and 3D transforms"
    },
    {
      title: "Python Script",
      language: "python",
      code: `import requests
import json
from datetime import datetime

class APIClient:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()
    
    def fetch_data(self, endpoint):
        """Fetch data from API endpoint"""
        url = f"{self.base_url}/{endpoint}"
        headers = {
            'Content-Type': 'application/json',
            'User-Agent': 'Portfolio-Client/1.0'
        }
        
        try:
            response = self.session.get(url, headers=headers)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            print(f"Error fetching data: {e}")
            return None

# Usage
client = APIClient('https://api.example.com')
data = client.fetch_data('projects')
print(f"Fetched {len(data)} projects at {datetime.now()}")`,
      description: "Python API client with error handling and logging"
    }
  ];

  const copyToClipboard = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const runCode = () => {
    // In a real app, this would open a code editor or playground
    console.log('Running code snippet:', codeSnippets[activeSnippet].title);
  };

  return (
    <section id="code-showcase" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RevealAnimation>
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Code <span className="text-blue-500">Showcase</span>
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore my coding style and development patterns
            </p>
          </div>
        </RevealAnimation>

        {/* Tab Navigation */}
        <RevealAnimation delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {codeSnippets.map((snippet, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSnippet(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeSnippet === index
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {snippet.title}
              </motion.button>
            ))}
          </div>
        </RevealAnimation>

        {/* Code Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Editor */}
          <RevealAnimation delay={0.3}>
            <motion.div
              className={`rounded-2xl overflow-hidden border-2 ${
                theme === 'dark'
                  ? 'bg-gray-900 border-gray-700'
                  : 'bg-gray-100 border-gray-300'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Editor Header */}
              <div className={`flex items-center justify-between px-4 py-3 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-500" />
                  <span className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {codeSnippets[activeSnippet].language}
                  </span>
                </div>
                <div className="flex gap-2">
                  <MagneticButton
                    onClick={() => copyToClipboard(codeSnippets[activeSnippet].code)}
                    className={`p-2 rounded-lg transition-all ${
                      theme === 'dark'
                        ? 'hover:bg-gray-700 text-gray-400'
                        : 'hover:bg-gray-300 text-gray-600'
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {copiedCode ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Check className="w-4 h-4 text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                        >
                          <Copy className="w-4 h-4" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </MagneticButton>
                  <MagneticButton
                    onClick={runCode}
                    className={`p-2 rounded-lg transition-all ${
                      theme === 'dark'
                        ? 'hover:bg-gray-700 text-gray-400'
                        : 'hover:bg-gray-300 text-gray-600'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-4 overflow-x-auto">
                <pre className={`text-sm font-mono leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <code>{codeSnippets[activeSnippet].code}</code>
                </pre>
              </div>
            </motion.div>
          </RevealAnimation>

          {/* Description Panel */}
          <RevealAnimation delay={0.4}>
            <motion.div
              className={`rounded-2xl p-8 border-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-blue-500" />
                <h3 className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {codeSnippets[activeSnippet].title}
                </h3>
              </div>
              
              <p className={`text-lg mb-6 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {codeSnippets[activeSnippet].description}
              </p>

              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <h4 className={`font-semibold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Features:
                  </h4>
                  <ul className={`space-y-2 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Modern ES6+ syntax and best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Error handling and edge cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Performance optimized code</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Clean, readable structure</span>
                    </li>
                  </ul>
                </div>

                <MagneticButton
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                    theme === 'dark'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </div>
                </MagneticButton>
              </div>
            </motion.div>
          </RevealAnimation>
        </div>

        {/* Additional Code Snippets */}
        <RevealAnimation delay={0.5}>
          <div className="mt-16">
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              More Code Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Database Schema", icon: "🗄️", desc: "MongoDB models and relationships" },
                { title: "API Testing", icon: "🧪", desc: "Jest and Supertest setup" },
                { title: "Deployment", icon: "🚀", desc: "Docker and CI/CD pipeline" },
                { title: "Authentication", icon: "🔐", desc: "JWT and OAuth implementation" },
                { title: "Performance", icon: "⚡", desc: "Optimization techniques" },
                { title: "Security", icon: "🛡️", desc: "Best security practices" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                      : 'bg-white border-gray-200 hover:border-blue-400 shadow-lg'
                  }`}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className={`font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CodeShowcase;
