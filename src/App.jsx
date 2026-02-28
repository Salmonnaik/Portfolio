import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import ThemeSelector from './components/ThemeSelector';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Services from './components/Services';
import CodeShowcase from './components/CodeShowcase';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <ParticleBackground />
          <CustomCursor />
          <div className="noise-overlay" />
          <ThemeSelector />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Services />
            <CodeShowcase />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
