import { useCallback, useEffect, useState } from "react";

const charset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");

// Utility to scramble text
function scrambleText(originalText: string, charset: string[]) {
  return originalText
    .split("")
    .map((char) =>
      char === " " ? " " : charset[Math.floor(Math.random() * charset.length)]
    )
    .join("");
}

const HyperTextToggle = ({ texts }: { texts: string[] }) => {
  const maxRoleLength = texts.reduce((acc, text) => {
    if (acc < text.length) {
      acc = text.length;
    }
    return acc;
  }, texts[0].length);

  const [displayText, setDisplayText] = useState(texts[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let scrambleCount = 0;
    let scrambleInterval: NodeJS.Timeout;
    let holdTimeout: NodeJS.Timeout;

    const startScramble = () => {
      scrambleCount = 0;
      scrambleInterval = setInterval(() => {
        scrambleCount++;
        if (scrambleCount <= 8) {
          // show scrambled text 3 times
          setDisplayText(scrambleText(texts[currentIndex], charset));
        } else {
          // move to next role and hold for 2 seconds
          clearInterval(scrambleInterval);
          const nextIndex = (currentIndex + 1) % texts.length;
          setCurrentIndex(nextIndex);
          setDisplayText(texts[nextIndex]);
          holdTimeout = setTimeout(startScramble, 2500); // hold readable text
        }
      }, 60); // scramble speed per frame
    };

    // initial delay before first scramble
    holdTimeout = setTimeout(startScramble, 2500);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(holdTimeout);
    };
  }, [currentIndex]);

  const padToMaxLength = useCallback(
    (text: string) => {
      const diff = maxRoleLength - text.length;
      if (diff <= 0) return text;

      const padStart = Math.floor(diff / 2);
      const padEnd = diff - padStart;

      return " ".repeat(padStart) + text + " ".repeat(padEnd);
    },
    [maxRoleLength]
  );

  return (
    <p className="leading-8 text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
      {padToMaxLength(displayText)}
    </p>
  );
};

export { HyperTextToggle };
