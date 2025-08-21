import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentData } from "@/data/components";
import { cn } from "@/lib/utils";
import { getComponentCode } from "@/utils/common-functions";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatedButton } from "./showcase/AnimatedButton";
import { AnimatedThemeToggle } from "./showcase/AnimatedThemeToggler";
import { UserAvatars } from "./showcase/AnimatedUserAvatars";
import { HighlightedText } from "./showcase/HighlightedText";
import { InteractiveCard } from "./showcase/InteractiveCard";
import { Marquee } from "./showcase/Marquee";
import { SuggestiveSearch } from "./showcase/SuggestiveSearch";

interface ComponentPreviewProps {
  component: ComponentData;
  showTabs?: boolean;
  className?: string;
}

export const ComponentPreview = ({
  component,
  showTabs = true,
  className,
}: ComponentPreviewProps) => {
  const navigate = useNavigate();
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

  const componentRawCode = getComponentCode(component.id);

  const PreviewComponent = () => {
    // Dynamic component rendering based on component ID
    switch (component.id) {
      case "animated-button":
        return (
          <div className="flex gap-4 flex-wrap justify-center">
            <AnimatedButton>Primary Button</AnimatedButton>
            <AnimatedButton variant="secondary">
              Secondary Button
            </AnimatedButton>
            <AnimatedButton variant="outline">Outlined Button</AnimatedButton>
          </div>
        );
      case "marquee":
        return <Marquee>Hello</Marquee>;

      case "user-avatars":
        return (
          <UserAvatars
            users={[
              {
                id: 1,
                name: "Awesome User",
                image:
                  "https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920",
              },
              {
                id: 2,
                name: "Bob - The Builder",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QSTiahdKODtBSzMaIxXzFqzQCzLpBPqevQ&s",
              },
              {
                id: 3,
                name: "Charlie Chaplin",
                image:
                  "https://play-lh.googleusercontent.com/hJGHtbYSQ0nCnoEsK6AGojonjELeAh_Huxg361mVrPmzdwm8Ots-JzEH5488IS2nojI",
              },
              {
                id: 4,
                name: "Dumplin Dumb",
                image:
                  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/290306179/original/ff5c3aa639fb416c50d2f1d1ecfb543cd214b5ac/do-ai-avatar-photos-up-to-30-photos.jpg",
              },
              {
                id: 5,
                name: "Erikson",
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5wpf2PIQ4tg7oYDIc4MT_bs0YZ3fnJ8-rn1Vnc_bfBhuLoylP6Et58QhnTRC_9dq5vU&usqp=CAU",
              },
              {
                id: 6,
                name: "Ferguson",
                image:
                  "https://imgv3.fotor.com/images/gallery/generate-a-realistic-ai-avatar-of-a-formal-man-in-fotor.jpg",
              },
            ]}
          />
        );
      case "highlighted-text":
        return (
          <HighlightedText>
            <div className="text-center space-y-4">
              <p className="text-lg">
                This is some{" "}
                <span className="relative">
                  <span className="absolute inset-0 bg-primary/20 rounded-md -z-10"></span>
                  <span className="px-1">highlighted text</span>
                </span>{" "}
                in a sentence.
              </p>
              <p className="text-lg">
                Multiple{" "}
                <span className="relative">
                  <span className="absolute inset-0 bg-accent/20 rounded-md -z-10"></span>
                  <span className="px-1">highlighted</span>
                </span>{" "}
                <span className="relative">
                  <span className="absolute inset-0 bg-primary/20 rounded-md -z-10"></span>
                  <span className="px-1">words</span>
                </span>{" "}
                example.
              </p>
            </div>
          </HighlightedText>
        );
      case "interactive-card":
        return (
          <InteractiveCard>
            <h3 className="text-xl font-semibold mb-2">Interactive Card</h3>
            <p className="text-muted-foreground mb-4">
              Hover over this card to see the tilt effect and animated border.
            </p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              Learn More
            </button>
          </InteractiveCard>
        );
      case "animated-theme-toggle":
        return (
          <AnimatedThemeToggle
            className={`${!showTabs ? "pointer-events-none" : ""}`}
          />
        );
      case "suggestive-search":
        return (
          <SuggestiveSearch
            className={`${!showTabs ? "pointer-events-none" : ""}`}
            suggestions={[
              "Search through the database or delete all records Search through the database or delete all records",
              "Search something here",
              "Try typing email or name of the user",
            ]}
          />
        );
      default:
        return (
          <div className="text-center text-muted-foreground p-8">
            Component preview not available
          </div>
        );
    }
  };

  if (!showTabs) {
    return (
      <Card
        onClick={() => navigate(`/components/${component.id}`)}
        className={cn(className, "cursor-pointer")}
      >
        <div className="flex items-center justify-center min-h-[32vh] p-6 overflow-hidden">
          <PreviewComponent />
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn(className, "w-[60vw]")}>
      <Tabs defaultValue="preview" className="w-full">
        <div className="px-6 pt-3">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="preview">
          <span className="flex items-center justify-center pt-8 pb-12 px-6">
            <PreviewComponent />
          </span>
        </TabsContent>

        <TabsContent value="code" className="p-0">
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => copyToClipboard(componentRawCode)}
                className="bg-muted/80 backdrop-blur-sm"
              >
                <motion.animate mode="wait">
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
                </motion.animate>
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
        </TabsContent>
      </Tabs>
    </Card>
  );
};
