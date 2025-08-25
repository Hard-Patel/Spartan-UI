import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatedThemeToggle } from "../showcase/AnimatedThemeToggler";
import brush from "../../assets/images/brush.png";
interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
  ];

  return (
    <header className="sticky w-full border-b border-border/50 backdrop-blur-sm top-0 z-50">
      <div className="flex flex-1 px-8">
        <div className="flex h-[var(--header-height)] flex-1 justify-between items-center">
          {/* Logo / Brand */}
          <motion.div
            className="flex items-center gap-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-bold text-gradient">
              Components
            </Link>
            <img src={brush} className="size-6 mt-1" />
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
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="mt-auto">
              <AnimatedThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav (slides in from right) */}
      <motion.nav
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: isOpen ? 0 : "100%", opacity: isOpen ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 25 }}
        className="fixed top-12 right-0 h-full w-64 bg-background shadow-lg z-40 p-6 flex flex-col space-y-6 md:hidden"
        aria-label="Mobile"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "relative px-4 py-2 text-base font-medium transition-colors duration-200 rounded-lg",
                isActive
                  ? "text-primary bg-muted/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )
            }
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </motion.nav>

      {/* Overlay (closes mobile nav on click) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
      )}
    </header>
  );
};
