import { useMotionValue, useVelocity } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  pauseOnHover?: boolean;
  velocityFactor?: number; // how much scroll velocity affects speed
  effectDuration?: number; // how long effect should last (ms)
}

export const MarqueeComponent = ({
  children,
  speed = 50,
  direction = "left",
  className,
  pauseOnHover = true,
  velocityFactor = 0.00002,
  effectDuration = 2500,
}: MarqueeProps) => {
  const scrollY = useMotionValue(0);
  const velocity = useVelocity(scrollY);

  const [dynamicSpeed, setDynamicSpeed] = useState(speed);
  const [dynamicDirection, setDynamicDirection] = useState<"left" | "right">(
    direction
  );

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    const unsubscribe = velocity.on("change", (v) => {
      if (Math.abs(v) < 50) return; // ignore tiny scrolls

      // Clear any previous timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Adjust speed based on velocity
      if (v > 0) {
        // scrolling down → slow down marquee
        setDynamicSpeed(
          Math.max(10, speed - Math.min(speed, v * velocityFactor))
        );
        setDynamicDirection(direction); // keep same
      } else {
        // scrolling up → speed up marquee
        setDynamicSpeed(speed + Math.min(200, Math.abs(v) * velocityFactor));
        setDynamicDirection(direction); // same direction, only faster
      }

      // Reset back after effectDuration
      timeoutRef.current = setTimeout(() => {
        setDynamicSpeed(speed);
        setDynamicDirection(direction);
      }, effectDuration);
    });

    return () => {
      unsubscribe();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [velocity, speed, direction, velocityFactor, effectDuration]);

  return (
    <Marquee
      speed={dynamicSpeed}
      direction={dynamicDirection}
      className={className}
      pauseOnHover={pauseOnHover}
    >
      {children}
    </Marquee>
  );
};
