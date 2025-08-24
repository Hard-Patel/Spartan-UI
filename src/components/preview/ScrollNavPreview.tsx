import { useEffect } from "react";
import { ScrollNav } from "../showcase/ScrollNav";
import { useLocation } from "react-router-dom";

export function ScrollNavPreview() {
  const sections = [
    { id: "component-details", label: "Component details" },
    { id: "intro", label: "Introduction" },
    { id: "features", label: "Features" },
    { id: "usage", label: "Usage" },
    { id: "faq", label: "FAQ" },
  ];
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("scroll-nav")) {
      document.documentElement.classList.add("scroll-hide"); // or document.body
    }
    return () => {
      document.documentElement.classList.remove("scroll-hide");
    };
  }, []);

  if (!location.pathname.includes("scroll-nav")) {
    return null;
  }

  return (
    <div className="flex-1">
      <ScrollNav sections={sections} />
      <div className="space-y-32 p-8">
        <section id="intro" className="h-screen border">
          <h1>Introduction</h1>
        </section>
        <section id="features" className="h-screen border">
          <h1>Features</h1>
        </section>
        <section id="usage" className="h-screen border">
          <h1>Usage</h1>
        </section>
        <section id="faq" className="h-screen border">
          <h1>FAQ</h1>
        </section>
      </div>
    </div>
  );
}
