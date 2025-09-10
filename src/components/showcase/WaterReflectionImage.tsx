import "./water-reflection-image.css";

const WaterReflectionImage = ({
  src,
  alt = "reflected image",
  className = "",
}) => {
  return (
    <div className={`water-reflection-container ${className}`}>
      {/* Original Image */}
      <img src={src} alt={alt} className="original-image" />

      {/* Reflection */}
      <div className="reflection-container">
        <img src={src} alt={`${alt} reflection`} className="reflection-image" />
        <div className="water-overlay"></div>
      </div>
    </div>
  );
};

export { WaterReflectionImage };
