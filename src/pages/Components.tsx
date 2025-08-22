import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Sidebar } from "@/components/common/Sidebar";
import { ComponentPreview } from "@/components/ComponentPreview";
import { getAllComponents } from "@/data/components";
import { useNavigate } from "react-router-dom";

const Components = () => {
  const components = getAllComponents();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-2 py-8">
        <div className="flex gap-8">

          {/* Main Content */}
          <main className="flex-1">
            <Breadcrumb
              shouldAnimate={false}
              items={[{ label: "Components" }]}
            />

            <div className="mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">All Components</h1>
              </div>
            </div>

            {/* Components Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {components.map((component) => (
                <div key={component.id} className="group">
                  <ComponentPreview component={component} showTabs={false} />
                  <div className="mt-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3
                          className="text-xl font-semibold group-hover:text-primary transition-colors cursor-pointer"
                          onClick={() =>
                            navigate(`/components/${component.id}`)
                          }
                        >
                          {component.name}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          {component.description}
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground">
                        {component.category}
                      </span>
                    </div>

                    {component.dependencies && (
                      <div className="flex gap-2">
                        {component.dependencies.map((dep) => (
                          <span
                            key={dep}
                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                          >
                            {dep}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Components;
