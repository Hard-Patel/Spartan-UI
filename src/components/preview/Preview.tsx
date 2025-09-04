import { COMPONENT_IDS } from "@/data/components";
import AICard from "../showcase/AICard";
import { AnimatedButton } from "../showcase/AnimatedButton";
import { AnimatedThemeToggle } from "../showcase/AnimatedThemeToggler";
import { AuroraText } from "../showcase/AuroraText";
import { HighlightedText } from "../showcase/HighlightedText";
import { HyperTextToggle } from "../showcase/HyperText";
import { InteractiveCard } from "../showcase/InteractiveCard";
import { MaskedText } from "../showcase/MaskedText";
import { SlideText } from "../showcase/SlideText";
import { SparkleCard } from "../showcase/SparkleCard";
import { SuggestiveSearch } from "../showcase/SuggestiveSearch";
import { VideoMaskedText } from "../showcase/VideoMaskedText";
import GlassCardPreview from "./GlassCardPreview";
import { Marquee } from "../showcase/Marquee";
import { ScrollNavPreview } from "./ScrollNavPreview";
import { ScrollProgressPreviewTab } from "./ScrollProgressPreviewTab";
import SwitchPreview from "./SwitchPreview";
import { TextRevealPreview } from "./TextRevealPreview";
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
    case COMPONENT_IDS.aiCard:
      return (
        <AICard animate rounded="sm">
          <button className="px-12 py-2 rounded-sm bg-background">
            Ask AI to Generate an image
          </button>
        </AICard>
      );

    case COMPONENT_IDS.glassCard:
      return <GlassCardPreview />;

    case COMPONENT_IDS.animatedButton:
      return (
        <div className="flex gap-4 flex-wrap justify-center">
          <AnimatedButton>Primary Button</AnimatedButton>
          <AnimatedButton variant="secondary">Secondary Button</AnimatedButton>
          <AnimatedButton variant="outline">Outlined Button</AnimatedButton>
        </div>
      );

    case COMPONENT_IDS.marquee:
      return <Marquee>Hello</Marquee>;

    case COMPONENT_IDS.userAvatars:
      return <UserAvatarsPreview />;

    case COMPONENT_IDS.highlightedText:
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

    case COMPONENT_IDS.interactiveCard:
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

    case COMPONENT_IDS.animatedThemeToggle:
      return (
        <AnimatedThemeToggle
          className={`${!isDetailedPage ? "pointer-events-none" : ""}`}
        />
      );

    case COMPONENT_IDS.suggestiveSearch:
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

    case COMPONENT_IDS.auroraText:
      return (
        <span className="text-5xl font-extrabold">
          Normal Text v
          <AuroraText text="s Aurora Text" />
        </span>
      );

    case COMPONENT_IDS.slideText:
      return (
        <SlideText
          direction="up"
          texts={["MERN Stack developer", "Frontend Engineer"]}
        />
      );

    case COMPONENT_IDS.hyperText:
      return (
        <HyperTextToggle
          texts={["MERN Stack developer", "Frontend Engineer"]}
        />
      );

    case COMPONENT_IDS.scrollProgress:
      return (
        <ScrollProgressPreviewTab
          className={`${isDetailedPage ? "max-h-80" : ""}`}
        />
      );

    case COMPONENT_IDS.switch:
      return <SwitchPreview />;

    case "scroll-nav":
      if (isDetailedPage) {
        return <ScrollNavPreview />;
      }
      return (
        <div>
          <img src="https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/srk-shah-rukh-khan.gif" />
          <div className="text-center text-xl my-2">
            Aao, aao, <AuroraText className="text-xl" text="Andar aao" />
            <div className="text-sm">(For Preview)</div>
          </div>
        </div>
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

    case "masked-text":
      return (
        <MaskedText
          text="Beautiful"
          imageUrl="https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/colorful-abstract"
          className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-center"
        />
      );

    case "video-masked-text":
      return (
        <div className="relative h-[200px] w-full overflow-hidden">
          <VideoMaskedText src="https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/video-masked-text">
            Abstract
          </VideoMaskedText>
        </div>
      );

    case "reveal-text":
      return <TextRevealPreview />;

    default:
      return (
        <div className="text-center text-muted-foreground p-8">
          Component preview not available
        </div>
      );
  }
};
