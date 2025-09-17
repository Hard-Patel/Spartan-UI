import { useEffect, useState } from "react";
import { TextReveal } from "../spartan-ui/RevealText";

export const TextRevealPreview = () => {
  const [counter, SetCounter] = useState(1);

  useEffect(() => {
    const animation = setInterval(() => {
      SetCounter(0);
      setTimeout(() => {
        SetCounter((c) => c + 1);
      }, 100);
    }, 3500);

    return () => clearInterval(animation);
  }, []);
  
  return (
    <div className="relative w-full">
      {counter ? <TextReveal text={["How are you?"]} /> : null}
    </div>
  );
};
