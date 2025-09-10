import { ParallaxImageReveal } from "../showcase/ParallaxImage";

const ParallaxDemo = () => {
  return (
    <div className="bg-gray-100 max-h-56 relative overflow-y-scroll">
      {/* Header Section */}
      <div className="bg-white py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Parallax Image Reveal
        </h1>
        <p className="text-gray-600 text-lg">
          Scroll down to see the parallax reveal effect
        </p>
      </div>

      {/* Regular content to create scroll distance */}
      <div className="bg-white py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Scroll to Reveal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600">
              The parallax effect creates depth and visual interest as you
              scroll through the page. Each image starts with an overlay and
              gradually reveals itself with smooth animations.
            </p>
            <p className="text-gray-600">
              The parallax speed can be adjusted to create different levels of
              movement, while the opacity animation creates a smooth reveal
              effect.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Features:</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Parallax scrolling effect</li>
              <li>• Progressive opacity reveal</li>
              <li>• Customizable overlay colors</li>
              <li>• Responsive design</li>
              <li>• Smooth transitions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* First Parallax Section */}
      <ParallaxImageReveal
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Mountain landscape"
        height="h-96"
        parallaxSpeed={0.3}
        overlayColor="bg-black"
        overlayOpacity={0.8}
        className="mb-16"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">Mountain Vista</h2>
          <p className="text-xl">Revealed through parallax scrolling</p>
        </div>
      </ParallaxImageReveal>

      {/* Content between parallax sections */}
      <div className="bg-white py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Customizable Effects
        </h2>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Each parallax section can be customized with different overlay
            colors, opacity levels, and parallax speeds. This creates unique
            visual experiences for different sections of your website.
          </p>
          <p className="text-gray-600 mb-4">
            The reveal animation is triggered based on the element's visibility
            in the viewport, ensuring smooth performance and natural timing.
          </p>
        </div>
      </div>

      {/* Second Parallax Section - Different settings */}
      <ParallaxImageReveal
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        alt="Forest path"
        height="h-80"
        parallaxSpeed={0.6}
        overlayColor="bg-green-900"
        overlayOpacity={0.6}
        className="mb-16"
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">Forest Trail</h2>
          <p className="text-lg">Different overlay and speed</p>
        </div>
      </ParallaxImageReveal>

      {/* More content */}
      <div className="bg-white py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Performance Optimized
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-blue-800">
            The component uses <code>will-change: transform</code> for GPU
            acceleration and efficient scroll event handling to ensure smooth
            performance across devices.
          </p>
        </div>
      </div>

      {/* Third Parallax Section - Ocean theme */}
      <ParallaxImageReveal
        src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Ocean waves"
        height="h-[32rem]"
        parallaxSpeed={0.4}
        overlayColor="bg-blue-900"
        overlayOpacity={0.7}
        className="mb-16"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">Ocean Depths</h2>
          <p className="text-xl">Larger section with slower parallax</p>
          <div className="mt-6">
            <div className="inline-block px-6 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">Scroll Revealed</span>
            </div>
          </div>
        </div>
      </ParallaxImageReveal>

      {/* Footer content */}
      <div className="bg-gray-800 text-white py-16 px-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">End of Demo</h2>
        <p className="text-gray-300">
          Scroll back up to see the effects again, or experiment with different
          images and settings!
        </p>
      </div>
    </div>
  );
};

export { ParallaxDemo };
