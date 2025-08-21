import React, { useEffect, useRef, useState, RefObject } from "react";
import { motion } from "motion/react";

type Phase = "typing" | "paused" | "deleting";

export interface EffectRendererProps {
  text: string;
  isActive: boolean;
  typeDurationMs: number;
  deleteDurationMs: number;
  pauseAfterTypeMs: number;
  prefersReducedMotion?: boolean;
  onDeleteComplete?: () => void;
  containerRef?: React.RefObject<HTMLElement | null>;
}

/** EXTRA: allowDelete (skip delete but still advance after pause) */
interface ExtraProps {
  allowDelete?: boolean;
}

export const TypeWriterText: React.FC<EffectRendererProps & ExtraProps> = ({
  text,
  isActive,
  allowDelete = true,
  typeDurationMs,
  deleteDurationMs,
  pauseAfterTypeMs,
  prefersReducedMotion,
  onDeleteComplete,
  containerRef,
}) => {
  const [phase, setPhase] = useState<Phase>("typing");
  const timers = useRef<number[]>([]);

  // --- UTIL: clear timers safely
  const clearAll = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  // Reset phase whenever driving inputs change
  useEffect(() => {
    setPhase("typing");
    clearAll();
    return clearAll;
    // include allowDelete so toggling it restarts cycle cleanly
  }, [text, isActive, allowDelete]);

  // If deactivated (e.g., input focused / user typing), stop animation immediately
  useEffect(() => {
    if (!isActive) {
      setPhase("typing");
      clearAll();
    }
  }, [isActive]);

  // Reduced motion: show full text and just advance after a small pause
  useEffect(() => {
    if (!isActive || !prefersReducedMotion) return;
    clearAll();
    const t = window.setTimeout(() => {
      // If deleting is disabled, still advance after pause
      onDeleteComplete?.();
    }, Math.max(200, pauseAfterTypeMs));
    timers.current.push(t);
    return clearAll;
  }, [isActive, prefersReducedMotion, pauseAfterTypeMs, onDeleteComplete]);

  if (!isActive) return null;

  return (
    <div
      ref={containerRef as RefObject<HTMLDivElement> | undefined}
      style={{
        display: "inline-block",
        // IMPORTANT: same constraints as SuggestiveSearch overlay
        // The parent/overlay defines the max space; we never exceed it.
        overflow: "hidden",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
      }}
    >
      {prefersReducedMotion ? (
        <span className="text-sm text-muted-foreground select-none">
          {text}
        </span>
      ) : (
        <motion.div
          // IMPORTANT: no `key` here — keep one instance to prevent overlap.
          initial={false}
          animate={
            phase === "typing"
              ? { width: "100%" }
              : phase === "deleting"
              ? { width: "0%" }
              : { width: "100%" } // paused
          }
          transition={
            phase === "typing"
              ? { duration: typeDurationMs / 1000, ease: "linear" }
              : phase === "deleting"
              ? { duration: deleteDurationMs / 1000, ease: "linear" }
              : { duration: 0 }
          }
          onAnimationComplete={() => {
            // Drive phase changes only from here (no extra timers except the pause)
            if (phase === "typing") {
              setPhase("paused");
              clearAll();
              const t = window.setTimeout(() => {
                if (allowDelete) {
                  setPhase("deleting");
                } else {
                  // No delete: advance to next suggestion after pause
                  onDeleteComplete?.();
                }
              }, pauseAfterTypeMs);
              timers.current.push(t);
            } else if (phase === "deleting") {
              // Tell orchestrator to move to next suggestion
              onDeleteComplete?.();
            }
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            overflow: "hidden", // mask the reveal/erase
            whiteSpace: "nowrap",
            width: "0%", // starting width
          }}
        >
          <span className="text-sm text-muted-foreground select-none">
            {text}
          </span>

          {/* Cursor lives inside the mask so it sits at the reveal edge */}
          <motion.span
            aria-hidden
            className="bg-muted-foreground"
            style={{
              display: "inline-block",
              width: 1,
              marginLeft: 4,
              height: "1.1em",
              verticalAlign: "middle",
            }}
            animate={
              phase === "typing" || phase === "paused"
                ? { opacity: [0, 1, 0] }
                : { opacity: 0 }
            }
            transition={
              phase === "typing" || phase === "paused"
                ? { repeat: Infinity, duration: 0.9, ease: "linear" }
                : { duration: 0.1 }
            }
          />
        </motion.div>
      )}
    </div>
  );
};
