import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollNav } from "../spartan-ui/ScrollNav";

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
      <div className="space-y-32">
        {/* Introduction */}
        <section
          id="intro"
          className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 text-white p-8"
        >
          <img
            src="https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/5150-walter-white.webp"
            alt="This tab is not preview, This whole page is the preview"
            className="h-1/3"
          />
          <h2 className="text-5xl font-extrabold mt-10 mb-4">
            Check the right side for custom scrollbar
          </h2>
          <button className="px-6 py-3 bg-white/20 backdrop-blur-lg rounded-xl hover:bg-white/30 transition">
            Get Started
          </button>
        </section>

        {/* Features */}
        <section
          id="features"
          className="h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 p-12"
        >
          <h2 className="text-4xl font-bold mb-8">Features</h2>
          <ul className="grid md:grid-cols-2 gap-6 max-w-3xl text-left">
            <li className="p-6 rounded-xl bg-gray-800/60 backdrop-blur shadow">
              🚀 Smooth scrolling with Framer Motion
            </li>
            <li className="p-6 rounded-xl bg-gray-800/60 backdrop-blur shadow">
              🎯 Interactive navigation dots
            </li>
            <li className="p-6 rounded-xl bg-gray-800/60 backdrop-blur shadow">
              🌗 Works with dark/light themes
            </li>
            <li className="p-6 rounded-xl bg-gray-800/60 backdrop-blur shadow">
              ✨ Clean Tailwind UI styling
            </li>
          </ul>
        </section>

        {/* Usage */}
        <section
          id="usage"
          className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-12"
        >
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">How to Use</h2>
            <p className="mb-6 opacity-90">
              Just scroll the page and watch the custom scrollbar update in
              real-time. Hover on dots to see tooltips, and click them to jump
              to sections.
            </p>
            <button className="px-5 py-3 bg-white/20 backdrop-blur rounded-xl hover:bg-white/30 transition">
              Try It Now
            </button>
          </div>
          <div className="w-64 h-64 bg-white/20 rounded-2xl flex items-center justify-center">
            📦 Image / Demo Placeholder
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-12"
        >
          <h2 className="text-4xl font-bold mb-8">FAQ</h2>
          <div className="max-w-2xl space-y-6 text-left">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">❓ How does it work?</h3>
              <p className="text-sm opacity-80">
                It uses Framer Motion’s <code>useScroll</code> hook and a custom
                progress bar to replace the browser scrollbar.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">🎨 Can I customize it?</h3>
              <p className="text-sm opacity-80">
                Absolutely — tweak colors, shapes, or positions with Tailwind
                and motion configs.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold">⚡ Is it smooth?</h3>
              <p className="text-sm opacity-80">
                Yes! Motion spring animations ensure smooth progress updates.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
