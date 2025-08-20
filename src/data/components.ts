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
    id: "animated-button",
    name: "Animated Button",
    description: "A sleek button with hover animations and gradient background",
    category: "Buttons",
    featured: true,
    dependencies: ["motion/react"],
  },
  {
    id: "marquee",
    name: "Infinite Marquee",
    description:
      "Smooth infinite scrolling text marquee with customizable speed",
    category: "Animations",
    featured: true,
    dependencies: ["motion/react"],
  },
  {
    id: "highlighted-text",
    name: "Highlighted Text",
    description: "Text with animated highlight background effect",
    category: "Text Effects",
    featured: true,
    dependencies: ["motion/react"],
  },
  {
    id: "interactive-card",
    name: "Interactive Card",
    description: "Card with tilt effect and animated border on hover",
    category: "Cards",
    featured: true,
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
    featured: true,
    dependencies: ["motion/react"],
  },
];

export const getFeaturedComponents = () =>
  componentsData.filter((comp) => comp.featured);
export const getAllComponents = () => componentsData;

export const getComponentsByCategory = (category: string) =>
  category === "All"
    ? componentsData
    : componentsData.filter((comp) => comp.category === category);
export const getComponentById = (id: string) =>
  componentsData.find((comp) => comp.id === id);
