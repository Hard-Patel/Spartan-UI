import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CSSSection } from "@/components/common/CSSSection";
import { PropsSection } from "@/components/common/PropsSection";
import { ComponentPreview } from "@/components/preview/ComponentPreview";
import { Button } from "@/components/ui/button";
import { componentsData, getComponentById } from "@/data/components";
import { getComponentCode } from "@/utils/common-functions";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const component = id ? getComponentById(id) : null;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
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
  const componentRawCode = getComponentCode(component.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto  py-4">
        <div className="flex gap-8">
          {/* Main Content */}
          <main id="component-details" className="flex-1">
            {/* Breadcrumb */}
            <Breadcrumb
              items={[
                { label: "Components", href: "/components" },
                { label: component.name }, // no href → treated as current page
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
                  <h1 className="text-2xl md:text-4xl font-bold mb-2">
                    {component.name}
                  </h1>
                  <p className="text-md md:text-xl text-muted-foreground mb-4">
                    {component.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">
                      {component.category}
                    </span>
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

            {/* CLI Instruction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 max-w-[88vw]"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">CLI Manual</h2>
              <div className="code-block">
                <p className="text-sm text-muted-foreground mb-3">
                  Use the CLI to bring the component in your project
                </p>
                {component.cli && (
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">CLI:</p>
                    <code className="relative block bg-muted/50 p-4 rounded-md text-sm">
                      npx shadcn@latest add {component.cli}
                      <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(
                              `npx shadcn@latest add ${component.cli}`
                            )
                          }
                          className="px-2 bg-background/80 hover:bg-background/80 backdrop-blur-sm"
                        >
                          <AnimatePresence mode="wait">
                            {copied ? (
                              <motion.span
                                key="copied"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="text-green-400"
                              >
                                <ClipboardCheck />
                              </motion.span>
                            ) : (
                              <motion.span
                                key="copy"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                              >
                                <Clipboard />
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </Button>
                      </div>
                    </code>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Installation Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 max-w-[88vw]"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Installation
              </h2>
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
                      <code className="relative block bg-muted/50 p-4 rounded-md text-sm">
                        npm install {component.dependencies.join(" ")}
                        <div className="absolute top-1/2 -translate-y-1/2 right-3 z-10">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() =>
                              copyToClipboard(
                                `npm install ${component.dependencies.join(
                                  " "
                                )}`
                              )
                            }
                            className="px-2 bg-background/80 hover:bg-background/80 backdrop-blur-sm"
                          >
                            <AnimatePresence mode="wait">
                              {copied ? (
                                <motion.span
                                  key="copied"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                  className="text-green-400"
                                >
                                  <ClipboardCheck />
                                </motion.span>
                              ) : (
                                <motion.span
                                  key="copy"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                >
                                  <Clipboard />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </Button>
                        </div>
                      </code>
                    </div>
                  )}
              </div>
            </motion.div>

            {/* Tailwind CSS Setup Instructions */}
            <CSSSection component={component} />

            {/* Props list section */}
            <PropsSection component={component} />

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-border pt-8"
            >
              <div className="flex justify-between items-center">
                {prevComponent ? (
                  <Button className="hidden md:block" asChild variant="outline">
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
