import { motion } from "motion/react";
import { GlassCard } from "../showcase/GlassCard";

const GlassCardPreview = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Moving gradient ball */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-60"
        animate={{
          x: [-180, -40, 60, -40, 120, 180, 0, -180],
          y: [0, -10, 10, 0, -10, 10, 0, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <GlassCard className="max-w-sm">
        <h2 className="text-xl font-semibold">Glassmorphic Card</h2>
        <p className="mt-2">
          This is a demo of a beautiful frosted glass card with Tailwind +
          Motion.
        </p>
      </GlassCard>
    </div>
  );
};

export default GlassCardPreview;
