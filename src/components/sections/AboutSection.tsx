import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Code, Zap, Globe, Users } from 'lucide-react';
import { ThreeBackground } from '../ui/ThreeBackground';

const highlights = [
  {
    icon: Code,
    title: 'Smart Contract Expert',
    description: 'Specialized in building secure and efficient smart contracts on Solana using Rust and Anchor framework.'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Focus on high-performance applications with minimal transaction costs and maximum throughput.'
  },
  {
    icon: Globe,
    title: 'Full-Stack Web3',
    description: 'End-to-end development from smart contracts to beautiful frontend interfaces.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Active contributor to open-source projects and Solana ecosystem development.'
  }
];

export const AboutSection = () => {
  return (
    <section className="py-20 relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40 backdrop-blur-[1px]" />

      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge variant="cyber" className="mb-6">
                About Me
              </Badge>

              <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-slate-50 md:text-5xl">
                Building Tomorrow's
                <br />
                <span className="text-primary glow-text">Decentralized World</span>
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground mb-8">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  I thrive on exploring new technologies. In my first year, I focused on Java, data structures and algorithms, and Android development, even experimenting with Kali Linux for practical projects. Over time, I discovered the incredible potential of decentralized systems, and now I’m fully immersed in building innovative solutions on the Solana ecosystem.

                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Specializing in <span className="text-secondary font-semibold">Rust</span> and 
                  <span className="text-primary font-semibold"> Solana</span>, I've built 
                  everything from DeFi protocols to NFT marketplaces, always focusing on 
                  performance, security, and user experience.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                When I’m not coding, I’m usually tinkering with open-source projects, sharing what I learn through articles, or diving into the latest innovations in blockchain technology.

                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                {/* Contact Button */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05, rotateX: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-60 group-hover:opacity-90 transition duration-500"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="relative px-6 py-3 bg-background rounded-lg text-lg font-semibold leading-none"
                  >
                    <motion.span 
                      className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      Let's Work Together
                    </motion.span>
                  </button>
                </motion.div>

                {/* Download Resume Button */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05, rotateX: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-lg opacity-50 group-hover:opacity-80 blur-sm transition duration-500"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <a
                    href="/Vivek_Resume.pdf.pdf"  // Place your resume in public folder
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-6 py-3 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg text-lg font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-center"
                  >
                    <span className="relative z-10">Download Resume</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: 90 }} 
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }} 
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 60 }} 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div 
                key={highlight.title} 
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -45 }} 
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} 
                viewport={{ once: true }} 
                className="flex gap-4 p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md hover:bg-card/60 hover:scale-[1.05] transition-all duration-500 group"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  delay: 0.1 * index + 0.4,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  y: { duration: 3 + index, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                    whileHover={{ rotate: 720, scale: 1.2, borderRadius: "50%" }}
                    animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
