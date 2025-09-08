import {
    ChevronDown,
    ChevronRight,
    Clipboard,
    ClipboardCheck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const PropsSection = ({ component }) => {
  const [expandedRows, setExpandedRows] = useState(new Set());
  const [copied, setCopied] = useState(false);

  // Use the passed component or fallback to example
  const componentData = component;

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const toggleRowExpansion = (propName) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(propName)) {
      newExpanded.delete(propName);
    } else {
      newExpanded.add(propName);
    }
    setExpandedRows(newExpanded);
  };

  const getTypeColor = (type) => {
    if (type.includes("boolean"))
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    if (type.includes("string"))
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    if (type.includes("number"))
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
    if (type.includes("function") || type.includes("=>"))
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
    if (type.includes("React.ReactNode"))
      return "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400";
    return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  };

  // Don't render if no props
  if (!componentData.props || componentData.props.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-12 max-w-[88vw]"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4">Props</h2>
      <div className="code-block">
        <p className="text-sm text-muted-foreground mb-4">
          Configure the {componentData.name} component with these available
          props.
        </p>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Default
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Description
                  </th>
                  <th className="w-12 px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {componentData.props.map((prop, index) => (
                  <React.Fragment key={prop.name}>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <code className="bg-muted px-2 py-1 rounded text-sm font-mono">
                            {prop.name}
                          </code>
                          {prop.required && (
                            <span className="inline-flex items-center px-1.5 py-0.5 bg-red-100 text-red-800 text-xs font-medium rounded dark:bg-red-900/30 dark:text-red-400">
                              *
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                            prop.type
                          )}`}
                        >
                          {prop.type.length > 20
                            ? `${prop.type.substring(0, 20)}...`
                            : prop.type}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {prop.defaultValue !== undefined ? (
                          <code className="bg-muted/70 text-foreground px-2 py-1 rounded text-sm">
                            {prop.defaultValue}
                          </code>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            -
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4 max-w-xs">
                        <p className="text-sm text-foreground">
                          {prop.description}
                        </p>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        {prop.examples && prop.examples.length > 0 && (
                          <button
                            onClick={() => toggleRowExpansion(prop.name)}
                            className="text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted/50 rounded"
                            title="View examples"
                          >
                            {expandedRows.has(prop.name) ? (
                              <ChevronDown size={16} />
                            ) : (
                              <ChevronRight size={16} />
                            )}
                          </button>
                        )}
                      </td>
                    </tr>
                    <AnimatePresence>
                      {expandedRows.has(prop.name) && (
                        <motion.tr
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-muted/20"
                        >
                          <td colSpan={5} className="px-4 py-4">
                            <div className="space-y-3">
                              <h4 className="font-medium text-foreground text-sm flex items-center gap-2">
                                Examples:
                                <span className="text-xs text-muted-foreground">
                                  (Click to copy)
                                </span>
                              </h4>
                              <div className="grid gap-2">
                                {prop.examples.map((example, idx) => (
                                  <motion.div
                                    key={idx}
                                    className="relative group"
                                    whileHover={{ scale: 1.01 }}
                                    transition={{ duration: 0.1 }}
                                  >
                                    <code
                                      className="block bg-card border border-border rounded p-3 text-sm cursor-pointer hover:bg-muted/50 transition-colors pr-12"
                                      onClick={() => copyToClipboard(example)}
                                    >
                                      {example}
                                    </code>
                                    <div className="absolute top-1/2 -translate-y-1/2 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <AnimatePresence mode="wait">
                                        {copied ? (
                                          <motion.span
                                            key="copied"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="text-green-500"
                                          >
                                            <ClipboardCheck size={14} />
                                          </motion.span>
                                        ) : (
                                          <motion.span
                                            key="copy"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="text-muted-foreground"
                                          >
                                            <Clipboard size={14} />
                                          </motion.span>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span>* Required</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export { PropsSection };
