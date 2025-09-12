import GlassCardCode from "@/components/spartan-ui/GlassCard.tsx?raw";
import ScrollProgressCode from "@/components/spartan-ui/ScrollProgress.tsx?raw";
import { COMPONENT_IDS } from "@/data/components";
import AnimatedButtonCode from "../components/spartan-ui/AnimatedButton.tsx?raw";
import AnimatedThemeToggleCode from "../components/spartan-ui/AnimatedThemeToggler.tsx?raw";
import AuroraTextCode from "../components/spartan-ui/AuroraText.tsx?raw";
import CursorAwareButtonCode from "../components/spartan-ui/CursorAwareButton.tsx?raw";
import FocusedTextCode from "../components/spartan-ui/FocusedText.tsx?raw";
import HighlightedTextCode from "../components/spartan-ui/HighlightedText.tsx?raw";
import HyperTextCode from "../components/spartan-ui/HyperText.tsx?raw";
import InteractiveCardCode from "../components/spartan-ui/InteractiveCard.tsx?raw";
import MarqueeCode from "../components/spartan-ui/Marquee.tsx?raw";
import SlideTextCode from "../components/spartan-ui/SlideText.tsx?raw";
import SwitchCode from "../components/spartan-ui/Switch.tsx?raw";
import TypewriterTextCode from "../components/spartan-ui/TypewriterText.tsx?raw";
import AICardCode from "../components/spartan-ui/AICard.tsx?raw";
import BubbleTextCode from "../components/spartan-ui/BubbleText.tsx?raw";
import Card3DCode from "../components/spartan-ui/Card3D.tsx?raw";
import MaskedTextCode from "../components/spartan-ui/MaskedText.tsx?raw";
import ProgressiveHoverCardCode from "../components/spartan-ui/ProgressiveHoverCard.tsx?raw";
import TextRevealCode from "../components/spartan-ui/RevealText.tsx?raw";
import ScrollNavCode from "../components/spartan-ui/ScrollNav.tsx?raw";
import SparkleCardCode from "../components/spartan-ui/SparkleCard.tsx?raw";
import SuggestiveSearchCode from "../components/spartan-ui/SuggestiveSearch.tsx?raw";
import UserAvatarsCode from "../components/spartan-ui/UserAvatars.tsx?raw";
import VideoMaskedTextCode from "../components/spartan-ui/VideoMaskedText.tsx?raw";

export const getComponentCode = (id: string) => {
  switch (id) {
    case COMPONENT_IDS.glassCard:
      return GlassCardCode;

    case COMPONENT_IDS.revealText:
      return TextRevealCode;

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
      return BubbleTextCode;

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
