import { useEffect, useState } from "react";

export const InteractiveGrid = () => {
  const [gridDimensions, setGridDimensions] = useState({ cols: 20, rows: 15 });

  // Calculate grid dimensions based on container size
  useEffect(() => {
    const updateDimensions = () => {
      const cellSize = 60;
      const cols = Math.ceil(window.innerWidth / cellSize) + 2;
      const rows = Math.ceil(window.innerHeight / cellSize) + 2;
      setGridDimensions({ cols, rows });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Interactive grid overlay */}
      <div
        className="absolute inset-0 grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${gridDimensions.cols}, 60px)`,
          gridTemplateRows: `repeat(${gridDimensions.rows}, 60px)`,
          transform: "translate(-30px, -30px)", // Offset to align with background grid
        }}
      >
        {Array.from(
          { length: gridDimensions.cols * gridDimensions.rows },
          (_, index) => {
            const col = index % gridDimensions.cols;
            const row = Math.floor(index / gridDimensions.cols);
            const cellId = `${col}-${row}`;

            return (
              <div
                key={cellId}
                className={`w-[60px] h-[60px] transition-all duration-200 ease-out 
                    cursor-pointer border border-primary/10 hover:bg-primary/15`}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
