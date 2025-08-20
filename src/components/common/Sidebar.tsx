import { getAllComponents } from "@/data/components";
import { motion } from "motion/react";
import { useState } from "react";
import { Search } from "../ui/search";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const components = getAllComponents();
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id?: string }>();

  return (
    <aside className="w-64 flex-shrink-0 border-r pr-6">
      <div className="sticky top-24 space-y-6">
        {/* Search */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Search
          </h3>
          <Search onSearch={setSearchQuery} />
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Components
          </h3>
          <div className="space-y-1">
            {components.map((component) => {
              return (
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
                  onClick={() => navigate(`/components/${component.id}`)}
                >
                  <span className="flex justify-between items-center">
                    {component.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export { Sidebar };
