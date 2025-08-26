import cn from "clsx";

type GlassTextProps = {
  text: string;
  blur?: number; // blur radius
  className?: string; // extra tailwind classes
};

export function GlassText({ text, blur = 8, className }: GlassTextProps) {
  return (
    <span
      className={cn(
        "glass-text text-7xl relative inline-block font-extrabold",
        className
      )}
    >
      {text}
    </span>
  );
}
