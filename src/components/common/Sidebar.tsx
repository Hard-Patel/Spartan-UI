import { getAllComponents } from "@/data/components";
import { ChevronRight, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const components = getAllComponents();
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id?: string }>();

  const showSidebar = location.pathname.includes("components");

  return (
    <div className="relative h-screen col-span-1">
      {/* Toggle Button (visible only on small screens) */}
      <motion.div className="md:hidden fixed top-14 left-2 z-50">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-1 rounded-full bg-muted hover:bg-muted/70 transition"
        >
          {isOpen ? <X size={20} /> : <ChevronRight />}
        </button>
      </motion.div>

      {/* Sidebar */}
      {showSidebar && (isOpen || window.innerWidth >= 768) ? (
        <div className="relative h-screen col-span-1">
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: isOpen || window.innerWidth >= 768 ? 0 : -300 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className={`md:static fixed h-full`}
          >
            <div className="border-r bg-background z-50 p-2 pr-6 h-full overflow-y-auto md:p-0 space-y-6">
              {/* Search */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  Search
                </h3>
                {/* <Search className="max-w-32" onSearch={setSearchQuery} /> */}
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3">
                  Components
                </h3>
                <div className="space-y-1">
                  {components.map((component) => (
                    <motion.button
                      key={component.id}
                      disabled={id === component.id}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors  ${
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

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export { Sidebar };
