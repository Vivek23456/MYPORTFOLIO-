import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
export const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
      backgroundSize: '50px 50px'
    }} />

      {/* Main Content */}
      <div className="container relative z-10 px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Name */}
          <motion.h1 initial={{
          opacity: 0,
          scale: 0.9,
          rotateX: -90
        }} animate={{
          opacity: 1,
          scale: 1,
          rotateX: 0
        }} transition={{
          delay: 0.2,
          duration: 1.2,
          type: "spring",
          stiffness: 100
        }} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <motion.span animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }} transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }} className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text inline-block text-slate-50">
              VIVEK
            </motion.span>
            <br className="text-slate-50" />
            <motion.span animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            scale: [1, 1.05, 1]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text inline-block text-slate-50">
              ATKARI
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4
        }} className="text-xl font-light mb-8 max-w-2xl text-zinc-50 md:text-2xl">
            Blockchain Engineer & 
            <span className="text-primary font-medium"> Solana</span> Developer
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="flex flex-col sm:flex-row gap-4 mb-12">
            <motion.div whileHover={{
            scale: 1.1,
            rotateY: 10
          }} whileTap={{
            scale: 0.95
          }} className="relative group">
              <motion.div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }} />
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })} className="relative px-8 py-4 bg-background rounded-lg leading-none flex items-center text-lg font-semibold">
                <span className="relative z-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  View Projects
                </span>
                <motion.span className="ml-2 text-primary" animate={{
                x: [0, 5, 0],
                scale: [1, 1.2, 1]
              }} transition={{
                repeat: Infinity,
                duration: 1.5
              }}>
                  →
                </motion.span>
              </button>
            </motion.div>

            <motion.div whileHover={{
            scale: 1.1,
            rotateY: -10
          }} whileTap={{
            scale: 0.95
          }} className="relative group">
              <motion.div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-lg blur opacity-60 group-hover:opacity-90 transition duration-500" animate={{
              rotate: [360, 0],
              scale: [1, 1.05, 1]
            }} transition={{
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }} />
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="relative px-8 py-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg leading-none text-lg font-semibold text-foreground hover:text-primary transition-colors">
                <span className="relative z-10">Contact Me</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.8,
          type: "spring"
        }} className="flex gap-4">
            <motion.div className="relative group" whileHover={{
            scale: 1.2,
            rotateZ: 15
          }} whileTap={{
            scale: 0.9
          }}>
              <motion.div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" animate={{
              rotate: [0, 360]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }} />
              <motion.div className="relative w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300" animate={{
              boxShadow: ["0 0 0 0 hsla(var(--primary), 0)", "0 0 0 4px hsla(var(--primary), 0.1)", "0 0 0 0 hsla(var(--primary), 0)"]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0
            }}>
                <a href="https://github.com/Vivek23456" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="relative group" whileHover={{
            scale: 1.2,
            rotateZ: -15
          }} whileTap={{
            scale: 0.9
          }}>
              <motion.div className="absolute -inset-2 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" animate={{
              rotate: [360, 0]
            }} transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }} />
              <motion.div className="relative w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center text-muted-foreground hover:text-secondary hover:border-secondary/50 transition-all duration-300" animate={{
              boxShadow: ["0 0 0 0 hsla(var(--secondary), 0)", "0 0 0 4px hsla(var(--secondary), 0.1)", "0 0 0 0 hsla(var(--secondary), 0)"]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5
            }}>
                <a href="https://www.linkedin.com/in/vivek-atkari-33bba1215/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="relative group" whileHover={{
            scale: 1.2,
            rotateZ: 15
          }} whileTap={{
            scale: 0.9
          }}>
              <motion.div className="absolute -inset-2 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" animate={{
              rotate: [0, -360]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }} />
              <motion.div className="relative w-12 h-12 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300" animate={{
              boxShadow: ["0 0 0 0 hsla(var(--accent), 0)", "0 0 0 4px hsla(var(--accent), 0.1)", "0 0 0 0 hsla(var(--accent), 0)"]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1
            }}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vivekatkari910@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Animation Elements */}
        <motion.div className="absolute top-20 left-10" animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
          <div className="w-4 h-4 bg-primary/30 rounded-full blur-sm" />
        </motion.div>
        
        <motion.div className="absolute top-40 right-20" animate={{
        x: [0, 30, 0],
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}>
          <div className="w-6 h-6 bg-secondary/30 rounded-full blur-sm" />
        </motion.div>
        
        <motion.div className="absolute bottom-40 left-1/4" animate={{
        y: [0, -40, 0],
        x: [0, 20, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}>
          <div className="w-3 h-3 bg-accent/40 rounded-full blur-sm" />
        </motion.div>
      </div>
    </section>;
};