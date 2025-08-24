import { Button } from "@/components/ui/button";
import { getComponentCode } from "@/utils/common-functions";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

export const CodeTab = ({ componentId }: { componentId: string }) => {
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

  const componentRawCode = getComponentCode(componentId);

  return (
    <div className="relative px-4">
      <div className="absolute top-4 right-8 z-10">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => copyToClipboard(componentRawCode)}
          className="bg-muted/80 backdrop-blur-sm"
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
                Copied!
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                Copy
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>

      <SyntaxHighlighter
        language="tsx"
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: "0 0 12px 12px",
          background: "hsl(var(--muted)/0.3)",
          backdropFilter: "blur(8px)",
        }}
        codeTagProps={{
          style: {
            fontSize: "14px",
            fontFamily:
              "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace",
          },
        }}
      >
        {componentRawCode}
      </SyntaxHighlighter>
    </div>
  );
};
