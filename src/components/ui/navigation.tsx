import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import brush from "../../assets/images/brush.png";
import { AnimatedThemeToggle } from "../showcase/AnimatedThemeToggler";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
    { href: "/templates", label: "Templates" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-sm">
      <div className="flex flex-1 px-2 md:px-8">
        <div className="flex h-[var(--header-height)] flex-1 justify-between items-center">
          {/* Logo / Brand */}
          <motion.div
            className="flex items-center gap-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="text-lg md:text-2xl font-bold text-gradient"
            >
              Components
            </Link>
            <img src={brush} className="size-4 md:size-6 mt-1" />
          </motion.div>

          {/* Desktop Nav */}
          <nav
            className={cn(
              "hidden md:flex items-center space-x-8",
              className ?? ""
            )}
            aria-label="Primary"
          >
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

            <AnimatedThemeToggle />
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex gap-x-2">
            <button
              onClick={() => setIsOpen((p) => !p)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation" : "Open navigation"}
              className="p-2 rounded-lg bg-muted hover:bg-muted/70 transition"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
            <div className="mt-auto">
              <AnimatedThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav (expands below header, pushes content down) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col border-t border-border/50 bg-background px-4 py-2 space-y-2"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-primary bg-muted/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
