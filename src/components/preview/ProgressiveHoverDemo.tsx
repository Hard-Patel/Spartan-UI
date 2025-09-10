import { ProgressiveHoverCard } from "../showcase/ProgressiveHoverCard";

// Demo component
const ProgressiveHoverDemo = ({
  isDetailsPage,
}: {
  isDetailsPage: boolean;
}) => {
  if (!isDetailsPage) {
    return (
      <ProgressiveHoverCard
        className="bg-muted rounded-xl shadow-md p-8 max-w-md transition-shadow duration-300"
        hoverColor="bg-blue-500/10"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Progressive Hover</h3>
          <p className="text-gray-400">Hover spreads from cursor entry point</p>
        </div>
      </ProgressiveHoverCard>
    );
  }
  return (
    <div className="p-8 flex flex-col items-center gap-8">
      {/* Basic Progressive Hover */}
      <ProgressiveHoverCard
        className="bg-muted rounded-xl shadow-md p-8 max-w-md transition-shadow duration-300"
        hoverColor="bg-blue-500/10"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3l14 9-14 9V3z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Progressive Hover</h3>
          <p className="text-gray-400">Hover spreads from cursor entry point</p>
        </div>
      </ProgressiveHoverCard>

      {/* Large Card with Green Hover */}
      <ProgressiveHoverCard
        className="bg-muted rounded-xl shadow-md p-8 max-w-2xl w-full"
        hoverColor="bg-green-400/15"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Large Interactive Area</h3>
            <p className="text-gray-300 mb-4">
              Try hovering from different edges and corners to see how the
              progressive effect always starts from your cursor position and
              smoothly covers the entire area.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Smooth
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Progressive
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Hover
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl shadow-lg"></div>
          </div>
        </div>
      </ProgressiveHoverCard>

      {/* Dark Theme Card */}
      <ProgressiveHoverCard
        className="bg-foreground text-white dark:text-black rounded-xl shadow-xl p-8 max-w-md"
        hoverColor="bg-cyan-400/20"
      >
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Dark Theme</h3>
          <p className="text-gray-400">Progressive hover with cyan accent</p>
          <div className="mt-4 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
        </div>
      </ProgressiveHoverCard>

      {/* Custom Shape */}
      <ProgressiveHoverCard
        className="bg-muted rounded-full shadow-md p-6 w-48 h-48 flex items-center justify-center"
        hoverColor="bg-orange-400/20"
      >
        <div className="text-center">
          <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-2"></div>
          <p className="text-sm font-medium text-gray-200">Circular Shape</p>
        </div>
      </ProgressiveHoverCard>
    </div>
  );
};

export { ProgressiveHoverDemo };
