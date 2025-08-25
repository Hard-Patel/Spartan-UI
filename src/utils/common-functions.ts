import GlassCardCode from "@/components/showcase/GlassCard.tsx?raw";
import ScrollProgressCode from "@/components/showcase/ScrollProgress.tsx?raw";
import { COMPONENT_IDS } from "@/data/components";
import AICardCode from "../components/showcase/AICard.tsx?raw";
import AnimatedButtonCode from "../components/showcase/AnimatedButton.tsx?raw";
import AnimatedThemeToggleCode from "../components/showcase/AnimatedThemeToggler.tsx?raw";
import UserAvatarsCode from "../components/showcase/AnimatedUserAvatars.tsx?raw";
import AuroraTextCode from "../components/showcase/AuroraText.tsx?raw";
import HighlightedTextCode from "../components/showcase/HighlightedText.tsx?raw";
import HyperTextCode from "../components/showcase/HyperText.tsx?raw";
import InteractiveCardCode from "../components/showcase/InteractiveCard.tsx?raw";
import MarqueeCode from "../components/showcase/Marquee.tsx?raw";
import SlideTextCode from "../components/showcase/SlideText.tsx?raw";
import SuggestiveSearchCode from "../components/showcase/SuggestiveSearch.tsx?raw";

export const getComponentCode = (id: string) => {
  switch (id) {
    case COMPONENT_IDS.glassCard:
      return GlassCardCode;

    case "interactive-card":
      return InteractiveCardCode;

    case "animated-button":
      return AnimatedButtonCode;

    case "marquee":
      return MarqueeCode;

    case "highlighted-text":
      return HighlightedTextCode;

    case "user-avatars":
      return UserAvatarsCode;

    case "animated-theme-toggle":
      return AnimatedThemeToggleCode;

    case "suggestive-search":
      return SuggestiveSearchCode;

    case "slide-text":
      return SlideTextCode;

    case "aurora-text":
      return AuroraTextCode;

    case "hyper-text":
      return HyperTextCode;

    case "ai-card":
      return AICardCode;

    case "scroll-progress":
      return ScrollProgressCode;

    default:
      return "";
  }
};
