export interface ComponentData {
  id: string;
  name: string;
  description: string;
  category: string;
  dependencies?: string[];
  featured?: boolean;
}

export const componentCategories = [
  "All",
  "Buttons",
  "Cards",
  "Text Effects",
  "Animations",
  "Loaders",
] as const;

export const componentsData: ComponentData[] = [
  {
    id: "ai-card",
    name: "AI Card",
    description:
      "Card component that wraps childrens and can be easily used to highlight or give AI effect",
    category: "Card",
    featured: true,
    dependencies: ["motion/react"],
  },
  {
    id: "animated-button",
    name: "Animated Button",
    description: "A sleek button with hover animations and gradient background",
    category: "Buttons",
    featured: false,
    dependencies: ["motion/react"],
  },
  {
    id: "marquee",
    name: "Infinite Marquee",
    description:
      "Smooth infinite scrolling text marquee with customizable speed",
    category: "Animations",
    featured: false,
    dependencies: ["motion/react"],
  },
  {
    id: "highlighted-text",
    name: "Highlighted Text",
    description: "Text with animated highlight background effect",
    category: "Text Effects",
    featured: false,
    dependencies: ["motion/react"],
  },
  {
    id: "interactive-card",
    name: "Interactive Card",
    description: "Card with tilt effect and animated border on hover",
    category: "Cards",
    featured: false,
    dependencies: ["motion/react"],
  },
  {
    id: "user-avatars",
    name: "User Avatars",
    description:
      "User avatars with scale and reveal animation with name visibility on hover",
    category: "Avatars",
    featured: true,
    dependencies: ["motion/react"],
  },
  {
    id: "animated-theme-toggle",
    name: "Animated Theme Toggle",
    description:
      "Animated Button to Toggle the theme with ripple effect, giving a great UX",
    category: "Theme Toggle",
    featured: false,
    dependencies: ["motion/react"],
  },
  {
    id: "suggestive-search",
    name: "Suggestive Search",
    description: "Search component with animated suggestions and effects",
    category: "Search",
    featured: true,
    dependencies: ["motion/react"],
  },
  {
    id: "hyper-text",
    name: "Hyper Text",
    description:
      "Animated Hyper Text component that reveals the actual text with defined delay and animation",
    category: "Text",
    featured: false,
    dependencies: ["motion/react"],
  },
  {
    id: "slide-text",
    name: "Slide Text",
    description:
      "Animated Slide Text component that loops through all the texts with specified delay",
    category: "Text",
    featured: false,
    dependencies: ["motion/react"],
  },
  {
    id: "aurora-text",
    name: "Aurora Text",
    description:
      "Animated Aurora Text component that animates the gradients inside the text",
    category: "Text",
    featured: true,
    dependencies: ["motion/react"],
  },
  {
    id: "scroll-progress",
    name: "Scroll Progress",
    description:
      "Scroll Progress Component which can be used to add the progress view in top, bottom, left or right view",
    category: "Scroll",
    featured: false,
    dependencies: ["motion/react"],
  },
];

export const getFeaturedComponents = () =>
  componentsData.filter((comp) => comp.featured);

export const getAllComponents = () => componentsData;

export const getComponentById = (id: string) =>
  componentsData.find((comp) => comp.id === id);
