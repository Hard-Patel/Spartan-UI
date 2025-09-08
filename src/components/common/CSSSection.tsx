import { ComponentData } from "@/data/components";
import { motion } from "motion/react";

const CSSSection = ({ component }: { component: ComponentData }) => {
  if (!component.style) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mb-12 max-w-[88vw]"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4">Tailwind CSS</h2>
      <div className="code-block">
        <p className="text-sm text-muted-foreground mb-3">
          Ensure Tailwind CSS is properly configured in your project to use the
          component styling and add following to your style(CSS) file.
        </p>
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Tailwind CSS:</p>
          <code className="relative block bg-muted/50 p-4 rounded-md text-sm">
            {component.style}
          </code>
        </div>
      </div>
    </motion.div>
  );
};

export { CSSSection };
