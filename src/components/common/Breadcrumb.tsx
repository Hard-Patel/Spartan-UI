import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  href?: string; // optional, if it's the last item (no link)
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  shouldAnimate?: boolean;
  className: string;
}

export function Breadcrumb({
  items,
  className,
  shouldAnimate = true,
}: BreadcrumbProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldAnimate ? 0.5 : 0 }}
      className="mb-8"
    >
      <ol
        className={cn(
          className,
          `md:ml-0 ml-2.5 flex items-center space-x-2 text-sm text-muted-foreground`
        )}
      >
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <span className="flex items-center">
                <Link
                  to={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
                <span className="ml-2">/</span>
              </span>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}
