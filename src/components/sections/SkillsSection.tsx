import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
const SolanaSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#000" />
    <path d="M32 15.5H10.8l3.7-3.7c.2-.2.5-.3.8-.3h16.7c.6 0 .9.7.5 1l0 0 0 0z" fill="url(#solana1)" />
    <path d="M32 24.5H10.8l3.7 3.7c.2.2.5.3.8.3h16.7c.6 0 .9-.7.5-1l0 0 0 0z" fill="url(#solana2)" />
    <path d="M32 20H8c-.6 0-.9.7-.5 1l3.7 3.7c.2.2.5.3.8.3H32c.6 0 .9-.7.5-1l0 0 0 0z" fill="url(#solana3)" />
    <defs>
      <linearGradient id="solana1" x1="8" y1="14" x2="32" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="solana2" x1="8" y1="26" x2="32" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="solana3" x1="8" y1="22" x2="32" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>;
const RustSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" fill="#CE422B" />
    <path d="M20 8l1.5 4h4.2l-3.4 2.5 1.3 4.1L20 16.1l-3.6 2.5 1.3-4.1L14.3 12h4.2L20 8zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#fff" />
    <circle cx="30" cy="20" r="2" fill="#fff" />
    <circle cx="10" cy="20" r="2" fill="#fff" />
    <circle cx="20" cy="6" r="2" fill="#fff" />
    <circle cx="20" cy="34" r="2" fill="#fff" />
    <circle cx="28" cy="12" r="1.5" fill="#fff" />
    <circle cx="12" cy="28" r="1.5" fill="#fff" />
    <circle cx="28" cy="28" r="1.5" fill="#fff" />
    <circle cx="12" cy="12" r="1.5" fill="#fff" />
  </svg>;
const ReactSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#282C34" />
    <circle cx="20" cy="20" r="3" fill="#61DAFB" />
    <ellipse cx="20" cy="20" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
    <ellipse cx="20" cy="20" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)" />
    <ellipse cx="20" cy="20" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(-60 20 20)" />
  </svg>;
const TypeScriptSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="4" fill="#3178C6" />
    <path d="M15 14h10v3h-3.5v11h-3v-11H15v-3z" fill="white" />
    <path d="M25 18v1.5h1.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5h-1.5c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4H25v1z" fill="white" />
  </svg>;
const AnchorSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#512DA8" />
    <path d="M20 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="white" />
    <path d="M20 16v16m-8-6c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="2" fill="none" />
    <path d="M12 28h16" stroke="white" strokeWidth="2" />
  </svg>;
const Web3SVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#F16822" />
    <path d="M20 6C12.3 6 6 12.3 6 20s6.3 14 14 14 14-6.3 14-14S27.7 6 20 6zm0 26c-6.6 0-12-5.4-12-12S13.4 8 20 8s12 5.4 12 12-5.4 12-12 12z" fill="white" />
    <path d="M8 20h24M20 8c-2.5 3.3-2.5 9.7 0 24M20 8c2.5 3.3 2.5 9.7 0 24" stroke="white" strokeWidth="1.5" />
  </svg>;
const NextJSSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#000" />
    <path d="M26 10L16 30h2.5l8-16L28 18v12h2V16l-2-4-2-2z" fill="white" />
    <path d="M12 30h4L28 10h-4L12 30z" fill="white" />
  </svg>;
const NodeJSSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2l16 9v18l-16 9L4 29V11l16-9z" fill="#8CC84B" />
    <path d="M20 2l16 9v18l-16 9V2z" fill="#689F63" />
    <path d="M25 15v10l-5-3v-4l5-3zm-10 0l5 3v4l-5 3V15z" fill="white" />
  </svg>;
const PostgreSQLSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#336791" />
    <path d="M16 12c-2 0-4 1-4 3v6c0 4 2 7 4 7s4-3 4-7v-6c0-2-2-3-4-3zm8 0c-2 0-4 1-4 3v10c0 2 2 3 4 3s4-1 4-3V15c0-2-2-3-4-3z" fill="white" />
    <ellipse cx="20" cy="30" rx="10" ry="3" fill="white" opacity="0.3" />
  </svg>;
const TailwindSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#06B6D4" />
    <path d="M20 12c-4 0-6.7 2-8 6 2-2 4.3-2.7 7-2 1.5.4 2.6 1.5 3.8 2.8C24.4 20.4 26.8 22 32 22c4 0 6.7-2 8-6-2 2-4.3 2.7-7 2-1.5-.4-2.6-1.5-3.8-2.8C27.6 13.6 25.2 12 20 12zM12 22c-4 0-6.7 2-8 6 2-2 4.3-2.7 7-2 1.5.4 2.6 1.5 3.8 2.8C16.4 30.4 18.8 32 24 32c4 0 6.7-2 8-6-2 2-4.3 2.7-7 2-1.5-.4-2.6-1.5-3.8-2.8C19.6 23.6 17.2 22 12 22z" fill="white" />
  </svg>;
const JavaScriptSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="4" fill="#F7DF1E" />
    <path d="M12 28v-6h2v6c0 2 1 3 3 3s3-1 3-3v-6h2v6c0 3-2 5-5 5s-5-2-5-5zm16-6h2v4c0 2-1 4-3 4h-2c-2 0-3-2-3-4h2c0 1 0 2 1 2h2c1 0 1-1 1-2v-4z" fill="#000" />
  </svg>;
const PythonSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#306998" />
    <path d="M20 6c-3 0-5 2-5 5v3h5v1h-7c-2 0-3 1-3 3v4c0 2 1 3 3 3h2v-2c0-2 2-4 4-4h6c2 0 3-1 3-3v-5c0-3-2-5-5-5h-3zm-1 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#FFD43B" />
    <path d="M20 34c3 0 5-2 5-5v-3h-5v-1h7c2 0 3-1 3-3v-4c0-2-1-3-3-3h-2v2c0 2-2 4-4 4h-6c-2 0-3 1-3 3v5c0 3 2 5 5 5h3zm1-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" />
  </svg>;
const JavaSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#ED8B00" />
    <path d="M28 26c0 2-4 4-8 4s-8-2-8-4c0-1 2-2 4-2h8c2 0 4 1 4 2zm-2-4c0 1-3 2-6 2s-6-1-6-2c0-1 3-2 6-2s6 1 6 2zm-2-4c0 1-2 2-4 2s-4-1-4-2 2-2 4-2 4 1 4 2z" fill="white" />
    <path d="M15 10c0-1 1-2 2-2h6c1 0 2 1 2 2v2h-2v-1h-4v1h-2v-2h-2z" fill="white" />
    <path d="M18 32c-1 0-2-1-2-2v-2h2v2h4v-2h2v2c0 1-1 2-2 2h-4z" fill="white" />
  </svg>;
const GoSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#00ADD8" />
    <path d="M8 16h6l-1 2H9l1 2h4l-1 2H7l2-6zm12 0h8l-1 2h-6l1 2h5l-1 2h-8l2-6z" fill="white" />
    <path d="M24 20c0-2 2-4 4-4h4c2 0 4 2 4 4s-2 4-4 4h-4c-2 0-4-2-4-4zm6 0c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z" fill="white" />
  </svg>;
const PhantomSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="url(#phantomGradient)" />
    <path d="M20 8C13 8 8 13.5 8 20v6c0 3 2 6 6 6h12c3 0 6-3 6-6v-6c0-6.5-5-12-12-12z" fill="white" />
    <ellipse cx="16" cy="18" rx="1.5" ry="2" fill="#AB9FF2" />
    <ellipse cx="24" cy="18" rx="1.5" ry="2" fill="#AB9FF2" />
    <path d="M14 25c3 2 9 2 12 0" stroke="#AB9FF2" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="phantomGradient" x1="0" y1="0" x2="40" y2="40">
        <stop stopColor="#534BB1" />
        <stop offset="1" stopColor="#AB9FF2" />
      </linearGradient>
    </defs>
  </svg>;
const JupiterSVG = () => <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="url(#jupiterGradient)" />
    <path d="M20 8l8 12H12l8-12z" fill="white" />
    <path d="M20 32l-8-12h16l-8 12z" fill="white" fillOpacity="0.8" />
    <circle cx="20" cy="20" r="4" fill="white" />
    <defs>
      <radialGradient id="jupiterGradient">
        <stop stopColor="#FBA43A" />
        <stop offset="1" stopColor="#FF6B35" />
      </radialGradient>
    </defs>
  </svg>;
const techStack = [{
  name: 'Solana',
  icon: <SolanaSVG />,
  color: 'text-primary'
}, {
  name: 'Rust',
  icon: <RustSVG />,
  color: 'text-secondary'
}, {
  name: 'React',
  icon: <ReactSVG />,
  color: 'text-blue-400'
}, {
  name: 'TypeScript',
  icon: <TypeScriptSVG />,
  color: 'text-blue-500'
}, {
  name: 'Anchor',
  icon: <AnchorSVG />,
  color: 'text-primary'
}, {
  name: 'Web3.js',
  icon: <Web3SVG />,
  color: 'text-green-400'
}, {
  name: 'Next.js',
  icon: <NextJSSVG />,
  color: 'text-gray-300'
}, {
  name: 'Node.js',
  icon: <NodeJSSVG />,
  color: 'text-green-500'
}, {
  name: 'PostgreSQL',
  icon: <PostgreSQLSVG />,
  color: 'text-blue-600'
}, {
  name: 'Tailwind',
  icon: <TailwindSVG />,
  color: 'text-cyan-400'
}, {
  name: 'JavaScript',
  icon: <JavaScriptSVG />,
  color: 'text-yellow-400'
}, {
  name: 'Python',
  icon: <PythonSVG />,
  color: 'text-yellow-500'
}, {
  name: 'Java',
  icon: <JavaSVG />,
  color: 'text-orange-600'
}, {
  name: 'Go',
  icon: <GoSVG />,
  color: 'text-cyan-500'
}, {
  name: 'Phantom',
  icon: <PhantomSVG />,
  color: 'text-purple-400'
}, {
  name: 'Jupiter',
  icon: <JupiterSVG />,
  color: 'text-orange-400'
}];
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