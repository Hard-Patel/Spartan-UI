export interface ComponentData {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  dependencies?: string[];
  featured?: boolean;
}

export const componentCategories = [
  "All",
  "Buttons",
  "Cards",
  "Text Effects",
  "Animations",
  "Loaders",
] as const;

export const componentsData: ComponentData[] = [
  {
    id: "animated-button",
    name: "Animated Button",
    description: "A sleek button with hover animations and gradient background",
    category: "Buttons",
    featured: true,
    code: `import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton = ({ 
  children, 
  variant = "primary",
  size = "md",
  className,
  onClick 
}: AnimatedButtonProps) => {
  const variants = {
    primary: "bg-gradient-brand text-primary-foreground shadow-glow",
    secondary: "bg-secondary text-secondary-foreground border border-border",
    outline: "border-gradient bg-transparent text-foreground hover:bg-primary/10"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={cn(
        "rounded-xl font-medium transition-all duration-300 relative overflow-hidden",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "var(--glow-shadow)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};`,
    dependencies: ["framer-motion"],
  },
  {
    id: "marquee",
    name: "Infinite Marquee",
    description:
      "Smooth infinite scrolling text marquee with customizable speed",
    category: "Animations",
    featured: true,
    code: `import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
}

export const Marquee = ({ 
  children, 
  speed = 50,
  direction = "left",
  className,
  pauseOnHover = true
}: MarqueeProps) => {
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        {children}
      </motion.div>
    </div>
  );
};`,
    dependencies: ["framer-motion"],
  },
  {
    id: "highlighted-text",
    name: "Highlighted Text",
    description: "Text with animated highlight background effect",
    category: "Text Effects",
    featured: true,
    code: `import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlightedTextProps {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  delay?: number;
}

export const HighlightedText = ({ 
  children, 
  className,
  highlightColor = "hsl(var(--primary))",
  delay = 0
}: HighlightedTextProps) => {
  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        className="absolute inset-0 -z-10 rounded-md"
        style={{ backgroundColor: highlightColor + "/20" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration: 0.6, 
          delay,
          ease: "easeOut"
        }}
        transformOrigin="left"
      />
      <span className="relative z-10 px-1">{children}</span>
    </span>
  );
};`,
    dependencies: ["framer-motion"],
  },
  {
    id: "interactive-card",
    name: "Interactive Card",
    description: "Card with tilt effect and animated border on hover",
    category: "Cards",
    featured: true,
    code: `import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export const InteractiveCard = ({ children, className }: InteractiveCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn(
        "component-card p-6 cursor-pointer",
        className
      )}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="relative z-10"
        style={{ transform: "translateZ(50px)" }}
      >
        {children}
      </motion.div>
      
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-xl border-2 border-primary/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};`,
    dependencies: ["framer-motion"],
  },
];

export const getFeaturedComponents = () =>
  componentsData.filter((comp) => comp.featured);
export const getAllComponents = () => componentsData;

export const getComponentsByCategory = (category: string) =>
  category === "All"
    ? componentsData
    : componentsData.filter((comp) => comp.category === category);
export const getComponentById = (id: string) =>
  componentsData.find((comp) => comp.id === id);
