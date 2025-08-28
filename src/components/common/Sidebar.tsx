import { getAllComponents } from "@/data/components";
import { ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const components = getAllComponents();
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id?: string }>();

  const showSidebar = location.pathname.includes("components");

  return (
    <div className="sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-0 md:w-80">
      {/* Toggle Button (visible only on small screens) */}
      <motion.div className="md:hidden fixed top-[calc(6vh+var(--header-height))] -left-1 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-1 rounded-full bg-muted hover:bg-muted/70 transition"
        >
          {isOpen ? <X size={20} /> : <ChevronRight />}
        </button>
      </motion.div>

      {/* Sidebar */}
      {showSidebar && (isOpen || window.innerWidth >= 768) ? (
        <div className="relative h-screen">
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: isOpen || window.innerWidth >= 768 ? 0 : -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className={`md:static fixed h-full`}
          >
            <div className="scroll-hide border-r bg-background z-50 px-6 py-2 pr-6 h-full overflow-y-auto md:p-0 space-y-6">
              {/* Categories */}
              <div className="mt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  Components
                </h3>
                <div className="space-y-1">
                  {components.map((component) => (
                    <motion.button
                      key={component.id}
                      disabled={id === component.id}
                      className={`w-[90%] text-left px-3 py-2 rounded-lg text-sm transition-colors  ${
                        id === component.id
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      whileHover={{ scale: id === component.id ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        navigate(`/components/${component.id}`);
                        setIsOpen(false); // close on mobile after navigation
                      }}
                    >
                      <span className="flex justify-between items-center">
                        {component.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      ) : null}
    </div>
  );
};

export { Sidebar };
