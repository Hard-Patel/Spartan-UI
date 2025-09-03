import { Marquee } from "../showcase/Marquee";

// Demo component showing different marquee examples
export const MarqueePreview = () => {
  return (
    <div className="min-h-screen py-12 space-y-8">
      {/* Basic Text Marquee */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Basic Text Marquee</h2>
        <div className="bg-black text-white py-4">
          <Marquee speed={30}>
            <span className="text-2xl font-bold px-8">
              🚀 Breaking News: New Product Launch Coming Soon! • Limited Time
              Offer Available • Sign Up Today for Early Access •
            </span>
          </Marquee>
        </div>
      </div>

      {/* Testimonial Marquee */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Customer Testimonials
        </h2>
        <div className="bg-gray-50 border py-6">
          <Marquee speed={50} pauseOnHover={true} gap={60}>
            <div className="flex items-center space-x-12">
              <div className="bg-white p-4 rounded-lg shadow-sm min-w-max">
                <p className="text-sm text-gray-600 mb-2">
                  "Amazing product! Highly recommend."
                </p>
                <p className="text-xs text-gray-400">- John D.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm min-w-max">
                <p className="text-sm text-gray-600 mb-2">
                  "Excellent customer service and quality."
                </p>
                <p className="text-xs text-gray-400">- Sarah M.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm min-w-max">
                <p className="text-sm text-gray-600 mb-2">
                  "Will definitely buy again!"
                </p>
                <p className="text-xs text-gray-400">- Mike R.</p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      {/* Stock Ticker Style */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Stock Ticker Style
        </h2>
        <div className="bg-black text-green-400 py-2 font-mono text-sm">
          <Marquee speed={25}>
            <span className="px-4">
              AAPL: +2.5% • GOOGL: -0.8% • MSFT: +1.2% • TSLA: +3.1% • AMZN:
              -0.5% • META: +2.8% • NVDA: +4.2% •
            </span>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
