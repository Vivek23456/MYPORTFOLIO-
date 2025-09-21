import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, Math.random() * 0.5 + 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--accent)) 0%, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: [
            "20% 50%, 80% 20%, 40% 80%",
            "60% 30%, 40% 70%, 80% 40%",
            "20% 50%, 80% 20%, 40% 80%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Particle rain */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, window.innerHeight + 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};