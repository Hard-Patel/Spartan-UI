import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { InteractiveGrid } from "../common/InteractiveGrid";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  return (
    <section
      className="relative flex items-center overflow-hidden h-[90vh]"
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY - 72 })}
    >
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              Beautiful{" "}
              <span className="text-gradient animate-glow">
                React Components
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of modern, animated, and responsive React
              components built with Tailwind CSS and Framer Motion. Copy, paste,
              and customize to your heart's content.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300"
            >
              <Link to="/components">Browse Components</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated glowing grid */}
      <InteractiveGrid />
    </section>
  );
};

export { HeroSection };
