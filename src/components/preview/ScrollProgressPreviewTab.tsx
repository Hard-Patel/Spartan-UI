import { useRef } from "react";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "../spartan-ui/ScrollProgress";

export function ScrollProgressPreviewTab({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full overflow-y-auto scroll-hide",
        className
      )}
    >
      {/* Progress bar bound to this container */}
      <ScrollProgress position="top" targetRef={containerRef} />

      <div className="p-4 space-y-6">
        <section className="p-8 bg-secondary">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Scroll inside this container 🚀
          </h1>
          <p className="text-lg max-w-xl">
            Build, grow, and scale your projects with ease. Our tools help you
            focus on creating while we handle the complexity.
          </p>
        </section>

        <section className="p-8">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-3">
            <li>✅ Lightning-fast performance</li>
            <li>✅ Fully responsive design</li>
            <li>✅ Developer-first APIs</li>
            <li>✅ Seamless integrations</li>
          </ul>
        </section>

        <section className="p-8 bg-secondary/50">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="space-y-6">
            <blockquote className="p-4 border-l-4 border-indigo-500 italic">
              "This platform saved us months of development!" – Alex
            </blockquote>
            <blockquote className="p-4 border-l-4 border-pink-500 italic">
              "Absolutely love the UI components." – Maria
            </blockquote>
          </div>
        </section>

        <section className="p-8  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <h2 className="text-2xl font-semibold mb-4">Call to Action</h2>
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}
