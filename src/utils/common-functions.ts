import GlassCardCode from "@/components/showcase/GlassCard.tsx?raw";
import ScrollProgressCode from "@/components/showcase/ScrollProgress.tsx?raw";
import { COMPONENT_IDS } from "@/data/components";
import AICardCode from "../components/showcase/AICard.tsx?raw";
import AnimatedButtonCode from "../components/showcase/AnimatedButton.tsx?raw";
import AnimatedThemeToggleCode from "../components/showcase/AnimatedThemeToggler.tsx?raw";
import UserAvatarsCode from "../components/showcase/AnimatedUserAvatars.tsx?raw";
import AuroraTextCode from "../components/showcase/AuroraText.tsx?raw";
import Card3DCode from "../components/showcase/Card3D.tsx?raw";
import CursorAwareButtonCode from "../components/showcase/CursorAwareButton.tsx?raw";
import FocusedTextCode from "../components/showcase/FocusedText.tsx?raw";
import HighlightedTextCode from "../components/showcase/HighlightedText.tsx?raw";
import HyperTextCode from "../components/showcase/HyperText.tsx?raw";
import InteractiveCardCode from "../components/showcase/InteractiveCard.tsx?raw";
import MarqueeCode from "../components/showcase/Marquee.tsx?raw";
import MaskedTextCode from "../components/showcase/MaskedText.tsx?raw";
import TextRevealCode from "../components/showcase/RevealText.tsx?raw";
import ScrollNavCode from "../components/showcase/ScrollNav.tsx?raw";
import SlideTextCode from "../components/showcase/SlideText.tsx?raw";
import SmoothBubbleTextCode from "../components/showcase/SmoothBubbleText.tsx?raw";
import SparkleCardCode from "../components/showcase/SparkleCard.tsx?raw";
import SuggestiveSearchCode from "../components/showcase/SuggestiveSearch.tsx?raw";
import SwitchCode from "../components/showcase/Switch.tsx?raw";
import TypewriterTextCode from "../components/showcase/TypewriterText.tsx?raw";
import VideoMaskedTextCode from "../components/showcase/VideoMaskedText.tsx?raw";
import ProgressiveHoverCardCode from "../components/showcase/ProgressiveHoverCard.tsx?raw";

export const getComponentCode = (id: string) => {
  switch (id) {
    case COMPONENT_IDS.glassCard:
      return GlassCardCode;

    case COMPONENT_IDS.interactiveCard:
      return InteractiveCardCode;

    case COMPONENT_IDS.animatedButton:
      return AnimatedButtonCode;

    case COMPONENT_IDS.marquee:
      return MarqueeCode;

    case COMPONENT_IDS.highlightedText:
      return HighlightedTextCode;

    case COMPONENT_IDS.userAvatars:
      return UserAvatarsCode;

    case COMPONENT_IDS.animatedThemeToggle:
      return AnimatedThemeToggleCode;

    case COMPONENT_IDS.suggestiveSearch:
      return SuggestiveSearchCode;

    case COMPONENT_IDS.slideText:
      return SlideTextCode;

    case COMPONENT_IDS.auroraText:
      return AuroraTextCode;

    case COMPONENT_IDS.hyperText:
      return HyperTextCode;

    case COMPONENT_IDS.aiCard:
      return AICardCode;

    case COMPONENT_IDS.scrollProgress:
      return ScrollProgressCode;

    case COMPONENT_IDS.scrollNav:
      return ScrollNavCode;

    case COMPONENT_IDS.switch:
      return SwitchCode;

    case COMPONENT_IDS.sparkleCard:
      return SparkleCardCode;

    case COMPONENT_IDS.maskedText:
      return MaskedTextCode;

    case COMPONENT_IDS.videoMaskedText:
      return VideoMaskedTextCode;

    case COMPONENT_IDS.revealText:
      return TextRevealCode;

    case COMPONENT_IDS.focusedText:
      return FocusedTextCode;

    case COMPONENT_IDS.bubbleText:
      return SmoothBubbleTextCode;

    case COMPONENT_IDS.cursorAwareButton:
      return CursorAwareButtonCode;

    case COMPONENT_IDS.typewriterText:
      return TypewriterTextCode;

    case COMPONENT_IDS.card3D:
      return Card3DCode;

    case COMPONENT_IDS.progressiveHoverCard:
      return ProgressiveHoverCardCode;

    default:
      return "";
  }
};
