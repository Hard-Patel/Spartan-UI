import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type ScrollNavProps = {
  sections: Section[]; // e.g. [{id:"intro", label:"Introduction"}, ...]
};

export function ScrollNav({ sections }: ScrollNavProps) {
  const [sectionOffsets, setSectionOffsets] = useState<number[]>([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Calculate section offsets relative to page height
    const offsets = sections.map((s) => {
      const el = document.getElementById(s.id);
      if (!el) return 0;
      return el.offsetTop / document.body.scrollHeight;
    });
    setSectionOffsets(offsets);
  }, [sections]);

  const handleScrollTo = (id: string, index: number) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -4.5 * 4 * 4;

      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: index === 0 ? 0 : y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Custom Scroll Nav */}
      <div className="fixed right-0 bottom-0  h-[calc(100vh-var(--header-height))] flex items-center justify-center z-50">
        <div className="relative h-full w-3 bg-muted rounded-full overflow-hidden">
          {/* Progress bar */}
          <motion.div
            className="top-0 left-0 w-full bg-primary/50"
            style={{
              scaleY: scrollYProgress,
              height: "100%",
              transformOrigin: "0% 0%",
            }}
          />
        </div>

        {/* Dots for sections */}
        {sectionOffsets.map((offset, i) => (
          <div
            key={sections[i].id}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${i === 0 ? 0 : offset * 100}%` }}
          >
            <button
              onClick={() => handleScrollTo(sections[i].id, i)}
              className="group relative w-3 h-3 rounded-full bg-background border border-primary shadow hover:bg-primary transition"
            >
              <span className="absolute right-5 top-1/2 -translate-y-1/2 whitespace-nowrap px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition">
                {sections[i].label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
