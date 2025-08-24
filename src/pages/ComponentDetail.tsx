import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Sidebar } from "@/components/common/Sidebar";
import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { Button } from "@/components/ui/button";
import { componentsData, getComponentById } from "@/data/components";
import { motion } from "motion/react";
import { Link, Navigate, useParams } from "react-router-dom";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const component = id ? getComponentById(id) : null;

  if (!component) {
    return <Navigate to="/components" replace />;
  }

  const currentIndex = componentsData.findIndex((c) => c.id === id);
  const prevComponent =
    currentIndex > 0 ? componentsData[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < componentsData.length - 1
      ? componentsData[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-2 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: "Components", href: "/components" },
                { label: "Animated Button" }, // no href → treated as current page
              ]}
            />

            {/* Component Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{component.name}</h1>
                  <p className="text-xl text-muted-foreground mb-4">
                    {component.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      {component.category}
                    </span>
                    {component.dependencies && (
                      <div className="flex gap-2">
                        {component.dependencies.map((dep) => (
                          <span
                            key={dep}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                          >
                            {dep}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Component Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <ComponentPreview component={component} />
            </motion.div>

            {/* Installation Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <div className="code-block">
                <p className="text-sm text-muted-foreground mb-3">
                  Copy and paste the component code into your project.
                </p>
                {component.dependencies &&
                  component.dependencies.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-medium mb-2">
                        Required dependencies:
                      </p>
                      <code className="block bg-muted/50 p-3 rounded-md text-sm">
                        npm install {component.dependencies.join(" ")}
                      </code>
                    </div>
                  )}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-border pt-8"
            >
              <div className="flex justify-between items-center">
                {prevComponent ? (
                  <Button asChild variant="outline">
                    <Link
                      to={`/components/${prevComponent.id}`}
                      className="flex items-center gap-2"
                    >
                      ← {prevComponent.name}
                    </Link>
                  </Button>
                ) : (
                  <div />
                )}

                <Button asChild variant="outline">
                  <Link to="/components">All Components</Link>
                </Button>

                {nextComponent ? (
                  <Button asChild variant="outline">
                    <Link
                      to={`/components/${nextComponent.id}`}
                      className="flex items-center gap-2"
                    >
                      {nextComponent.name} →
                    </Link>
                  </Button>
                ) : (
                  <div />
                )}
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
