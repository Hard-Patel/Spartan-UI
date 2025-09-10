import { useEffect, useRef, useState } from "react";

export const ParallaxImageReveal = ({
  src,
  alt = "Parallax Image",
  height = "h-96",
  parallaxSpeed = 0.5,
  overlayColor = "bg-black",
  overlayOpacity = 0.7,
  className = "",
  children,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [revealProgress, setRevealProgress] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateScrollInfo = () => {
      setScrollY(window.scrollY);
      setClientHeight(window.innerHeight);

      const rect = element.getBoundingClientRect();
      setElementTop(window.scrollY + rect.top);
    };

    const handleScroll = () => {
      const element = elementRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Calculate reveal progress based on element visibility
      let progress = 0;

      if (elementBottom > 0 && elementTop < viewportHeight) {
        // Element is in viewport
        if (elementTop < viewportHeight && elementBottom > 0) {
          const visibleHeight =
            Math.min(elementBottom, viewportHeight) - Math.max(elementTop, 0);
          const totalHeight = rect.height;
          progress = Math.max(
            0,
            Math.min(1, visibleHeight / (totalHeight * 0.8))
          );
        }
      }

      setRevealProgress(progress);
      setScrollY(window.scrollY);
    };

    updateScrollInfo();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollInfo);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollInfo);
    };
  }, []);

  // Calculate parallax offset
  const parallaxOffset = (scrollY - elementTop + clientHeight) * parallaxSpeed;

  // Calculate overlay opacity (starts high, reduces as revealed)
  const overlayOpacityValue = overlayOpacity * (1 - revealProgress);

  // Calculate image opacity (starts low, increases as revealed)
  const imageOpacity = 0.3 + 0.7 * revealProgress;

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${height} ${className}`}
    >
      {/* Parallax Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: "transform",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-[120%] object-cover transition-opacity duration-700 ease-out"
          style={{
            opacity: imageOpacity,
          }}
        />
      </div>

      {/* Overlay that fades out */}
      <div
        className={`absolute inset-0 ${overlayColor} transition-opacity duration-700 ease-out`}
        style={{
          opacity: overlayOpacityValue,
        }}
      />

      {/* Content overlay */}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            className="text-white text-center transition-all duration-700 ease-out"
            style={{
              opacity: 0.5 + 0.5 * revealProgress,
              transform: `translateY(${(1 - revealProgress) * 20}px)`,
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
