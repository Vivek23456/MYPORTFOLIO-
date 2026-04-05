import { motion } from 'framer-motion';
import {
  SiGo,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRust,
  SiSolana,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from 'react-icons/si';
import { Badge } from '../ui/badge';
import { AnchorIcon, JupiterIcon, PhantomIcon } from './techStackFallbackIcons';

const ic = 'h-10 w-10 shrink-0';

const techStack = [
  { name: 'Solana', icon: <SiSolana className={`${ic} text-[#9945FF]`} />, color: 'text-primary' },
  { name: 'Rust', icon: <SiRust className={`${ic} text-[#CE422B]`} />, color: 'text-secondary' },
  { name: 'React', icon: <SiReact className={`${ic} text-[#61DAFB]`} />, color: 'text-blue-400' },
  { name: 'TypeScript', icon: <SiTypescript className={`${ic} text-[#3178C6]`} />, color: 'text-blue-500' },
  { name: 'Anchor', icon: <AnchorIcon />, color: 'text-primary' },
  { name: 'Web3.js', icon: <SiWeb3Dotjs className={`${ic} text-[#F16822]`} />, color: 'text-green-400' },
  { name: 'Next.js', icon: <SiNextdotjs className={`${ic} text-zinc-100`} />, color: 'text-gray-300' },
  { name: 'Node.js', icon: <SiNodedotjs className={`${ic} text-[#5FA04E]`} />, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: <SiPostgresql className={`${ic} text-[#336791]`} />, color: 'text-blue-600' },
  { name: 'Tailwind', icon: <SiTailwindcss className={`${ic} text-[#06B6D4]`} />, color: 'text-cyan-400' },
  { name: 'JavaScript', icon: <SiJavascript className={`${ic} text-[#F7DF1E]`} />, color: 'text-yellow-400' },
  { name: 'Python', icon: <SiPython className={`${ic} text-[#3776AB]`} />, color: 'text-yellow-500' },
  { name: 'Java', icon: <SiOpenjdk className={`${ic} text-[#ED8B00]`} />, color: 'text-orange-600' },
  { name: 'Go', icon: <SiGo className={`${ic} text-[#00ADD8]`} />, color: 'text-cyan-500' },
  { name: 'Phantom', icon: <PhantomIcon />, color: 'text-purple-400' },
  { name: 'Jupiter', icon: <JupiterIcon />, color: 'text-orange-400' },
];
const skills = [{
  category: 'Blockchain',
  items: ['Solana', 'Anchor Framework', 'Smart Contracts', 'DeFi Protocols', 'SPL Tokens', 'Metaplex'],
  color: 'text-primary'
}, {
  category: 'Languages',
  items: ['Rust', 'TypeScript', 'JavaScript', 'Python', 'Java', 'Go'],
  color: 'text-secondary'
}, {
  category: 'Web3 Tools',
  items: ['Web3.js', 'Solana CLI', 'Phantom Wallet', 'Serum DEX', 'Jupiter', 'Raydium'],
  color: 'text-accent'
}, {
  category: 'Development',
  items: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'tailwindcss', 'Git'],
  color: 'text-cyan-400'
}];
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
export const SkillsSection = () => {
  return <section className="py-20 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-gray-50 md:text-6xl">
            Tech Arsenal
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-zinc-50">
            Cutting-edge technologies and frameworks I use to build the decentralized future
          </p>
        </motion.div>

        {/* Scrolling Tech Stack */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="mb-16 overflow-hidden">
          <div className="relative">
            <div className="flex animate-scroll">
              {[...techStack, ...techStack].map((tech, index) => <motion.div key={`${tech.name}-${index}`} animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 3 + index % 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.3
            }} whileHover={{
              scale: 1.15,
              rotate: 10,
              y: -15
            }} className="flex-shrink-0 mx-4 flex flex-col items-center p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group min-w-[120px]">
                  <motion.div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center" animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.8,
                ease: "easeInOut"
              }} whileHover={{
                scale: 1.3,
                rotate: 720
              }}>
                    {typeof tech.icon === 'string' ? <span className="text-4xl">{tech.icon}</span> : tech.icon}
                  </motion.div>
                  <span className={`text-sm font-semibold ${tech.color} group-hover:glow-text transition-all duration-300`}>
                    {tech.name}
                  </span>
                </motion.div>)}
            </div>
          </div>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map(skillGroup => <motion.div key={skillGroup.category} variants={item} className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-cyber transition-all duration-300">
              <h3 className={`text-2xl font-semibold mb-4 ${skillGroup.color} glow-text`}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(skill => (
                  <Badge key={skill} variant="cyber" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>)}
        </motion.div>

        {/* Featured Skills Highlight */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.5,
        duration: 0.6
      }} viewport={{
        once: true
      }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-lg font-semibold">
              Specialized in <span className="text-primary">Solana</span> & <span className="text-secondary">Rust</span> Development
            </span>
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>;
};