export interface ComponentData {
  id: string;
  name: string;
  description: string;
  category: string;
  dependencies?: string[];
  featured?: boolean;
  listed?: boolean;
}

export const componentCategories = [
  "All",
  "Buttons",
  "Cards",
  "Text Effects",
  "Animations",
  "Loaders",
] as const;

// 1. Define component IDs as const
export const COMPONENT_IDS = {
  glassCard: "glass-card",
  aiCard: "ai-card",
  scrollNav: "scroll-nav",
  animatedButton: "animated-button",
  marquee: "marquee",
  highlightedText: "highlighted-text",
  interactiveCard: "interactive-card",
  userAvatars: "user-avatars",
  animatedThemeToggle: "animated-theme-toggle",
  suggestiveSearch: "suggestive-search",
  hyperText: "hyper-text",
  slideText: "slide-text",
  auroraText: "aurora-text",
  scrollProgress: "scroll-progress",
  switch: "switch",
  sparkleCard: "sparkle-card",
} as const;

// 2. Define the display order using COMPONENT_IDS only
export const COMPONENT_ORDER = [
  COMPONENT_IDS.aiCard,
  COMPONENT_IDS.sparkleCard,
  COMPONENT_IDS.scrollNav,
  COMPONENT_IDS.glassCard,
  COMPONENT_IDS.userAvatars,
  COMPONENT_IDS.suggestiveSearch,
  COMPONENT_IDS.scrollProgress,
  COMPONENT_IDS.animatedThemeToggle,
  COMPONENT_IDS.auroraText,
  COMPONENT_IDS.interactiveCard,
  COMPONENT_IDS.switch,
  COMPONENT_IDS.marquee,
  COMPONENT_IDS.highlightedText,
  COMPONENT_IDS.animatedButton,
  COMPONENT_IDS.hyperText,
  COMPONENT_IDS.slideText,
] as const;

// 3. Raw components data (same as you already have)
const rawComponentsData: ComponentData[] = [
  {
    id: COMPONENT_IDS.glassCard,
    name: "Glass Card",
    description: "Card component that have Glass morphic effect",
    category: "Card",
    featured: true,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.aiCard,
    name: "AI Card",
    description:
      "Card component that wraps childrens and can be easily used to highlight or give AI effect",
    category: "Card",
    featured: true,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.scrollNav,
    name: "Scrollbar with ToC",
    description:
      "Scrollbar that lets you see the progress and move to the specific section as well",
    category: "Scrollbar",
    featured: false,
    listed: false,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.animatedButton,
    name: "Animated Button",
    description: "A sleek button with hover animations and gradient background",
    category: "Buttons",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.marquee,
    name: "Infinite Marquee",
    description:
      "Smooth infinite scrolling text marquee with customizable speed",
    category: "Animations",
    featured: false,
    listed: false,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.highlightedText,
    name: "Highlighted Text",
    description: "Text with animated highlight background effect",
    category: "Text Effects",
    featured: false,
    listed: false,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.interactiveCard,
    name: "Interactive Card",
    description: "Card with tilt effect and animated border on hover",
    category: "Cards",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.userAvatars,
    name: "User Avatars",
    description:
      "User avatars with scale and reveal animation with name visibility on hover",
    category: "Avatars",
    featured: true,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.animatedThemeToggle,
    name: "Animated Theme Toggle",
    description:
      "Animated Button to Toggle the theme with ripple effect, giving a great UX",
    category: "Theme Toggle",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.suggestiveSearch,
    name: "Suggestive Search",
    description: "Search component with animated suggestions and effects",
    category: "Search",
    featured: true,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.hyperText,
    name: "Hyper Text",
    description:
      "Animated Hyper Text component that reveals the actual text with defined delay and animation",
    category: "Text",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.slideText,
    name: "Slide Text",
    description:
      "Animated Slide Text component that loops through all the texts with specified delay",
    category: "Text",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.auroraText,
    name: "Aurora Text",
    description:
      "Animated Aurora Text component that animates the gradients inside the text",
    category: "Text",
    featured: true,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.scrollProgress,
    name: "Scroll Progress",
    description:
      "Scroll Progress Component which can be used to add the progress view in top, bottom, left or right view",
    category: "Scroll",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.switch,
    name: "Switch",
    description: "Switch component that smoothly toggles the state",
    category: "Switch",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
  {
    id: COMPONENT_IDS.sparkleCard,
    name: "Sparkle Card",
    description:
      "Card component that have a sparkling effect in the background",
    category: "Card",
    featured: false,
    listed: true,
    dependencies: ["motion/react"],
  },
];

export const componentsData = rawComponentsData.sort(
  (a, b) =>
    COMPONENT_ORDER.indexOf(a.id as (typeof COMPONENT_ORDER)[number]) -
    COMPONENT_ORDER.indexOf(b.id as (typeof COMPONENT_ORDER)[number])
);

export const getFeaturedComponents = () =>
  componentsData.filter((comp) => comp.featured);

export const getAllComponents = (listed = false) =>
  componentsData?.filter((comp) => !listed || comp.listed);

export const getComponentById = (id: string) =>
  componentsData.find((comp) => comp.id === id);
