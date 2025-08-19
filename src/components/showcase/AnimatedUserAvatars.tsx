import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface User {
  id: string | number;
  name?: string;
  image: string;
}

interface UserAvatarsProps {
  users: User[];
  size?: number; // avatar size (px)
  className?: string;
  maxVisible?: number;
  visibility?: number;
  focusScale?: number;
  isRightToLeft?: boolean;
  isOverlapOnly?: boolean;
}

export const UserAvatars = ({
  users,
  size = 56,
  className,
  maxVisible = 7,
  isRightToLeft = false,
  isOverlapOnly = false,
  visibility = 60,
  focusScale = 1.2,
}: UserAvatarsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const slicedUsers = users.slice(
    0,
    Math.min(maxVisible + 1, users.length + 1)
  );
  const exceedMaxLength = users.length > maxVisible;

  return (
    <div className={cn("flex items-center relative", className)}>
      {slicedUsers.map((user, index) => {
        console.log("user: ", user);
        const isHoveredOne = hoveredIndex === index;
        const iaLengthBubble = exceedMaxLength && maxVisible === index;

        const diff = 1 - visibility / 100;
        const zIndex =
          isHoveredOne && isOverlapOnly
            ? slicedUsers.length
            : isRightToLeft
            ? slicedUsers.length - index
            : index;

        const shouldScale =
          isHoveredOne &&
          (!exceedMaxLength || slicedUsers.length - 1 !== index);

        const shouldShift =
          hoveredIndex !== null &&
          (isRightToLeft ? index < hoveredIndex : index > hoveredIndex) &&
          !isOverlapOnly;

        const baseGap = size * (visibility / 100);
        const neededGap = (size * (1 + focusScale)) / 2;
        const shift = Math.max(0, neededGap - baseGap);

        return (
          <motion.div
            key={user.id}
            className="relative cursor-pointer"
            style={{
              width: size,
              height: size,
              zIndex,
              marginLeft: index === 0 ? 0 : -size * diff,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              scale: shouldScale ? focusScale : 1,
              x: shouldShift ? shift * (isRightToLeft ? -1 : 1) : 0,
            }}
            transition={{ type: "keyframes", stiffness: 100, damping: 20 }}
          >
            {/* avatar bubble */}
            <div className="w-full h-full rounded-full overflow-hidden border border-white shadow-md">
              {iaLengthBubble ? (
                <div className="flex h-full w-full items-center justify-center bg-background">
                  +{users.length - maxVisible}
                </div>
              ) : (
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Tooltip */}
            <AnimatePresence>
              {shouldScale && user.name && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -translate-x-1/4 left-1/4 top-full mt-2 
                 whitespace-nowrap rounded-md bg-black text-white 
                 text-xs px-2 py-1 shadow-lg z-50"
                >
                  {user.name}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
