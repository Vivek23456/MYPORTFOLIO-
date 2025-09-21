import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { AnimatedBackground } from './ui/AnimatedBackground';
import { motion } from 'framer-motion';

export const Portfolio = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 p-6"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between p-4 rounded-2xl border border-border/30 bg-card/80 backdrop-blur-md">
            <div className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Portfolio
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors scroll-smooth">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-secondary transition-colors scroll-smooth">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors scroll-smooth">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors scroll-smooth">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 border-t border-border/30 bg-card/30 backdrop-blur-sm"
      >
        <div className="container px-4 text-center">
          <div className="mb-6">
            <div className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-muted-foreground">
              Building the decentralized future, one smart contract at a time.
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Email
            </a>
          </div>
          
          <div className="pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © 2024 Portfolio. Built with React, Three.js & Solana-inspired design.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};