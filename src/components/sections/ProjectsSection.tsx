import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'NFT Marketplace',
    description: 'Full-stack NFT marketplace with minting, trading, and auction features. Built with Metaplex and custom smart contracts.',
    tech: ['Metaplex', 'Rust', 'Next.js', 'Solana Web3.js'],
    category: 'NFT',
    status: 'In Development',
    links: {
      demo: 'https://nft-rental-market.vercel.app',
      github: 'https://github.com/Vivek23456/NFT-RENTAL-MARKETPLACE'
    }
  },
  {
    title: 'Solana Lottery',
    description: 'Decentralized lottery application on Solana using Anchor and Rust. Users can buy tickets with SOL, and a random winner is chosen securely on-chain.',
    tech: ['Solana', 'Rust', 'Anchor', 'React', 'TypeScript'],
    category: 'DeFi',
    status: 'Live',
    links: {
      demo: 'solana-lottery-three.vercel.app', // replace with your actual deployed demo
      github: 'https://github.com/Vivek23456/SOLANA-LOTTERY'
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export const ProjectsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-slate-50 md:text-6xl">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative blockchain solutions and decentralized applications I've built
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-cyber transition-all duration-500 hover:scale-[1.05]"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold transition-colors text-gray-50 text-xl">{project.title}</h3>
                  <Badge variant="cyber" className="text-xs">{project.category}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-secondary animate-pulse-glow' : 'bg-accent animate-pulse'}`} />
                  <span className="text-xs text-muted-foreground">{project.status}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Live Demo */}
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 relative group w-full px-4 py-2 bg-background rounded text-sm font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-zinc-50">Live Demo</span>
                </a>

                {/* GitHub */}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 bg-card/80 backdrop-blur-sm border border-border/50 rounded flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Vivek23456"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline-cyber" size="lg" className="text-slate-50">
              View All Projects on GitHub
              <Github className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
