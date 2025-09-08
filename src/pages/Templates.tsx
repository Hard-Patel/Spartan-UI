import { Breadcrumb } from "@/components/common/Breadcrumb";
import { templates } from "@/data/templates";
import { Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Templates = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-background py-4 sm:py-8 px-2 sm:px-4">
      <Breadcrumb className="!ml-0" shouldAnimate={false} items={[{ label: "Templates" }]} />

      <h1 className="text-4xl font-bold mb-8">All Templates</h1>

      <div className="flex flex-wrap -mx-4">
        {templates.map((template) => (
          <div key={template.id} className="w-full lg:w-1/2 px-4 mb-8">
            <a target="_blank" href={template.link}>
              <div className="group bg-muted rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                <div className="h-68 bg-white/10 relative">
                  {template.previewImage ? (
                    <img
                      src={template.previewImage}
                      alt={template.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      No Preview Available
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between px-6 py-4 space-y-2">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold text-white">
                      {template.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {template.description}
                    </p>
                  </div>
                  <Link2 />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Templates };
