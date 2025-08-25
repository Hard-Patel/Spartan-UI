import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { Button } from "@/components/ui/button";
import { getFeaturedComponents } from "@/data/components";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredComponents = getFeaturedComponents();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden h-[90vh]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Beautiful{" "}
                <span className="text-gradient animate-glow">
                  React Components
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Components</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked components that showcase the power and beauty of modern
              web interfaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredComponents.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <ComponentPreview component={component} showTabs={false} />
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors cursor-pointer">
                    {component.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {component.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gradient"
            >
              <Link to="/components">View All Components</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Built with React, Tailwind CSS, Framer Motion and ❤️ by{" "}
            <a target="_blank" className="text-primary font-medium" href="https://github.com/Hard-patel">Hard Patel</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
