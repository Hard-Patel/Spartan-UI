import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollNav } from "../showcase/ScrollNav";

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
            src="https://spartan-ui-lib.s3.ap-south-1.amazonaws.com/5150-walter-white.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAST6S6ZXSH7AZVUX3%2F20250825%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250825T194109Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCmFwLXNvdXRoLTEiRzBFAiEAiP8X8jsqcXIFO5c2t%2F7Be%2F7%2BNtE39Qiwx0%2BggBxVIusCICSyoVdmSjt6LQUVRkmxK7S4vOC5kYcQjYmw%2F9yOs5vSKtYCCGUQABoMMTgwMjk0MTc2MjI4IgwxDEJgo2mFKmj7PIkqswIDI6IQkXfG3lnD1mwu4ptH6Sb3tPk9qUo7ZHv4GK3J69%2B7CJuYG0wU3oAXSracaFbtp7wnJUf4UMuWJXON9zzieBTDTebvUJifYuA1e4RJWRmZ6GlgffVCEohMe3CEOtdEev69QYvHviSKKrmznVZDlHk25IN4ZMmwdE4aIfAi76%2BKNCoTlUJZjensAEyKotdqdq5JZsSnOUS95RcDB%2FHUo26xoldUJKv0y5TlK7Fx3M2D1AGtU5w%2BomNP8XGsNMiaM%2BLiSCJbojWA6UIDKUZa%2BJkc27VrYAJCCw7q%2BQeqIq1T9W5DgnKvBmlf6NEoRQehOgKraHRhYvHWfwqmyeqFow0cE0sutwfj4OnISDSq1220rSpGwqXGzV8ELj5U%2FqYwY1%2B8ru5MyGVMHPIffDmYWryoMPX1ssUGOq0CS0RUEEc%2B5sDeK1b6m1LeH9RbXqQEjyM8PA6frMXArXztAd5gd3ijPFlDnS1j8UjuGqaei%2FDIxlqXRtSZbMlbwYHa2RNBXq7%2FLaYKjnhCxUiTxvYQJfwFHhra9Jb%2B5pfrSMm8TPfXuDS3aX11NbFie2YNGUMDFz1sU8IEOsTkUIyvQ6sE5mNETUstkuHr5EMVdHBGKIT7N2hMOTIg5ISfpmPC6GtM3cLVBxMCH4SBLf3n9H73CbudIMS3dSBsTri9Rus0ClWw6EmQ2BV%2BGQ6UYUpZvXgxKEQ7v7j3ZfpZ6s4v0PkGpmU%2BZjp2vgIK8YMPrlzVZeLJRqzBJw2ZjT3Sof5F%2FRT8keae7FXXskfCq2Bu%2FW9kv1axht4T1iRMvCPh7Zd1dc7V6j%2FgeFHHJg%3D%3D&X-Amz-Signature=71510870b2b76bc31389205999a29b1d71727e117bc21e47943296ba33fa242b&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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
