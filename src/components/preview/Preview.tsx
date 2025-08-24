import AICard from "../showcase/AICard";
import { AnimatedButton } from "../showcase/AnimatedButton";
import { AnimatedThemeToggle } from "../showcase/AnimatedThemeToggler";
import { UserAvatars } from "../showcase/AnimatedUserAvatars";
import { AuroraText } from "../showcase/AuroraText";
import { GlassText } from "../showcase/GlassAuroraText";
import { HighlightedText } from "../showcase/HighlightedText";
import { HyperTextToggle } from "../showcase/HyperText";
import { InteractiveCard } from "../showcase/InteractiveCard";
import { Marquee } from "../showcase/Marquee";
import { SlideText } from "../showcase/SlideText";
import { SuggestiveSearch } from "../showcase/SuggestiveSearch";
import { ScrollProgressPreviewTab } from "./ScrollProgressPreviewTab";

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
      return <ScrollProgressPreviewTab />;

    default:
      return (
        <div className="text-center text-muted-foreground p-8">
          Component preview not available
        </div>
      );
  }
};
