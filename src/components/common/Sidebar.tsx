import { getAllComponents } from "@/data/components";
import { ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const components = getAllComponents();
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id?: string }>();

  const showSidebar = location.pathname.includes("components");

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const toggleButton = document.getElementById("sidebar-toggle");

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen && window.innerWidth < 768) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [id]);

  if (!showSidebar) return null;

  return (
    <>
      {/* Desktop Sidebar Container */}
      <div className="hidden md:block sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-96">
        <aside className="h-full border-r bg-background">
          <div className="px-2 md:px-4 xl:px-6 py-4 h-full overflow-y-auto sidebar-scroll space-y-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Components
              </h3>
              <div className="space-y-1">
                {components.map((component) => (
                  <button
                    key={component.id}
                    disabled={id === component.id}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      id === component.id
                        ? "text-primary bg-muted/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => navigate(`/components/${component.id}`)}
                  >
                    <div className="flex justify-between">
                      <span>{component.name}</span>
                      {component.new && <div className="h-fit text-[9px] text-primary bg-muted px-2 rounded-full">
                        New
                      </div>}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Toggle Button */}
        <motion.div
          id="sidebar-toggle"
          initial={{ x: 0 }}
          animate={{ x: isOpen ? 70 * 4 : 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen((prev) => !prev)}
          className="fixed top-[calc(var(--header-height)+1rem)] -left-1 z-[60] p-1 rounded-full bg-background border shadow-md hover:bg-muted/70 transition-colors"
        >
          {isOpen ? <X size={20} /> : <ChevronRight size={20} />}
        </motion.div>

        {/* Backdrop */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[45]"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Sidebar Panel */}
        <motion.aside
          id="mobile-sidebar"
          initial={{ x: -320 }}
          animate={{ x: isOpen ? 0 : -320 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-background border-r z-[50] overflow-hidden"
        >
          <div className="h-full overflow-y-auto">
            {/* Header spacing to account for the header */}
            <div className="h-[var(--header-height)]" />

            <div className="px-6 py-4 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  Components
                </h3>
                <div className="space-y-1">
                  {components.map((component) => (
                    <motion.button
                      key={component.id}
                      disabled={id === component.id}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        id === component.id
                          ? "text-primary bg-muted/50"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                      whileHover={{ scale: id === component.id ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        navigate(`/components/${component.id}`);
                        setIsOpen(false);
                      }}
                    >
                      {component.name}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </>
  );
};

export { Sidebar };
