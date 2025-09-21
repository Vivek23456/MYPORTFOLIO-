import { motion } from 'framer-motion';
import { Button } from './button';
import { ReactNode } from 'react';

interface CreativeButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'cyber' | 'neon' | 'liquid' | 'holographic';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit';
  asChild?: boolean;
}

export const CreativeButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href,
  type,
  asChild 
}: CreativeButtonProps) => {
  
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return `
          relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent
          text-primary-foreground border-0 hover:shadow-[0_0_40px_hsl(var(--primary))]
          before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
          before:via-white/20 before:to-transparent before:translate-x-[-100%] 
          hover:before:translate-x-[100%] before:transition-transform before:duration-700
        `;
      
      case 'cyber':
        return `
          relative bg-transparent border-2 border-primary/50 text-primary
          hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]
          hover:bg-primary/10 transition-all duration-300
          after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent 
          after:via-primary/20 after:to-transparent after:translate-y-[100%] 
          hover:after:translate-y-[-100%] after:transition-transform after:duration-500
        `;
        
      case 'neon':
        return `
          relative bg-black/50 border-2 border-secondary text-secondary
          hover:text-secondary-foreground hover:bg-secondary/20
          hover:shadow-[0_0_30px_hsl(var(--secondary)),inset_0_0_30px_hsl(var(--secondary)/0.2)]
          transition-all duration-300 backdrop-blur-sm
          before:absolute before:inset-[-2px] before:bg-gradient-to-r 
          before:from-secondary before:via-accent before:to-secondary before:rounded-inherit 
          before:z-[-1] before:blur-sm before:opacity-0 hover:before:opacity-100 
          before:transition-opacity before:duration-500
        `;
        
      case 'liquid':
        return `
          relative bg-gradient-to-br from-accent via-primary to-secondary text-accent-foreground
          hover:shadow-[0_0_25px_hsl(var(--accent))] transition-all duration-500
          hover:scale-110 border-0 rounded-full
        `;
        
      case 'holographic':
        return `
          relative bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white
          hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-300
          before:absolute before:inset-0 before:bg-gradient-to-r 
          before:from-blue-500 before:via-purple-500 before:to-pink-500 
          before:opacity-0 hover:before:opacity-100 before:transition-opacity 
          before:duration-500 before:rounded-inherit
        `;
        
      case 'ghost':
        return `
          relative bg-transparent hover:bg-card/50 text-muted-foreground 
          hover:text-foreground border border-border/50 hover:border-primary/50
          transition-all duration-300 backdrop-blur-sm
        `;
        
      default:
        return '';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  const MotionButton = motion(Button);

  return (
    <motion.div
      className="relative inline-block"
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {/* Floating particles effect */}
      {variant === 'primary' && (
        <>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
              style={{
                left: `${20 + i * 10}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </>
      )}

      <MotionButton
        className={`
          ${getVariantStyles()} 
          ${getSizeStyles()} 
          ${className}
          font-semibold tracking-wide
        `}
        onClick={onClick}
        type={type}
        asChild={asChild}
        animate={{
          backgroundPosition: variant === 'holographic' ? ['0% 50%', '100% 50%', '0% 50%'] : undefined,
        }}
        transition={{
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <motion.span
          className="relative z-10 flex items-center justify-center gap-2"
          animate={{
            textShadow: variant === 'neon' ? [
              '0 0 10px currentColor',
              '0 0 20px currentColor',
              '0 0 10px currentColor'
            ] : undefined,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {children}
            </a>
          ) : (
            children
          )}
        </motion.span>
      </MotionButton>
    </motion.div>
  );
};