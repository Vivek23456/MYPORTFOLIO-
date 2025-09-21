import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      setTrail(prev => [
        ...prev.slice(-8), // Keep last 8 points
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for hover detection
    const hoverElements = document.querySelectorAll('button, a, [role="button"]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-1 h-1 bg-primary/60 rounded-full"
          style={{
            left: point.x - 2,
            top: point.y - 2,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ 
            scale: 0,
            opacity: 0,
          }}
          transition={{ 
            duration: 0.8,
            delay: index * 0.05,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="absolute"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="w-8 h-8 border-2 border-primary/50 rounded-full"
          animate={{
            rotate: [0, 360],
            borderColor: isHovering ? "hsl(var(--secondary))" : "hsl(var(--primary) / 0.5)",
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            borderColor: {
              duration: 0.2
            }
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          animate={{
            backgroundColor: isHovering ? "hsl(var(--secondary))" : "hsl(var(--primary))",
            scale: isHovering ? [1, 1.5, 1] : 1,
            boxShadow: isHovering 
              ? "0 0 20px hsl(var(--secondary)), 0 0 40px hsl(var(--secondary) / 0.5)"
              : "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.3)"
          }}
          transition={{
            scale: {
              duration: 0.6,
              repeat: isHovering ? Infinity : 0,
              ease: "easeInOut"
            },
            backgroundColor: {
              duration: 0.2
            },
            boxShadow: {
              duration: 0.2
            }
          }}
        />

        {/* Floating particles around cursor */}
        {isHovering && Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, Math.cos(i * (Math.PI / 2)) * 20, 0],
              y: [0, Math.sin(i * (Math.PI / 2)) * 20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 32,
          top: mousePosition.y - 32,
        }}
        animate={{
          scale: isHovering ? 1.2 : 0.8,
          opacity: isHovering ? 0.3 : 0.1,
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-xl" />
      </motion.div>
    </div>
  );
};