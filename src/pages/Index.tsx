import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { HeroSection } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import { getFeaturedComponents } from "@/data/components";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredComponents = getFeaturedComponents();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Components
            </h2>
            <p className="text-md lg:text-xl text-muted-foreground max-w-2xl mx-auto">
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
            <a
              target="_blank"
              className="text-primary font-medium"
              href="https://github.com/Hard-patel"
            >
              Hard Patel
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
