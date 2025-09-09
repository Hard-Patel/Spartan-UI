import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export const SmoothBubbleText = ({
  text = "The digital marketing agency",
  bubbleSize = 120,
  className = "",
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div
        ref={containerRef}
        className="relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Main text layer */}
        <div
          className={cn(
            className,
            `select-none leading-tight tracking-tight relative z-10`
          )}
        >
          {text}
        </div>

        {/* Bubble with blend mode */}
        <div
          className={`absolute pointer-events-none rounded-full transition-opacity duration-200 ease-out ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: mousePosition.x - bubbleSize / 2,
            top: mousePosition.y - bubbleSize / 2,
            width: bubbleSize,
            height: bubbleSize,
            backgroundColor: "white",
            mixBlendMode: "difference",
            zIndex: 20,
          }}
        />
      </div>
    </div>
  );
};
