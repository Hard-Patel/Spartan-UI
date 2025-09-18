import { BlurHoverText } from "../spartan-ui/BlurHoverText";

const BlurHoverTextPreview = ({
  isDetailedPage,
}: {
  isDetailedPage?: boolean;
}) => {
  if (!isDetailedPage) {
    return (
      <div className="flex flex-col text-center space-y-4">
        <span>Hover to find out best language?</span>
        <BlurHoverText className="text-4xl" blurRadius={10}>
          Just Joking!
        </BlurHoverText>
      </div>
    );
  }

  return (
    <div className="flex flex-col py-4 text-left space-y-4">
      <div>What was the first computer bug ever? - Hover below for answer</div>
      <BlurHoverText className="text-2xl" blurRadius={8}>
        Answer: In C, typing while(1); creates an infinite loop that can freeze
        your program (or worse, your whole machine).
      </BlurHoverText>
    </div>
  );
};

export { BlurHoverTextPreview };
