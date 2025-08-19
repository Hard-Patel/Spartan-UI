import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
  ];

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )
          }
        >
          {({ isActive }) => (
            <>
              {item.label}
              {isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand"
                  layoutId="navbar-indicator"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};