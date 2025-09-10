import { COMPONENT_IDS } from "@/data/components";
import AICard from "../showcase/AICard";
import { AnimatedButton } from "../showcase/AnimatedButton";
import { AnimatedThemeToggle } from "../showcase/AnimatedThemeToggler";
import { AuroraText } from "../showcase/AuroraText";
import { Card3D } from "../showcase/Card3D";
import { CursorAwareButton } from "../showcase/CursorAwareButton";
import { FocusedText } from "../showcase/FocusedText";
import { HighlightedText } from "../showcase/HighlightedText";
import { HyperTextToggle } from "../showcase/HyperText";
import { InteractiveCard } from "../showcase/InteractiveCard";
import { Marquee } from "../showcase/Marquee";
import { MaskedText } from "../showcase/MaskedText";
import { SlideText } from "../showcase/SlideText";
import { SmoothBubbleText } from "../showcase/SmoothBubbleText";
import { SparkleCard } from "../showcase/SparkleCard";
import { SuggestiveSearch } from "../showcase/SuggestiveSearch";
import { TypewriterText } from "../showcase/TypewriterText";
import { VideoMaskedText } from "../showcase/VideoMaskedText";
import GlassCardPreview from "./GlassCardPreview";
import { ParallaxDemo } from "./ParallaxImageDemo";
import { ProgressiveHoverDemo } from "./ProgressiveHoverDemo";
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
        <span className="text-5xl text-center font-extrabold">
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

    case COMPONENT_IDS.bubbleText:
      return (
        <SmoothBubbleText
          text="Hover over me to see the effect"
          className="text-center font-extrabold text-4xl sm:text-6xl"
        />
      );

    case COMPONENT_IDS.cursorAwareButton:
      return (
        <div className="space-x-4">
          <CursorAwareButton
            borderColor="border-black"
            rounded="rounded-full"
            onClick={() => null}
          >
            Rounded with Border
          </CursorAwareButton>
          <CursorAwareButton
            borderColor="border-0 border-transparent"
            hoverColor="bg-red-800"
            hoverTextColor="text-white"
            rounded="rounded-md"
            onClick={() => null}
          >
            Square without Border
          </CursorAwareButton>
        </div>
      );

    case COMPONENT_IDS.typewriterText:
      return (
        <TypewriterText
          loop
          withCursor
          duration={50}
          text="Hello, how are you?"
          className="text-2xl"
        />
      );

    case COMPONENT_IDS.card3D:
      return (
        <Card3D
          glareEffect={false}
          className="w-80 h-72"
          intensity={12}
          scale={1.03}
        >
          <div className="bg-muted rounded-xl h-full flex flex-col overflow-hidden">
            <div className="h-32 bg-background/10 flex items-center justify-center text-6xl">
              {"📱"}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">Smartphone Pro</h3>
              <p className="text-gray-500 text-sm flex-1 mb-4">
                Latest flagship smartphone with advanced AI camera and
                lightning-fast performance
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">$1299</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </Card3D>
      );

    case COMPONENT_IDS.focusedText:
      return (
        <FocusedText fontSize="text-4xl" fontWeight="font-bold" direction="up">
          Hover and Check Slide
        </FocusedText>
      );

    case COMPONENT_IDS.progressiveHoverCard:
      return <ProgressiveHoverDemo isDetailsPage={isDetailedPage} />;

    case COMPONENT_IDS.parallaxImage:
      return <ParallaxDemo />;

    default:
      return (
        <div className="text-center text-muted-foreground p-8">
          Component preview not available
        </div>
      );
  }
};
