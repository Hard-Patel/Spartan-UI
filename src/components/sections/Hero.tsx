import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { InteractiveGrid } from "../common/InteractiveGrid";
import { Button } from "../ui/button";
import { getFeaturedComponents } from "@/data/components";
import { ComponentPreview } from "../preview/ComponentPreview";

const dateNow = Date.now();
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  // Configuration
  const SCROLL_MULTIPLIER = 1.2; // How fast images move relative to scroll
  const PARALLAX_DURATION = 1800; // Pixels to scroll before hero starts moving
  const featuredComponents = getFeaturedComponents();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Generate random position within screen bounds
  const getRandomPosition = (
    index,
    componentWidth = 400,
    componentHeight = 150
  ) => {
    // Use index as seed for consistent positioning across renders
    const seed = index * 1000 + (dateNow % 1000);
    const random1 = (Math.sin(seed) * 10000) % 1;
    const random2 = (Math.cos(seed) * 10000) % 1;

    // Get viewport dimensions with fallbacks
    const viewportWidth =
      typeof window !== "undefined" ? window.innerWidth : 1200;
    const viewportHeight =
      typeof window !== "undefined" ? window.innerHeight : 800;

    // Calculate safe boundaries (leaving margin for component size)
    const maxLeft = Math.max(0, viewportWidth - componentWidth - 50); // 50px margin
    const maxTop = Math.max(0, viewportHeight - componentHeight - 50);

    return {
      left: Math.abs(random1) * maxLeft,
      top: Math.abs(random2) * maxTop,
      width: componentWidth,
      height: componentHeight,
    };
  };

  // Calculate transforms based on scroll position
  const getImageTransform = (index) => {
    const baseOffset = window.innerHeight + index * 250; // Stagger images more
    const translateY = baseOffset - scrollY * SCROLL_MULTIPLIER;
    const opacity =
      scrollY > index * 80 ? Math.max(0, 1 - (scrollY - index * 80) / 600) : 0;

    return {
      transform: `translateY(${translateY}px)`,
      opacity: scrollY > index * 60 ? Math.min(1, opacity + 0.4) : 0,
    };
  };

  // Calculate hero section position
  const getHeroTransform = () => {
    if (scrollY <= PARALLAX_DURATION) {
      return {
        transform: "translateY(0px)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      };
    } else {
      return {
        transform: `translateY(-${scrollY - PARALLAX_DURATION}px)`,
        position: "absolute",
        top: `${PARALLAX_DURATION}px`,
        left: 0,
        right: 0,
        zIndex: 10,
      };
    }
  };

  return (
    <>
      <div
        style={{ height: `${PARALLAX_DURATION + window.innerHeight * 0.9}px` }}
      />
      <section
        ref={heroRef}
        className="relative flex items-center overflow-hidden mt-[var(--header-height)] h-[90vh]"
        style={getHeroTransform()}
      >
        {/* Animated Images */}
        <div className="absolute inset-0 overflow-hidden z-5">
          {featuredComponents.map((component, index) => {
            const position = getRandomPosition(index);

            return (
              <div
                key={component.id}
                className="absolute transition-all duration-100 ease-out"
                style={{
                  ...getImageTransform(index),
                  left: `${position.left}px`,
                  width: `${position.width}px`,
                  height: `${position.height}px`,
                }}
              >
                <ComponentPreview component={component} isPreview />
              </div>
            );
          })}
        </div>

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
                components built with Tailwind CSS and Framer Motion. Copy,
                paste, and customize to your heart's content.
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
    </>
  );
};

export { HeroSection };
