import AICard from "../showcase/AICard";
import { AnimatedButton } from "../showcase/AnimatedButton";
import { AnimatedThemeToggle } from "../showcase/AnimatedThemeToggler";
import { AuroraText } from "../showcase/AuroraText";
import { GlassText } from "../showcase/GlassAuroraText";
import { HighlightedText } from "../showcase/HighlightedText";
import { HyperTextToggle } from "../showcase/HyperText";
import { InteractiveCard } from "../showcase/InteractiveCard";
import { Marquee } from "../showcase/Marquee";
import { SlideText } from "../showcase/SlideText";
import { SparkleCard } from "../showcase/SparkleCard";
import { SuggestiveSearch } from "../showcase/SuggestiveSearch";
import GlassCardPreview from "./GlassCardPreview";
import { ScrollNavPreview } from "./ScrollNavPreview";
import { ScrollProgressPreviewTab } from "./ScrollProgressPreviewTab";
import SwitchPreview from "./SwitchPreview";
import { UserAvatarsPreview } from "./UserAvatarsPreview";

export const PreviewComponent = ({
  componentId,
  isDetailedPage = true,
}: {
  componentId: string;
  isDetailedPage?: boolean;
}) => {
  // Dynamic component rendering based on component ID
  switch (componentId) {
    case "ai-card":
      return (
        <AICard animate rounded="sm">
          <button className="px-12 py-2 rounded-sm bg-background">
            Ask AI to Generate an image
          </button>
        </AICard>
      );

    case "glass-card":
      return <GlassCardPreview />;

    case "animated-button":
      return (
        <div className="flex gap-4 flex-wrap justify-center">
          <AnimatedButton>Primary Button</AnimatedButton>
          <AnimatedButton variant="secondary">Secondary Button</AnimatedButton>
          <AnimatedButton variant="outline">Outlined Button</AnimatedButton>
        </div>
      );

    case "marquee":
      return <Marquee>Hello</Marquee>;

    case "user-avatars":
      return <UserAvatarsPreview />;

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
          className={`${!isDetailedPage ? "pointer-events-none" : ""}`}
        />
      );
    case "suggestive-search":
      return (
        <SuggestiveSearch
          className={`${!isDetailedPage ? "pointer-events-none" : ""}`}
          suggestions={[
            "Search through the database or delete all records Search through the database or delete all records",
            "Search something here",
            "Try typing email or name of the user",
          ]}
        />
      );

    case "aurora-text":
      return (
        <span className="text-5xl font-extrabold">
          Normal Text v
          <AuroraText text="s Aurora Text" />
        </span>
      );

    case "glass-aurora-text":
      return (
        <div className="relative h-80 w-full flex items-center justify-center">
          {/* Moving glowing ball */}
          <div className="absolute size-44 rounded-full opacity-100 bg-blue-500" />

          {/* Glass text */}
          <GlassText text="Aurora Effects" />
        </div>
      );

    case "slide-text":
      return (
        <SlideText
          direction="up"
          texts={["MERN Stack developer", "Frontend Engineer"]}
        />
      );

    case "hyper-text":
      return (
        <HyperTextToggle
          texts={["MERN Stack developer", "Frontend Engineer"]}
        />
      );

    case "scroll-progress":
      return (
        <ScrollProgressPreviewTab
          className={`${isDetailedPage ? "max-h-80" : ""}`}
        />
      );

    case "switch":
      return <SwitchPreview />;

    case "scroll-nav":
      return <ScrollNavPreview />;

    case "sparkle-card":
      return (
        <SparkleCard className="w-96 h-48">
          <h2 className="text-xl font-bold">Sparkle Card ✨</h2>
          <p className="text-muted-foreground">
            Glowing dots in the background
          </p>
        </SparkleCard>
      );

    case "sparkle-card":
      return (
        <SparkleCard className="w-96 h-48">
          <h2 className="text-xl font-bold">Sparkle Card ✨</h2>
          <p className="text-muted-foreground">
            Glowing dots in the background
          </p>
        </SparkleCard>
      );

    default:
      return (
        <div className="text-center text-muted-foreground p-8">
          Component preview not available
        </div>
      );
  }
};
