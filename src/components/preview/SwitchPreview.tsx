import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Switch } from "../showcase/Switch";

const SwitchPreview = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <Switch
      value={isDark}
      onToggle={() => setIsDark((prev) => !prev)}
      iconOn={<Moon className="h-4 w-4" />}
      iconOff={<Sun className="h-4 w-4" />}
    />
  );
};

export default SwitchPreview;
